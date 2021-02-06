import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLoginSuccess } from '../../Redux/Login/actions/loginActions';
import styles from "./Login.module.css"
import axios from "axios"
import {Link, Redirect, useHistory} from "react-router-dom"
import * as EmailValidator from "email-validator"

export const Login = (props) => {
    const token = localStorage.getItem("token")
    let emailHistory = props.location.state?.email || ""

    
    const [email, setEmail] = useState(emailHistory)
   
    const [password, setPassword] = useState("")
    const [emailErr, setEmailErr] = useState(false)
    const [passErr, setPassErr] = useState(false)
    const [err, setErr] = useState("")

    const dispatch = useDispatch()
    const history = useHistory()

    const handleEmail = (e) => {
        e.preventDefault()

        if(email.length > 6) {
            setEmailErr(false)
        }
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        e.preventDefault()

        if(password.length > 4) {
            setPassErr(false)
        }
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        setErr("")
        const ans = EmailValidator.validate(email)

        if(!ans) {
            setEmailErr(true)
        }

        if(password.length < 4) {
            setPassErr(true)
        }

        else {
            let payload = {
                "email": email,
                "password": password
            }
    
            let config = {
                method: "post",
                url: "http://localhost:8000/api/login",
                headers: {
                    "Content-Type": "application/json"
                },
                data: payload
            }
    
            axios(config)
            .then((res) => {
                const {token} = res.data
                localStorage.setItem("token",token)
                dispatch(fetchLoginSuccess(res.data))
                history.push("/profiles")
            })
            .catch((err) => setErr(err.response.data.message))
        }
    }


    return (
        token ? <Redirect to="/profiles" /> :
        <div className = {styles.full}> 
            <div className = {styles.layer} >
         
                <img className = {styles.logo}  src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="cover" />
                <div className = {styles.box}>
                    <div>
                        <h2>Sign in</h2>
                    </div>
                    {err && <div className = {styles.error1}>  {err} <Link to = "/login" > create a new account. </Link> </div> }
                    <div>
                        <input placeholder = "Email or phone number" className = { email.length > 0 ? styles.inputbox : styles.floating} type = "text" value={email}  onChange = {handleEmail}/>
                        {emailErr && <div className = {styles.error}> <div className = {styles.line}></div> <div className = {styles.errtext}>Please enter a valid email address or phone number.</div> </div> }
                    </div>
                    <div>
                        <input placeholder = "Password" className = {password.length > 0 ? styles.inputbox : styles.floating } type = "password" value={password} onChange = {handlePassword}/>
                        {passErr && <div className = {styles.error}> <div className = {styles.line}></div> <div className = {styles.errtext}>Your password must contain between 4 and 60 characters.</div> </div> }
                    </div>
                    <div>
                        <button onClick = {handleLogin} className = {styles.signin}>Sign In</button>
                    </div>
                    <div className = {styles.bottom}>
                        <div className = {styles.forgot}>
                            <input className = {styles.check} type = "checkbox"/>
                            <div> Remember Me </div>
                            <div className = {styles.help} >  Need Help? </div>
                        </div>
                    </div>
                    <div className = {styles.fb}>

                        <img src = "https://i.pinimg.com/originals/30/99/af/3099aff4115ee20f43e3cdad04f59c48.png" alt="fb" className = {styles.fbimg} />
                        <div> Login with Facebook </div>
                    </div>
                    <div className = {styles.new} >
                        <div className = {styles.new1}>New To Netflix?</div>
                        <div onClick = {() =>history.push("/")} className = {styles.new2}>Sign up now.</div>
                    </div>
                    <div className = {styles.secure}>
                        <div>This page is protected by Google reCAPTCHA to ensure you're not a bot. <div className = {styles.blue}>Learn more.</div> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}