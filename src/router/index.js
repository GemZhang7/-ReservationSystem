import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/Main'
import Home from '../pages/Home'
import User from '../pages/User'
import Mall from '../pages/Mall'
import Center from '../pages/Center'
import Manage from '../pages/Manage'
import Login from '../components/login/Login'


Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        component: Main,
        children: [{
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/mall',
                name: 'mall',
                component: Mall
            },
            {
                path: '/user',
                name: 'user',
                component: User
            },
            {
                path: '/center',
                name: 'center',
                component: Center
            },
            {
                path: '/manage',
                name: 'manage',
                component: Manage
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router