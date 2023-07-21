import { storeToRefs } from "pinia";
import userLogin from "../helpers/userLogin";
import { useUserStore } from "../store/user";
import { computed } from "vue";
import { useToken } from '@/composables/useToken';
import { useRouter } from "vue-router";


export const useUsers = () => {

    const userStore = useUserStore();
    const { setToken, setAuthData, setAuthAxios, removeToken } = useToken();
    const router = useRouter();

    const { user, loading, msgError } = storeToRefs(userStore);

    const nameInitals = computed(() => {
        const words = user.value !== undefined  ? user.value.nombre.split(' ') : "User";
        let result = '';
      
        for (let i = 0; i < Math.min(2, words.length); i++) {
          const word = words[i];
          if (word) {
            result += word.charAt(0).toUpperCase();
          }
        }
      
        return result;
    });

    // AUTH
    const authUser = async (email: string, password: string) => {
        userStore.setLoading(true);
        userStore.setError("")
        const data = await userLogin(email, password)
        if (data !== undefined) {
            setToken(data.token)
            setAuthData(data.user)
            setAuthAxios()
            userStore.setLoading(false);
            router.push({ name: "Employees" });
        } else {
            userStore.setLoading(false);
        }
    };

    const logoutUser = () => {
        removeToken();
        userStore.clearState();
        router.push({ name: "Login" });
    }

    return {
        //! Properties
        user,
        loading,
        msgError,

        //! Metodos
        nameInitals,
        authUser,
        logoutUser
    };
};