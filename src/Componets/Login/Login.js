import React, {useState} from "react";
import "./Login.css";
import loginLogo from "../../Images/loginLogo.png";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../Common/Firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate("/")
                }
            })
            .catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate("/")
                }

            })
            .catch(error => alert(error.message))
    }

    return <div className={"login"}>
        <Link to={"/"}>
            <img src={loginLogo} className={"login-img"} alt={""}/>
        </Link>
        <div className={"login-container"}>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input
                    type={"email"}
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input
                    type={"password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                <button className={"sign-btn"} type={"submit"} onClick={signIn}>Sign In</button>
            </form>
            <p>
                By continuing, you agree to Amazon clone's
                Conditions of Use and Privacy Notice.
                It is a Amazon clone.
            </p>
            <button className={"register-btn"} onClick={register}>Create Your Amazon Account</button>
        </div>
    </div>
}

export default Login