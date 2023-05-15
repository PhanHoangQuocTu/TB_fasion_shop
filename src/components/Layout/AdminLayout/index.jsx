import AdminSidebar from '../components/AdminSidebar';
import styles from './AdminLayout.module.scss'

function AdminLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <AdminSidebar></AdminSidebar>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;