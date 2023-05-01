//Layouts
import HeaderOnly from '~/components/Layout/HeaderOnly';
import AdminLogin from '~/pages/Admin/AdminLogin';

import Home from '~/pages/Home';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home, layout: HeaderOnly},
    { path: '/admin', component: AdminLogin, layout: null}
]

//Private Routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }