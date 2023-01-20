import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, onAuthStateChanged,
    GoogleAuthProvider, signInWithPopup,
    sendPasswordResetEmail
} from "firebase/auth";
import { auth } from '../firebase'

const userAuthContext = createContext()



export function UserAuthContextProvider({ children }) {
    const [user, setuser] = useState("")
    // function signUp(email,password){
    //     return createUserWithEmailAndPassword(auth,email,password)
    // }
    const signUp = (email, password ,name) => {
        console.log("signUp called");
        return createUserWithEmailAndPassword(auth, email, password,name)
    }

    function logIn(email,password) {
        return signInWithEmailAndPassword(auth, email,password)
    }
    function logOut() {
        return signOut(auth)
    }

    const forgetpassWord= (email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser);   
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn,forgetpassWord }}>{children}</userAuthContext.Provider>
}


export function useUserAuth() {
    return useContext(userAuthContext)
}
