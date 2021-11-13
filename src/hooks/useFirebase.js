import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribe();
    }, []);


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const createAccountWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                console.log(error);
            });
    }

    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            const newUser = { ...user, displayName: name };
            setUser(newUser);
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://floating-taiga-26098.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        setUser,
        signInWithGoogle,
        createAccountWithEmail,
        loginWithEmailAndPassword,
        isLoading,
        setIsLoading,
        updateName,
        saveUser,
        logOut
    }
}

export default useFirebase;