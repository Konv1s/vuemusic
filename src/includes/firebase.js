import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDbz8qgOHEKcbAQcG6N8jVDF1Iz_YBVsew',
  authDomain: 'flutte-d2ce2.firebaseapp.com',
  projectId: 'flutte-d2ce2',
  storageBucket: 'flutte-d2ce2.appspot.com',
  messagingSenderId: '1007395172205',
  appId: '1:1007395172205:web:686fb1e3e3417750253464',
  measurementId: 'G-D0V402ERXG'
};

export default firebase.initializeApp(firebaseConfig);
