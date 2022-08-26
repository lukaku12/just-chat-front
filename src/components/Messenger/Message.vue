<template>
  <div class="w-[680px] right-border relative">
    <header class="w-full h-[80px] bottom-border flex justify-between p-[16px]">
      <div class="flex">
        <div
          class="min-w-[40px] w-[40px] h-[40px] rounded-[12px] bg-[#615EF0] flex items-center justify-center text-2xl font-bold text-white select-none"
        >
          N
        </div>
        <div class="ml-4">
          <h1 class="font-bold">Nikoloz Kurdadze</h1>
          <div class="flex gap-1.5 items-center">
            <div class="bg-[#68D391] w-[10px] h-[10px] rounded-[50%]"></div>
            <p>Online</p>
          </div>
        </div>
      </div>
      <div>
        <button
          class="flex gap-2.5 items-center text-[#615EF0] call-purple-background py-[10px] px-[16px] rounded-[8px]"
        >
          <font-awesome-icon icon="fa-solid fa-phone" />
          <span class="font-semibold">Call</span>
        </button>
      </div>
    </header>
    <main class="w-full">
      <!--TODO MESSAGES-->

      <div
        class="flex absolute bottom-0 w-full h-[96px] items-center justify-between px-[24px]"
      >
        <div class="w-[50px] flex justify-center items-center">
          <font-awesome-icon icon="fa-solid fa-paperclip" class="text-gray-500 w-[24px] h-[24px]" />
        </div>
        <div class="w-full flex items-center max-w-[548px] relative">
          <input
            type="text"
            class="border w-full px-[20px] py-[10px] rounded-[12px] focus:outline-none"
            placeholder="Type a message"
          />
          <button class="absolute right-5">
            <font-awesome-icon
              icon="fa-solid fa-paper-plane"
              class="text-[#615EF0] w-[20px] h-[20px]"
            />
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Message",
};
</script>
