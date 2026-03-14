/* =====================================================
   SHIPMENT TRACKER WITH TRANSLATION
   Drop in your GitHub and call renderShipmentPage("app-view")
===================================================== */

// 1️⃣ Translations (5 languages)
const translations = {
  English: {
    heroTitle: "Global Shipment Tracking",
    heroDesc: "Track packages worldwide with real-time logistics updates and delivery status.",
    inputPlaceholder: "Enter Tracking Number",
    trackBtn: "Track Package",
    features: {
      realTime: "Real-Time Tracking",
      realTimeDesc: "Follow shipments live with accurate location updates.",
      global: "Global Logistics",
      globalDesc: "Track shipments across multiple international carriers.",
      secure: "Secure Delivery",
      secureDesc: "Your packages are protected with secure logistics handling."
    },
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
    features: {
      realTime: "Seguimiento en Tiempo Real",
      realTimeDesc: "Sigue los envíos en vivo con actualizaciones precisas.",
      global: "Logística Global",
      globalDesc: "Rastrea envíos de múltiples transportistas internacionales.",
      secure: "Entrega Segura",
      secureDesc: "Tus paquetes están protegidos con manejo seguro."
    },
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
    heroTitle: "Küresel Kargo Takibi",
    heroDesc: "Kargo paketlerini dünya genelinde gerçek zamanlı güncellemelerle takip edin.",
    inputPlaceholder: "Takip Numarasını Girin",
    trackBtn: "Kargoyu Takip Et",
    features: {
      realTime: "Gerçek Zamanlı Takip",
      realTimeDesc: "Kargoları doğru konum güncellemeleri ile canlı takip edin.",
      global: "Küresel Lojistik",
      globalDesc: "Çok uluslu kargo şirketleri üzerinden gönderileri takip edin.",
      secure: "Güvenli Teslimat",
      secureDesc: "Paketleriniz güvenli lojistik ile korunur."
    },
    howItWorksTitle: "Kargo Takibi Nasıl Çalışır",
    step1: "Takip Numarasını Girin",
    step2: "Sistem Gönderiyi Bulur",
    step3: "Teslim Durumunu Görüntüle",
    step4: "Paket Teslim Edildi",
    resultTitle: "Kargo Sonucu",
    viewBtn: "Gönderiyi Görüntüle",
    shipmentFound: "Kargo başarıyla bulundu",
    shipmentNotFound: "Kargo bulunamadı",
    networkError: "Ağ zaman aşımı. Lütfen tekrar deneyin."
  },

  Portuguese: {
    heroTitle: "Rastreamento Global de Encomendas",
    heroDesc: "Acompanhe pacotes em todo o mundo com atualizações em tempo real.",
    inputPlaceholder: "Digite o Número de Rastreamento",
    trackBtn: "Rastrear Pacote",
    features: {
      realTime: "Rastreamento em Tempo Real",
      realTimeDesc: "Acompanhe os envios ao vivo com atualizações precisas.",
      global: "Logística Global",
      globalDesc: "Rastreie envios de múltiplos transportadores internacionais.",
      secure: "Entrega Segura",
      secureDesc: "Seus pacotes estão protegidos com manuseio seguro."
    },
    howItWorksTitle: "Como Funciona o Rastreamento",
    step1: "Digite o Número de Rastreamento",
    step2: "O Sistema Localiza o Envio",
    step3: "Ver Status da Entrega",
    step4: "Pacote Entregue",
    resultTitle: "Resultado do Envio",
    viewBtn: "Ver Envio",
    shipmentFound: "Envio encontrado com sucesso",
    shipmentNotFound: "Envio não encontrado",
    networkError: "Tempo limite de rede. Tente novamente."
  },

  Korean: {
    heroTitle: "글로벌 배송 추적",
    heroDesc: "실시간 물류 업데이트와 배송 상태로 전 세계 패키지를 추적하세요.",
    inputPlaceholder: "운송장 번호 입력",
    trackBtn: "배송 추적",
    features: {
      realTime: "실시간 추적",
      realTimeDesc: "정확한 위치 업데이트로 배송을 실시간으로 추적합니다.",
      global: "글로벌 물류",
      globalDesc: "다국적 운송사를 통한 배송을 추적합니다.",
      secure: "안전한 배송",
      secureDesc: "귀하의 패키지는 안전한 물류 처리로 보호됩니다."
    },
    howItWorksTitle: "배송 추적 방법",
    step1: "운송장 번호 입력",
    step2: "시스템이 배송 조회",
    step3: "배송 상태 보기",
    step4: "패키지 배송 완료",
    resultTitle: "배송 결과",
    viewBtn: "배송 보기",
    shipmentFound: "배송이 성공적으로 조회되었습니다",
    shipmentNotFound: "배송을 찾을 수 없습니다",
    networkError: "네트워크 시간 초과. 다시 시도하세요."
  },

  Japanese: {
    heroTitle: "グローバル配送追跡",
    heroDesc: "リアルタイムの物流更新と配達状況で世界中の荷物を追跡します。",
    inputPlaceholder: "追跡番号を入力",
    trackBtn: "荷物を追跡",
    features: {
      realTime: "リアルタイム追跡",
      realTimeDesc: "正確な位置情報で荷物をライブ追跡します。",
      global: "グローバル物流",
      globalDesc: "複数の国際キャリアの配送を追跡できます。",
      secure: "安全な配送",
      secureDesc: "あなたの荷物は安全な物流で保護されます。"
    },
    howItWorksTitle: "配送追跡の仕組み",
    step1: "追跡番号を入力",
    step2: "システムが荷物を検索",
    step3: "配達状況を確認",
    step4: "荷物が配達済み",
    resultTitle: "配送結果",
    viewBtn: "配送を見る",
    shipmentFound: "配送が正常に見つかりました",
    shipmentNotFound: "配送が見つかりません",
    networkError: "ネットワークタイムアウト。再試行してください。"
  }
};

