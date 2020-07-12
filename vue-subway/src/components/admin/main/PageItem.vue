<template>
  <li class="inline-block p-1">
    <router-link v-bind:to="menu.link" class="underline">
      {{ menu.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    menu: Object,
  },
};
</script>

<style></style>
