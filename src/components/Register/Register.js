import React from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const { signInWithGoogle, createAccountWithEmail, updateName, setUser, setIsLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/home";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGetName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleGetEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleGetPassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    // signup using email and password 
    const handleRegistration = e => {
        createAccountWithEmail(email, password)
            .then((res) => {
                setIsLoading(true);
                updateName(name);
                setUser(res.user);
                history.push(url);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => {
                setIsLoading(false);
            })

        e.preventDefault();
    }

    return (
        <div>
            <h2 className="mt-5 display-5 fw-bold">Please Register to Continue</h2>
            <hr className="w-50 mx-auto text-danger fw-bold" />
            <div>
                <form className="my-5 w-75 mx-auto border border-1 border-danger p-5" onSubmit={handleRegistration} >
                    <input className="form-control " type="text" onBlur={handleGetName} placeholder="Name" />
                    <br />
                    <input className="form-control " type="email" onBlur={handleGetEmail} placeholder="Email" />
                    <br />
                    <input className="form-control " type="password" onBlur={handleGetPassword} placeholder="Password" />
                    <br />
                    <input className="btn btn-danger btn-lg " type="submit" value="Register" />
                </form>
            </div>
            <div className="my-5">
                <h3 className="mt-5 fw-bold fs-6">Already Registered ?</h3>
                <Link className="fs-5 text-success fw-bold" to="/login">Please Login</Link>
            </div>

        </div>
    );
};

export default Register;