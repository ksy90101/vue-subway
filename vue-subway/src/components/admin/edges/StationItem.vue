<template>
  <div
    class="list-item border border-gray-200 py-2 px-4 text-gray-800"
    v-bind:data-id="station.id"
  >
    {{ station }}
    <button
      class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
    >
      <span class="mdi mdi-delete"></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    station: String,
  },
};
</script>

<style></style>
