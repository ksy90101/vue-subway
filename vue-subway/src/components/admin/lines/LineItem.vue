<template>
  <div
    class="subway-line-item border border-gray-200 py-2 px-4 text-gray-800"
    v-bind:data-id="line.id"
  >
    <span
      v-bind:class="[line.bgColor, 'w-3 h-3 rounded-full inline-block mr-1']"
    ></span>
    <span class="line-name">{{ line.name }}</span>
    <button
      class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
    >
      <span class="mdi mdi-delete"></span>
    </button>
    <button
      class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
    >
      <span class="mdi mdi-pencil"></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    line: Object,
  },
};
</script>

<style></style>
