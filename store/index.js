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