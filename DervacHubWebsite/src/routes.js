import { createRouter, createWebHistory } from 'vue-router';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import ('./components/LandingPage/MainLandingPage.vue')
        },
        {
            path: '/fellowshipPage',
            name: 'Fellowship',
            component: () => import ('./components/fellowshipPage/MainFellowshipPage.vue')
        },
    ]
})


export default router;