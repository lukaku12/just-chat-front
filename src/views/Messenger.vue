<template>
  <section class="w-full h-full bg-white flex">
    <Sidebar></Sidebar>
    <div class="page-transition flex w-full overflow-hidden">
      <Messages />
      <Message />
    </div>
  </section>
</template>

<script>
import Sidebar from "@/components/Layout/Sidebar.vue";
import Messages from "@/components/Messenger/Messenges.vue";
import Message from "@/components/Messenger/Message.vue";
export default {
  name: "Home",
  components: { Message, Messages, Sidebar },
};
</script>
