import type { DataUser } from '../interfaces/user';
import axios, { AxiosError } from 'axios';
import { useUserStore } from "../store/user";



const userAuth = async (email: string, password: string): Promise<DataUser | undefined> => {
  const user = useUserStore();
    try {
        const result = await axios.post(`/api/auth/login/`, {correo: email, password})
        return result.data !== undefined ? result.data.data : result.data
      } catch (err) {
        const error = err as AxiosError<Error>;
        user.setError(error.response?.data.message || 'Error');
      }
}
const userLogin = async (email: string, password: string) => {
    const users = await userAuth(email, password);
    return users;
}

export default userLogin;