<script setup lang="ts">
const props = defineProps<{
  label: { type: String , default: "" },
  inputType: string | undefined,
  placeholder: string,
  input: string,
  error: boolean,
  success: boolean
}>();

const { input } = toRefs(props);

const emit = defineEmits<{
  (e: "update:input", value: string): void;
  (e: "changeInput"): void;
}>();

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val),
});
</script>

<template>
  <div class="position-relative">
    <label class="form-label">{{ label }}</label>
    <input
      @input="emit('changeInput')"
      :type="inputType"
      class="form-control"
      :placeholder="placeholder"
      v-model="inputComputed"
      :class="{
        'border border-2 border-danger': error,
        'border border-2 border-success ': success,
      }"
    />
    <Icon
      class="position-absolute alert-icon"
      v-if="success || error"
      :class="`${error ? 'alert-icon-error' : 'alert-icon-success'}`"
      :name="`mdi:${error ? 'alert' : 'check'}`"
    ></Icon>
  </div>
</template>

<style lang="scss">
.alert-icon {
  font-weight: bold;
  font-size: 20px;
  bottom: 10px;
  right: 10px;
  &-success {
    color: #198754;
  }
  &-error {
    color: #ffc107;
  }
}
</style>
