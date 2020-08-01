<template>
  <div class="common-button">
    <button
      class="button w-full uppercase mt-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      v-on:click.self="$emit('click', $event.target.value)"
      :disabled="loading"
    >
      <inline-svg
        class="loading"
        v-bind:class="{ hide: !loading }"
        :src="loadingIcon"
        width="30"
        height="30"
      ></inline-svg>
      <slot></slot>
    </button>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";
import Loading from "../../assets/images/loading.svg";

export default {
  name: "CommonButton",
  props: {
    title: String,
    loading: Boolean
  },
  components: { InlineSvg },
  data() {
    return {
      loadingIcon: Loading
    };
  }
};
</script>

<style lang="scss" scoped>
.common-buttton {
  height: 58px;
  border: 2px #000000 solid;
  border-radius: 100px;
  color: #000000;
  outline: none;
}

.button {
  position: relative;
  display: block;

  .loading {
    &.hide {
      display: none !important;
    }

    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }

  & button:disabled {
    opacity: 0.5;
  }
}
</style>
