<script setup lang="ts">
defineProps({
  id: {
    type: Number,
  },
  type: {
    type: String,
  },
  title: {
    type: String,
  },
  equipment: {
    type: String as PropType<"personal weight" | "other">,
    default: "other",
  },
  muscle: {
    type: String as PropType<"quadriceps legs" | "other">,
    default: "other",
  },
  rating: {
    type: Number,
  },
});

const getEquipmnetText = (equipment: string): string => {
  switch (equipment) {
    case "personal weight":
      return "Собственный вес";
    default:
      return "Другое";
  }
};

const getMuscleText = (muscle: string): string => {
  switch (muscle) {
    case "quadriceps legs":
      return "Квадрицепсы ног";
    default:
      return "Другое";
  }
};

const getUmagetUrl = (type: string, id: number): string => {
  // FOR TEST
  id > 1 ? (id = 1) : id;
  // ########
  const url = `../public/img/${type}/${id}.jpg`;
  return new URL(url, import.meta.url).href;
};

const getElementListUrl = (type: string, id: number): string => {
  return `/${type}/${id}`;
};
</script>

<template>
  <div>
    <NuxtLink :to="getElementListUrl(type,id)">
      <div class="row d-flex justify-content-start item">
        <div class="col-4 item__image">
          <img :src="getUmagetUrl(type, id)" />
        </div>
        <div
          class="col-5 d-flex flex-column justify-content-center align-items-between item__desc"
        >
          <div class="item__desc__title">
            {{ title }}
          </div>
          <div class="item__desc__muscle">
            <span class="item__desc__muscle-small"
              >Составное упражнения на</span
            >
            {{ getMuscleText(muscle) }}
          </div>
          <div class="item__desc__equipment">
            <span class="item__desc__equipment-small">Оборудование</span>
            {{ getEquipmnetText(equipment) }}
          </div>
        </div>
        <div
          class="col-3 d-flex justify-content-center align-items-center item__rating"
        >
          <div class="item__rating__value">
            {{ rating }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.item {
  transition: all .3s;
  color: #000;
  width: 100%;
  min-height: 200px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  &:hover {
    opacity: .8;
    transform: scale(1.005);
  }
  &__image {
    img {
      height: 100%;
      max-width: 300px;
    }
  }
  &__desc {
    &__title {
      font-size: 20px;
      margin-bottom: 20px;
    }
    &__equipment {
      margin-bottom: 20px;
      &-small {
        font-size: 14px;
        color: #8a8a8a;
      }
    }
    &__muscle {
      margin-bottom: 10px;
      &-small {
        font-size: 14px;
        color: #8a8a8a;
      }
    }
  }
  &__rating {
    &__value {
      width: 90px;
      height: 90px;
      z-index: 2;
      border: 2px solid #e6e6e6;
      border-radius: 45px;
      text-align: center;
      line-height: 90px;
      font-family: MuseoSansCyrl-900;
      font-size: 34px;
    }
  }
}
</style>
