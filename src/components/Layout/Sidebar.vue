<template>
  <div class="w-[88px] h-full outline flex flex-col justify-between items-center pt-5 pb-8">
    <div class="w-[56px] h-auto">
        <!-- CHANGE DIV WITH IMG HERE   -->
         <div class="w-[56px] h-[56px] rounded-[14px] bg-[#615EF0] flex items-center justify-center text-2xl font-bold text-white select-none">L</div>
        <!-- CHANGE DIV WITH IMG HERE   -->

        <!--  NAVIGATION LINKS   -->
        <nav class="w-auto h-auto mt-16">
          <ul class="flex flex-col justify-between items-center gap-[32px]">
            <li class="flex items-center">
              <router-link to="/" class="text-2xl">
                <font-awesome-icon icon="fa-solid fa-house-chimney" />
              </router-link>
            </li>
            <li class="flex items-center">
              <router-link to="/" class="text-2xl">
                <font-awesome-icon icon="fa-solid fa-message" />
              </router-link>
            </li>
            <li class="flex items-center">
              <router-link to="/" class="text-2xl">
                <font-awesome-icon icon="fa-solid fa-chart-pie" />
              </router-link>
            </li>
            <li class="flex items-center">
              <router-link to="/" class="text-2xl">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </router-link>
            </li>
            <li class="flex items-center">
              <router-link to="/" class="text-2xl">
                <font-awesome-icon icon="fa-solid fa-calendar-day" />
              </router-link>
            </li>
          </ul>
        </nav>
        <!--  NAVIGATION LINKS   -->
    </div>
    <!--   SETTINGS HERE   -->
    <div class="text-2xl">
      <button>
        <font-awesome-icon icon="fa-solid fa-gear" />
      </button>
    </div>
    <!--   SETTINGS HERE   -->
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>