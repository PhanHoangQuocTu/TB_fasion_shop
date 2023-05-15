//Layouts
import MainLayout from '~/components/Layout/MainLayout';
import AdminHome from '~/pages/Admin/AdminHome';
import AdminLogin from '~/pages/Admin/AdminLogin';
import Home from '~/pages/Client/Home';
import Shop from '~/pages/Client/Shop';
import Sale from '~/pages/Client/Sale';
import AdminLayout from '~/components/Layout/AdminLayout';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home, layout: MainLayout },
    { path: '/shop', component: Shop, layout: MainLayout },
    { path: '/sale', component: Sale, layout: MainLayout },
    { path: '/customer-care', component: Home, layout: MainLayout },
    { path: '/stockits', component: Home, layout: MainLayout },
    { path: '/admin', component: AdminHome, layout: AdminLayout },
    { path: '/admin/login', component: AdminLogin, layout: null },
    { path: '/admin/user', component: AdminLogin, layout: AdminLayout },
    { path: '/admin/product', component: AdminLogin, layout: AdminLayout},
]

//Private Routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }