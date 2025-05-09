function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const date = now.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });

  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

const ua = navigator.userAgent;
const pc = document.getElementById("pc");
const sp = document.getElementById("sp");

if (
  ua.indexOf("iPhone") > 0 ||
  ua.indexOf("iPod") > 0 ||
  (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
) {
  pc.remove();
} else if (ua.indexOf("iPad") > 0 || ua.indexOf("Android") > 0) {
  pc.remove();
} else {
  sp.remove();
}

setInterval(updateClock, 1000);
updateClock();
