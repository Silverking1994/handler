/* ========================================
   MESSAGE HELPER
======================================== */

function sendMessage(type, payload = {}) {

  window.parent.postMessage({
    type: type,
    payload: payload
  }, "*");

}


/* ========================================
   MESSAGE LISTENER
======================================== */

function listenMessage(type, callback) {

  window.addEventListener("message", (event) => {

    const msg = event.data || {};

    if (msg.type !== type) return;

    callback(msg.payload || msg.data);

  });

}
