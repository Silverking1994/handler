/* =====================================================
   GLOBAL VARIABLES
===================================================== */
window.memberData = {};
window.currentLanguage = localStorage.getItem("language") || "English";
window.settingsVisible = false;

/* =====================================================
   TRANSLATION FUNCTIONS
===================================================== */
window.t = function(key){
  const lang = window.currentLanguage || "English";
  return translations?.[lang]?.[key] || translations?.English?.[key] || key;
};

window.applyTranslations = function(scope=document){
  const lang = window.currentLanguage || "English";
  scope.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    el.innerText = translations?.[lang]?.[key] || translations?.English?.[key] || key;
  });
};

window.setLanguage = function(lang){
  window.currentLanguage = lang;
  localStorage.setItem("language", lang);
  if(window.buildNavigation) buildNavigation();
  if(window.navigate) navigate(currentPage);
};

/* =====================================================
   MEMBER DETAILS HANDLERS
===================================================== */
window.updateMemberDetail = function(input){
  const field = input.dataset.field;
  const value = input.value;
  const keys = field.split(".");
  let obj = window.memberData;
  for(let i=0; i<keys.length-1; i++){
    if(!obj[keys[i]]) obj[keys[i]] = {};
    obj = obj[keys[i]];
  }
  obj[keys[keys.length-1]] = value;
  console.log("Updated memberData:", window.memberData);
};

window.getUserDetails = function(memberData){
  if (!memberData) return [];
  return [
    { label: "Full Name", field: "name" },
    { label: "Email", field: "email" },
    { label: "Phone", field: "phone" },
    { label: "First Name", field: "firstName" },
    { label: "Last Name", field: "lastName" },
    { label: "Membership Tier", field: "membership.accessLevel" },
    { label: "Membership Type", field: "membership.accessType" },
  ].map(d=>{
    const value = d.field.split('.').reduce((obj, key)=> obj?.[key], memberData);
    return {...d, value: value ?? "-"};
  });
};

/* =====================================================
   MEMBERSHIP CARD STYLES
===================================================== */
window.membershipTierStyles = {
  "Platinum": { gradient: "linear-gradient(135deg, #e5e4e2, #b0b0b0)", shineColor: "rgba(255,255,255,0.3)" },
  "Gold": { gradient: "linear-gradient(135deg, #ffd700, #ffb347)", shineColor: "rgba(255,255,255,0.35)" },
  "Silver": { gradient: "linear-gradient(135deg, #c0c0c0, #9b9b9b)", shineColor: "rgba(255,255,255,0.25)" },
  "Bronze": { gradient: "linear-gradient(135deg, #cd7f32, #a0522d)", shineColor: "rgba(255,255,255,0.2)" },
  "Standard": { gradient: "linear-gradient(135deg, #f9f9f9, #e0e0e0)", shineColor: "rgba(255,255,255,0.2)" }
};

