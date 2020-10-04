import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseInstance = !firebase.apps.length
  ? firebase.initializeApp({ projectId: 'nuxt-irai-list' })
  : firebase.app()
const db = firebaseInstance.firestore()
const { Timestamp, GeoPoint } = firebase.firestore

export { Timestamp, GeoPoint }
export { db }