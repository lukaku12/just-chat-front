<template>
  <Wrapper>
    <Card>
      <VeeForm v-slot="{ meta, values,  errors }">
        <h1 class="text-center text-2xl">Register</h1>
        <BasicInput
          title="Username"
          name="username"
          placeholder="Enter your username"
          :errors="errors"
          :value="values.username"
        />
        <BasicInput
          title="Email"
          type="email"
          name="email"
          rules="required|email"
          placeholder="Enter your email"
          :errors="errors"
          :value="values.email"
        />
        <BasicInput
          title="Password"
          type="password"
          name="password"
          rules="required|min:6|max:25"
          placeholder="Enter your password"
          :errors="errors"
          :value="values.password"
        />
        <BasicInput
          title="Confirm Password"
          type="password"
          name="confirm_password"
          rules="required|min:6|max:25"
          placeholder="Repeat your password"
          :errors="errors"
          :value="values.confirm_password"
        />
        <BasicButton
          :disabled="!meta.valid" 
          @click="(e) => register(e, meta)"
        >
          Register
        </BasicButton>
        <Message action="login" />
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
import Message from "@/components/Form/Message.vue";

export default {
  name: "Register",
  components: { Card, Wrapper, BasicInput, BasicButton, VeeForm, Message },
  methods: {
    register(e, meta) {
      e.preventDefault();
      if (!meta.valid) return;
      console.log(meta);
    },
  },
};
</script>
