// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import config from "../../../config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: config.APIKEY,
  authDomain: config.AUTHDOMAIN,
  projectId: config.PROJECTID,
  storageBucket: config.STORAGEBUCKET,
  messagingSenderId: config.MESSAGINGSENDERID,
  appId: config.APPID,
  measurementId: config.MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

interface ObjUserType {
  email: string;
  password: string;
}

export const crearUsuario = (ObjUser: ObjUserType) => {
  createUserWithEmailAndPassword(auth, ObjUser.email, ObjUser.password)
    .then((cred) => {
      console.log(cred);
    })
    .catch((err) => {
      console.log(err);
    });
};
/*crear usuario


//desloguear usuario
signOut(auth).then(() => {
  console.log("user signed out");
}).catch(err){
  console.log(err)
};

//loguear usuario
signInWithEmailAndPassword(auth, email, password)
*/
