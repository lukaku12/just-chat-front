<template>
  <div class="w-full flex flex-col justify-center items-center mt-4">
    <button :disabled="disabled" class="bg-slate-800 text-white py-1.5 px-6 w-full rounded-md">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "BasicButton",
  props: {
    disabled: {
      type: Boolean,
      required: true
    }
  }
};
</script>
