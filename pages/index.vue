<template>
    <section class="section">
        <div class="row">
            <div class="col-6">
                <div class="section__image-wrapper">
                    <img class="section__image-img" src="@/public/img/man_run.jpg">
                </div>
            </div>
            <div class="col-6 d-flex flex-column justify-content-center align-items-start">
                <div class="title mb-4">
                    Инновационный проект для поддержания здрорового образа жизни SmartGYM
                </div>
                <div class="desc mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas labore, amet iste culpa tenetur, assumenda dolorem illo cum doloribus ad, ut laborum ipsum dolorum molestiae consectetur! Fugiat quis porro fuga.
                </div>
                <button class="btn btn-danger rounded-0">
                    Узнать больше
                </button>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="row">
            <div class="col-4">
                <div class="card d-flex flex-column justify-content-start align-items-center">
                    <div class="card__title">
                        Lorem ipsum dolor sit amet
                    </div>
                    <div class="card__desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita libero repellat placeat, maiores magni minima repudiandae laudantium ex iure tempora similique sint atque recusandae accusamus totam laboriosam qui. Commodi inventore qui ratione laborum libero explicabo ea ipsum porro voluptatibus itaque, minus laudantium atque dolor at, nobis perferendis numquam molestiae minima.
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card d-flex flex-column justify-content-start align-items-center">
                    <div class="card__title">
                        Lorem ipsum dolor sit amet
                    </div>
                    <div class="card__desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita libero repellat placeat, maiores magni minima repudiandae laudantium ex iure tempora similique sint atque recusandae accusamus totam laboriosam qui. Commodi inventore qui ratione laborum libero explicabo ea ipsum porro voluptatibus itaque, minus laudantium atque dolor at, nobis perferendis numquam molestiae minima.
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card d-flex flex-column justify-content-start align-items-center">
                    <div class="card__title">
                        Lorem ipsum dolor sit amet
                    </div>
                    <div class="card__desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita libero repellat placeat, maiores magni minima repudiandae laudantium ex iure tempora similique sint atque recusandae accusamus totam laboriosam qui. Commodi inventore qui ratione laborum libero explicabo ea ipsum porro voluptatibus itaque, minus laudantium atque dolor at, nobis perferendis numquam molestiae minima.
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="row">
            <div class="col-6">
                <div class="title"></div>
                <div class="desc"></div>
                <button class="btn bg-danger"></button>
            </div>
            <div class="col-6"></div>
        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: 'main'
})
</script>

<style scoped lang="scss">
.section {
    margin-top: 50px;
}
.title {
    color: #000;
    font-size: 30px;
    font-weight: bold;
    line-height: 40px;
}
.desc {
    color: #000;
    font-size: 20px;
    font-weight: normal;
}
.btn {
    padding: 7px 50px;
}
.section__image-img {
    display: block;
    position: relative;
    max-width: 500px;
    height: 500px;
    border-radius: 50%;
    
}
.section__image-wrapper {
    position: relative;
    &::before {
        z-index: -1;
        top: 5%;
        left: -100%;
        position: absolute;
        content: '';
        width: 1470px;
        height: 400px;
        background-color: #fff;
    }
}

.card {
    padding: 40px 20px;
    min-height: 400px;
    &__title {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: bold;
        line-height: 30px;
    }
    &__desc {
        font-size: 18px;
        font-weight: normal;
        line-height: 30px;
    }
}
</style>