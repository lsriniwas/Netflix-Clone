import React from 'react'
import RegisterLayout from './RegisterLayout'
import styles from '../Styles/Register.module.css'

const Payment = (props) => {
    const plan = props.location.state.plan;
    console.log(plan);

    const handlePayment = () => {
        // Integrate Razorpay
    }

    return (
        <RegisterLayout>
            <div className={styles.register_payment_container}>
                <img src="/images/lock.png" alt="secure"/>
                <p className={styles.register_payment_p}>STEP <strong>3</strong> OF <strong>3</strong></p>
                <h2>Set up your payment</h2>
                <p> Your membership starts as <br/> soon as you set up payment </p>
                <h4>No commitments. <br/> Cancel online anytime.</h4>
                <div className={styles.register_payment_base} onClick={() => handlePayment()}>
                    <p>Credit or Debit Card </p>
                    <img src="/images/payment-cards.png" alt="payment"/>
                </div>
            </div>
        </RegisterLayout>
    )
}

export default Payment
