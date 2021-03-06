import { createRouter, createWebHistory } from 'vue-router'
//import Vue from 'vue'

//Vue.use(createRouter)

const Home = () =>
    import ('../views/home/Home.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Cart = () =>
    import ('../views/cart/Cart.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')
const Detail = () =>
    import ('../views/detail/Detail.vue')

const routes = [{
        path: '',
        redirect: '/home',
        // meta: {
        //     keepAlive: true
        // }
    },
    {
        path: '/home',
        component: Home,
        // meta: {
        //     keepAlive: true
        // }
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:iid',
        component: Detail
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,

})

export default router