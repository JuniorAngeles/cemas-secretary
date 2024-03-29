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
  updateDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";

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
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const githubAuthProvaider = new GithubAuthProvider();

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

// export const getArchivo = (id) => {
//   getDoc(doc(db, "Estudiantes", id));
// };

export const deleteArchivo = async (id) => {
  await deleteDoc(doc(db, "Estudiantes", id));
};

export const editArchivo = async (id, data) => {
  const studenRef = doc(db, "Estudiantes", id);

  await updateDoc(studenRef, data).then(() => {
    console.log("Se a actualizado");
  });
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
// regisro con google
export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleAuthProvider)
    .then((result) => result.user)
    .catch((error) => console.log(error));
};

// registro con github
// export const loginWithGihub = () => {
//   return signInWithPopup(auth, githubAuthProvaider)
//     .then((result) => result.user)
//     .catch((error) => console.log(error));
// };

// Cerrar sesion
export const logout = () => {
  return signOut(auth)
    .then(() => null)
    .catch((error) => console.log(error));
};

// export async function uploaFilesRecord(file) {
//   const storageRef = ref(
//     storage,
//     "RecordNotasEstudiantes",
//     crypto.randomUUID()
//   );
//   const url = await getDownloadURL(storageRef);
//   return url;
// }

// if (location.hostname == "localhost") {
//   firebaseConfig = {
//     databaseUrl:"http://127.0.0.1:4001/firestore"
//   }
//   admin.initializeApp(firebaseConfig)
// } else {
//   admin.initializeApp(firebaseConfig)
// }

// TODO: CREAR FORMA DE TRAER DATOS SIN CONEXION
