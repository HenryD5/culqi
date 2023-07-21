
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import LoginPage from "@/auth/pages/LoginPage.vue";
import EmployeesPage from "@/employees/pages/EmployeesPage.vue";
import RecruitmentPage from "@/employees/pages/RecruitmentPage.vue";
//import HomePage from "@/shared/pages/HomePage.vue";
import { useToken } from '@/composables/useToken';

const { getToken, setAuthAxios } = useToken();

const routes: RouteRecordRaw[] = [
    //Public 
    {
        path: '/',
        name: 'Home',
        redirect: '/login',
        //component: HomePage,
        meta: {
            guest: true
        }
    },

    //Auth
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        meta: {
            guest: true
        }
    },

    //Employees
    {
        path: '/employees/:page?',
        name: 'Employees',
        component: EmployeesPage,
        meta: {
            auth: true
        }
    },
    {
        path: '/Recruitment',
        name: 'Recruitment',
        component: RecruitmentPage,
        meta: {
            auth: true
        }
    },

    //Default
    { path:'/:pathMatch(.*)*', redirect: () => ({name: 'Login'})},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if(getToken()){
        setAuthAxios()
    }
    if (to.matched.some(record => record.meta.auth) && !getToken()) {
        next({ name: 'Login' })
    } else if (to.matched.some(record => record.meta.guest) && getToken()) {
        next({ name: 'Employees' })
    } else {
        next()
    }
})

export default router