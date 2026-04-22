/* ======================================
   PI220OS FIREBASE CORE (AUTH LAYER)
====================================== */

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

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

// =============================
// GLOBAL AUTH STATE FLAG
// =============================
window.PI220_AUTH_READY = false;

// =============================
// PI220 AUTH WRAPPER
// =============================
window.PI220_AUTH = {

  // LOGIN
  login: async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res.user;
    } catch (e) {
      console.error("[PI220 AUTH] login error:", e.message);
      return null;
    }
  },

  // SIGN UP
  signUp: async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      return res.user;
    } catch (e) {
      console.error("[PI220 AUTH] signup error:", e.message);
      return null;
    }
  },

  // LOGOUT
  logout: async () => {
    try {
      await signOut(auth);
      return true;
    } catch (e) {
      console.error("[PI220 AUTH] logout error:", e.message);
      return false;
    }
  },

  // CURRENT USER
  currentUser: () => auth.currentUser
};

// =============================
// MARK READY AFTER INIT
// =============================
window.PI220_AUTH_READY = true;

console.log("[PI220] Firebase Auth initialized + READY");
