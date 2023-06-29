import { defineStore } from "pinia";

export const useExStore = defineStore("exercises", {
  state: () => ({
    cardData: null,
  }),
  actions: {
    async setCardData() {
      const { data } = await useAsyncData("cardData", () =>
        $fetch("/api/exercises")
      );
      this.cardData = data.value;
    },
  },
  getters: {
    getCardData() {
      return this.cardData;
    },
  },
});

export const useEmployeesStore = defineStore("employees", {
  state: () => ({
    employees: null,
  }),
  actions: {
    async setEmployees() {
      const supabase = useSupabaseClient();
      try {
        const { data: employees, error } = await supabase
          .from("Employees")
          .select("*");
        this.employees = employees;
      } catch (error) {
        console.log(error.message);
      }
    },
    async addEmployee(employee) {
      const supabase = useSupabaseClient();
      try {
        await supabase.from("Employees").insert([employee]);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteEmployee(id) {
      const supabase = useSupabaseClient();
      try {
        await supabase.from("Employees").delete().eq("id", id);
        this.setEmployees();
      } catch (error) {
        console.log(error);
      }
    },
    async updateEmployee(id, employee) {
      if (this.employees === null) await this.setEmployees();
      const supabase = useSupabaseClient();
      try {
        await supabase
          .from("Employees")
          .update({
            ...employee,
          })
          .eq("id", id);
        this.setEmployees();
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    getEmployees(state) {
      return state.employees;
    },
    getEmployeeById: (state) => {
      return (id) => {
        return state.employees.find((e) => e.id == id);
      };
    },
  },
});
