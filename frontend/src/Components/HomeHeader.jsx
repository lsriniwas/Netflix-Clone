import React, { useState } from 'react'
import styles from '../Styles/Home.module.css'
import TextField from '@material-ui/core/TextField';
import validator from 'email-validator'
import { useHistory } from 'react-router-dom';

const HomeHeader = () => {
    const [email, setEmail] = useState('')
    const [emailValidate, setEmailValidate] = useState(false)
    const history = useHistory()

    const handleSubmit = () => {
        if (validator.validate(email)) {
            history.push({
                pathname: '/signup',
                state: { email }
            })
        } else {
            setEmailValidate(true)
        }
    }

    return (
        <div className={styles.cover_container}>
            <img src="/images/bg_main.jpg" alt="cover" className={styles.cover_image}/>
            <div className={styles.cover_content}>
                <div className={styles.cover_content_header}>
                    <img src="/images/logo_big.png" alt="logo"/>
                    <button>Sign In</button>
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
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button onClick={() => handleSubmit()}>GET STARTED &gt;</button>
                </div>
                { emailValidate &&  <div className={styles.error}>Please enter a valid email address.</div>}
            </div>
        </div>
    )
}

export default HomeHeader
