<template>
  <div class="flex flex-col py-3 w-full relative">
    <label :class="errors[name] ? 'text-red-500' : ''" class="mb-2" :for="name">
      {{ title }}
    </label>
    <Field
      :id="name"
      :name="name"
      class="border rounded py-2 px-4 z-10 focus:outline-none bg-[#CED4DA] text-[#6C757D] font-semibold"
      :class="{ inputError: errors[name] }"
      :type="type"
      :rules="rules"
      :placeholder="placeholder"
      :value="value"
    />
    <ErrorMessage class="errorMsg" :name="name" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  name: "BasicInput",
  components: { Field, ErrorMessage },
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    rules: {
      type: String,
      default: "required|min:3|max:255",
    },
    errors: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.errorMsg {
  color: rgb(255, 85, 85);
  font-size: small;
  font-weight: bold;
  position: absolute;
  animation: appear 300ms ease-in-out forwards;
  z-index: 0;
  margin-left: 5px;
}
@keyframes appear {
  from {
    opacity: 0;
    bottom: 0;
  }
  to {
    opacity: 1;
    bottom: -10px;
  }
}
.inputError {
  border: 1px solid red;
  color: red;
}
.inputError::placeholder {
  color: rgb(255, 85, 85);
}
</style>
