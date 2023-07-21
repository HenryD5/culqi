import { defineStore } from "pinia";
import type { User } from '../interfaces/user';

interface UserState {
    user:     User | undefined;
    loading: boolean;
    msgError: string;
    isMenu: boolean;
}

export const useUserStore =  defineStore('user', {

    state: (): UserState => ({
        user: undefined,
        loading: false,
        msgError: '',
        isMenu: false
    }),

    actions: {
        setIsMenu( val: boolean ) {
            this.isMenu = val;
        },
        setUser( user: any ) {
            this.user = user;
        },
        setLoading( val: boolean ) {
            this.loading = val;
        },
        setError( val: string ) {
            this.msgError = val;
        },
        clearState() {
            this.user = undefined;
            this.loading = false;
        }
    }

})