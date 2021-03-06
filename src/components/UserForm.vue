<template>
  <container title="Criar massa" :can-back="true">
    <div class="w-full">
      <form @submit.prevent="submit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="numero"
            >Número</label
          >
          <the-mask
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            :class="{ 'border-red-500': $v.user.msisdn.$error }"
            id="numero"
            type="text"
            placeholder="Número"
            v-model="user.msisdn"
            :mask="['(##) #####-####']"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="description"
            >Descrição</label
          >
          <input
            type="text"
            v-model="user.description"
            maxlength="60"
            placeholder="Adicione mais informações ao usuário"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>

        <div class="flex items-center mt-10">
          <button
            :disabled="this.$v.$anyError"
            :class="{ 'opacity-50': this.$v.$anyError }"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5"
            type="submit"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  </container>
</template>

<script>
import { mapGetters } from "vuex";
import { TheMask } from "vue-the-mask";
import { required, minLength } from "vuelidate/lib/validators";
import store from "@/store";
import Container from "@/components/Common/Container";

export default {
  name: "UserForm",
  components: {
    TheMask,
    Container
  },
  data() {
    return {
      user: {}
    };
  },
  computed: {
    ...mapGetters({
      persistedUser: "mockUser/user",
      project: "global/project"
    })
  },
  validations: {
    user: {
      msisdn: { required, min: minLength(10) }
    }
  },
  watch: {
    persistedUser() {
      this.user = { ...this.persistedUser };
    }
  },
  methods: {
    submit() {
      this.$v.user.$touch();
      if (this.$v.user.$error) return;

      const user = { ...this.user, projectId: this.project.id };

      this.$store.dispatch("mockUser/createUser", {
        user
      });
    }
  },
  mounted() {
    this.$store.dispatch("global/hideSearch", true);
  },
  destroyed() {
    this.$store.dispatch("global/hideSearch", false);
  },
  beforeRouteEnter(to, from, next) {
    const { id, projectId } = to.params;
    if (!id) {
      next();
      return;
    }

    const fetchUser = store.dispatch("mockUser/getUser", {
      userId: id,
      projectId
    });

    Promise.all([fetchUser]).then(() => {
      next();
    });
  },
  async beforeRouteLeave(to, from, next) {
    await store.dispatch("mockUser/cleanState");
    next();
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>
