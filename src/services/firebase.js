// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAINGSENDERID,
  appId: import.meta.env.VITE_APP_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Guardar datos en firebase
export const saveArchivos = (data) =>
  addDoc(collection(db, "Estudiantes"), data);

// Traer datos de firebase

export async function traerDatos() {
  const querySnapshot = await getDocs(collection(db, "Estudiantes"));
  const docs = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    docs.push({ ...doc.data(), id: doc.id });
  });
  return docs;
}

// TODO: CREAR FORMA DE TRAER DATOS SIN CONEXION
