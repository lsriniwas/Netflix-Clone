import React from 'react'
import RegisterLayout from './RegisterLayout'
import styles from '../Styles/Register.module.css'
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { makeRegisterRequest } from '../Redux/Register/action';
import { Redirect, useHistory } from 'react-router-dom';
import Loader from './Loader/Loader';

const Payment = (props) => {
    const {email,password,plan} = props.location.state
    const {isAuth} = useSelector(state=>state.login)
   
    const history = useHistory()
    
    if(isAuth){
      history.push("/profiles")
    }
    const dispatch = useDispatch();
    const handlePayment = async (e) => {
       
    
        const API_URL = 'http://localhost:8000'
        const orderUrl = `${API_URL}/payment`;
        const response = await Axios.post(orderUrl,{
            amount: plan,
            currency: 'INR',
            receipt: uuidv4(),
            payment_capture: 0
        });
        const { data } = response;
        const options = {
          name: "Netflix RazorPay",
          description: "Integration of Razorpay",
          order_id: data.id,
          handler: async (response) => {
            try {
              const paymentId = response.razorpay_payment_id;
              const url = `${API_URL}/capture/${paymentId}`;
              const captureResponse = await Axios.post(url, {
                  amount:plan
              })
              const successObj = JSON.parse(captureResponse.data)
              const captured = successObj.captured;
              if (captured) {
               dispatch(makeRegisterRequest({email,password}))
               
              }
            } catch (err) {
              console.log(err.message);
            }
          },
          theme: {
            color: "#c6203d",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    const token = localStorage.getItem("token")
    return (
     
      token ? <Redirect to="/profiles" /> : 
        <RegisterLayout>
            <div className={styles.register_payment_container}>
                <img src="/images/lock.png" alt="secure"/>
                <p className={styles.register_payment_p}>STEP <strong>3</strong> OF <strong>3</strong></p>
                <h3>Set up your payment</h3>
                <p> Your membership starts as <br/> soon as you set up payment </p>
                <h4>No commitments. <br/> Cancel online anytime.</h4>
                <div className={styles.register_payment_base} onClick={(e) => handlePayment()}>
                    <p>Credit or Debit Card </p>
                    <img src="/images/payment-cards.png" alt="payment"/>
                </div>
            </div>
        </RegisterLayout>
    )
}

export default Payment