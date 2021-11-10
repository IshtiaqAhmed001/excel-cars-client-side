import React from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle, setUser, setIsLoading, loginWithEmailAndPassword } = useAuth();


    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/home";


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // login directly using google 
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setIsLoading(true);
                setUser(res.user);
                history.push(url);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false);
            })
    }

    const handleGetEmail = e => {
        setEmail(e.target.value);
    }
    const handleGetPassword = e => {
        setPassword(e.target.value);
    }

    // login with email and password manually 
    const handleLoginWithEmailandPassword = e => {
        e.preventDefault();
        loginWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setIsLoading(true);
                const user = userCredential.user;
                setUser(user);
                history.push(url);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div>
            <div>
                <h2 className="display-6 my-4 fw-bold">Please login to continue</h2>
                <div>
                    <form className="w-75 mx-auto border border-danger p-5" onSubmit={handleLoginWithEmailandPassword}>
                        <input className="form-control" type="email" onBlur={handleGetEmail} placeholder="Email" />
                        <br />
                        <input className="form-control" type="password" onBlur={handleGetPassword} placeholder="Password" />
                        <br />
                        <input className="btn btn-danger btn-lg" type="submit" value="Login" />
                    </form>
                </div>

                <div className="my-5">
                    <button onClick={handleGoogleSignIn} className="btn btn-success">Google Sign In</button>
                </div>
            </div>
            <div className="my-5">
                <h4 className="display-6 slogan my-4">Not Registered ?</h4>
                <Link className="fs-5 fw-bold text-success" to="/register">Please Register</Link>
            </div>
        </div>
    );
};

export default Login;