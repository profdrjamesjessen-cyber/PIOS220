/* ======================================
   PI220OS CAROUSEL SERVICE ENGINE
   Image Stream Layer (URL Driven)
====================================== */

const PI220_CAROUSEL = {
  index: 0,
  interval: null,
  _mounted: false, // 🔥 FIX: prevents multiple loops

  images: [


     
/* ===========================================
    INTRO
============================================= */


     "https://i.ibb.co/ksVqSdWX/ONGOING.jpg",
     "https://i.ibb.co/60bFhvc1/MARINA-PORTS-PARALLEL-INDUSTRIES-220.png", 
     "https://i.ibb.co/YFCThq1K/WORLD-WAR-III-LEGAL-EXECUTIONS.png",  
     "https://i.ibb.co/Txv35kCT/391-SERVERS-PARALLEL-I-NEWS-GLOBAL-CHANNEL.png",
     "https://i.ibb.co/Q32Y7rwJ/THE-PI220-TOP-SECRET-FILES.png",
     "https://i.ibb.co/RpxdTQC3/THE-PI220-TOP-SECRET-FILES.png",
     "https://i.ibb.co/PvpDL9Qf/391-SERVERS.png",
     "https://i.ibb.co/4nB4284F/PI220.png",
     "https://i.ibb.co/dJ5nQ1gS/THE-PI220.png",
     "https://i.ibb.co/B2jBD4Hr/MARINA-PORTS-PARALLEL-INDUSTRIES-220.png",
     "https://i.ibb.co/210ggQM0/PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/d06bXmkQ/PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/RGGcY7pr/PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/r2McwxDb/PARALLEL-PICTURES-220-PRESENT-PARALLELMAN.png",
     "https://i.ibb.co/XrQxpQjq/PROF-DSC.png", 
     "https://i.ibb.co/FqL1qKDN/PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/zVp41shf/PROF-DSC.png",
     "https://i.ibb.co/zHs5srgP/PROF-DSC.png",
     "https://i.ibb.co/TBKCCJnL/PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/HpnqhzPT/PROF-DSC.png",
     "https://i.ibb.co/HyDG0g5/THE-PI220-RESEARCH-PROGRAM.png",
     "https://i.ibb.co/MX0phJC/PARALLEL-PICTURES-PRESENTS.png",
     "https://i.ibb.co/FLcxsq9f/PI220-MISSION-CONTINUES.png",
     
/* ===========================================
    TOP NEWS
============================================= */

  
/* ===========================================
    OTHER NEWS
============================================= */     

     
     
/* ===========================================
    COMIC SECTION
============================================= */


     
          "https://i.ibb.co/ymTRVfFt/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/m59yfrvW/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/7t81Wvm2/THE-PI220-TOP-SECRET-FILES.png", 
          "https://i.ibb.co/YTVrCy4Y/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/XZmJqVc5/THE-PI220-TOP-SECRET-FILES.png", 
          "https://i.ibb.co/FbWHgQyM/THE-PI220-TOP-SECRET-FILES.png",
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
          "https://i.ibb.co/k66Z7kds/THE-PI220-TOP-SECRET-FILES.png",
         
     
     
/* ===========================================
    PARALLEL INDUSTRIES 220
============================================= */
     
     
   
     
     
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
