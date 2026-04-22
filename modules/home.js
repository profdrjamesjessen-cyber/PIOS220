registerModule("HOME", (top) => {

  top.innerHTML = `
    <div class="module home-module" style="text-align:center; font-family: monospace;">

      <div class="home-header">

        <div style="font-size:12px; letter-spacing:2px;">
          PARALLEL INDUSTRIES 220
        </div>

        <div style="font-size:10px; margin-top:4px;">
          UNIFIED QUANTUM ARCHITECTURE
        </div>

        <div style="font-size:8px; margin-top:6px; opacity:0.8;">
          PROF DR JESSE JESSEN
        </div>

      </div>

      <div id="carouselContainer" style="margin-top:20px; width:100%;"></div>

    </div>
  `;

  // =============================
  // 🔥 SAFE DELAY MOUNT (CRITICAL FIX)
  // =============================
  const tryStartCarousel = () => {

    if (window.PI220_CAROUSEL && document.getElementById("carouselContainer")) {
      window.PI220_CAROUSEL.mount("carouselContainer", 2500);
      console.log("[HOME] Carousel started");
    } else {
      console.warn("[HOME] Carousel not ready yet, retrying...");

      setTimeout(tryStartCarousel, 300);
    }
  };

  // wait DOM paint
  setTimeout(tryStartCarousel, 100);

});
