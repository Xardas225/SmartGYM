<script setup lang="ts">
import { computed, defineEmits, defineProps, toRefs } from 'vue'

const props = defineProps({
  label: { type: String , default: "" },
  inputType: { type: String as () => 'text' | 'password' | 'email' | 'number' | undefined, default: 'text' },
  placeholder: String,
  input: String,
  error: Boolean,
  success: Boolean
});

const { input } = toRefs(props);

const emit = defineEmits(['update:input', 'changeInput']);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val),
});

const getIcon = () => props.error ? 'alert' : 'check';
const getIconClass = () => props.error ? 'alert-icon-error' : 'alert-icon-success';
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
      v-if="success || error"
      class="position-absolute alert-icon"
      :class="getIconClass"
      :name="`mdi:${getIcon()}`"
    />
  </div>
</template>

<style lang="scss">
$success-color: #198754;
$error-color: #ffc107;

.alert-icon {
  font-weight: bold;
  font-size: 20px;
  bottom: 10px;
  right: 10px;
  
  &-success {
    color: $success-color;
  }
  
  &-error {
    color: $error-color;
  }
}
</style>