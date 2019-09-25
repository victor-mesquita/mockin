<template>
  <div
    class="mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100 animated slideInUp faster"
  >
    <div>
      <router-link to="/">
        <img class="float-left" src="../assets/images/arrow-left.svg" alt="Voltar para massas" />
      </router-link>

      <h2 class="text-2xl text-primary font-bold mb-8 text-center">Criar massa</h2>
    </div>

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
            :model.sync="user.subsegmentId"
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
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";
import { required, minLength } from "vuelidate/lib/validators";
import { RepositoryFactory } from "../api/repositoryFactory";
import Select from "./Common/Select";
const SegmentFactory = RepositoryFactory.segment;
const SubSegmentFactory = RepositoryFactory.subSegment;

export default {
  name: "UserForm",
  components: {
    Select,
    TheMask
  },
  data() {
    return {
      segments: [],
      subSegments: [],
      user: {}
    };
  },
  validations: {
    user: {
      segmentId: { required },
      msisdn: { required, min: minLength(10) }
    }
  },
  mounted() {
    this.fetchSegments();
  },
  watch: {
    "user.segmentId": function segmentId(selectedSegment) {
      if (!selectedSegment) return;

      this.fetchSubSegments(selectedSegment);
    }
  },
  methods: {
    fetchSegments: async function fetchSegments() {
      try {
        const response = await SegmentFactory.list();

        const { segments } = response.data;

        this.segments = segments;
      } catch (error) {
        this.segments = [];
      }
    },
    fetchSubSegments: async function fetchSubSegments(segmentId) {
      try {
        const response = await SubSegmentFactory.list(segmentId);

        const { subSegments } = response.data;

        this.subSegments = subSegments;
      } catch (error) {
        this.subSegments = [];
      }
    },
    submit() {
      this.$v.user.$touch();
      if (this.$v.user.$error) return;

      this.$store.dispatch("user/createUser", {
        user: this.user
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>
