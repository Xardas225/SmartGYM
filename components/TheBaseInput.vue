<script setup>
const props = defineProps({
  label: { type: String, default: "" },
  inputType: { type: String, default: "text" },
  placeholder: String,
  input: String,
  errorText: String
});

const { label, inputType, placeholder, input, errorText } = toRefs(props);

const emit = defineEmits(['update:input'])

const inputComputed = computed({
  get: () => input.value,
  set: (val) =>  emit('update:input', val)
})
</script>

<template>
  <div>
    <label class="form-label">{{ label }}</label>
    <input
      :type="inputType"
      class="form-control"
      :placeholder="placeholder"
      v-model="inputComputed"
    />
    <span v-if="errorText" class="text-danger">{{ errorText }}</span>
  </div>
</template>
