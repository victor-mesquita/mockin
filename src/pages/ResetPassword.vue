<template>
  <session-container>
    <session-form
      :loading="loading"
      :submitDisabled="this.$v.$anyError"
      submitButtonTitle="Redefinir"
      backButtonTitle="Voltar para o login"
      backButtonTo="/login"
      @submit="submit"
    >
      <mock-input
        class="mr-2"
        type="password"
        name="password"
        :hasError="$v.password.$error"
        placeholder="Digite sua senha"
        label="Senha"
        v-model="password"
      ></mock-input>
      <mock-input
        type="password"
        name="passwordConfirmation"
        :hasError="$v.passwordConfirmation.$error"
        placeholder="Confirme sua senha"
        label="Confirmação de senha"
        v-model="passwordConfirmation"
      ></mock-input>
    </session-form>
  </session-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { required, sameAs } from 'vuelidate/lib/validators';
import SessionContainer from './Common/SessionContainer';
import SessionForm from './Common/SessionForm';
import MockInput from './Common/MockInput';

export default {
  name: 'resetPassword',
  data() {
    return { password: '', passwordConfirmation: '' };
  },
  validations: {
    password: { required },
    passwordConfirmation: { required, sameAsPassword: sameAs('password') }
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
      this.$v.$touch();
      if (this.$v.$error) return;
      const { securityToken } = this.$route.params;

      this.$store.dispatch('session/updatePassword', {
        securityToken,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation
      });
    }
  }
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
</style>
