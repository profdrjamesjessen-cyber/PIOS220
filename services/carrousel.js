/* ======================================
   PI220OS CAROUSEL SERVICE ENGINE
   Image Stream Layer (URL Driven)
====================================== */

const PI220_CAROUSEL = {
  index: 0,
  interval: null,
  _mounted: false, // 🔥 FIX: prevents multiple loops

  images: [

    
    "https://i.ibb.co/CphkVRgN/PARALLEL-INDUSTRIES-220.png",
    "https://i.ibb.co/xqyDgK1r/THE-PI220-MEMORANDUM.png",
    "https://i.ibb.co/GD7bBmR/WORLD-WAR-III-LEGAL-EXECUTIONS.png",
    "https://i.ibb.co/VcBCVhTh/THE-PI220-PORTFOLIO-WARCRAFT-1-4-INDEPENDENT-NO-CROSS-CONTAMINATION.png",
    "https://i.ibb.co/fzV6NmqN/THE-PI220-PORTFOLIO-WARCRAFT-2-4-NO-CROSS-CONTAMINATION.png",
    "https://i.ibb.co/HT9tcNSk/THE-PI220-TOP-SECRET-FILES.png",
    "https://i.ibb.co/fdwkzTy7/THE-PI220-TOP-SECRET-FILES.png",
    "https://i.ibb.co/27dky4q6/PROF-DSC-JESSE-JESSEN.png",
    "https://i.ibb.co/sJD6ffXT/PROF-DSC-JESSE-JESSEN.png",
    "https://i.ibb.co/RThsrZXG/PROF-DSC-JESSE-JESSEN-POKERSTARS-BLACK-FRIDAY.png",
    "https://i.ibb.co/XZXKWG8Z/Parallel-Industries-220-PI220-PROF-DSC.png",
    "https://i.ibb.co/rK275mYM/50-000-BN.png",
    "https://i.ibb.co/KxsVbmqC/PROF-DSC-JESSE-JESSEN.png",
    "https://i.ibb.co/k6cTHkSN/LETTER.png",
    "https://i.ibb.co/NP6c2g5/THE-PI220-TOP-SECRET-FILES.png",
    "https://i.ibb.co/NRJqfy5/THE-PI220-TOP-SECRET-FILES.png",
    "https://i.ibb.co/MyXL6tJH/THE-PI220-TOP-SECRET-FILES.png",
    "https://i.ibb.co/zV4TCYdj/JAMES-JESSE-MARGARETH-ANDREA-MIRIAM-EVA-SYLVIA.png", 
    "https://i.ibb.co/BVfzMx2w/THE-PI220-TOP-SECRET-FILES.png",
    "https://i.ibb.co/k2NVb3gj/ORDER-21-22-09-2026.png",
    "https://i.ibb.co/1YyJrt8q/DEATH-PENALTY.png", 
    "https://i.ibb.co/KpZSDQVR/LEGAL-EXECUTIONS-DEATH-PENALTY-KILL-HER-KILL-HIM.png", 
    "https://i.ibb.co/bRMRZV3s/PI220.png",
    "https://i.ibb.co/LDV6zTg3/NEXUS-220-XYZ-ATMOS.png",
    "https://i.ibb.co/NgLB8Mzq/PI220.png",
    "https://i.ibb.co/RT7NPTkC/THE-PI220-TOP-SECRET-FILES.png",
    "https://i.ibb.co/jPqz1G3P/PI220-OPERATION-SUCCESS.png",
    "https://i.ibb.co/SFx1nxM/EMAIL-ME-ONLY-IF-SCORE-ABOVE-80-100-NATIVE-SPANISH-LADIES-18-25-ONLY.png",
    "https://i.ibb.co/608hjrJR/THE-PI220.png",
    "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/784086461db0bbc99abc2878e67daf09c6ae5599/blog/LETTER.png",
    "https://i.ibb.co/HD6jsvnf/THE-PI220.png",
    "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/784086461db0bbc99abc2878e67daf09c6ae5599/blog/CHAPTER12.png",

     
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
