import { useState } from 'react';
import styles from './AdminSidebar.module.scss'
import { Link } from "react-router-dom"

function AdminSidebar() {
    const [state, setState] = useState(1)
    let activeLink = state;
    const handleClick = (stateLink) => {
        setState(stateLink)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.hello}>MAIN MENU</div>
            <div className={styles.sidebar}>
                <Link onClick={() => handleClick(1)} className={activeLink === 1 ? `${styles.link} ${styles.active}` : `${styles.link}`} to={''}>
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
                </Link>
                <Link onClick={() => handleClick(2)} className={activeLink === 2 ? `${styles.link} ${styles.active}` : `${styles.link}`} to={''}>
                    <i className="fa-solid fa-user"></i>
                    <p>User</p>
                </Link>
                <Link onClick={() => handleClick(3)} className={activeLink === 3 ? `${styles.link} ${styles.active}` : `${styles.link}`} to={''}>
                    <i className="fa-solid fa-cart-plus"></i>
                    <p>Product</p>
                </Link>
                <Link onClick={() => handleClick(4)} className={activeLink === 4 ? `${styles.link} ${styles.active}` : `${styles.link}`} to={''}>
                    <i className="fa-solid fa-trash"></i>
                    <p>Trash</p>
                </Link>
                <Link onClick={() => handleClick(5)} className={activeLink === 5 ? `${styles.link} ${styles.active}` : `${styles.link}`} to={''}>
                    <i className="fa-solid fa-phone"></i>
                    <p>Customer Care</p>
                </Link>
            </div>
        </div>
    );
}

export default AdminSidebar;