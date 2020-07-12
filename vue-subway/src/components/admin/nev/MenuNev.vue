<template>
  <nav class="flex items-center justify-between flex-wrap bg-yellow-500 p-4">
    <div class="flex items-center flex-shrink-0 text-gray-800 w-full">
      <a href="/" class="mr-2">
        <img src="../../../assets/images/logo_small.png" class="w-6" />
      </a>
      <div class="flex justify-start">
        <nev-item
          v-for="menu in menus"
          v-bind:key="menu.link"
          v-bind:menu="menu"
        ></nev-item>
      </div>
    </div>
  </nav>
</template>

<script>
import nevItem from "./NevItem.vue";
import { menus } from "../../../constract/Menus.js";

export default {
  name: "MenuNev",
  data: function() {
    return {
      menus: menus,
    };
  },
  components: {
    "nev-item": nevItem,
  },
};
</script>

<style></style>
