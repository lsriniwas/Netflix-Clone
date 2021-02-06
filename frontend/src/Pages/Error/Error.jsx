import { Link } from '@material-ui/core'
import React from 'react'
import styles from "./Error.module.css"
export const Error = () => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
            <div className={styles.header__logo}>
            <Link href="/browse">
                <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="Netflix"
              />
             </Link>
           </div>
            </div>
            <div className={styles.error__body}>
                <div>
                    <h1>Lost your way?</h1>
                </div>
                <div>
                    <p>
                    Sorry, we can't find that page. You'll find lots to explore on the home page.
                    </p>
                </div>
                <div>
                    <Link href="/browse">
                    <button>
                       Netflix Home
                      </button>
                    </Link>
                    </div>
                    <div className={styles.error__body__error_code}>
                    <span>Error Code <strong>NSES-404</strong></span>
                    </div>
            </div>
        </div>
    )
}
