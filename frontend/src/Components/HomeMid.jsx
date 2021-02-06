import React from 'react'
import styles from '../Styles/Home.module.css'

const HomeMid = ({ data }) => {
    return (
        <div className={styles.home_mid_container}>
            <div style={{flexDirection:`${data.direction}`}} className={styles.home_mid_content}>
                <div className={styles.home_mid_content_titles}>
                    <h1>{data.title}</h1>
                    <h2>{data.subTitle}</h2>
                </div>
                <div className={styles.home_mid_content_media}>
                    <img src={data.image} alt={data.alt}/>
                    <video autoPlay playsInline muted loop className={styles.home_mid_content_video}>
                        <source src={data.video} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default HomeMid
