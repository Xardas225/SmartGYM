<script lang="ts" setup>
import { filename } from 'pathe/utils';

interface CardProps {
    id    ?: number;
    type  ?: string;
    title ?: string;
    image ?: string;
}

withDefaults(defineProps<CardProps>(), {
    id    : 0,
    type  : '',
    title : '',
    image : ''
});

const getImageUrl = (id: number) :string => {
    const url = `../public/img/training/${id}.jpg`
    return new URL(url, import.meta.url).href
}

</script>

<template>
    <div>
        <card class="card d-flex flex-column justify-content-start align-items-center">
            <div class="card__image">
                <img :src="getImageUrl(1)" />
            </div>
            <div class="card__title">
                {{ title }}
            </div>
        </card>
    </div>
</template>

<style lang="scss" scoped>
.card {
    min-height: 400px;
    background-color: #fff;
    &__image {
        min-height: 200px;
    }
}
</style>