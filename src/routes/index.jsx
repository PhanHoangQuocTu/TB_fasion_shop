//Layouts
import HeaderOnly from '~/components/Layout/HeaderOnly';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home, layout: HeaderOnly},
    { path: '/following', component: Following, layout: HeaderOnly},
    { path: '/profile', component: Profile, layout: HeaderOnly},
    { path: '/upload', component: Upload, layout: null},
]

//Private Routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }