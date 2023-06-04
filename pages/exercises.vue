<template>
  <HEAD>
    <title>
      Упражнения
    </title>
  </HEAD>
  <div class="row text-center my-4">
    <h2>Упражнения</h2>
    <TheMainContent 
      :cardData="cardData"
    />
  </div>
</template>

<script lang="ts">
import { useExStore } from '@/store/index'

export default defineComponent({
  async setup() {
    const store:any = useExStore();
  
    useAsyncData('exercises', ()=> {
      return store.setCardData()
    })

    return { store }
  },
  computed: {
    cardData() {
      return this.store.getCardData
    }
  }
})
</script>
