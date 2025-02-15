import React, { createContext, useContext, useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore'

const firebaseCon = createContext()

export const UseFirebase = ()=> {
    return useContext(firebaseCon)
}

const firebaseConfig = {
    apiKey: import.meta.env.REACT_APP_FIREBASE,
    authDomain: "resolute-ai-assignment-ec374.firebaseapp.com",
    projectId: "resolute-ai-assignment-ec374",
    storageBucket: "resolute-ai-assignment-ec374.firebasestorage.app",
    messagingSenderId: "456058906010",
    appId: "1:456058906010:web:1c8f63b7aebc5af6324623"
};
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
const fireStore = getFirestore(firebaseApp)

const FirebaseContext = ({children}) => {

    const [user, setUser] = useState('')

    const loginUser = (email, password)=>{
        signInWithEmailAndPassword(firebaseAuth, email, password)
            .then(()=> console.log('login Success'))
    }

    const storeData = async(data)=>{
        await addDoc(collection(fireStore, 'users'), {data}).then(()=>console.log(data))
    }

    const getData = ()=>{
        return getDocs(collection(fireStore, 'users'))
    }

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth, (user)=>{
            if(user) setUser(user)
            else setUser('')
        })
    }, [])

    const isLoggeIn = user ? true : false

  return (
    <>
        <firebaseCon.Provider value={{loginUser, storeData, getData, setUser,isLoggeIn}}>
            {children}
        </firebaseCon.Provider>
    </>
  )
}

export default FirebaseContext;