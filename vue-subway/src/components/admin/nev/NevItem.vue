<template>
  <div class="hover:bg-yellow-400 px-2 py-1 rounded">
    <router-link
      v-bind:to="menu.link"
      class="block inline-block lg:mt-0 text-gray-800 text-sm"
    >
      {{ menu.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NevItem",
  props: {
    menu: Object,
  },
};
</script>

<style></style>
