<script setup lang="ts">
import { CardDataType } from '@/types';
const { getElementUrl, getImageUrl } = useUtils();
const { getPropertyText } = useProperties();

defineProps<CardDataType>();

</script>

<template>
  <div>
    <NuxtLink :to="getElementUrl(type, id)">
      <div class="row d-flex justify-content-start item">
        <div class="col-4 item__image">
          <img :src="getImageUrl(type, id)" />
        </div>
        <div
          class="col-5 d-flex flex-column justify-content-center align-items-between item__desc"
        >
          <div class="item__desc__title">
            {{ title }}
            {{ complexity }}
          </div>
          <div class="item__desc__muscle">
            <span class="item__desc__muscle-small"
              >Составное упражнения на</span
            >
            {{ getPropertyText('muscle', muscle) }}
          </div>
          <div class="item__desc__equipment">
            <span class="item__desc__equipment-small">Оборудование</span>
            {{ getPropertyText('equipment', equipment) }}
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
  transition: all 0.3s;
  color: #000;
  width: 100%;
  min-height: 200px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  &:hover {
    opacity: 0.8;
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
