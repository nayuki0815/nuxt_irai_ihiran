// import firebase from 'firebase/app'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA1ekgVtO0_Tzrpw-IJ91CNEFAEjpTX2cQ',
  authDomain: 'nuxt-irai-ichiran-2.firebaseapp.com',
  databaseURL: 'https://nuxt-irai-ichiran-2.firebaseio.com',
  projectId: 'nuxt-irai-ichiran-2',
  storageBucket: 'nuxt-irai-ichiran-2.appspot.com',
  messagingSenderId: '960603117897',
  appId: '1:960603117897:web:f483d11c47383fe11f6298',
  measurementId: 'G-YD2MH2X1WW',
}


// Appの初期化
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
// 今回使用するAPI
export const auth = firebase.auth()
export const firestore = firebase.firestore()


