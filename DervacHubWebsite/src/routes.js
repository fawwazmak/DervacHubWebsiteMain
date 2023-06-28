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
        {
            path: '/trainingPage',
            name: 'Training',
            component: () => import ('./components/MainTrainingPage.vue')
        },
        {
            path: '/testimonials',
            name: 'Testimonials',
            component: () => import ('./components/TestimonialPage/MainTestimonialPage.vue')
        },
        {
            path: '/collaborate/sponsor',
            name: 'Collaborate-sponsor',
            component: () => import ('./components/collaboratePage/MainSponsorPage.vue'),
        },
        {
            path: '/collaborate/partner',
            name: 'Collaborate-partner',
            component: () => import ('./components/collaboratePage/MainPartnerPage.vue'),
        },
        {
            path: '/faqs',
            name: 'Faqs',
            component: () => import ('./components/AboutUsPage/FrequentlyAsked/MainFaqsPage.vue'),
        },
        {
            path: '/contact',
            name: 'ContactUs',
            component: () => import ('./components/CONTACTUS/MainContactUsPage.vue'),
        },
        {
            path: '/history&team',
            name: 'History&TeamPage',
            component: () => import ('./components/AboutUsPage/History&teamPage/MainHistiry&TeamPage.vue'),
        },
        {
            path: '/Career',
            name: 'CareerPage',
            component: () => import ('./components/AboutUsPage/CareerPage/MainCareerPage.vue'),
        },
        {
            path: '/Apply',
            name: 'ApplyNowPage',
            component: () => import ('./components/ApplyNowPage/MainApplyPage.vue'),
        },
    ]
})


export default router;