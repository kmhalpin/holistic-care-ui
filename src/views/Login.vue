<template>
  <div id="login-back" class="absolute bottom-0 top-1/3 left-0 right-0">
    <h1 class="text-2xl text-center text-primary">
      Holisticare
      <span class="font-bold">Indonesia</span>
    </h1>
    <card class="shadow-2xl">
      <form>
        <div class="flex items-center">
          <fa-icon
            class="text-2xl md:text-3xl text-primary mr-3"
            :icon="['fas','user-circle']"
          />
          <Input
            name="username"
            placeholder="Email / No Induk Mahasiswa"
            borderless
            transparent
            class="bg-gray-100 rounded-lg w-full" />
        </div>
        <div class="flex items-center my-6">
          <fa-icon
            class="text-2xl md:text-3xl text-primary mr-3"
            :icon="['fas','lock']"
          />
          <Input
            name="password"
            placeholder="Password"
            borderless
            transparent
            class="bg-gray-100 rounded-lg w-full" />
        </div>
        <jb-buttons type="justify-between">
          <jb-button
            as="a"
            href="/forgot"
            label="Lupa Password ?"
            borderless
          />
          <jb-button
            type="submit"
            label="Sign In"
            color="light"
            :icon="['fas','sign-in-alt']"
            borderless
          />
        </jb-buttons>
      </form>
    </card>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import Input from '../components/Input.vue';
import JbButtons from '../components/JbButtons.vue';
import JbButton from '../components/JbButton.vue';

export default {
  components: {
    Card,
    Input,
    JbButtons,
    JbButton,
  },
};
</script>

<style>

</style>
