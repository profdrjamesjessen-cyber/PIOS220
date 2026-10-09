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


          "https://i.ibb.co/MkK7F3Xf/THE-PROSECUTION.png", 
          "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/15fb757f46227a5d285fcf39dc389366bb493ab9/blog/THE-PI220-TOP-SECRET-FILES%2011.png",
          "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/15fb757f46227a5d285fcf39dc389366bb493ab9/blog/THE-PI220-TOP-SECRET-FILES%2022.png",
          "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/ce0bd1b2d4a3865221c1ac872246d8b273854625/blog/THE-PI220-NEED-FOR-SPEED-OUTRUN.png",    
          "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/ce0bd1b2d4a3865221c1ac872246d8b273854625/blog/PROF-DSC-JESSE-JESSEN.png", 
          "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/ce0bd1b2d4a3865221c1ac872246d8b273854625/blog/PARALLEL-FILMS-PRODUCTIONS-PRESENT.png",
          "https://i.ibb.co/TxgcRfDn/PI220-MISSION-CONTINUES.png", 
          "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/ce0bd1b2d4a3865221c1ac872246d8b273854625/blog/THE-PI220%2022.png", 
          "https://i.ibb.co/V0MtxkpP/PROF-DR-SENTIENT.png",
          "https://i.ibb.co/9z4ShT4/THE-PI220-MASTER-POLICY-FILES.png", 
          "https://i.ibb.co/xtKJJ0gK/PROF-DSC-JESSE-JESSEN.png",
          "https://i.ibb.co/1GjdjcpX/PROF-DSC-JESSE-JESSEN.png", 
          "https://i.ibb.co/RGn51DLq/PROF-DSC-JESSE-JESSEN.png", 
          "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/ce0bd1b2d4a3865221c1ac872246d8b273854625/blog/PARALLELMAN.png", 
          "https://i.ibb.co/6JGfybK1/PROF-DSC-JESSE-JESSEN.png", 
          "https://i.ibb.co/xq3jvJCR/PROF-DSC-JESSE-JESSEN.png", 
          "https://i.ibb.co/x8PfkMPs/PARALLEL-INDUSTRIES-220-ALPHA-NATION.jpg",
          "https://i.ibb.co/k2NGGR33/PI220-MISSION-CONTINUES.png", 
          "https://i.ibb.co/pBpyTztd/PARALLEL-FILMS-PRODUCTIONS-PRESENTS.png",
          "https://i.ibb.co/B5cMFx6S/PROF-DSC.png",
          "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/ce0bd1b2d4a3865221c1ac872246d8b273854625/blog/THE-PI220.png",
          "https://i.ibb.co/RkKz45Sv/THE-PI220.png",
          "https://i.ibb.co/RpyYPKS8/PROF-DR-MICHAEL-E-JOSEPH.png",
          "https://i.ibb.co/d06bXmkQ/PROF-DSC-JESSE-JESSEN.png",
          "https://i.ibb.co/h1JN1ymh/PROF-DSC-JESSE-JESSEN.png",
          "https://i.ibb.co/xtq0fsp8/THE-DIRECTORATE.png",
          "https://i.ibb.co/dJ5nQ1gS/THE-PI220.png", 
          "https://i.ibb.co/pBWFc3r0/THE-PI220-TOP-SECRET-FILES.png",     
          "https://i.ibb.co/wbhh8LT/PROF-DSC.png", 
          "https://i.ibb.co/MX0phJC/PARALLEL-PICTURES-PRESENTS.png",
          "https://i.ibb.co/jZW8JFdv/LIVE-STATUS.png",
          "https://i.ibb.co/990QGjqV/THE-PI220-TOP-SECRET-FILES.png",
          "https://i.ibb.co/wbhh8LT/PROF-DSC.png", 
          "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/26713829c5d0cb8d3afb0c07dd4941f353b99129/blog/PORTFOLIO%20220.png",
          "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/26713829c5d0cb8d3afb0c07dd4941f353b99129/blog/PORTFOLIO.png",
         
     
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
     
     
          "https://i.ibb.co/r2McwxDb/PARALLEL-PICTURES-220-PRESENT-PARALLELMAN.png",
          "https://i.ibb.co/fzV6NmqN/THE-PI220-PORTFOLIO-WARCRAFT-2-4-NO-CROSS-CONTAMINATION.png",
          "https://i.ibb.co/Txh0cntn/THE-PI220-PORTFOLIO-WARCRAFT-1-4-INDEPENDENT-NO-CROSS-CONTAMINATION.png",
          "https://i.ibb.co/3ycC7Z1s/PROF-DSC-JESSE-JESSEN.png",
          "https://i.ibb.co/RThsrZXG/PROF-DSC-JESSE-JESSEN-POKERSTARS-BLACK-FRIDAY.png",
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
