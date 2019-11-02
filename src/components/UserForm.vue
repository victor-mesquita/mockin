<template>
  <container title="Criar massa" :can-back="true">
    <div class="w-full h-full">
      <form @submit.prevent="submit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex">
          <Select
            class="md:w-1/3 px-3 mb-6"
            label="Segmento"
            id-property="id"
            value-property="name"
            :data="segments"
            :model.sync="user.segmentId"
            :disabled="segments.length === 0"
            :has-error="$v.user.segmentId.$error"
          ></Select>

          <Select
            class="md:w-1/3 px-3 mb-6"
            label="Sub Segmento"
            id-property="id"
            value-property="name"
            :data="subSegments"
            :model.sync="user.subSegmentId"
            v-show="subSegments.length > 0"
          ></Select>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="numero"
          >Número</label>
          <the-mask
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            :class="{ 'border-red-500': $v.user.msisdn.$error }"
            id="numero"
            type="text"
            placeholder="Número"
            v-model="user.msisdn"
            :mask="['(##) ####-####', '(##) #####-####']"
          />
        </div>

        <div class="flex items-center mt-10">
          <button
            :disabled="this.$v.$anyError"
            :class="{'opacity-50': this.$v.$anyError}"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5"
            type="submit"
          >Salvar</button>
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
import Select from "@/components/Common/Select";

export default {
  name: "UserForm",
  components: {
    Select,
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
      segments: "user/segments",
      subSegments: "user/subSegments",
      persistedUser: "user/user"
    })
  },
  validations: {
    user: {
      segmentId: { required },
      msisdn: { required, min: minLength(10) }
    }
  },
  watch: {
    "user.segmentId": function segmentId(selectedSegment) {
      if (!selectedSegment) return;

      this.$store.dispatch("user/fetchSubSegments", {
        segmentId: selectedSegment
      });
    },
    persistedUser() {
      this.user = { ...this.persistedUser };
    }
  },
  methods: {
    submit() {
      this.$v.user.$touch();
      if (this.$v.user.$error) return;

      this.$store.dispatch("user/createUser", {
        user: this.user
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
    const fetchSegments = store.dispatch("user/fetchSegments");
    const { id } = to.params;
    const fetchUser = store.dispatch("user/getUser", id);

    Promise.all([fetchSegments, fetchUser]).then(() => {
      next();
    });
  },
  async beforeRouteLeave(to, from, next) {
    await store.dispatch("user/cleanState");
    next();
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>
