/* ======================================
   PI220OS AUTH UI MODULE (STABLE)
====================================== */

registerModule("AUTH", (top) => {

  console.log("[AUTH] MODULE RENDERED");

  if(!top){
    console.error("[AUTH] topPanel missing");
    return;
  }

  top.innerHTML = `
    <div class="module auth-module">

      <h1>PI220 AUTHENTICATION SYSTEM</h1>

      <div class="auth-box">

        <input id="authEmail" type="email" placeholder="Email" />
        <input id="authPassword" type="password" placeholder="Password" />

        <div class="auth-buttons">
          <button id="loginBtn">LOGIN</button>
          <button id="signupBtn">SIGN UP</button>
          <button id="exitBtn">EXIT</button>
        </div>

        <div id="authStatus"></div>

      </div>

    </div>
  `;

  const email = () => document.getElementById("authEmail")?.value;
  const pass = () => document.getElementById("authPassword")?.value;
  const status = document.getElementById("authStatus");

  function setStatus(msg){
    if(status) status.textContent = msg;
  }

  // =========================
  // SAFE AUTH CHECK
  // =========================
  function getAuth(){
    if(window.PI220_AUTH_READY && window.PI220_AUTH){
      return window.PI220_AUTH;
    }
    return null;
  }

  // =========================
  // LOGIN
  // =========================
  document.getElementById("loginBtn").onclick = async () => {

    setStatus("Logging in...");

    const auth = getAuth();

    if(auth?.login){

      try {
        const user = await auth.login(email(), pass());

        if(user){
          setStatus("Welcome " + user.email);
          window.setUIState?.("HOME");
        } else {
          setStatus("Invalid credentials");
        }

      } catch(e){
        console.error("[AUTH LOGIN ERROR]", e);
        setStatus("Login error");
      }

    } else {
      setStatus("Auth system loading...");
      console.warn("[AUTH] Backend not ready yet");

      setTimeout(() => {
        if(getAuth()){
          setStatus("Auth ready — try again");
        } else {
          setStatus("Auth still not available");
        }
      }, 1000);
    }
  };

  // =========================
  // SIGNUP
  // =========================
  document.getElementById("signupBtn").onclick = async () => {

    setStatus("Creating account...");

    const auth = getAuth();

    if(auth?.signUp){

      try {
        const user = await auth.signUp(email(), pass());

        if(user){
          setStatus("Account created: " + user.email);
          window.setUIState?.("HOME");
        } else {
          setStatus("Signup failed");
        }

      } catch(e){
        console.error("[AUTH SIGNUP ERROR]", e);
        setStatus("Signup error");
      }

    } else {
      setStatus("Auth system loading...");
      console.warn("[AUTH] Backend not ready yet");

      setTimeout(() => {
        if(getAuth()){
          setStatus("Auth ready — try again");
        } else {
          setStatus("Auth still not available");
        }
      }, 1000);
    }
  };

  // =========================
  // EXIT
  // =========================
  document.getElementById("exitBtn").onclick = () => {
    window.setUIState?.("HOME");
  };

});