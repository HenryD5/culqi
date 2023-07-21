import type { DataEmployees } from "../interfaces/employees";
import axios, { AxiosError } from "axios";
import { useUsers } from "@/composables/useUser";

const getListEmployees = async (
  page: number,
  limit: number
): Promise<DataEmployees | undefined> => {
  const { logoutUser } = useUsers();
  try {
    const result = await axios.get(
      `/api/empleados?limit=${limit}&page=${page}`
    );
    return result.data !== undefined ? result.data : result.data;
  } catch (err) {
    const error = err as AxiosError<Error>;
    if (error.response?.data.message == "Token inválido") {
      logoutUser();
    }
  }
};

const getEmployees = async (page: number, limit: number) => {
  const employees = await getListEmployees(page, limit);
  return employees;
};

export default getEmployees;
