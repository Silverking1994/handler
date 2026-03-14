// 🌐 1️⃣ Current language (change dynamically)

// 🌐 1️⃣ Translations
const translations = {
  English: {
    heroTitle: "Global Shipment Tracking",
    heroDesc: "Track packages worldwide with real-time logistics updates and delivery status.",
    inputPlaceholder: "Enter Tracking Number",
    trackBtn: "Track Package",
    features_realTime: "Real-Time Tracking",
    features_realTimeDesc: "Follow shipments live with accurate location updates.",
    features_global: "Global Logistics",
    features_globalDesc: "Track shipments across multiple international carriers.",
    features_secure: "Secure Delivery",
    features_secureDesc: "Your packages are protected with secure logistics handling.",
    howItWorksTitle: "How Shipment Tracking Works",
    step1: "Enter Tracking Number",
    step2: "System Finds Shipment",
    step3: "View Delivery Status",
    step4: "Package Delivered",
    resultTitle: "Shipment Result",
    viewBtn: "View Shipment",
    shipmentFound: "Shipment found successfully",
    shipmentNotFound: "Shipment not found",
    networkError: "Network timeout. Please try again."
  },

  Spanish: {
    heroTitle: "Seguimiento Global de Envíos",
    heroDesc: "Rastrea paquetes en todo el mundo con actualizaciones en tiempo real.",
    inputPlaceholder: "Ingresa el número de seguimiento",
    trackBtn: "Rastrear Paquete",
    features_realTime: "Seguimiento en Tiempo Real",
    features_realTimeDesc: "Sigue los envíos en vivo con actualizaciones precisas.",
    features_global: "Logística Global",
    features_globalDesc: "Rastrea envíos de múltiples transportistas internacionales.",
    features_secure: "Entrega Segura",
    features_secureDesc: "Tus paquetes están protegidos con manejo seguro.",
    howItWorksTitle: "Cómo Funciona el Seguimiento",
    step1: "Ingresa el número de seguimiento",
    step2: "El sistema encuentra el envío",
    step3: "Ver estado de entrega",
    step4: "Paquete entregado",
    resultTitle: "Resultado del Envío",
    viewBtn: "Ver Envío",
    shipmentFound: "Envío encontrado con éxito",
    shipmentNotFound: "Envío no encontrado",
    networkError: "Tiempo de espera de la red. Inténtalo de nuevo."
  },

  Turkish: {
    heroTitle: "Küresel Gönderi Takibi",
    heroDesc: "Paketlerinizi gerçek zamanlı lojistik güncellemeleri ile dünya çapında takip edin.",
    inputPlaceholder: "Takip Numarasını Girin",
    trackBtn: "Paketi Takip Et",
    features_realTime: "Gerçek Zamanlı Takip",
    features_realTimeDesc: "Gönderileri doğru konum güncellemeleriyle canlı takip edin.",
    features_global: "Küresel Lojistik",
    features_globalDesc: "Birden fazla uluslararası kargo şirketinden gönderileri takip edin.",
    features_secure: "Güvenli Teslimat",
    features_secureDesc: "Paketleriniz güvenli lojistik ile korunur.",
    howItWorksTitle: "Gönderi Takibi Nasıl Çalışır",
    step1: "Takip Numarasını Girin",
    step2: "Sistem Gönderiyi Bulur",
    step3: "Teslimat Durumunu Görüntüle",
    step4: "Paket Teslim Edildi",
    resultTitle: "Gönderi Sonucu",
    viewBtn: "Gönderiyi Görüntüle",
    shipmentFound: "Gönderi başarıyla bulundu",
    shipmentNotFound: "Gönderi bulunamadı",
    networkError: "Ağ zaman aşımına uğradı. Lütfen tekrar deneyin."
  },

  Portuguese: {
    heroTitle: "Rastreamento Global de Encomendas",
    heroDesc: "Acompanhe pacotes em todo o mundo com atualizações de logística em tempo real.",
    inputPlaceholder: "Digite o Número de Rastreamento",
    trackBtn: "Rastrear Pacote",
    features_realTime: "Rastreamento em Tempo Real",
    features_realTimeDesc: "Acompanhe os envios ao vivo com atualizações precisas de localização.",
    features_global: "Logística Global",
    features_globalDesc: "Rastreie envios de múltiplos transportadores internacionais.",
    features_secure: "Entrega Segura",
    features_secureDesc: "Seus pacotes estão protegidos com manuseio seguro.",
    howItWorksTitle: "Como Funciona o Rastreamento",
    step1: "Digite o Número de Rastreamento",
    step2: "O Sistema Localiza o Envio",
    step3: "Ver Status da Entrega",
    step4: "Pacote Entregue",
    resultTitle: "Resultado da Entrega",
    viewBtn: "Ver Envio",
    shipmentFound: "Envio encontrado com sucesso",
    shipmentNotFound: "Envio não encontrado",
    networkError: "Tempo de espera da rede. Por favor, tente novamente."
  },

  Korean: {
    heroTitle: "글로벌 배송 추적",
    heroDesc: "실시간 물류 업데이트 및 배송 상태와 함께 전 세계 패키지를 추적하세요.",
    inputPlaceholder: "운송장 번호 입력",
    trackBtn: "패키지 추적",
    features_realTime: "실시간 추적",
    features_realTimeDesc: "정확한 위치 업데이트로 배송을 실시간 추적합니다.",
    features_global: "글로벌 물류",
    features_globalDesc: "여러 국제 운송업체의 배송을 추적합니다.",
    features_secure: "안전한 배송",
    features_secureDesc: "패키지는 안전하게 처리됩니다.",
    howItWorksTitle: "배송 추적 작동 방식",
    step1: "운송장 번호 입력",
    step2: "시스템이 배송을 찾음",
    step3: "배송 상태 보기",
    step4: "패키지 배달 완료",
    resultTitle: "배송 결과",
    viewBtn: "배송 보기",
    shipmentFound: "배송을 성공적으로 찾았습니다",
    shipmentNotFound: "배송을 찾을 수 없습니다",
    networkError: "네트워크 시간 초과. 다시 시도하세요."
  },

  Japanese: {
    heroTitle: "グローバル配送追跡",
    heroDesc: "リアルタイムの物流更新と配達状況で世界中の荷物を追跡します。",
    inputPlaceholder: "追跡番号を入力",
    trackBtn: "パッケージを追跡",
    features_realTime: "リアルタイム追跡",
    features_realTimeDesc: "正確な位置情報で配送をライブで追跡します。",
    features_global: "グローバル物流",
    features_globalDesc: "複数の国際配送業者の荷物を追跡します。",
    features_secure: "安全な配達",
    features_secureDesc: "荷物は安全に処理されます。",
    howItWorksTitle: "配送追跡の仕組み",
    step1: "追跡番号を入力",
    step2: "システムが配送を検索",
    step3: "配達状況を見る",
    step4: "荷物が配達されました",
    resultTitle: "配送結果",
    viewBtn: "配送を見る",
    shipmentFound: "配送が正常に見つかりました",
    shipmentNotFound: "配送が見つかりません",
    networkError: "ネットワークのタイムアウト。もう一度お試しください。"
  }
};

