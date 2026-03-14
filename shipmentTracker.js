function renderShipmentPage(data) {
  const container = document.getElementById("app-view");
  if (!container) return;

  container.innerHTML = `
    <div class="shipment-page">

      <!-- HERO -->
      <section class="hero-section">
        <div class="hero-content">
          <h1><i class="fas fa-truck-fast"></i> ${t(heroTitle)}</h1>
          <p>${t(heroDesc)}</p>
          <div class="hero-track">
            <input type="text" id="trackingInput" placeholder="Enter Tracking Number"/>
            <button id="trackBtn" class="btn" disabled>Track Package</button>
          </div>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="grid">
        <div class="card feature-card">
          <i class="fas fa-location-dot"></i>
          <h3>Real-Time Tracking</h3>
          <p>Follow shipments live with accurate location updates.</p>
        </div>
        <div class="card feature-card">
          <i class="fas fa-globe"></i>
          <h3>Global Logistics</h3>
          <p>Track shipments across multiple international carriers.</p>
        </div>
        <div class="card feature-card">
          <i class="fas fa-shield-halved"></i>
          <h3>Secure Delivery</h3>
          <p>Your packages are protected with secure logistics handling.</p>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="card">
        <h2 class="title">How Shipment Tracking Works</h2>
        <div class="steps">
          <div class="step"><i class="fas fa-barcode"></i><br>Enter Tracking Number</div>
          <div class="step"><i class="fas fa-search"></i><br>System Finds Shipment</div>
          <div class="step"><i class="fas fa-route"></i><br>View Delivery Status</div>
          <div class="step"><i class="fas fa-box-open"></i><br>Package Delivered</div>
        </div>
      </section>

      <!-- TRACKING RESULT -->
      <section id="trackingResult" class="card hide">
        <h3>Shipment Result</h3>
        <div id="resultContent" style="margin-top:20px;"></div>
        <button id="viewShipmentBtn" class="btn btn-view">View Shipment</button>
      </section>

      <!-- PRELOADER -->
      <div class="preloader hide" id="shipmentPreloader">
        <div class="loader"></div>
      </div>

    </div>
  `;

  initShipmentTracker();
}

/* =====================================================
   SHIPMENT TRACKER LOGIC
===================================================== */
function initShipmentTracker() {
  const input = document.getElementById("trackingInput");
  const trackBtn = document.getElementById("trackBtn");
  const resultBox = document.getElementById("trackingResult");
  const resultContent = document.getElementById("resultContent");
  const preloader = document.getElementById("shipmentPreloader");
  const viewBtn = document.getElementById("viewShipmentBtn");

  if (!input || !trackBtn || !preloader) return;

  let timeoutRef = null;
  let currentTrackingNumber = null;

  // INPUT VALIDATION
  input.addEventListener("input", () => {
    const value = input.value.trim();
    if (resultBox) resultBox.classList.add("hide");
    trackBtn.disabled = !value;
    trackBtn.style.opacity = value ? "1" : ".6";
  });

  // TRACK BUTTON CLICK
  trackBtn.addEventListener("click", () => {
    const trackingNumber = input.value.trim();
    if (!trackingNumber) return;
    currentTrackingNumber = trackingNumber;

    // SHOW PRELOADER
    preloader.classList.remove("hide");
    void preloader.offsetWidth; // force reflow
    preloader.classList.add("show");

    // SEND TRACKING MESSAGE TO PARENT
    
    parent.postMessage({
type: "TRACK_SHIPMENT",
payload: {
trackingNumber: currentTrackingNumber
}
}, "*");

  

    // TIMEOUT HANDLER
timeoutRef = setTimeout(() => {
  preloader.classList.remove("show"); // hide preloader
  showAlert("Network timeout. Please try again.", "danger");
}, 10000);
  });

  // HANDLE RESPONSE FROM PARENT
  
  function handleTrackingResponse(event) {
    const { type, data } = event.data || {};
    if (type !== "TRACKING_RESPONSE") return;

    clearTimeout(timeoutRef);
    preloader.classList.add("hide");

    if (!data || !data.found) {
      showAlert("Shipment not found", "danger");
      return;
    }

    if (resultBox) resultBox.classList.remove("hide");
    if (resultContent) {
      resultContent.innerHTML = `
        <p><strong>Tracking #:</strong> ${data.trackingNumber}</p>
        <p><strong>Status:</strong> ${data.status}</p>
      `;
    }

    showAlert("Shipment found successfully", "success");

    // SCROLL TO RESULT
    setTimeout(() => {
      const main = document.querySelector(".main") || document.body;
      if (main && resultBox) {
        main.scrollTo({ top: resultBox.offsetTop - 20, behavior: "smooth" });
      }
    }, 100);
  }

  window.removeEventListener("message", handleTrackingResponse);
window.addEventListener("message", handleTrackingResponse);

  // VIEW BUTTON
  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      if (!currentTrackingNumber) return;

      window.parent.postMessage({
  type: "VIEW_SHIPMENT",
  payload: {
    trackingNumber: currentTrackingNumber
  }
}, "*");

      input.value = "";
      trackBtn.disabled = true;
      trackBtn.style.opacity = ".6";
      if (resultBox) resultBox.classList.add("hide");
    });
  }
}

/* =====================================================
   HELPER ALERT FUNCTION
===================================================== */
function showAlert(msg, type = "info") {
  const alertEl = document.createElement("div");
  alertEl.className = `alert alert-${type}`;
  alertEl.innerText = msg;
  document.body.appendChild(alertEl);
  setTimeout(() => alertEl.remove(), 3000);
}


