<template>
    <button class="btn btn-danger rounded-0">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.btn {
    transition: all .3s;
    font-size: 24px;
    padding: 7px 50px;
    &:hover {
        opacity: .8;
    }
}
</style>