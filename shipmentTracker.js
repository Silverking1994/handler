/* =====================================================
   RENDER SHIPMENT TRACKER
===================================================== */

function renderShipmentTracker(containerId){

const container = document.getElementById(containerId);

if(!container) return;

container.innerHTML = `

<div class="shipment-page">

<section class="hero-section">
<div class="hero-content">

<h1>Global Shipment Tracking</h1>

<p>
Track packages worldwide with real-time logistics updates
and delivery status.
</p>

<div class="hero-track">

<input
type="text"
id="trackingInput"
placeholder="Enter Tracking Number"
/>

<button id="trackBtn" class="btn" disabled>
Track Package
</button>

</div>
</div>
</section>


<section id="trackingResult" class="card hide">

<h3>Shipment Result</h3>

<div id="resultContent"></div>

<button id="viewShipmentBtn" class="btn btn-view">
View Shipment
</button>

</section>


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

let trackerMessageListenerRegistered = false;

function initShipmentTracker(){

bindTrackerUI();

if(!trackerMessageListenerRegistered){

window.addEventListener("message", handleTrackingResponse);

trackerMessageListenerRegistered = true;

}

}


function bindTrackerUI(){

const input = document.getElementById("trackingInput");
const trackBtn = document.getElementById("trackBtn");
const resultBox = document.getElementById("trackingResult");
const resultContent = document.getElementById("resultContent");
const preloader = document.getElementById("shipmentPreloader");
const viewBtn = document.getElementById("viewShipmentBtn");

if(!input || !trackBtn || !preloader) return;

let currentTrackingNumber = null;
let timeoutRef = null;


/* INPUT */

input.addEventListener("input",()=>{

const value = input.value.trim();

if(resultBox) resultBox.classList.add("hide");

trackBtn.disabled = !value;

});


/* TRACK BUTTON */

trackBtn.addEventListener("click",()=>{

const trackingNumber = input.value.trim();

if(!trackingNumber) return;

currentTrackingNumber = trackingNumber;

preloader.classList.remove("hide");

preloader.classList.add("show");


sendMessage("TRACK_SHIPMENT",{
trackingNumber
});


timeoutRef = setTimeout(()=>{

preloader.classList.remove("show");

showAlert("Network timeout","danger");

},10000);

});


/* VIEW BUTTON */

if(viewBtn){

viewBtn.addEventListener("click",()=>{

if(!currentTrackingNumber) return;

sendMessage("VIEW_SHIPMENT",{
trackingNumber:currentTrackingNumber
});

});

}

}


/* =====================================================
   HANDLE RESPONSE
===================================================== */

function handleTrackingResponse(event){

const {type,data} = event.data || {};

if(type !== "TRACKING_RESPONSE") return;

const resultBox = document.getElementById("trackingResult");
const resultContent = document.getElementById("resultContent");
const preloader = document.getElementById("shipmentPreloader");

if(preloader) preloader.classList.add("hide");

if(!data || !data.found){

showAlert("Shipment not found","danger");

return;

}

if(resultBox) resultBox.classList.remove("hide");

if(resultContent){

resultContent.innerHTML = `
<p><strong>Tracking #:</strong> ${data.trackingNumber}</p>
<p><strong>Status:</strong> ${data.status}</p>
`;

}

showAlert("Shipment found successfully","success");

}


/* =====================================================
   ALERT
===================================================== */

function showAlert(msg,type="info"){

const alert = document.createElement("div");

alert.className = `alert alert-${type}`;

alert.innerText = msg;

document.body.appendChild(alert);

setTimeout(()=>alert.remove(),3000);

}
