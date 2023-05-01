import { Link } from 'react-router-dom';
import styles from './BestsellerCart.module.scss'
function BestsellerCart(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cart}>
                <img alt='Best Seller Cart Image' className={styles.image} src={props.img}></img>
                <div className={styles.name}>
                    <Link className={styles.linkItem} to={'/'}>
                        <h4>{props.name}</h4>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default BestsellerCart;