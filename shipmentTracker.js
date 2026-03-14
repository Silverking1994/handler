/* =====================================================
   SHIPMENT TRACKER WITH TRANSLATION
   Call renderShipmentPage("app-view")
===================================================== */

// 1️⃣ Render shipment page
function renderShipmentPage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="shipment-page">

      <!-- HERO -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>${t("heroTitle")}</h1>
          <p>${t("heroDesc")}</p>
          <div class="hero-track">
            <input type="text" id="trackingInput" placeholder="${t("inputPlaceholder")}"/>
            <button id="trackBtn" class="btn" disabled>${t("trackBtn")}</button>
          </div>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="grid">
        <div class="card feature-card">
          <h3>${t("features.realTime")}</h3>
          <p>${t("features.realTimeDesc")}</p>
        </div>
        <div class="card feature-card">
          <h3>${t("features.global")}</h3>
          <p>${t("features.globalDesc")}</p>
        </div>
        <div class="card feature-card">
          <h3>${t("features.secure")}</h3>
          <p>${t("features.secureDesc")}</p>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="card">
        <h2 class="title">${t("howItWorksTitle")}</h2>
        <div class="steps">
          <div class="step">${t("step1")}</div>
          <div class="step">${t("step2")}</div>
          <div class="step">${t("step3")}</div>
          <div class="step">${t("step4")}</div>
        </div>
      </section>

      <!-- TRACKING RESULT -->
      <section id="trackingResult" class="card hide">
        <h3>${t("resultTitle")}</h3>
        <div id="resultContent" style="margin-top:20px;"></div>
        <button id="viewShipmentBtn" class="btn btn-view">${t("viewBtn")}</button>
      </section>

    </div>
  `;

  initShipmentTracker();
}

// 2️⃣ Simple tracker logic
function initShipmentTracker() {
  const input = document.getElementById("trackingInput");
  const trackBtn = document.getElementById("trackBtn");
  const resultBox = document.getElementById("trackingResult");
  const resultContent = document.getElementById("resultContent");
  const viewBtn = document.getElementById("viewShipmentBtn");

  if (!input || !trackBtn) return;

  // Enable track button when input is not empty
  input.addEventListener("input", () => {
    trackBtn.disabled = !input.value.trim();
  });

  // Click to track
  trackBtn.addEventListener("click", () => {
    const trackingNumber = input.value.trim();
    if (!trackingNumber) return;

    if (resultBox) resultBox.classList.remove("hide");
    if (resultContent) resultContent.innerHTML = `
      <p><strong>Tracking #:</strong> ${trackingNumber}</p>
      <p><strong>Status:</strong> In Transit</p>
    `;

    showAlert(t("shipmentFound"), "success");
  });

  // View shipment button clears input
  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      input.value = "";
      trackBtn.disabled = true;
      if (resultBox) resultBox.classList.add("hide");
    });
  }
}

// 3️⃣ Helper alert
function showAlert(msg, type = "info") {
  const alertEl = document.createElement("div");
  alertEl.className = `alert alert-${type}`;
  alertEl.innerText = msg;
  document.body.appendChild(alertEl);
  setTimeout(() => alertEl.remove(), 3000);
}

// 4️⃣ Re-render page when language changes
if (document.getElementById("languageSelect")) {
  document.getElementById("languageSelect").addEventListener("change", (e) => {
    // currentLanguage is already declared in main HTML
    currentLanguage = e.target.value;
    localStorage.setItem("language", currentLanguage);

    // Re-render the shipment page
    renderShipmentPage("app-view");
  });
}

// Optional: listen for changes from other tabs
window.addEventListener("storage", (e) => {
  if (e.key === "language") {
    currentLanguage = e.newValue;
    renderShipmentPage("app-view");
  }
});
