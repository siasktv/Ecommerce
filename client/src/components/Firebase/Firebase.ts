import { initializeApp } from "firebase/app";
import config from "../../../config";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: config.APIKEY,
  authDomain: config.AUTHDOMAIN,
  projectId: config.PROJECTID,
  storageBucket: config.STORAGEBUCKET,
  messagingSenderId: config.MESSAGINGSENDERID,
  appId: config.APPID,
  measurementId: config.MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
