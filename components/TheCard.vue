<script lang="ts" setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<"training" | "exercise" | "food" | "motivation">,
    required: true,
  },
  desc: {
    type: String,
  },
});

/**
 * @param type - type of card 
 * @param id - card id
 */
const getImageUrl = (type: string, id: number): string => {
  // FOR TEST
  id > 1 ? id = 1 : id
  // ########
  const url = `../public/img/${type}/${id}.jpg`;
  return new URL(url, import.meta.url).href;
};

/**
 * @param type - type of card 
 */
const getTypeText = (type: string): string => {
  switch (type) {
    case "training":
      return "Тренировки";
    case "exercise":
      return "Упражнения";
    case "food":
      return "Питание";
    case "motivation":
      return "Мотивация";
    default:
      return "Другое";
  }
};

/**
 * @param type - type of card 
 * @param id - card id
 */
const getPostUrl = (type: string, id: number): string => {
  return `/${type}/${id}`;
};
</script>

<template>
  <div>
    <NuxtLink :to="getPostUrl(type, id)" target="_blank">
      <card
        class="card d-flex flex-column justify-content-start align-items-center"
      >
        <div class="card__image">
          <img :src="getImageUrl(type, id)" />
        </div>
        <div class="card__type">
          {{ getTypeText(type) }}
        </div>
        <div class="card__title">
          {{ title }}
        </div>
        <div class="card__desc">
          {{ desc }}
        </div>
      </card>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.card {
  text-decoration: none;
  transition: all 0.3s;
  min-height: 420px;
  background-color: #fff;
  margin-bottom: 25px;
  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
    cursor: pointer;
  }
  &__image {
    min-height: 200px;
    max-height: 230px;
    max-width: 100%;
    overflow: hidden;
  }
  img {
    max-height: 100%;
    width: 100%;
  }
  &__type {
    color: #dee4e9;
    font-size: 15px;
    margin-top: 10px;
    text-align: center;
  }
  &__title {
    padding: 0 20px;
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
  }
  &__desc {
    text-align: center;
    padding: 0 20px;
    margin-top: 10px;
    font-size: 15px;
    font-weight: normal;
  }
}
</style>
