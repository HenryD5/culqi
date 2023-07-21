import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
//import type { User } from '@/interfaces/user';
import axios from 'axios';

export const useToken = () => {

    const setToken = (token: string) => {
        cookies.set('AUTH_TOKEN', token, '7d')
    }

    const getToken = () => {
        if (cookies.get('AUTH_TOKEN')) {
            return cookies.get('AUTH_TOKEN')
        }
        return null
    }

    const setAuthData = (user: any) => {
        cookies.set('AUTH_DATA', user, '7d')
    }

    const getAuthData = () => {
        if (cookies.get('AUTH_DATA')) {
            return cookies.get('AUTH_DATA')
        } else {
            return {}
        }
    }

    const setAuthAxios = () => {
        const token = getToken();
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }

    const removeToken = () => {
        cookies.remove('AUTH_TOKEN');
        cookies.remove('AUTH_DATA');
    }

    return {
        setToken,
        getToken,
        setAuthData,
        getAuthData,
        setAuthAxios,
        removeToken
    }
}