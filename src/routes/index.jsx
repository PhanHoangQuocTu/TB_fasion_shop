//Layouts
import MainLayout from '~/components/Layout/MainLayout';
import AdminLogin from '~/pages/Admin/AdminLogin';

import Home from '~/pages/Home';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home, layout: MainLayout},
    { path: '/admin', component: AdminLogin, layout: null}
]

//Private Routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }