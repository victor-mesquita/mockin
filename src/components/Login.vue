<template>
  <div
    class="w-full h-auto px-6 py-8 flex-grow bg-gray-100 flex flex-col justify-center items-center"
  >
    <form @submit.prevent="submit" class="login-form flex flex-col items-center">
      <div class="text-purple-600 cursor-pointer flex items-center mb-6" to="/">
        <img class="h-8 mr-2" src="@/assets/images/icons/128x128.png" alt="mockin" />
        <span class="text-2xl">Mock-in</span>
      </div>

      <div class="mb-4 w-full">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          E-mail
        </label>
        <input
          class="transition focus:outline-none border focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded bg-gray-200 py-2 pr-4 pl-2 block w-full appearance-none leading-normal ds-input"
          type="email"
          placeholder="Digite seu e-mail"
          autocomplete="off"
          spellcheck="false"
          dir="auto"
          v-model="user.email"
          :class="{ 'border-red-500': $v.user.email.$error }"
          name="email"
        />
      </div>

      <div class="mb-4 w-full">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Senha
        </label>
        <input
          class="transition focus:outline-none border focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded bg-gray-200 py-2 pr-4 pl-2 block w-full appearance-none leading-normal ds-input"
          type="password"
          placeholder="Digite sua senha"
          autocomplete="off"
          spellcheck="false"
          v-model="user.password"
          dir="auto"
          name="password"
          :class="{ 'border-red-500': $v.user.password.$error }"
        />
      </div>
      <common-button :loading="loading" :disabled="this.$v.$anyError" class="w-full" type="submit"
        >Entrar</common-button>
      <router-link to="/forget-password" title="Esqueci minha senha"
        ><p class="mt-2 text-sm">Esqueci minha senha</p></router-link
      >
    </form>
    <router-link
      to="/registration"
      title="Deseja virar um mockador?"
      class="form-login-bottom flex justify-center items-center text-purple-600 font-bold"
    >
      <span>Deseja virar um mockador?</span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { required, email } from "vuelidate/lib/validators";
import CommonButton from "./Common/Button";
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
    CommonButton
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
.login-form {
  width: calc((6 / 12) * 100%);
  max-width: 500px;
  max-height: 500px;
  background-color: #ffffff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 37px;
}
.form-login-bottom {
  width: calc((6 / 12) * 100%);
  max-width: 500px;
  height: 70px;
  margin-top: 10px;
  background-color: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
