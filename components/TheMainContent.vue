<template>
  <div>
    <div class="row">
      <article class="col-3"></article>
      <main class="col-9">
        <TheSort @order="order" />
        <TheElementList v-for="item in data" :key="item.id" :="item" />
      </main>
    </div>
  </div>
</template>

<script lang="ts">

export interface CardDataType {
  id: number;
  title: string;
}

export default defineComponent({
  props: {
    cardData: {
      type: Array as PropType<CardDataType[]>,
      required: true
    }
  },
  setup(props) {
    const order = (value: any) => {
      return value;
    };

    const data = computed(()=>{
      if(![...props.cardData]) return [];
      return [...props.cardData];
    })
    return { order, data };
  },
});
</script>
