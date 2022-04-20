import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyB7TA2fOC4G9D9iyZNr6onWv-AHwSjAdTY",
  authDomain: "school-attendence2.firebaseapp.com",
  databaseURL: "https://school-attendence2-default-rtdb.firebaseio.com",
  projectId: "school-attendence2",
  storageBucket: "school-attendence2.appspot.com",
  messagingSenderId: "711556132242",
  appId: "1:711556132242:web:c45caee1ccde657d72a54b",
  measurementId: "G-WX63XKYZ3G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  