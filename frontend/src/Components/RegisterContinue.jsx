import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import styles from '../Styles/Register.module.css'
import RegisterLayout from './RegisterLayout'

const RegisterContinue = (props) => {
    const history = useHistory();
    
   let email = props.location.state?.email || ""
   const handleContinue = () => {
       
        history.push({
            pathname: '/signup/regform',
            state: {email}
        })
    }
    const token = localStorage.getItem("token")
    return (
      token ? <Redirect to="/browse" /> :
        <RegisterLayout>
            <div className={styles.register_step_one_wrapper}>
                <img src="/images/devices.png" alt="devices"/>
                <p>STEP <strong>1</strong> OF <strong>3</strong></p>
                <h3>Finish setting up your account.</h3>
                <p>Netflix is personalised for you. Create <br/> a password to watch Netflix on any <br/> device at any time.</p>
                <div>
                    <button onClick={() => handleContinue()}>CONTINUE</button>
                </div>
            </div>
        </RegisterLayout>
    )
}

export default RegisterContinue
