import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBTOTYaL56Tq0bQwuIzYcm_ahqXLLXvlfk",
    authDomain: "legacy-of-raphae-1527709871620.firebaseapp.com",
    databaseURL: "https://legacy-of-raphae-1527709871620.firebaseio.com",
    projectId: "legacy-of-raphae-1527709871620",
    storageBucket: "legacy-of-raphae-1527709871620.appspot.com",
    messagingSenderId: "12811319968"
  }

firebase.initializeApp(config);

export default firebase;
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();