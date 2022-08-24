<template>
  <Wrapper>
    <Card>
      <h1 class="text-center text-2xl">Login</h1>
      <BasicInput
        title="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
      />
      <BasicInput
        title="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <BasicButton>Login</BasicButton>
      <div class="w-full text-center">
        <router-link class="text-gray-500 text-xs" :to="{ name: 'register' }">
          Or register instead
        </router-link>
      </div>
    </Card>
  </Wrapper>
</template>

<script>
import Card from "@/components/UI/Card.vue";
import Wrapper from "@/components/Layout/Wrapper.vue";
import BasicInput from "@/components/Inputs/BasicInput.vue";
import BasicButton from "@/components/UI/BasicButton.vue";
export default {
  name: "Login",
  components: { Card, Wrapper, BasicInput, BasicButton },
};
</script>
