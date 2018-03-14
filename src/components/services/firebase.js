import firebase from 'firebase';

export const config = {

};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.databse();

export const providers = firebase.auth;
