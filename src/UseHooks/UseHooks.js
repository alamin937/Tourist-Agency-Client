import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged   } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";




firebaseAuthentication()



const UseHooks = () =>{
    const [user, setUser] = useState({})
    const [loading, isLoading] = useState(true)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();



    const googleSignIn = () =>{
        isLoading(true)
        return signInWithPopup(auth, provider)
       
        .finally(() => isLoading(false))
    }

    const logOut = () =>{
        isLoading(true)
        signOut(auth)
        .then(() =>{
            setUser({ })
        })
        .finally(() => isLoading(false))
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({ })
            }
            isLoading(false)
        })
    },[])

    return{
        user,
        googleSignIn,
        logOut,
        loading
    }


}

export default UseHooks;