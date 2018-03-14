import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyDXMhvYHb67IKgEbujKhzTTf3vioZurNTo',
  authDomain: 'tic-tac-toe-65768.firebaseapp.com',
  databaseURL: 'https://tic-tac-toe-65768.firebaseio.com',
  projectId: 'tic-tac-toe-65768',
  storageBucket: 'Tic Tac Toe',
  messagingSenderId: '342625653894'
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); //the real-time database
export const storage = firebase.storage(); //the firebase storage adjunct for images
export const auth = firebaseApp.auth(); //the firebase auth namespace

export const providers = firebase.auth;
