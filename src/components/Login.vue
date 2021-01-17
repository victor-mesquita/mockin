<template>
  <session-container>
    <session-form
      :loading="loading"
      :submitDisabled="this.$v.$anyError"
      submitButtonTitle="Entrar"
      backButtonTitle="Deseja virar um mockador?"
      backButtonTo="/registration"
      @submit="submit"
    >
      <mock-input
        type="email"
        name="email"
        :hasError="$v.user.email.$error"
        placeholder="Digite seu e-mail"
        label="E-mail"
        v-model="user.email"
      ></mock-input>

      <mock-input
        type="password"
        name="password"
        :hasError="$v.user.password.$error"
        placeholder="Digite sua senha"
        label="Senha"
        v-model="user.password"
      ></mock-input>
      <router-link to="/forget-password" title="Esqueci minha senha"
        ><p class="mt-2 text-sm">Esqueci minha senha</p></router-link
      >
    </session-form>
  </session-container>
</template>

<script>
import { mapGetters } from "vuex";
import { required, email } from "vuelidate/lib/validators";
import SessionContainer from "./Common/SessionContainer";
import SessionForm from "./Common/SessionForm";
import MockInput from "./Common/MockInput";
import routeNames from "../router/routes";

export default {
  name: "login",
  data() {
    return {
      user: {}
    };
  },
  validations: {
    user: {
      password: { required },
      email: { required, email }
    }
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
      this.$v.user.$touch();
      if (this.$v.user.$error) return;

      this.$store
        .dispatch("session/login", {
          user: this.user
        })
        .then(() => {
          this.$router.push({ name: routeNames.users });
        });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>
