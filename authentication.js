import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// =============================
// FIREBASE CONFIG
// =============================
const firebaseConfig = {
  apiKey: "AIzaSyAOV35dFUwgfSCKLbg8OwH888oKWuGDRy8",
  authDomain: "pi220os.firebaseapp.com",
  projectId: "pi220os",
  storageBucket: "pi220os.firebasestorage.app",
  messagingSenderId: "192280990208",
  appId: "1:192280990208:web:18a44e393a75c734903ee5"
};

// =============================
// INIT FIREBASE
// =============================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// expose globally for OS
window.PI220_AUTH = {
  auth,
  user: null
};

// =============================
// AUTH STATE TRACKER
// =============================
onAuthStateChanged(auth, (user) => {

  window.PI220_AUTH.user = user || null;

  if(user){
    console.log("[PI220 AUTH] Logged in:", user.email);

    if(window.setUIState){
      window.setUIState("AUTHENTICATED", user);
    }

    if(window.PI220_console?.print){
      window.PI220_console.print("AUTH: " + user.email);
    }

  } else {
    console.log("[PI220 AUTH] Logged out");

    if(window.setUIState){
      window.setUIState("HOME");
    }
  }

});

// =============================
// SIGN UP
// =============================
export async function signUp(email, password){

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("[PI220 AUTH] Signup success", userCredential.user.email);
    return userCredential.user;

  } catch (error) {
    console.error("[PI220 AUTH] Signup error:", error.message);
    return null;
  }
}

// =============================
// LOGIN
// =============================
export async function login(email, password){

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("[PI220 AUTH] Login success", userCredential.user.email);
    return userCredential.user;

  } catch (error) {
    console.error("[PI220 AUTH] Login error:", error.message);
    return null;
  }
}

// =============================
// LOGOUT
// =============================
export async function logout(){

  await signOut(auth);
  console.log("[PI220 AUTH] User logged out");
}

window.PI220_AUTH = {
  auth,
  user: null,
  login,
  signUp,
  logout
};