// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { documentId, getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";

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
const storage = getStorage(app);
// const usuarioRef = db.collection("Estudiantes");

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

export const getArchivo = (id) => {
  getDoc(doc(db, "Estudiantes", id));
};

export const deleteArchivo = async (id) => {
  await deleteDoc(doc(db, "Estudiantes", id));
};

export const editArchivo = async (id) => {
  const docRef = doc(db, "Estudiantes", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export async function uploaFiles(file) {
  // 'file' comes from the Blob or File API
  const storageRef = ref(storage, crypto.randomUUID());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;

  // await uploadBytes(storageRef, file).then((snapshot) => {
  //   console.log(snapshot);
  // });
  // const storageRef = ref(storage, crypto.randomUUID());
  // await uploadBytes(storageRef, file);
  // const url = await getDownloadURL(storageRef);
  // return url;
}

// if (location.hostname == "localhost") {
//   firebaseConfig = {
//     databaseUrl:"http://127.0.0.1:4001/firestore"
//   }
//   admin.initializeApp(firebaseConfig)
// } else {
//   admin.initializeApp(firebaseConfig)
// }

// TODO: CREAR FORMA DE TRAER DATOS SIN CONEXION
