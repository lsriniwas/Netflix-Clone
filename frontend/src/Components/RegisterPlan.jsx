import React, { useState } from 'react'
import RegisterLayout from './RegisterLayout'
import RegisterPlanTable from './RegisterPlanTable'
import styles from '../Styles/Register.module.css'
import { Redirect, useHistory } from 'react-router-dom'

const RegisterPlan = (props) => {
    const history = useHistory()
    const [plan, setPlan] = useState(199)
    const {email,password} = props.location.state
    const handleContinue = () => {
        history.push({
            pathname: '/signup/payment',
            state: { plan,email,password },
        })
    }

    const token = localStorage.getItem("token")
    return (
      token ? <Redirect to="/browse" /> : 
      <RegisterLayout>
            <div className={styles.register_planform}>
                <p>STEP <strong>2</strong> OF <strong>3</strong></p>
                <h3>Choose the plan that's right for you</h3>
                <p>Downgrade or upgrade at any time</p>
                <div className={styles.register_planform_plans}>
                    <RegisterPlanTable setPlan={setPlan} plan={plan}/>
                </div>
                <p className={styles.register_planform_p}>Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content available in HD, Full HD, Ultra HD or HDR. See Terms of Use for more details.</p>
                <div className={styles.register_planform_button}>
                    <button onClick={() => handleContinue()}>CONTINUE</button>
                </div>
            </div>
        </RegisterLayout>
    )
}

export default RegisterPlan