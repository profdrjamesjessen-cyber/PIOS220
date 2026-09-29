/* ======================================
   PI220OS CAROUSEL SERVICE ENGINE
   Image Stream Layer (URL Driven)
====================================== */

const PI220_CAROUSEL = {
  index: 0,
  interval: null,
  _mounted: false, // 🔥 FIX: prevents multiple loops

  images: [



          "https://i.ibb.co/zHbgwyGR/ONGOING-BIOHAZARD.png", 
          "https://i.ibb.co/27DVJwfB/THE-PI220-LEGAL-EXECUTIONS-CABRAS-PUTAS.png",
          "https://i.ibb.co/1YYT7bfy/PROF-DSC-JESSE-JESSEN.png",
          "https://i.ibb.co/RxP4yTr/PROF-DSC-JESSE-JESSEN.png", 
          "https://i.ibb.co/xqyDgK1r/THE-PI220-MEMORANDUM.png",
          "http://i.ibb.co/FbZ6j8M9/PROF-DSC-JESSE-JESSEN.png",
          "https://i.ibb.co/7JQsDMC1/72-H-TO-ABANDON-MALLORCA-100.png",
          "https://i.ibb.co/S4jw0j5z/PROF-DSC.png",
          "https://i.ibb.co/8n6WP1qT/PARALLEL-INDUSTRIES-220.png",
          "https://i.ibb.co/XrQxpQjq/PROF-DSC.png",
          "https://i.ibb.co/rGNF2W8f/PROF-DSC-JESSE-JESSEN.jpg",
          "https://i.ibb.co/LDV6zTg3/NEXUS-220-XYZ-ATMOS.png",
          "https://i.ibb.co/SFx1nxM/EMAIL-ME-ONLY-IF-SCORE-ABOVE-80-100-NATIVE-SPANISH-LADIES-18-25-ONLY.png",
          "https://i.ibb.co/7d5dYwfH/WORLD-WAR-III-RED-TEAM-KILL-THEM-ALL.png",
          "https://i.ibb.co/RT7NPTkC/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/W4BmFyQK/PROF-DSC-JESSE-JESSEN.png",
          "https://i.ibb.co/5xSVqHGm/PROF-D-SC-JESSE-JESSEN.jpg",
          "https://i.ibb.co/TxH8GPRZ/Prof-D-Sc-Jesse-Jessen.jpg",
          "https://i.ibb.co/chs6WbB7/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/mrKmddB6/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/fdwkzTy7/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/gLTqnyw1/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/m3cWCF8/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/XrWGsFcQ/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/V0zt0fHc/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/rRmDHzzh/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/JWSbH7qs/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/Cs0GSKd9/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/LDHdmKtG/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/r2McwxDb/PARALLEL-PICTURES-220-PRESENT-PARALLELMAN.png",
          "https://i.ibb.co/fzV6NmqN/THE-PI220-PORTFOLIO-WARCRAFT-2-4-NO-CROSS-CONTAMINATION.png",
          "https://i.ibb.co/Txh0cntn/THE-PI220-PORTFOLIO-WARCRAFT-1-4-INDEPENDENT-NO-CROSS-CONTAMINATION.png",
          "https://i.ibb.co/3ycC7Z1s/PROF-DSC-JESSE-JESSEN.png",
          "https://i.ibb.co/RThsrZXG/PROF-DSC-JESSE-JESSEN-POKERSTARS-BLACK-FRIDAY.png",
          "https://i.ibb.co/0yHp4BjT/ORDER-21-22-09-2026.png",
          "https://i.ibb.co/N2rhctn6/THE-PI220.png",
          "https://i.ibb.co/mCyDL3Cy/PROF-DSC-JESSE-JESSEN.png",
          "https://i.ibb.co/5XVNrJJw/THE-PI220.png",
          "https://i.ibb.co/RkB1tgnB/PROF-DSC-JESSE-JESSEN.png",
     
     
     
  ],

  current() {
    return this.images[this.index];
  },

  next() {
    this.index = (this.index + 1) % this.images.length;
    return this.current();
  },

  prev() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
    return this.current();
  },

  reset() {
    this.index = 0;
  },

  // =============================
  // FADE TRANSITION SYSTEM
  // =============================
  fadeToImage(img) {
    if (!img) return;

    img.classList.add("pi220-fade-out");

    setTimeout(() => {
      img.src = this.current();
      img.classList.remove("pi220-fade-out");
    }, 500);
  },

  // =============================
  // MOUNT ENGINE (STABLE VERSION)
  // =============================
  mount(containerId, speed = 10000) {

    const container = document.getElementById(containerId);

    if (!container) {
      console.error("[PI220 CAROUSEL] container not found:", containerId);
      return;
    }

    // 🔥 FIX: prevent duplicate mount UI
    if (this._mounted) {
      console.warn("[PI220 CAROUSEL] already mounted, skipping duplicate init");
      return;
    }

    this._mounted = true;

    container.innerHTML = `
      <div class="pi220-carousel-wrapper">

        <img id="pi220CarouselImg" src="${this.current()}" />

        <div class="pi220-dots" id="pi220Dots"></div>

      </div>
    `;

    const img = document.getElementById("pi220CarouselImg");
    const dotsContainer = document.getElementById("pi220Dots");

    if (!img || !dotsContainer) {
      console.error("[PI220 CAROUSEL] DOM init failed");
      return;
    }

    // =============================
    // DOT RENDER
    // =============================
    const renderDots = () => {
      dotsContainer.innerHTML = this.images.map((_, i) => `
        <div class="pi220-dot ${i === this.index ? "active" : ""}" data-index="${i}"></div>
      `).join("");
    };

    renderDots();

    const updateUI = () => renderDots();

    // =============================
    // DOT CLICK
    // =============================
    dotsContainer.onclick = (e) => {
      if (e.target.classList.contains("pi220-dot")) {
        this.index = parseInt(e.target.dataset.index);
        this.fadeToImage(img);
        updateUI();
      }
    };

    // =============================
    // SAFE LOOP RESET
    // =============================
    this.stop();

    // =============================
    // AUTO ROTATION (FIXED 10s)
    // =============================
    this.interval = setInterval(() => {

      this.next();
      this.fadeToImage(img);
      updateUI();

    }, 10000); // 🔥 HARD LOCK 10 SECONDS

    console.log("[PI220 CAROUSEL] stable system online (10s + fade + dots)");
  },

  // =============================
  // STOP ENGINE
  // =============================
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }

    this._mounted = false;
  }
};

// GLOBAL ACCESS
window.PI220_CAROUSEL = PI220_CAROUSEL;

export default PI220_CAROUSEL;