// 🌐 2️⃣ Translation helper
function t(key) {
  const lang = currentLanguage || "English";
  return translations?.[lang]?.[key] || translations?.English?.[key] || key;
}



let currentLanguage = localStorage.getItem("language") || "English";

// 🌐 2️⃣ Translation helper
function t(key) {
  const lang = currentLanguage || "English";
  return translations?.[lang]?.[key] || translations?.English?.[key] || key;
}

// 🌐 3️⃣ Render shipment page
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
          <h3>${t("features_realTime")}</h3>
          <p>${t("features_realTimeDesc")}</p>
        </div>
        <div class="card feature-card">
          <h3>${t("features_global")}</h3>
          <p>${t("features_globalDesc")}</p>
        </div>
        <div class="card feature-card">
          <h3>${t("features_secure")}</h3>
          <p>${t("features_secureDesc")}</p>
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

// 🌐 4️⃣ Simple tracker logic
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

  // Click to “track”
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

// 🌐 5️⃣ Helper alert
function showAlert(msg, type = "info") {
  const alertEl = document.createElement("div");
  alertEl.className = `alert alert-${type}`;
  alertEl.innerText = msg;
  document.body.appendChild(alertEl);
  setTimeout(() => alertEl.remove(), 3000);
}

// 🌐 6️⃣ Language switch listener
const languageSelect = document.getElementById("languageSelect");
if (languageSelect) {
  languageSelect.value = currentLanguage;

  languageSelect.addEventListener("change", e => {
    currentLanguage = e.target.value;
    localStorage.setItem("language", currentLanguage);

    // Re-render the current page with new translations
    renderShipmentPage("app-view");
  });
}
