<template>
  <Wrapper>
    <Card class="w-full max-w-[600px]">
      <VeeForm v-slot="{ meta, errors, values }">
        <h1 class="text-center text-2xl">Login</h1>
        <BasicInput
          title="Email"
          type="email"
          name="email"
          :value="values.email"
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
          :value="values.password"
          placeholder="Enter your password"
        />
        <BasicButton 
          :disabled="!meta.valid"
          @click="(e) => login(e, meta, values)"
        >
          Login
        </BasicButton>
      </VeeForm>
      <Message action="register"/>
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
import axios from "@/config/axios/index.js";
import {setJwtToken} from "@/helpers/jwt/index.js";
export default {
  name: "Login",
  components: { Card, Wrapper, BasicInput, BasicButton, VeeForm, Message },
  methods: {
    login(e, meta, values) {
      e.preventDefault();
      if (!meta.valid) return;
      axios
          .post("login", {
            email: values.email,
            password: values.password
          })
          .then((response) => {
            setJwtToken(response.data.access_token, response.data.expires_in);
            this.$router.push("/");
          });
    },
  },
};
</script>
