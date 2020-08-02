<template>
  <div class="session-form-container">
    <form @submit.prevent="$emit('submit', $event)" class="session-form flex flex-col items-center">
      <div class="text-purple-600 cursor-pointer flex items-center mb-6" to="/">
        <img class="h-8 mr-2" src="@/assets/images/icons/128x128.png" alt="mockin" />
        <span class="text-2xl">Mock-in</span>
      </div>

      <slot></slot>
      <common-button :loading="loading" :disabled="submitDisabled" class="w-full">{{
        submitButtonTitle
      }}</common-button>
    </form>
    <router-link
      :to="backButtonTo"
      :title="backButtonTitle"
      class="back-button-box flex justify-center items-center text-purple-600 font-bold"
    >
      <span>{{ backButtonTitle }}</span>
    </router-link>
  </div>
</template>

<script>
import CommonButton from "./Button";
export default {
  name: "SessionForm",
  components: {
    CommonButton
  },
  props: {
    backButtonTitle: String,
    backButtonTo: String,
    loading: Boolean,
    submitDisabled: Boolean,
    submitButtonTitle: String
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/variables";

.session-form-container {
  @media (min-width: 1024px) {
    width: calc((6 / 12) * 100%);
    max-width: 600px;
    max-height: 500px;
  }

  width: 100%;
}

.session-form {
  background-color: #ffffff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 37px;
}

.back-button-box {
  height: 70px;
  margin-top: 10px;
  background-color: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
