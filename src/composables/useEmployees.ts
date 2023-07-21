import { computed } from "vue";
import { storeToRefs } from "pinia";
import getEmployees from "../helpers/getEmployees";
import { useEmployeesStore } from "../store/employees";
import { useRouter } from "vue-router";

export const useEmployees = () => {

    const employeesStore = useEmployeesStore();
    const router = useRouter();

    const { employees, page, limit, total, search, position, loading } = storeToRefs(employeesStore);

    const positions = computed(() => {
        return [...new Set(employees.value.map((employee) => employee.cargo))];
    });

    const listEmployees = computed(() => {
        if (!search.value && !position.value) {
            return employees.value;
        }
        return employees.value.filter(employee => {
            const nameMatches = !search || employee.nombre.toLowerCase().includes(search.value);
            const positionMatches = position.value === '' || employee.cargo === position.value;
            return nameMatches && positionMatches;
        });
    });

    const totalPages = computed(() => Math.ceil(total.value / limit.value));

    const endPagination = computed(() => totalPages.value > 5 ? 3 : totalPages.value );

    const initalCount = computed(() => {
        const currPage = page.value > 1 ? (listEmployees.value.length * (page.value - 1)) : 1
        return currPage
    });

    const endCount = computed(() => {
        return page.value > 1 ?  (listEmployees.value.length * page.value ) : listEmployees.value.length
    });

    const mixEmployeesArray = async (page: number = 1, limit: number) => {
        employeesStore.setLoading(true);
        const data =  await getEmployees(page, limit)
        if (data !== undefined) {
            employeesStore.loadEmployees(data.data);
            employeesStore.setTotal(data.total);
            employeesStore.setLoading(false);
        }else{
            employeesStore.setLoading(false);
        }
    };

    const onChangeLimit = () => {
        employeesStore.clearFilter();
        employeesStore.setPage(1);
        router.replace({ name: "Employees" });
        mixEmployeesArray(page.value, limit.value);
    }

    const onChangePage = (page: number) => {
        if(page === 0 || page > totalPages.value) {
          return null
        }
        employeesStore.clearFilter();
        router.push({ name: "Employees", params: { page: page } });
    }

    const showAlert = (text:string) => {
        alert(text)
    }

    return {
        //! Properties
        employees,
        page,
        limit,
        total,
        search,
        position,
        loading,

        //! Metodos
        positions,
        listEmployees,
        totalPages,
        endPagination,
        initalCount,
        endCount,
        mixEmployeesArray,
        onChangeLimit,
        onChangePage,
        showAlert
    };
};