// 2️⃣ Current language (change dynamically if needed)
let currentLanguage = "English";

// 3️⃣ Render shipment page
function renderShipmentPage(containerId) {
  const t = translations[currentLanguage];
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="shipment-page">

      <!-- HERO -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>${t.heroTitle}</h1>
          <p>${t.heroDesc}</p>
          <div class="hero-track">
            <input type="text" id="trackingInput" placeholder="${t.inputPlaceholder}"/>
            <button id="trackBtn" class="btn" disabled>${t.trackBtn}</button>
          </div>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="grid">
        <div class="card feature-card">
          <h3>${t.features.realTime}</h3>
          <p>${t.features.realTimeDesc}</p>
        </div>
        <div class="card feature-card">
          <h3>${t.features.global}</h3>
          <p>${t.features.globalDesc}</p>
        </div>
        <div class="card feature-card">
          <h3>${t.features.secure}</h3>
          <p>${t.features.secureDesc}</p>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="card">
        <h2 class="title">${t.howItWorksTitle}</h2>
        <div class="steps">
          <div class="step">${t.step1}</div>
          <div class="step">${t.step2}</div>
          <div class="step">${t.step3}</div>
          <div class="step">${t.step4}</div>
        </div>
      </section>

      <!-- TRACKING RESULT -->
      <section id="trackingResult" class="card hide">
        <h3>${t.resultTitle}</h3>
        <div id="resultContent" style="margin-top:20px;"></div>
        <button id="viewShipmentBtn" class="btn btn-view">${t.viewBtn}</button>
      </section>

    </div>
  `;

  initShipmentTracker();
}

// 4️⃣ Simple tracker logic (no preloader, just alerts)
function initShipmentTracker() {
  const input = document.getElementById("trackingInput");
  const trackBtn = document.getElementById("trackBtn");
  const resultBox = document.getElementById("trackingResult");
  const resultContent = document.getElementById("resultContent");
  const viewBtn = document.getElementById("viewShipmentBtn");
  const t = translations[currentLanguage];

  if (!input || !trackBtn) return;

  // Enable track button when input is not empty
  input.addEventListener("input", () => {
    trackBtn.disabled = !input.value.trim();
  });

  // Click to “track”
  trackBtn.addEventListener("click", () => {
    const trackingNumber = input.value.trim();
    if (!trackingNumber) return;

    // Show result section
    if (resultBox) resultBox.classList.remove("hide");
    if (resultContent) resultContent.innerHTML = `
      <p><strong>Tracking #:</strong> ${trackingNumber}</p>
      <p><strong>Status:</strong> In Transit</p>
    `;

    showAlert(t.shipmentFound, "success");
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

// 5️⃣ Helper alert
function showAlert(msg, type = "info") {
  const alertEl = document.createElement("div");
  alertEl.className = `alert alert-${type}`;
  alertEl.innerText = msg;
  document.body.appendChild(alertEl);
  setTimeout(() => alertEl.remove(), 3000);
}
