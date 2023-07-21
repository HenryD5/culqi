import { defineStore } from "pinia";
import type { User } from "../interfaces/user";

interface EmployeesState {
  employees: User[];
  page: number;
  limit: number;
  total: number;
  search: string;
  position: string;
  loading: boolean;
}

export const useEmployeesStore = defineStore("employees", {
  state: (): EmployeesState => ({
    employees: [],
    page: 1,
    limit: 10,
    total: 0,
    search: "",
    position: "",
    loading: false,
  }),
  getters: {},
  actions: {
    loadEmployees(employees: User[] | undefined) {
      if (employees !== undefined) {
        this.employees = employees;
      }
    },
    setLimit(limit: number) {
      this.limit = limit;
    },
    setPage(page: number) {
      this.page = page;
    },
    setTotal(total: number) {
      this.total = total;
    },
    setLoading(val: boolean) {
      this.loading = val;
    },
    clearFilter() {
      this.search = "";
      this.position = "";
    },
    clearState() {
      this.employees = [];
      this.page = 1;
      this.limit = 1;
      this.total = 0;
      this.loading = false;
    },
  },
});
