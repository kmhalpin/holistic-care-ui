<template>
  <card>
    <form>
      <field label="Username">
        <Input name="username" icon="user-circle" placeholder="Username" />
      </field>
      <field label="Password">
        <Input name="password" placeholder="Password" />
      </field>
      <jb-buttons type="justify-between">
        <jb-button
          as="a"
          href="/forgot"
          label="Lupa Password ?"
        />
        <jb-button
          type="submit"
          label="Sign In"
        />
      </jb-buttons>
    </form>
  </card>
</template>

<script>
import Card from '../components/Card.vue';
import Field from '../components/Field.vue';
import Input from '../components/Input.vue';
import JbButtons from '../components/JbButtons.vue';
import JbButton from '../components/JbButton.vue';

export default {
  components: {
    Card,
    Field,
    Input,
    JbButtons,
    JbButton,
  },
};
</script>

<style>

</style>
