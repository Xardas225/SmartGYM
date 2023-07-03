import { defineStore } from "pinia";
import { useAsyncData, useSupabaseClient } from "@/composables";

// Определение типа для данных карточки
interface CardData {
}

// Определение типа для сотрудника
interface Employee {
  id: number;
}

// Определение хранилища для упражнений
export const useExStore = defineStore("exercises", {
  state: () => ({
    cardData: null as CardData[] | null,
  }),
  actions: {
    async setCardData() {
      try {
        const { data } = await useAsyncData("cardData", () =>
          $fetch("/api/exercises")
        );
        this.cardData = data.value;
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    },
  },
  getters: {
    getCardData() {
      return this.cardData;
    },
  },
});

// Определение хранилища для сотрудников
export const useEmployeesStore = defineStore("employees", {
  state: () => ({
    employees: null as Employee[] | null,
  }),
  actions: {
    async setEmployees() {
      const supabase = useSupabaseClient();
      try {
        const { data: employees, error } = await supabase
          .from<Employee>("Employees")
          .select("*");
        if (error) throw error;
        this.employees = employees;
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    },
    async addEmployee(employee: Employee) {
      const supabase = useSupabaseClient();
      try {
        await supabase.from("Employees").insert([employee]);
      } catch (error) {
        console.error("Error adding employee:", error);
      }
    },
    async deleteEmployee(id: number) {
      const supabase = useSupabaseClient();
      try {
        await supabase.from("Employees").delete().eq("id", id);
        await this.setEmployees();
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    },
    async updateEmployee(id: number, employee: Partial<Employee>) {
      const supabase = useSupabaseClient();
      try {
        await supabase
          .from("Employees")
          .update(employee)
          .eq("id", id);
        await this.setEmployees();
      } catch (error) {
        console.error("Error updating employee:", error);
      }
    },
  },
  getters: {
    getEmployees(state) {
      return state.employees;
    },
    getEmployeeById: (state) => (id: number) => {
      return state.employees?.find((e) => e.id === id);
    },
  },
});
