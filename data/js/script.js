   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('/service-worker.js')
       .then(function(registration) {
         console.log('Service Worker registered with scope:', registration.scope);
       })
       .catch(function(error) {
         console.log('Service Worker registration failed:', error);
       });
   }
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    const date = now.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "short"
    });

    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock();
