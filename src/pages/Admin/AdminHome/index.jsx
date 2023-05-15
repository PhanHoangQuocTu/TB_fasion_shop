import { Link } from 'react-router-dom';
import styles from './AdminHome.module.scss'

function AdminHome() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.iconHome}>
                <i className="fa-solid fa-house"></i>
                <p>Home</p>
            </div>
            <div className={styles.subMenu}>
                <Link to={'/admin'} className={`${styles.sub} ${styles.user}`}>
                    <p>User</p>
                </Link>
                <Link to={'/admin'} className={`${styles.sub} ${styles.product}`}>
                    <p>Product</p>
                </Link>
                <Link to={'/admin'} className={`${styles.sub} ${styles.cusCare}`}>
                    <p>Customer Care</p>
                </Link>
            </div>
        </div>
    );
}

export default AdminHome;