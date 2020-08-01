<template>
  <session-container>
    <session-form
      :loading="loading"
      :submitDisabled="this.$v.$anyError"
      submitButtonTitle="Recuperar minha senha"
      backButtonTitle="Voltar para o login"
      backButtonTo="/login"
      @submit="submit"
    >
      <mock-input
        type="email"
        name="email"
        :hasError="$v.email.$error"
        placeholder="Informe seu e-mail"
        label="E-mail"
        v-model="email"
      ></mock-input>
    </session-form>
  </session-container>
</template>

<script>
import { mapGetters } from "vuex";
import { required, email } from "vuelidate/lib/validators";
import SessionContainer from "./Common/SessionContainer";
import SessionForm from "./Common/SessionForm";
import MockInput from "./Common/MockInput";

export default {
  data() {
    return { email: "" };
  },
  name: "login",
  validations: {
    email: { required, email }
  },
  components: {
    SessionContainer,
    SessionForm,
    MockInput
  },
  computed: {
    ...mapGetters({
      loading: "session/fetching",
      hasError: "session/hasError"
    })
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$error) return;

      this.$store.dispatch("session/requestNewPassword", {
        email: this.email
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>
