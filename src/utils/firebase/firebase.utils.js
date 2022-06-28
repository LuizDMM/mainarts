import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDdnf9yR-CnyaxuOSC1DHlePvwjxqRFh-A',
  authDomain: 'mainarts-db.firebaseapp.com',
  projectId: 'mainarts-db',
  storageBucket: 'mainarts-db.appspot.com',
  messagingSenderId: '62015659795',
  appId: '1:62015659795:web:1ad1c3a569f47c965d44e6',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()

export const db = getFirestore()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapShot = await getDoc(userDocRef)

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      })
    } catch (e) {
      console.log('error creating the user', e.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => signOut(auth)
