<template>
  <session-container>
    <session-form
      :loading="loading"
      :submitDisabled="this.$v.$anyError"
      submitButtonTitle="Cadastrar"
      backButtonTitle="Já sou um mockador"
      backButtonTo="/login"
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
        type="text"
        name="name"
        :hasError="$v.user.name.$error"
        placeholder="Digite seu nome"
        label="Nome"
        v-model="user.name"
      ></mock-input>

      <div class="flex w-full items-center">
        <mock-input
          class="mr-2"
          type="password"
          name="password"
          :hasError="$v.user.password.$error"
          placeholder="Digite sua senha"
          label="Senha"
          v-model="user.password"
        ></mock-input>
        <mock-input
          type="password"
          name="passwordConfirmation"
          :hasError="$v.user.passwordConfirmation.$error"
          placeholder="Confirme sua senha"
          label="Confirmação de senha"
          v-model="user.passwordConfirmation"
        ></mock-input>
      </div>
    </session-form>
  </session-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { required, email, sameAs } from 'vuelidate/lib/validators';
import SessionContainer from './Common/SessionContainer';
import SessionForm from './Common/SessionForm';
import MockInput from './Common/MockInput';
import routeNames from '../router/routes';

export default {
  name: 'registration',
  data() {
    return {
      user: {}
    };
  },
  validations: {
    user: {
      password: { required },
      passwordConfirmation: { required, sameAsPassword: sameAs('password') },
      name: { required },
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
      loading: 'session/fetching',
      hasError: 'session/hasError'
    })
  },
  methods: {
    submit() {
      this.$v.user.$touch();
      if (this.$v.user.$error) return;

      this.$store
        .dispatch('session/createUser', {
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
@import '../assets/styles/variables';
</style>
