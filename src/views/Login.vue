<template>
  <Wrapper>
    <Card class="w-full max-w-[600px]">
      <VeeForm v-slot="{ meta, errors, values }">
        <h1 class="text-center text-2xl">Login</h1>
        <BasicInput
          title="Email"
          type="email"
          name="email"
          rules="required|email"
          :errors="errors"
          placeholder="Enter your email"
        />
        <BasicInput
          title="Password"
          type="password"
          name="password"
          rules="required|min:6|max:25"
          :errors="errors"
          placeholder="Enter your password"
        />
        <BasicButton :disabled="!meta.isValid" @click="(e) => login(e, meta)"
          >Login</BasicButton
        >
        <div class="w-full text-center">
          <router-link class="text-gray-500 text-xs" :to="{ name: 'register' }">
            Or register instead
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
  name: "Login",
  components: { Card, Wrapper, BasicInput, BasicButton, VeeForm },
  methods: {
    login(e, meta) {
      e.preventDefault();
      console.log(meta);
    },
  },
};
</script>
