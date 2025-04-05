// filepath: c:\Users\Iulia\OneDrive\Documents\GitHub\culturedropv2\ctrl-z\src\firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD-3HhK--nt0qlUmQ7GblJ8-bx85VmzS6Q",
  authDomain: "itec2025-87e45.firebaseapp.com",
  projectId: "itec2025-87e45",
  storageBucket: "itec2025-87e45.firebasestorage.app",
  messagingSenderId: "926099095073",
  appId: "1:926099095073:web:31c54d4256a18667d4ed60",
  measurementId: "G-0ED679DN4L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);