import React from 'react'
import RegisterLayout from './RegisterLayout'
import styles from '../Styles/Register.module.css'
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';


const RegisterForm = () => {
    const history = useHistory()
    const handleContinue = () => {
        history.push('/signup/planform')
    }
    return (
        <RegisterLayout>
            <div className={styles.register_form}>
                <p>STEP <strong>1</strong> OF <strong>3</strong></p>
                <h3>Create a password to start your <br/> membership.</h3>
                <p>Just a few more steps and you're done!</p>
                <p>We hate paper work, too.</p>
                <div className={styles.register_form_input}>
                    <TextField variant="filled" label="Email" fullWidth color='secondary' type='email'/>
                </div>
                <div className={styles.register_form_input}>
                    <TextField variant="filled" label="Add a password" fullWidth color='secondary'type='password' />
                </div>
                <div>
                    <button onClick={() => handleContinue()}>CONTINUE</button>
                </div>
            </div>
        </RegisterLayout>
    )
}

export default RegisterForm
