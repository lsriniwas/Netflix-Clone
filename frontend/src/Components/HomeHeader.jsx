import React from 'react'
import styles from '../Styles/Home.module.css'
import TextField from '@material-ui/core/TextField';

const HomeHeader = () => {
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
                        <TextField variant="filled" label="Email address" className={styles.input}  color='secondary' type='email'/>
                    </div>
                    <button>GET STARTED &gt;</button>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader
