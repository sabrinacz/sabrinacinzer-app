// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, setUserProperties } from "firebase/analytics";
import { collection, getDocs, doc, getDoc, getFirestore, query, where } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP4ct_A6qfOP54ZW4mUEmztzxWkKJU4fQ",
  authDomain: "dopter-1d492.firebaseapp.com",
  projectId: "dopter-1d492",
  storageBucket: "dopter-1d492.appspot.com",
  messagingSenderId: "456149734378",
  appId: "1:456149734378:web:56388e19e812ad10149893",
  measurementId: "G-N8PYF6M7ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);


// const docRef = doc(db, "pets", "rb3dM9gQEZzTQSjX4jcy");

// getDoc(docRef).then(snapshot => {
//     console.log({id: snapshot.id,...snapshot.data()});
// })
// console.log(db)

const colRef = collection(db, 'pets');
const q = query();

getDocs(colRef).then((snapshot) => {
    console.log(
        snapshot.docs.map((doc)=> ({
            id: doc.id, 
            ...doc.data()
        }))
    );
})
