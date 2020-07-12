<template>
  <div class="bg-gray-200 h-screen">
    <div class="flex justify-center md:py-10 lg:py-10 app-container">
      <div class="max-w-md width-450px rounded bg-white shadow-lg p-6">
        <div>
          <div
            class="font-bold text-xl mb-4 relative w-full flex items-stretch"
          >
            <div class="flex-1"></div>
            <div class="flex-1 text-center">노선 관리</div>
            <div class="flex-1 flex justify-end">
              <button
                v-on:click="toggleModal"
                id="subway-line-create-btn"
                class="modal-open bg-transparent bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 text-sm px-3 py-1 rounded"
              >
                노선 추가
              </button>
            </div>
          </div>
          <div class="lines-info flex flex-wrap mb-3 w-full">
            <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-200">
              첫차 시간
            </div>
            <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-100">
              05:00
            </div>
            <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-200">
              막차 시간
            </div>
            <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-100">
              23:30
            </div>
            <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-200">
              간격
            </div>
            <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-100">
              10분
            </div>
          </div>
        </div>
        <div class="mt-5 flex subway-lines-container relative overflow-y-auto">
          <div id="subway-line-list" class="w-full">
            <line-item
              v-for="line of lines"
              v-bind:key="line.id"
              v-bind:line="line"
            ></line-item>
          </div>
        </div>
      </div>
    </div>
    <line-form v-show="isModal"></line-form>
  </div>
</template>

<script>
import lineItem from "./LineItem";
import lineForm from "./LineForm";

export default {
  components: {
    "line-item": lineItem,
    "line-form": lineForm,
  },
  data: function() {
    return {
      isModal: false,
    };
  },
  computed: {
    lines() {
      return this.$store.getters.getLines;
    },
  },
  methods: {
    toggleModal: function() {
      this.isModal = true;
    },
  },
};
</script>

<style></style>
