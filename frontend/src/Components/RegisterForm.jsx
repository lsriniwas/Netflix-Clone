import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RegisterLayout from './RegisterLayout'
import styles from '../Styles/Register.module.css'
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../Redux/register/actions';


const RegisterForm = (props) => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState(props.location.state.email)
    const [password, setPassword] = useState('')

    const error = useSelector(state => state.register.error)
    const isAuth = useSelector(state => state.register.isAuth)

    const handleContinue = () => {
        const payload = { email, password }

        dispatch(registerUser(payload))
    }

    return !isAuth ? (
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
                { error && <div style={{color: 'red', fontSize: 'small'}}>Please fill all required fields correctly</div> }
                <div>
                    <button onClick={() => handleContinue()}>CONTINUE</button>
                </div>
            </div>
        </RegisterLayout>
    ) : (
        <Redirect to="/signup/planform" />
    )
}

export default RegisterForm
