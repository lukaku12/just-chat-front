<template>
  <div class="w-[350px] border left-border h-full">
    <header class="flex w-full justify-center h-[89px] bottom-border">
      <div class="flex justify-between items-center w-10/12">
        <div class="flex items-center">
          <button class="flex justify-center items-center gap-2 font-bold">
            <span class="text-xl">Messages</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </button>
          <span
            class="flex items-center justify-center rounded-3xl bg-[#EDF2F7] w-[28px] h-[22px] text-xs ml-3"
          >
            {{ messages.length }}
          </span>
        </div>
        <button class="text-[#615EF0]">
          <font-awesome-icon
            icon="fa-solid fa-circle-plus"
            class="w-[40px] h-[40px]"
          />
        </button>
      </div>
    </header>

    <main class="py-4 px-6 w-full h-[calc(100%-89px)]">
      <div
        class="w-full rounded-[12px] h-[48px] bg-[#F3F3F3] flex justify-evenly items-center"
      >
        <label for="search">
          <font-awesome-icon
            icon="fa-solid fa-magnifying-glass"
            class="opacity-40"
          />
        </label>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search messages"
          class="bg-transparent h-full focus:outline-0"
          autocomplete="off"
        />
      </div>
      <div class="w-full h-auto mt-4">
        <!--MESSAGES-->
        <div
          v-for="message in messages"
          class="flex p-[12px] overflow-hidden rounded justify-between w-full h-[93px] max-h-[93px] hover:bg-[#F3F3F3] cursor-pointer"
        >
          <div class="w-full flex gap-4">
            <!-- CHANGE DIV WITH IMG HERE   -->
            <div
              class="min-w-[48px] w-[48px] h-[48px] rounded-[12px] bg-[#615EF0] flex items-center justify-center text-2xl font-bold text-white select-none"
            >
              N
            </div>
            <!-- CHANGE DIV WITH IMG HERE   -->
            <div>
              <h1 class="font-bold">{{ message.username }}</h1>
              <p class="text-gray-500">haha oh man 🔥</p>
            </div>
          </div>
          <div class="text-gray-500">12m</div>
        </div>
        <!--MESSAGES-->
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Messages",
  data() {
    return {
      messages: [
          {username: "Nikoloz Kurdadze"},
          {username: "Sandro Kurdadze"},
          {username: "Lizi Kurdadze"},
          {username: "Ani Kurdadze"},
          {username: "Mariam Kurdadze"},
      ],
    };
  },
  computed: {
    ...mapState({ user: (state) => state.user }),
    usernameFirstLetter() {
      return this.user.user.username
        ? this.user.user.username.charAt(0).toUpperCase()
        : "";
    },
  },
};
</script>
