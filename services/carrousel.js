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


     "https://i.ibb.co/Lzp7GDqs/THE-PI220-391-SERVERS.png",
     "https://i.ibb.co/Lzp7GDqs/THE-PI220-391-SERVERS.png",
     "https://i.ibb.co/xSWVfzF0/ONGOING.png",
     "https://i.ibb.co/nMzQrBh4/WORLD-WAR-III-LETHA-PROSECUTION-PAY-OR-DIE.png",
     "https://i.ibb.co/nMzQrBh4/WORLD-WAR-III-LETHA-PROSECUTION-PAY-OR-DIE.png",
     "https://i.ibb.co/9mxxBFTQ/OPERATION-KILLSTONE.png", 
     "https://i.ibb.co/7tXThDV3/PROF-DSC-JESSE-JESSEN.png",
     "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/04a8625d71e6584616cc067b621b8b59c3dd0df6/blog/Captura%20de%20pantalla%202026-10-16%20134236.png",
     "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/04a8625d71e6584616cc067b621b8b59c3dd0df6/blog/Captura%20de%20pantalla%202026-10-16%20134236.png",
     "https://i.ibb.co/tpb1Zh9p/PARALLEL-INDUSTRIES-220.png",
     "https://i.ibb.co/FbQF4R7z/THE-PI220-TACTICAL-LUXURY-LINE.png",
     "https://i.ibb.co/yc0c83M5/ROLLING.png", 
     "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/04a8625d71e6584616cc067b621b8b59c3dd0df6/blog/Captura%20de%20pantalla%202026-10-16%20134236.png",
     "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/02197f9381a2328d39669148dca84f3ae6181201/blog/PROF%20DSC%20MARINA%20PORTS.png",
     "https://raw.githubusercontent.com/profdrjamesjessen-cyber/PIOS220/7ebe90dc6ecbdc82330736d2b091af92b679cb98/blog/PROF%20DSC.png",
     "https://i.ibb.co/ZRK1JjQb/391.png",
     "https://i.ibb.co/994ZL9nD/THE-PI220-TACTICAL-LUXURY-LINE.png",
     "https://i.ibb.co/v689XpzP/PROF-DSC.png",
     "https://i.ibb.co/v6YGVpc9/THE-PI220-LINE.png",
     "https://i.ibb.co/rf63LZRJ/PROF-DSC.png",
     "https://i.ibb.co/GvZVq1jZ/THE-PI220-ALPHA-NATION.png", 
     "https://i.ibb.co/ZzKPZntP/PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/FL8MPBpp/EMAIL-ONLY.png",
     "https://i.ibb.co/ksVqSdWX/ONGOING.jpg",
     "https://i.ibb.co/GvjFTG6N/PI220-ALPHA-NATION.png", 
     "https://i.ibb.co/hPyxXcz/THE-PI220-TOP-SECRET-FILES.png",
     "https://i.ibb.co/5hyZ05qn/PROF-DSC-AND-PROF-PHD.png",
     "https://i.ibb.co/4ZvdcCgB/PARALLEL-I-NEWS-GLOBAL-CHANNEL.png",
     "https://i.ibb.co/354KGNYk/391-https-profdrjamesjessen-cyber-github-io-PIOS220-391.png",
     "https://i.ibb.co/vv6Xk3xf/image.png",
     "https://i.ibb.co/60bFhvc1/MARINA-PORTS-PARALLEL-INDUSTRIES-220.png", 
     "https://i.ibb.co/v6NgWfpg/prof-dsc-and-prof-phd.png", 
     "https://i.ibb.co/SXcLr9kV/PROF-DSC-JESSE-JESSEN.png", 
     "https://i.ibb.co/3yktF5V0/SPECIAL-OPERATIONS.png", 
     "https://i.ibb.co/YFCThq1K/WORLD-WAR-III-LEGAL-EXECUTIONS.png",
     "https://i.ibb.co/ynfM61zx/391.png", 
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
