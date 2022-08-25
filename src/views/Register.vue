<template>
  <Wrapper>
    <Card>
      <VeeForm v-slot="{ meta, errors }">
        <h1 class="text-center text-2xl">Register</h1>
        <BasicInput
          title="Username"
          name="username"
          placeholder="Enter your username"
          :errors="errors"
        />
        <BasicInput
          title="Email"
          type="email"
          name="email"
          rules="required|email"
          placeholder="Enter your email"
          :errors="errors"
        />
        <BasicInput
          title="Password"
          type="password"
          name="password"
          rules="required|min:6|max:25"
          placeholder="Enter your password"
          :errors="errors"
        />
        <BasicInput
          title="Confirm Password"
          type="password"
          name="confirm_password"
          rules="required|min:6|max:25"
          placeholder="Repeat your password"
          :errors="errors"
        />
        <BasicButton @click="(e) => register(e, meta)">Register</BasicButton>
        <div class="w-full text-center">
          <router-link class="text-gray-500 text-xs" :to="{ name: 'login' }">
            Or login instead
          </router-link>
        </div>
      </VeeForm>
    </Card>
  </Wrapper>
</template>

<script>
import { Form as VeeForm } from "vee-validate";
import Card from "@/components/UI/Card.vue";
import Wrapper from "@/components/Layout/Wrapper.vue";
import BasicInput from "@/components/Inputs/BasicInput.vue";
import BasicButton from "@/components/UI/BasicButton.vue";
export default {
  name: "Register",
  components: { Card, Wrapper, BasicInput, BasicButton, VeeForm },
  methods: {
    register(e, meta) {
      e.preventDefault();
      console.log(meta);
    },
  },
};
</script>
