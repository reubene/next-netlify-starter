import styles from './Form.module.css'

export default function Footer() {
    return (
        <>
            <div className={styles.form}>
                <label className={styles.label} htmlFor="email" >Email Address</label>
                <input id="email" className={styles.input}/>
                <label className={styles.label} htmlFor="pass">Password</label>
                <input id="pass" type="password" className={styles.input}/>
                <button className={styles.login}>Login&nbsp;Now</button>
            </div>
        </>
    )
}
