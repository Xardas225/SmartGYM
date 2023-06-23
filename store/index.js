import { defineStore } from 'pinia'

export const useExStore = defineStore('exercises', {
    state: () => ({
        cardData: null
    }),
    actions: {
        async setCardData() {
            const { data } = await useAsyncData("cardData", () =>
                $fetch("/api/exercises")
            );
            this.cardData = data.value
        }
    },
    getters: {
        getCardData() {
            return this.cardData
        }
    }
})

export const useEmployeesStore = defineStore('employees', {
    state: () => ({
        employees: null
    }),
    actions: {
        async setEmployees() {
            const { data } = await useAsyncData("employees", () =>
                $fetch("/api/employees")
            );
            this.employees = data.value
        }
    },
    getters: {
        getEmployees(state) {
            return state.employees
        }
    }
})