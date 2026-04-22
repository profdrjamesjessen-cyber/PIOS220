/* ======================================
   PI220OS CAROUSEL SERVICE ENGINE
   Image Stream Layer (URL Driven)
====================================== */

const PI220_CAROUSEL = {
  index: 0,
  interval: null,
  _mounted: false, // 🔥 FIX: prevents multiple loops

  images: [
    "https://i.ibb.co/jPNPFnjJ/PARALLEL-INDUSTRIES-220-391-PROF-DR-JESSE-JESSEN-2026.jpg",
    "https://i.ibb.co/0jJ5cxFq/PARALLEL-INDUSTRIES-220-391-PROF-DR-JESSE-JESSEN-2026-R.jpg",
    "https://i.ibb.co/Zzpp73N3/PIOS220-NETLIFY-APP-PROF-DR-JESSE-JESSEN-2026-ALL-RIGHTS-RESERVED.jpg",
    "https://i.ibb.co/4wsbXbxt/PARALLEL-INDUSTRIES-220-391-MASTER-DIPLOMA-ETC-KIDS-2026.jpg",
    "https://i.ibb.co/G37gK34C/PARALLEL-INDUSTRIES-220-391-PROF-DR-XYZ-MICROSOFT-INTEL-2026.jpg",
    "https://i.ibb.co/0RFZZcLt/PARALLEL-INDUSTRIES-220-391-MICROSOFT-INTEL-LAYER-BY-LAYER.jpg",
    "https://i.ibb.co/HfnN31TQ/PARALLEL-INDUSTRIES-220-391-PROF-DR-JESSE-JESSEN-AND-PROF-DR-BILL-GATES-2026.jpg",
    "https://i.ibb.co/bMv9w0Sn/PARALLEL-INDUSTRIES-220-BULLETPROOF-EXCELLENCE-AND-STUDIES-ECOSYSTEM.jpg",
    "https://i.ibb.co/Kc2z3mQB/PARALLEL-INDUSTRIES-220-391-LETHAL-ACTION.jpg",
    "https://i.ibb.co/0yb0VbnB/PARALLEL-INDUSTRIES-220-FLAGSHIP-INFOGRAPHIC.jpg",
    "https://i.ibb.co/0RFzwrnS/PARALLEL-INDUSTRIES-220-391-ALIEN-SYNTAX.jpg",
    "https://i.ibb.co/xSvCtgJR/PARALLEL-INDUSTRIES-220-391-ALIEN-SYNTAX-PASSPORT.jpg",
    "https://i.ibb.co/d08KcWqk/PARALLEL-INDUSTRIES-220-391-PROF-DR-XYZ.jpg",
    "https://i.ibb.co/SX0CK2Cp/391-PARALLEL-INDUSTRIES-220.jpg",
    "https://i.ibb.co/67p6jdT8/PARALLEL-INDUSTRIES-220-391.jpg",
    "https://i.ibb.co/HL2HSJyv/391-PARALLEL-INDUSTRIES-220-ALIEN-SYNTAX-2008-2026-NATIVE-HYBRID.jpg"
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