import firebase from 'firebase';

export const config = {
<<<<<<< HEAD
  apiKey: 'AIzaSyAlfsU0kM8fM1_pJ_MY6LGvwP4nDOsMlBg',
  authDomain: 'tic-tac-toe-e8ede.firebaseapp.com',
  databaseURL: 'https://tic-tac-toe-e8ede.firebaseio.com',
  projectId: 'tic-tac-toe-e8ede',
  storageBucket: 'tic-tac-toe-e8ede.appspot.com',
  messagingSenderId: '830455401675'
=======
  apiKey: 'AIzaSyDXMhvYHb67IKgEbujKhzTTf3vioZurNTo',
  authDomain: 'tic-tac-toe-65768.firebaseapp.com',
  databaseURL: 'https://tic-tac-toe-65768.firebaseio.com',
  projectId: 'tic-tac-toe-65768',
  storageBucket: 'Tic Tac Toe',
  messagingSenderId: '342625653894'
>>>>>>> f532b13a32e4179d4dd76c1a17c8c032b5850497
};

const firebaseApp = firebase.initializeApp(config);

<<<<<<< HEAD
export const db = firebaseApp.database();

export const providers = firebase.auth;
=======
export const db = firebaseApp.database(); //the real-time database
export const storage = firebase.storage(); //the firebase storage adjunct for images
export const auth = firebaseApp.auth(); //the firebase auth namespace

export const providers = firebase.auth;
>>>>>>> f532b13a32e4179d4dd76c1a17c8c032b5850497
