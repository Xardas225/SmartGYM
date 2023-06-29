<script setup>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

const emit = defineEmits(["croppedImageData", "showModal"]);

const props = defineProps({
  minAspectRatioProp: Object,
  maxAspectRatioProp: Object,
});

const { minAspectRatioProp, maxAspectRatioProp } = toRefs(props);

const fileInput = ref(null);
const cropper = ref(null);
const uploadedImage = ref(null);
const croppedImageData = {
  file: null,
  imageUrl: null,
  height: null,
  width: null,
  left: null,
  top: null,
};

const getUploadedImage = (e) => {
  const file = e.target.files[0];
  uploadedImage.value = URL.createObjectURL(file);

  console.log(uploadedImage.value);
};

const crop = () => {
  const { coordinates, canvas } = cropper.value.getResult();

  croppedImageData.file = fileInput.value.files[0];
  croppedImageData.imageUrl = canvas.toDataURL();
  croppedImageData.heigth = canvas.toDataURL();
  croppedImageData.height = coordinates.height;
  croppedImageData.width = coordinates.width;
  croppedImageData.left = coordinates.left;
  croppedImageData.top = coordinates.top;

  emit("croppedImageData", croppedImageData);
  emit("showModal", false);
};
const modal = ref(null);
</script>

<template>
  <div ref="modal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Редактирование изображения</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Выберите изображение</label>
            <input
              type="file"
              class="form-control"
              id="image"
              ref="fileInput"
            />
          </div>
          <div class="d-flex justify-content-center">
            <Cropper
              ref="cropper"
              :src="uploadedImage"
              :stencil-props="{
                minAspectRatio:
                  minAspectRatioProp.width / minAspectRatioProp.height,
                maxAspectRatio:
                  maxAspectRatioProp.width / maxAspectRatioProp.height,
              }"
              @change="change"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
