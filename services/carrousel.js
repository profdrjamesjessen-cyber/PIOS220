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
     


     "https://i.ibb.co/vxgJ4zGF/Parallel-Industries-220.png",
     "https://i.ibb.co/tpzW2WNP/ALPHA-NATION-STARFORCE-WORLD-WAR-III.png",
     "https://i.ibb.co/pBXqB6hm/PARALLEL-I-NEWS-GLOBAL-CHANNEL.png",
     "https://i.ibb.co/dsR7zB7d/PARALLEL-I-NEWS-GLOBAL-CHANNEL.png",
     "https://i.ibb.co/wFQNjtSW/MATANZA-DE-CERDOS.png",
     "https://i.ibb.co/LdH1Ytjk/PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/DfVcPvtD/ONGOING.png",
     "https://i.ibb.co/rG7XjfhY/MATANZA-KILL-EM-ALL.png",
     "https://i.ibb.co/xTL3STq/EXECUTION-MASSIVE-DEATH.png",
     "https://i.ibb.co/FkGNsdNC/WORLD-WAR-III-LEGAL-EXECUTIONS-MARICONES-HIJOS-DE-PUTA.png",
     "https://i.ibb.co/prxLRVsH/WORLD-WAR-III-LEGAL-EXCUTIONS-SPECIAL-OPERATIONS-POINT-BLANK.png",
     "https://i.ibb.co/Y45DWzNF/WORLD-WAR-III-TOTAL-WAR-AGAINST-SPAIN.png",
     "https://i.ibb.co/212vw9Kr/SF1-NEO-CORE-NODE-AFATX10-V2-PHOTONIC-REACTOR.png",
     "https://i.ibb.co/hF8LDxjh/WORLD-WAR-III-TOTAL-WAR-AGAINST-SPAIN.png",
     "https://i.ibb.co/mFSLLzVc/MALDITO-PARASITO-PUTO-PLASTICO-ADORNO-HOMBRE-MARICON-DE-MIERDA.jpg",
     "https://i.ibb.co/xq6DZb2D/MEMORANDUM.png",
     "https://i.ibb.co/Pp5BNm4/WORLD-WAR-III-TOTAL-WAR-AGAINST-SPAIN.png",
     "https://i.ibb.co/r2GV407g/THE-PI220.png",
     "https://i.ibb.co/MyPPVT0C/WORLD-WAR-III-NUCLEAR-WAR.png",
     "https://i.ibb.co/671TST9b/ANNIHILATE-OBLITERATE-SPAIN-KILL-EVERY-FUCKING-WOMEN-MEN-AND-CHILDREN.png",
     "https://i.ibb.co/CKNxM9nq/UPDATE-OUTRUN.png",
     "https://i.ibb.co/xq6DZb2D/MEMORANDUM.png",
     "https://i.ibb.co/Hp2B7p74/PARALLEL-I-NEWS.png",
     "https://i.ibb.co/DftWCnwy/PARALLEL-I-NEWS.png",
     "https://i.ibb.co/5xWqHskQ/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/9Hnhwm2v/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/C3fqf3DX/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/fVcHfntf/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/Rk5jbXWc/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/1GPsf5bM/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/bjQTVd9s/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/KpQ7Qrrm/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/qFC7bVj3/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/q3m1C4VB/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/XrRBsykr/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/d4VrvxnX/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/PZfrs7x8/EVA-MAGAZINE-FULL-ARTICLE-IN-391-SERVERS.png",
     "https://i.ibb.co/G46RRYB1/PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/HD3cC5wt/PARALLEL-INDUSTRIES-220.png",
     "https://i.ibb.co/4g3pNt6H/THE-PI220-TOP-SECRET-FILES.png",
     "https://i.ibb.co/mFG8NWsh/CRYSTAL-PALACE-OF-PALMA.png",
     "https://i.ibb.co/mC6RkXsp/THE-CRYSTAL-PALACE-OF-PALMA.png",
     "https://i.ibb.co/TxG76QHh/CRYSTAL-PALACE.png",
     "https://i.ibb.co/8gSqDttf/SOLIDARIDAD.png",
     "https://i.ibb.co/nMR3FK5R/PARALLEL-INDUSTRIES-220.png",
     "https://i.ibb.co/x8GJBFDh/PROF-DSC-JESSE-JESSEN-PROF-DR-SENTIENT.png",
     "https://i.ibb.co/SDRTfHgZ/PROF-DSC-JESSE-JESSEN-PROF-DR-SENTIENT.png",
     "https://i.ibb.co/gMqNX2Jj/PROF-DSC-JESSE-JESSEN-PROF-DR-SENTIENT.png",
     "https://i.ibb.co/xtH8Ynff/PARALLEL-I-NEWS.png",
     "https://i.ibb.co/d4Jrdwzx/THE-BAND.png",
     "https://i.ibb.co/C5mbjNDx/PARALLEL-I-NEWS-GLOBAL-CHANNEL.png",
     "https://i.ibb.co/JWkTJszQ/PROF-DSC-AND-PHD-DEPARTURE.png", 
     "https://i.ibb.co/ZpVFLZyH/PARALELL-INDUSTRIES-220.png",
     "https://i.ibb.co/p6C6t9LB/POST-AMERICAN-WORLD.png",
     "https://i.ibb.co/MkKqLvHh/POST-AMERICAN-WORLD-LEGAL-EXECUTIONS-KILL-EM-ALL.png",
     "https://i.ibb.co/6cFkRw02/POST-AMERICAN-WORLD-LEGAL-EXECUTIONS-KILL-EM-ALL.png",
     "https://i.ibb.co/C3ZFntg7/MY-PEOPLE.png", 
     "https://i.ibb.co/5gxjmX2r/GOODBYE-USA-MANIPULATION.png",
     "https://i.ibb.co/tM7FxT5w/WORLD-WAR-III-LEGAL-EXECUTIONS.png", 
     "https://i.ibb.co/nMDYNNtD/WORLD-WAR-III-SPECIAL-OPERATIONS.png",
     "https://i.ibb.co/c5HkRfh/WORLD-WAR-III-LEGAL-EXECUTIONS.png", 
     "https://i.ibb.co/M52QDd8P/PARALLEL-I-NEWS.png", 
     "https://i.ibb.co/yBy7NQzz/THE-PI220-LINE.png", 
     "https://i.ibb.co/cXckGxHF/PI220-TACTICAL-LINE.png", 
     "https://i.ibb.co/1YLN3Qpv/PARALLEL-I-NEWS.png", 
     "https://i.ibb.co/yczQJg2B/THE-PI220-TACTICAL-LINE.png",
     "https://i.ibb.co/7NjyMfjH/Prof-D-Sc-Jesse-Jessen.jpg", 
     "https://i.ibb.co/gLWnVcXN/PI220-TACTICAL-LINE.png", 
     "https://i.ibb.co/qYdWwBCm/391-629-451-MASSACRE.png", 
     "https://i.ibb.co/8nrSXNTT/WORLD-WAR-III-SPECIAL-OPERATIONS.png", 
     "https://i.ibb.co/whr8JqQd/WORLD-WAR-III-SPECIAL-OPERATIONS-MEN-WOMEN-CHILDREN-KILL-KILL.png", 
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
