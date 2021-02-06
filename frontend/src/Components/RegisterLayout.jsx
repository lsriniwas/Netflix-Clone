import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from '../Styles/Register.module.css'

const RegisterLayout = (props) => {
    const history = useHistory()
    const returnToHome = () => {
        history.push("/")
    }
    return (
        <div style={{display:"flex",flexDirection:"column",height:"100vh"}}>
            <header className={styles.register_layout_header}>
                <div className={styles.register_layout_logo} onClick={returnToHome}>
                    <img src="/images/logo_big.png" alt="logo"/>
                </div>
                <Link to="/login">Sign In</Link>
            </header>
            <div style={{flex:1}} className={styles.register_layout_mid}>
                {props.children}
            </div>
            <footer className={styles.register_layout_footer}>
                <div className={styles.register_layout_footer_content}>
                    <p>Questions? Call 000-800-040-1843</p>
                    <div className={styles.register_layout_footer_links}>
                        <div>
                            <p>FAQ</p>
                            <p>Cookie Preferences</p>
                        </div>
                        <div>
                            <p>Help Center</p>
                            <p>Corporate Information</p>
                        </div>
                        <div>
                            <p>Terms of Use</p>
                        </div>
                        <div>
                            <p>Privacy</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default RegisterLayout
