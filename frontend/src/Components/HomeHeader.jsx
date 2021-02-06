import React, { useState } from 'react'
import styles from '../Styles/Home.module.css'
import TextField from '@material-ui/core/TextField';
import validator from 'email-validator'
import {  useHistory } from 'react-router-dom';
import axios from 'axios';

const HomeHeader = () => {
    const [email, setEmail] = useState('')
    const [errorMsg,setErrorMsg] = useState("");
    const [emailValidate, setEmailValidate] = useState(false);
    
    const history = useHistory()

    const handleSubmit = () => {

       
        if (validator.validate(email)) {
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/userExists`,{
                email
            }).then(res=>{
                history.push({
                    pathname: '/signup',
                    state: { email }
                })
            }).catch(err=>{
                history.push({
                    pathname:"/login",
                    state: { email }
                })
                
                setErrorMsg("Email alrady taken please login")
            })
        } else {
            setEmailValidate(true)
        }
    }

   
    const handleClick = () => {
        history.push("/login")
    }

    return (
        <div className={styles.cover_container}>
            <img src="/images/bg_main.jpg" alt="cover" className={styles.cover_image}/>
            <div className={styles.cover_content}>
                <div className={styles.cover_content_header}>
                    <img src="/images/logo_big.png" alt="logo"/>
                    <button onClick = {handleClick} className={styles.sign__in__btn} >Sign In</button>
                </div>
                <div className={styles.cover_content_register}>
                    <h1>Unlimited movies, TV <br/> shows and more</h1>
                    <h3>Watch anywhere. Cancel anytime</h3>
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                </div>
                <div className={styles.cover_content_get_started}>
                    <div>
                        <TextField 
                            variant="filled" 
                            label="Email address" 
                            className={styles.input}  
                            color='secondary' 
                            type='email' 
                            value={email}
                            onChange={(e) =>
                            {
                                
                                setEmail(e.target.value)
                                setErrorMsg("")
                            }}
                                
                             />
                    </div>
                    <button onClick={() => handleSubmit()}>GET STARTED &gt;</button>
                </div>
                {errorMsg && 
                
                <div className={styles.error}>{errorMsg}</div>
                
                }
                { emailValidate &&  <div className={styles.error}>Please enter a valid email address.</div>}
            </div>
        </div>
    )
}

export default HomeHeader
