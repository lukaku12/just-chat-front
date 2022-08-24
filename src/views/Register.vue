<template>
  <Wrapper>
    <Card>
      <h1 class="text-center text-2xl">Register</h1>
      <BasicInput
        title="Username"
        name="username"
        placeholder="Enter your username"
      />
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
      <BasicInput
        title="Confirm Password"
        type="password"
        name="confirm_password"
        placeholder="Repeat your password"
      />
      <BasicButton>Register</BasicButton>
      <div class="w-full text-center">
        <router-link class="text-gray-500 text-xs" :to="{ name: 'login' }">
          Or login instead
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
  name: "Register",
  components: { Card, Wrapper, BasicInput, BasicButton },
};
</script>
