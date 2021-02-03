import React, { useState } from 'react'
import RegisterLayout from './RegisterLayout'
import styles from '../Styles/Register.module.css'
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';


const RegisterForm = (props) => {
    const history = useHistory()
    const [email, setEmail] = useState(props.location.state.email)
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)


    const handleContinue = () => {
        // post the user details to the server here
        if (email && password) {
            history.push('/signup/planform',{
                email,
                password
            })
        } else {
            setError(true)   
        }
    }

    return (
        <RegisterLayout>
            <div className={styles.register_form}>
                <p>STEP <strong>1</strong> OF <strong>3</strong></p>
                <h3>Create a password to start your <br/> membership.</h3>
                <p>Just a few more steps and you're done!</p>
                <p>We hate paper work, too.</p>
                <div className={styles.register_form_input}>
                    <TextField 
                        variant="filled" 
                        label="Email" 
                        fullWidth 
                        color='secondary' 
                        type='email' 
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                </div>
                <div className={styles.register_form_input}>
                    <TextField 
                        variant="filled" 
                        label="Add a password" 
                        fullWidth 
                        color='secondary'
                        type='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                { error && <div style={{color: 'red', fontSize: 'small'}}>Please fill all required fields</div> }
                <div>
                    <button onClick={() => handleContinue()}>CONTINUE</button>
                </div>
            </div>
        </RegisterLayout>
    )
}

export default RegisterForm