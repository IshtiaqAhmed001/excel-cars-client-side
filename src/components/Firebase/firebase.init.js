import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.firebase";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;