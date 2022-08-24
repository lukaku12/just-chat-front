<template>
  <div class="w-screen h-screen bg-slate-800">
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
