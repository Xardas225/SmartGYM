<template>
    <div>
        <card class="card">
            <div class="card__title">
                {{ item.title }}
            </div>
            <div class="card__desc">
                {{ item.desc }}
            </div>
        </card>
    </div>
</template>

<style lang="scss" scoped>
.card {
    min-height: 200px;
    background-color: #fff;
}
</style>



<script lang="ts">
import {
  defineComponent
} from '#imports'

export default defineComponent({
    props: ['item']
})
</script>