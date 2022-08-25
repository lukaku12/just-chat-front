<template>
  <div class="w-full text-center">
    <router-link class="text-gray-500 text-xs" :to="{ name: action }">
      or {{ action }} instead
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FormMessage",
  props: {
    action: {
      type: String,
      required: true,
    },
  },
};
</script>
