export function initClock(){

  function updateClock(){

    const timeEl = document.getElementById("sysTime");
    const dateEl = document.getElementById("sysDate");

    if(!timeEl || !dateEl) return;

    const now = new Date();

    timeEl.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

    dateEl.textContent = now.toLocaleDateString();
  }

  // initial render
  updateClock();

  // live update
  setInterval(updateClock, 1000);

  console.log("[PI220] Clock initialized");
}