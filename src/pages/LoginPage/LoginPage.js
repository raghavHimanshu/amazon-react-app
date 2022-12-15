import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./LoginPage.css";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate("/");
            })
            .catch((error) => alert(error.message));
    };

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    navigate("/");
                }
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <Link className="login__image" to="/">
                <img className="login__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon Logo" />
            </Link>
            <div className="login__container">
                <h2>Sign In</h2>
                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button className="login__signinBtn" type="submit" onClick={signIn}>
                        Sign In
                    </button>
                </form>
                <p className="login__terms">
                    <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
                </p>
                <button className="login__registerBtn" onClick={register}>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default LoginPage;