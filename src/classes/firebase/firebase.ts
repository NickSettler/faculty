import * as firebase from "firebase";
import "firebase/firestore";

class Firebase {
    db: firebase.firestore.Firestore;
    constructor() {
        firebase.initializeApp({
            apiKey: "AIzaSyDwXk9_hrZ1WzU3ARwrMTFLx3BLW3L6vKI",
            authDomain: "faculty-da9e6.firebaseapp.com",
            databaseURL: "https://faculty-da9e6.firebaseio.com",
            projectId: "faculty-da9e6",
            storageBucket: "faculty-da9e6.appspot.com",
            messagingSenderId: "570619870731",
            appId: "1:570619870731:web:b9847367a668595a9f110e",
            measurementId: "G-DDY09L9XEZ"
        });
        firebase.analytics();

        this.db = firebase.firestore();
    }
}
export default new Firebase();