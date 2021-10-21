import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitial from "../Firebase/Firebase.initial";

FirebaseInitial();
const UseFirebase = () => {
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const signInwithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const Logout = () => {
        signOut(auth)
            .then(() => {
                setUser('')
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("Inside change:", user)
                setUser(user)
            }
        })
    }, [])

    return {
        signInwithGoogle, user, error, Logout
    }
}
export default UseFirebase;
