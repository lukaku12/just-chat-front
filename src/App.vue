<template>
  <div class="w-screen h-screen bg-[#615EF0]">
    <router-view v-slot="slotProps">
      <component :is="slotProps.Component"></component>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
