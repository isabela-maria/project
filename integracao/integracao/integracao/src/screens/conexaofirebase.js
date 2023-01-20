import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCFbsHZVYOqcUKaN2hly82NMei99M9_znU",
    authDomain: "projetoswb-3dc36.firebaseapp.com",
    projectId: "projetoswb-3dc36",
    storageBucket: "projetoswb-3dc36.appspot.com",
    messagingSenderId: "754906950867",
    appId: "1:754906950867:web:380ca0c834dd8df164f826",
    measurementId: "G-NG1Z2RJE2L"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);