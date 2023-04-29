import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactFooter}>
                <div className={styles.col}>
                    <h3 className={styles.connectText}>STAY CONNECTED</h3>
                    <ul className={styles.listIcon}>
                        <a href=''>
                            <li>
                                <i class="fa-brands fa-facebook-f"></i>
                            </li>
                        </a>
                        <a href=''>
                            <li>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </li>
                        </a>
                        <a href=''>
                            <li>
                                <i class="fa-brands fa-instagram"></i>
                            </li>
                        </a>
                        <a href=''>
                            <li>
                                <i class="fa-brands fa-pinterest-p"></i>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h3 className={styles.subText}>BE OUR FRIEND</h3>
                    <input className={styles.subInput} placeholder='Enter your email here*'/>
                    <button className={styles.btnSub}>Subcribe Now</button>
                </div>
                <div className={styles.col}>
                    <h3 className={styles.assistanceText}>NEED ASSISTANCE?</h3>
                    <h4 className={`${styles.assistanceContent} ${styles.m32}`}>(+84) 905 332 165</h4>
                    <h4 className={styles.assistanceContent}>tuphan694@gmail.com</h4>
                </div>
            </div>
            <div className={styles.copyright}>
                <h2>© 2023 Powered and secured by <a href=''>Phan Hoàng Quốc Tú</a></h2>
            </div>
        </footer>
    );
}

export default Footer;