/* =====================================================
   MEMBERSHIP CARD RENDER
===================================================== */
window.renderMembershipCard = function(memberData){
  const hasMembership = memberData?.membership;
  const tier = memberData?.membership?.accessLevel || "Standard";
  const style = membershipTierStyles[tier] || membershipTierStyles["Standard"];

  if(hasMembership){
    return `
      <div class="settings-section card">
        <div class="settings-grid">
          <div class="membership-card premium-card" style="background: ${style.gradient};">
            <div class="card-inner">
              <div class="card-front">
                <div class="card-top">
                  <span class="card-brand"><i class="fas fa-crown"></i> ${t("membershipAccess")}</span>
                  <span class="card-tier">${tier}</span>
                </div>
                <div class="card-chip"></div>
                <div class="card-number">**** **** **** ${memberData.memberId?.slice(-4) || "1024"}</div>
                <div class="card-bottom">
                  <div class="card-holder">
                    <label>${t("fullName")}</label>
                    <span>${memberData.firstName||""} ${memberData.lastName||""}</span>
                  </div>
                  <div class="card-exp">
                    <label>${t("accessType")}</label>
                    <span>${memberData.membership?.accessType||"Unlimited"}</span>
                  </div>
                </div>
                <div class="card-shine" style="background: linear-gradient(120deg, ${style.shineColor} 0%, rgba(255,255,255,0) 80%)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  } else {
    return `
      <div class="settings-section card">
        <div class="settings-grid">
          <div class="membership-card invite-card">
            <div class="card-inner">
              <div class="card-front">
                <div class="card-top">
                  <span class="card-brand"><i class="fas fa-star"></i> ${t("becomeMember")}</span>
                </div>
                <div class="card-message">
                  <p>${t("membershipBenefitsPrompt")}</p>
                </div>
              </div>
              <div class="card-back">
                <div class="card-actions">
                  <button class="primary-btn" onclick="navigate('membership')">${t("subscribeNow")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
};

/* =====================================================
   PROFILE HEAD
===================================================== */
window.renderProfileHead = function(member={}){
  const name = member.name || "User";
  const email = member.email || "";
  const photo = member.photo || "https://via.placeholder.com/120";
  const website = member.website || "";
  const posts = member.posts ?? 0;
  const followers = member.followers ?? 0;
  const following = member.following ?? 0;

  const socialLinks = Array.isArray(member.socialLinks) ? member.socialLinks : [];
  const socialLinksHtml = socialLinks.map(link=>{
    const url = link?.url || "#";
    const icon = link?.icon || "fas fa-link";
    return `<a href="${url}" target="_blank" rel="noopener"><i class="${icon}"></i></a>`;
  }).join("");

  const websiteHtml = website ? `<p><a href="${website}" target="_blank" rel="noopener">${website}</a></p>` : "";

  return `
    <div class="headstat headstat-profile card">
      <div class="profile-photo">
        <img src="${photo}" alt="${name}" loading="lazy">
        <div class="online-dot"></div>
      </div>
      <div class="profile-info">
        <div class="profile-meta">
          <h2>${name}</h2>
          <p>${email}</p>
          ${websiteHtml}
          <p><i class="fas fa-location-dot"></i> ${member.location||"—"}</p>
          <p class="tier-badge"><i class="fas fa-crown"></i> ${member.membership||"Standard"}</p>
        </div>
        <div class="profile-social-links">${socialLinksHtml}</div>
      </div>
      <div class="profile-stats">
        <div class="profile-stat"><strong>${posts}</strong><span>${t("posts")}</span></div>
        <div class="profile-stat"><strong>${followers}</strong><span>${t("followers")}</span></div>
        <div class="profile-stat"><strong>${following}</strong><span>${t("following")}</span></div>
      </div>
    </div>`;
};

/* =====================================================
   USER SETTINGS FIELD RENDER
===================================================== */
window.renderUserSettingsField = function(field){
  const label = t(field.label || field.key);
  const value = window.memberData[field.key] ?? "";

  switch(field.type){
    case "select":
      return `<div class="setting-item">
        <label>${label}</label>
        <select data-key="${field.key}" onchange="fieldChangeHandler(event,'${field.key}')">
          ${field.options.map(o=>`<option value="${o}" ${value===o?"selected":""}>${o}</option>`).join("")}
        </select>
      </div>`;
    case "checkbox":
      return `<div class="setting-item"><label>
        <input type="checkbox" data-key="${field.key}" ${value?"checked":""} onchange="fieldChangeHandler(event,'${field.key}')">
        ${label}
      </label></div>`;
    case "file":
      return `<div class="setting-item">
        <label>${label}</label>
        <input type="file" data-key="${field.key}" onchange="previewFile(event,'${field.key}')">
        <img class="avatar-preview" src="${value||''}" style="width:60px;height:60px;border-radius:50%;margin-top:5px;">
      </div>`;
    case "button":
      return `<div class="setting-item">
        <label>${label}</label>
        <button class="primary-btn" onclick="${field.action}">${t(field.text)}</button>
      </div>`;
    case "password":
      return `<div class="setting-item">
        <label>${label}</label>
        <input type="password" value="" placeholder="Enter new password" data-key="${field.key}" onchange="fieldChangeHandler(event,'${field.key}')">
      </div>`;
    default:
      return `<div class="setting-item">
        <label>${label}</label>
        <input type="${field.type||"text"}" value="${value}" data-key="${field.key}" onchange="fieldChangeHandler(event,'${field.key}')">
      </div>`;
  }
};

/* =====================================================
   ACCOUNT ACTIONS
===================================================== */
window.renderAccountActions = function(){
  return `
    <div class="card">
      <h3>${t("actions")}</h3>
      <div class="profile-actions">
        <button class="primary-btn" onclick="toggleSettings()">
          <i class="fas fa-gear"></i> ${t("editSettings")}
        </button>
        <button class="secondary-btn" onclick="handleAction('logout')">
          <i class="fas fa-right-from-bracket"></i> ${t("logout")}
        </button>
      </div>
    </div>`;
};

/* =====================================================
   RENDER SETTINGS PAGE
===================================================== */
window.renderSettingsPageDynamic = function(pageData){
  const container = document.getElementById("app-view");
  if(!container) return;

  const lang = window.currentLanguage || "English";

  let html = window.renderProfileHead(window.memberData);
  html += window.renderMembershipCard(window.memberData);

  // Member details section
  if(window.SectionRegistry?.details){
    const userDetailsSection = {
      type: "details",
      details: window.getUserDetails(window.memberData),
      editable: false
    };
    html += window.SectionRegistry.details(userDetailsSection);
  }

  html += window.renderAccountActions();

  // Other settings sections
  if(window.settingsVisible){
    html += `<h2 style="text-align:center;margin-top:10px;">
      ${translations?.[lang]?.[pageData.title] || pageData.title}
    </h2>`;
    html += `<div class="settings-content">`;

    const renderSection = (section) => {
      let sectionHTML = `<div class="settings-section card">
        <h3>${translations?.[lang]?.[section.title] || section.title}</h3>
        <div class="settings-grid">
          ${section.fields.map(f => window.renderUserSettingsField(f)).join("")}
        </div>`;
      if(section.subsections?.length){
        sectionHTML += section.subsections.map(sub=>`
          <div class="settings-subsection card">
            <h4>${translations?.[lang]?.[sub.title] || sub.title}</h4>
            <div class="settings-grid">
              ${sub.fields.map(f=>window.renderUserSettingsField(f)).join("")}
            </div>
          </div>`).join("");
      }
      sectionHTML += `</div>`;
      return sectionHTML;
    };

    html += pageData.sections.map(renderSection).join("");
    html += `<button class="save-btn" onclick="window.saveSettingsDynamic()">
      ${translations?.[lang]?.saveChanges || "Save Changes"}
    </button>`;
    html += `</div>`;
  }

  container.innerHTML = html;
};

/* =====================================================
   FIELD HANDLERS
===================================================== */
window.fieldChangeHandler = function(e,key){
  const val = e.target.type==="checkbox" ? e.target.checked : e.target.value;
  window.memberData[key] = val;
};

window.previewFile = function(e,key){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(ev){
    window.memberData[key] = ev.target.result;
    const preview = document.querySelector("img.avatar-preview");
    if(preview) preview.src = ev.target.result;
  };
  reader.readAsDataURL(file);
};

window.saveSettingsDynamic = function(){
  try{
    localStorage.setItem("memberSettings", JSON.stringify(window.memberData));
    window.parent.postMessage({ type:"UPDATE_MEMBER_SETTINGS", payload: window.memberData }, "*");
    window.showGlobalAlert("Settings saved!", "success");
  } catch(err){
    console.error(err);
    window.showGlobalAlert("Failed to save settings", "danger");
  }
  window.renderSettingsPageDynamic(settingsPageData);
};

/* =====================================================
   GLOBAL ALERT
===================================================== */
window.showGlobalAlert = function(msg,type="info"){
  const alert = document.getElementById("globalAlert");
  if(!alert) return;
  alert.innerText = msg;
  if(type==="success"){ alert.style.background="#00ff9d"; alert.style.color="#000"; }
  else if(type==="danger"){ alert.style.background="#ff4d4d"; alert.style.color="#fff"; }
  else { alert.style.background="#3498db"; alert.style.color="#fff"; }
  alert.classList.remove("hide"); alert.classList.add("show");
  setTimeout(()=>{ alert.classList.remove("show"); alert.classList.add("hide"); },3000);
};

/* =====================================================
   CARD HOVER ANIMATION
===================================================== */
document.addEventListener("mousemove", e=>{
  const card=document.querySelector(".premium-card");
  if(!card) return;
  const rect=card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotateY = ((x/rect.width)-0.5)*16;
  const rotateX = ((y/rect.height)-0.5)*-16;
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener("mouseleave", ()=>{
  const card=document.querySelector(".premium-card");
  if(card) card.style.transform="rotateX(0) rotateY(0)";
});

/* =====================================================
   TOGGLE SETTINGS
===================================================== */
window.toggleSettings = function(){
  window.settingsVisible = !window.settingsVisible;
  window.renderSettingsPageDynamic(settingsPageData);
};
