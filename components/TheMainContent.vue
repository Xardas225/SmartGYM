<template>
  <div>
    <div class="row">
      <article class="col-3"></article>
      <main class="col-9">
        <TheSort @order="order" />
        <TheElementList v-for="item in data" :key="item.id" :="item" />

        <div
          ref="offcanvas"
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div class="offcanvas-body">
            <ul class="list-group list-group-flush">
              <NuxtLink to="/" class="list-group-item sidebar-icon__wrapper">
                <Icon
                  class="sidebar-icon"
                  name="system-uicons:user-male-circle"
                />
                <div class="sidebar-icon__text">Профиль</div>
              </NuxtLink>
              <NavLink class="list-group-item sidebar-icon__wrapper">
                <Icon class="sidebar-icon" name="system-uicons:settings" />
                <div class="sidebar-icon__text">Настройки</div>
              </NavLink>
            </ul>
          </div>
        </div>
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
      required: true,
    },
  },
  setup(props) {
    const offcanvas = ref(null)

    const order = (value: any) => {
      return value;
    };

    const data = computed(() => {
      if (![...props.cardData]) return [];
      return [...props.cardData];
    });
    return { order, data, offcanvas };
  },
});
</script>
