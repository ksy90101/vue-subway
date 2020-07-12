<template>
  <div class="bg-gray-200 h-screen">
    <div class="flex justify-center md:py-10 lg:py-10 app-container">
      <div
        class="max-w-md w-full lg:width-450px rounded bg-white shadow-lg p-6"
      >
        <div class="font-bold text-xl mb-4 relative w-full flex items-stretch">
          <div class="flex-1"></div>
          <div class="flex-1 text-center">구간 관리</div>
          <div class="flex-1 flex justify-end">
            <button
              v-on:click.prevent="toggleModal"
              id="subway-line-add-btn"
              class="modal-open bg-transparent bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 text-sm px-3 py-1 rounded"
            >
              구간 추가
            </button>
          </div>
        </div>
        <div class="flex relative">
          <div id="slider-controls" class="hidden lg:block xl:block">
            <button
              data-controls="prev"
              aria-controls="customize"
              tabindex="-1"
              class="prev prev-btn top-50 z-10 absolute top-0 left-10px bg-white rounded-full h-8 w-8 text-base text-gray-600 hover:text-gray-400 focus:text-gray-400 -ml-6 focus:outline-none focus:shadow-outline"
            >
              <span class="block" style="transform: scale(-1);">&#x279c;</span>
            </button>
            <button
              aria-controls="customize"
              tabindex="-1"
              data-controls="next"
              class="next next-btn top-50 z-10 absolute top-0 right-10px bg-white rounded-full h-8 w-8 text-base text-gray-600 hover:text-gray-400 focus:text-gray-400 -mr-6 focus:outline-none focus:shadow-outline"
            >
              <span class="block" style="transform: scale(1);">&#x279c;</span>
            </button>
          </div>
          <div class="w-full h-full">
            <div class="subway-lines-slider" style="overflow: auto">
              <tiny-slider
                v-bind:loop="true"
                v-bind:speed="400"
                v-bind:autoplayButtonOutput="false"
                v-bind:mouseDrag="true"
                v-bind:lazyload="true"
                v-bind:items="1"
                v-bind:edgePadding="25"
                controls-container="#slider-controls"
              >
                <edge-item
                  v-for="line of lines"
                  v-bind:key="line.id"
                  v-bind:line="line"
                ></edge-item>
              </tiny-slider>
            </div>
          </div>
        </div>
      </div>
    </div>
    <edge-modal v-show="isModal" v-on:toggleModal="toggleModal"></edge-modal>
  </div>
</template>

<script>
import vueTinySlider from "vue-tiny-slider";
import edgeItem from "./EdgeItem";
import edgeModal from "./EdgeModal";

export default {
  data: function() {
    return {
      isModal: false,
    };
  },
  components: {
    "tiny-slider": vueTinySlider,
    "edge-item": edgeItem,
    "edge-modal": edgeModal,
  },
  computed: {
    lines() {
      return this.$store.getters.getLines;
    },
  },
  methods: {
    toggleModal: function() {
      this.isModal = !this.isModal;
    },
  },
};
</script>

<style></style>
