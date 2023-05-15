import Sidebar from "~/components/Layout/components/AdminSidebar";
import styles from './Shop.module.scss'

function Shop() {
    return (
        <div className={styles.wrapper}>
            <Sidebar></Sidebar>
        </div>
    );
}

export default Shop;