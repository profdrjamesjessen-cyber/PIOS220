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
     


     "https://i.ibb.co/tpb1Zh9p/PARALLEL-INDUSTRIES-220.png",
     "https://i.ibb.co/M52QDd8P/PARALLEL-I-NEWS.png", 
     "https://i.ibb.co/yBy7NQzz/THE-PI220-LINE.png", 
     "https://i.ibb.co/qLvZPGFC/WORLD-WAR-III-LEGAL-EXECUTIONS.png", 
     "https://i.ibb.co/cXckGxHF/PI220-TACTICAL-LINE.png", 
     "https://i.ibb.co/1YLN3Qpv/PARALLEL-I-NEWS.png", 
     "https://i.ibb.co/yczQJg2B/THE-PI220-TACTICAL-LINE.png",
     "https://i.ibb.co/zT5QWTNp/WORLD-WAR-III-LEGAL-EXECUTIONS.png", 
     "https://i.ibb.co/7NjyMfjH/Prof-D-Sc-Jesse-Jessen.jpg", 
     "https://i.ibb.co/gLWnVcXN/PI220-TACTICAL-LINE.png", 
     "https://i.ibb.co/qYdWwBCm/391-629-451-MASSACRE.png", 
     "https://i.ibb.co/8nrSXNTT/WORLD-WAR-III-SPECIAL-OPERATIONS.png", 
     "https://i.ibb.co/whr8JqQd/WORLD-WAR-III-SPECIAL-OPERATIONS-MEN-WOMEN-CHILDREN-KILL-KILL.png", 
     "https://i.ibb.co/7NNT7hS8/WORLD-WAR-III-SPECIAL-OPERATIONS.png", 
     "https://i.ibb.co/WWxrHS4D/EVA-MAGAZINE-001-CHASED-EDITION.png",
     "https://i.ibb.co/FbYwFfkz/EVA-MAGAZINE-CHASED-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/BKrQM3kW/EVA-MAGAZINE-MARINA-PORTS-FULL-ARTICLE-391-SERVERS.png",
     "https://i.ibb.co/WpxYfP3K/EVA-MAGAZINE-MARINA-PORTS-FULL-ARTICLE-391-SERVERS.png",
     "https://i.ibb.co/wh5FdLHH/EVA-MAGAZINE.png",
     "https://i.ibb.co/XfsBBtbt/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/1YSDVyyp/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/kRyrq8w/EVA-MAGAZINE-FULL-ARTICLE-AND-MORE-IN-391-SERVERS.png",
     "https://i.ibb.co/PZJWvygm/EVA-MAGAZINE-MARINA-PORTS.png",
     "https://i.ibb.co/bM7SQtv5/PROF-DSC-JESSE-JESSEN.png", 
     "https://i.ibb.co/fzKMhJ4R/PROF-DSC-JESSE-JESSEN.png", 
     "https://i.ibb.co/RkdVZN2S/PARALLEL-I-NEWS.png",
     "https://i.ibb.co/8D1NpzxL/THE-PI220-TACTICAL-LINE.png",
     "https://i.ibb.co/chk6fgfF/PARALLEL-I-NEWS-GLOBAL-CHANNEL.png",
     "https://i.ibb.co/8455W3SB/PROF-DSC.png",
     "https://i.ibb.co/DPgBcgLk/THE-PI220-LINE.png",
     "https://i.ibb.co/p6LVhpbL/The-Band.png",
     "https://i.ibb.co/VczdsfnM/MARINA-PORTS.png",
     "https://i.ibb.co/2XG78bX/MARINA-PORTS.png",
     "https://i.ibb.co/FkbbWj1J/Prof-Dsc.png",
     "https://i.ibb.co/zTRpKT78/PROF-DSC.png", 
     "https://i.ibb.co/HDH53Gvq/The-Band.png",
     "https://i.ibb.co/kVpqnWRZ/Ongoing.png",
     "https://i.ibb.co/kVtWQxLv/THE-PI220-PARALLEL-I-NEWS.png",
     "https://i.ibb.co/XhqtSw9/MARINA-PORTS.png",
     "https://i.ibb.co/sDK9q0D/JANUARY-OCTOBER-2026-BALANCE-REPORT.png", 
     "https://i.ibb.co/qFP4K0W6/MARINA-PORTS.png",
     "https://i.ibb.co/1YXvws5m/The-Band.png",
     "https://i.ibb.co/Dsw11Rk/THE-PI220-TACTICAL-LINE.png",
     "https://i.ibb.co/1fhhx75m/THE-PI220-TACTICAL-LINE.png",
     "https://i.ibb.co/ntPdYgJ/THE-PI220-TACTICAL-LINE.png",
     "https://i.ibb.co/pvKNc2t7/THE-PI220-TACTICAL-LINE.png",
     "https://i.ibb.co/MxWM21jQ/Prof-Dsc.png",
     "https://i.ibb.co/jvrC3b6b/Prof-Dsc.png",
     "https://i.ibb.co/bjfjYR9j/DONALD-TRUMP-AND-CO-LEGAL-EXECUTIONS.png", 
     "https://i.ibb.co/27v1tQdV/THE-PI220-LINE.png", 
     "https://i.ibb.co/fGFMvTtV/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-LEGAL-REMEDIES.png",
     "https://i.ibb.co/DDkGmrw7/PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/TxgcRfDn/PI220-MISSION-CONTINUES.png",
     "https://i.ibb.co/jZhJ2NT2/I-AM-GONNA-KILL-YOU.png",
     "https://i.ibb.co/60bFhvc1/MARINA-PORTS-PARALLEL-INDUSTRIES-220.png",
     "https://i.ibb.co/VcRSwxCr/Nexus-220-XYZ.png",
     "https://i.ibb.co/8DHjMRkt/Nexus-220-XYZ.png",
     "https://i.ibb.co/YFXD90Xn/NEXUS-220-XYZ.png",
     "https://i.ibb.co/Rk8yBtBZ/Prof-D-Sc-Jesse-Jessen.png",
     "https://i.ibb.co/m5XBMQqw/PROF-DSC-JESSE-JESSEN-PROF-PHD-EVA-JESSEN.png",
     "https://i.ibb.co/Lzp7GDqs/THE-PI220-391-SERVERS.png", 
     "https://i.ibb.co/xSWVfzF0/391-https-profdrjamesjessen-cyber-github-io-PIOS220-391.png",
     "https://i.ibb.co/7tXThDV3/PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/yc0c83M5/ROLLING.png",
     "https://i.ibb.co/v689XpzP/PROF-DSC.png",
     "https://i.ibb.co/FL8MPBpp/EMAIL-ONLY.png",
     "https://i.ibb.co/hPyxXcz/THE-PI220-TOP-SECRET-FILES.png",
     "https://i.ibb.co/5hyZ05qn/PROF-DSC-AND-PROF-PHD.png",
     "https://i.ibb.co/PvpDL9Qf/391-SERVERS.png",
     "https://i.ibb.co/LzLHd9Cx/THE-PI220-TOP-SECRET-FILES.png",
     "https://i.ibb.co/zTyPWGvm/THE-PI220-TOP-SECRET-FILES.png",
     "https://i.ibb.co/8DXzMCwK/THE-PI220-TOP-SECRET-FILES.png",
     "https://i.ibb.co/HT5KjcfM/PROF-DSC.png",
     "https://i.ibb.co/C3FzgmL9/PROF-PHD-EVA-JESSEN.png",
     "https://i.ibb.co/6QHBcpW/PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/NdncsJyc/THE-PI220-TOP-SECRET-FILES.png",
     "https://i.ibb.co/XrWF0Wv7/THE-PI220-SITUATION.png",
     "http://i.ibb.co/6cbJZMKq/391-https-profdrjamesjessen-cyber-github-io-PIOS220-391.png",
     "https://i.ibb.co/M5PZzFMX/PROF-DSC-JESSE-JESSEN.jpg",
     "https://i.ibb.co/3YY7L09g/Prof-Dr-Jesse-Jessen.jpg",
    
     
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
