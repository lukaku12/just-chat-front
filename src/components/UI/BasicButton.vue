<template>
  <div class="w-full flex flex-col justify-center items-center mt-4">
    <button class="bg-slate-800 text-white py-1.5 px-6 w-full rounded-md">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "BasicButton",
};
</script>
