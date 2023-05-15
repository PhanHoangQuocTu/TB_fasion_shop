import { Link } from 'react-router-dom';
import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactFooter}>
                <div className={styles.col}>
                    <h3 className={styles.connectText}>STAY CONNECTED</h3>
                    <div className={styles.subcol}>
                        <ul className={styles.listIcon}>
                            <a href='https://www.facebook.com/phanhoangquoctu/'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href='https://www.linkedin.com/in/phanhoangquoctu/'>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href='https://www.instagram.com/_tustus__/'>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <Link to={'/admin/login'}>
                                <i className="fa-solid fa-user-lock"></i>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className={styles.col}>
                    <h3 className={styles.subText}>BE OUR FRIEND</h3>
                    <div className={styles.subcol}>
                        <input className={styles.subInput} placeholder='Enter your email here*' />
                        <button className={styles.btnSub}>Subcribe Now</button>
                    </div>
                </div>
                <div className={styles.col}>
                    <h3 className={styles.assistanceText}>NEED ASSISTANCE?</h3>
                    <div className={styles.subcol}>
                        <h4 className={`${styles.assistanceContent} ${styles.m32}`}>(+84) 905 332 165</h4>
                        <h4 className={styles.assistanceContent}>tuphan694@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <h2>© 2023 Powered and secured by <a href='https://www.facebook.com/phanhoangquoctu/'>Phan Hoàng Quốc Tú</a></h2>
            </div>
        </footer>
    );
}

export default Footer;