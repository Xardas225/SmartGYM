<script lang="ts" setup>
import { PropType } from 'vue';
import { useUtils } from '@/composables/useUtils'; // Предполагаемый путь к useUtils

// Определение пропсов с типами
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
    type: String as PropType<'training' | 'exercise' | 'food' | 'motivation'>,
    required: true,
  },
  desc: {
    type: String,
    default: '', // Установка значения по умолчанию
  },
});

// Использование утилит
const { getElementUrl, getImageUrl } = useUtils();

/**
 * Возвращает текстовое представление типа карточки.
 * @param type - тип карточки
 */
const getTypeText = (type: string): string => {
  switch (type) {
    case 'training':
      return 'Тренировки';
    case 'exercise':
      return 'Упражнения';
    case 'food':
      return 'Питание';
    case 'motivation':
      return 'Мотивация';
    default:
      return 'Другое';
  }
};
</script>

<template>
  <div>
    <!-- Использование NuxtLink для навигации -->
    <NuxtLink :to="getElementUrl(type, id)" target="_blank">
      <div class="card">
        <!-- Изображение карточки -->
        <div class="card__image">
          <img :src="getImageUrl(type, id)" alt="Card Image" />
        </div>
        <!-- Тип карточки -->
        <div class="card__type">
          {{ getTypeText(type) }}
        </div>
        <!-- Заголовок карточки -->
        <div class="card__title">
          {{ title }}
        </div>
        <!-- Описание карточки -->
        <div class="card__desc">
          {{ desc }}
        </div>
      </div>
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
