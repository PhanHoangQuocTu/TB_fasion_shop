import { useState } from 'react';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';

function Header() {
    const [state, setState] = useState(1)
    let activeLink = state;
    const handleClick = (stateLink) => {
        setState(stateLink)
    }
    return (
        <header className={styles.wrapper}>
            <div className={styles.headerSub}>
                <div className={styles.searchInput}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='Search' className={styles.inputSearch}></input>
                </div>
                <div className={styles.login}>
                    <a className={styles.anchorLogin} href='/'>
                        <i className={`fa-solid fa-user-tie ${styles.avatar}`}></i>
                        <h5>Log In</h5>
                    </a>
                    <a href='/'>
                        <i className={`fa-solid fa-cart-shopping ${styles.cart}`}></i>
                    </a>
                </div>
            </div>
            <div className={styles.headerMain}>
                <div className={styles.brand}>
                    <Link className={styles.brandLink} to={'/'}>TB Fashion</Link>
                </div>
                <nav className={styles.navbar}>
                    <Link onClick={() => handleClick(1)} className={activeLink === 1 ? `${styles.link} ${styles.active}` : `${styles.link}`} to={'/'}>Home</Link>
                    <Link onClick={() => handleClick(2)} className={activeLink === 2 ? `${styles.link} ${styles.active}` : `${styles.link}`} to={'/shop'}>Shop</Link>
                    <Link onClick={() => handleClick(3)} className={activeLink === 3 ? `${styles.link} ${styles.active}` : `${styles.link}`} to={'/sale'}>Sale</Link>
                    <Link onClick={() => handleClick(4)} className={activeLink === 4 ? `${styles.link} ${styles.active}` : `${styles.link}`} to={'/customer-care'}>Customer Care</Link>
                    <Link onClick={() => handleClick(5)} className={activeLink === 5 ? `${styles.link} ${styles.active}` : `${styles.link}`} to={'/stockits'}>Stockits</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;