<template>
  <div class="modal-mask fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center" v-on:click.self="$emit('cancel', $event.target.value)">
    <div
      class="w-1/3 h-64 bg-gray-100 border-t-4 border-purple-500 rounded-b text-gray-900 px-4 py-3 shadow-md  animated pulse faster"
      role="alert"
    >
      <div class="flex flex-col h-full justify-between">
        <div>
          <p class="font-bold">{{title}}</p>
          <p class="py-10 px-5 text-sm">{{message}}</p>
        </div>
        <div class="flex justify-end">
          <div class="flex items-center justify-between w-48">
            <span class="text-gray-600 font-bold text-sm cursor-pointer" v-on:click="$emit('cancel', $event.target.value)">Cancelar</span>
            <button
              class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              v-on:click="confirm"
            >Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    title: String,
    message: String,
    data: Object
  },
  methods: {
    confirm: function confirm() {
      this.$emit('confirm', this.data);
    }
  }
};
</script>

<style>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
