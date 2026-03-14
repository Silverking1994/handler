/* =====================================================
   SHIPMENT TRACKER MODULE
===================================================== */

let trackerMessageListenerRegistered = false;

function initShipmentTracker(){

bindTrackerUI();

if(!trackerMessageListenerRegistered){

window.addEventListener("message", handleTrackingResponse);

trackerMessageListenerRegistered = true;

}

}


/* =====================================================
   BIND UI EVENTS
===================================================== */

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

trackBtn.style.opacity = value ? "1" : ".6";

});


/* TRACK BUTTON */

trackBtn.addEventListener("click",()=>{

const trackingNumber = input.value.trim();

if(!trackingNumber) return;

currentTrackingNumber = trackingNumber;

preloader.classList.remove("hide");

void preloader.offsetWidth;

preloader.classList.add("show");


parent.postMessage({

type:"TRACK_SHIPMENT",

payload:{
trackingNumber
}

},"*");


timeoutRef = setTimeout(()=>{

preloader.classList.remove("show");

showAlert("Network timeout. Please try again.","danger");

},10000);

});


/* VIEW BUTTON */

if(viewBtn){

viewBtn.addEventListener("click",()=>{

if(!currentTrackingNumber) return;

parent.postMessage({

type:"VIEW_SHIPMENT",

payload:{
trackingNumber:currentTrackingNumber
}

},"*");


input.value = "";

trackBtn.disabled = true;

trackBtn.style.opacity = ".6";

if(resultBox) resultBox.classList.add("hide");

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

const alertEl = document.createElement("div");

alertEl.className = `alert alert-${type}`;

alertEl.innerText = msg;

document.body.appendChild(alertEl);

setTimeout(()=>alertEl.remove(),3000);

}
