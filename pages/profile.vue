<script setup lang="ts">
useHead({
  title: "Профиль",
});

definePageMeta({
  middleware: "auth",
});

const user = useSupabaseUser();

const formData = reactive({
  email: user?.value.email,
  phone: "",
  name: "",
  lastName: "",
  status: "",
});

const date = new Date(user.value.created_at).toLocaleString("ru-RU", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const statusEditShow = ref(false);
const statusBtnShow = ref(true);

const toggleStatusEdit = (): void => {
  statusEditShow.value = !statusEditShow.value;
  statusBtnShow.value = !statusBtnShow.value;
};

const saveStatus = () => {
  if (!formData.status) return;
  toggleStatusEdit();
};

// const showModal = ref(false);

// const image = ref(null);

// const setCroppedImageData = (data) => {
//   // imageData = data;
//   image.value = data.imageUrl;
// };
</script>

<template>
  <div v-if="user">
    <div class="bg-white p-4 mt-4 rounded">
      <div class="row">
        <div class="col-2">
          <img class="rounded" src="https://via.placeholder.com/200" />
          <!-- <div class="d-flex justify-content-center my-2">
            <CropperButton
              class="btn btn-outline-primary w-100"
              btnText="Обновить фото"
              @showModal="showModal = true"
            />
            <CropperModal
              :minAspectRatioProp="{ width: 8, height: 8 }"
              :maxAspectRatioProp="{ width: 8, height: 8 }"
              @croppedImageData="setCroppedImageData"
              @showModal="showModal = false"
            />
          </div> -->
        </div>
        <div
          class="col-10 d-flex flex-column justify-content-between align-items-start"
        >
          <div class="fs-5 mt-2">User name</div>
          <div class="w-100" v-if="statusEditShow">
            <div class="mt-2 form-floating">
              <textarea
                class="form-control"
                placeholder="Напишите статус"
                v-model="formData.status"
              ></textarea>
              <label>Статус</label>
              <div class="d-flex">
                <button
                  v-show="formData.status"
                  @click="saveStatus"
                  class="w-100 mt-2 btn btn-outline-primary"
                >
                  Сохранить
                </button>
                <button
                  @click="toggleStatusEdit"
                  class="w-100 mt-2 btn btn-outline-danger"
                >
                  Отменить
                </button>
              </div>
            </div>
          </div>
          <button
            @click="toggleStatusEdit"
            v-if="statusBtnShow"
            class="w-100 my-2 btn btn-outline-light text-muted"
          >
            Изменить статус
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white p-4 mt-4 rounded">
      <div class="fs-4 mb-4">Профиль</div>
      <div class="mb-3 w-50">
        <TheBaseInput
          inputType="text"
          placeholder="Введите email"
          v-model:input="formData.email"
          label="Email"
        />
      </div>
      <div class="mb-3 w-50">
        <TheBaseInput
          inputType="text"
          placeholder="Введите телефон"
          v-model:input="formData.phone"
          label="Телефон"
        />
      </div>
      <div class="mb-3 w-50">
        <TheBaseInput
          inputType="text"
          placeholder="Введите имя"
          v-model:input="formData.name"
          label="Имя"
        />
      </div>
      <div class="mb-3 w-50">
        <TheBaseInput
          inputType="text"
          placeholder="Введите фамилию"
          v-model:input="formData.lastName"
          label="Фамилия"
        />
      </div>
      <div class="my-4 text-center p-4 rounded bg-light">
        Дата регистрации:
        <b>{{ date }}</b>
      </div>
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-primary">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  margin: 100px auto;
  max-width: 530px;
}
</style>
