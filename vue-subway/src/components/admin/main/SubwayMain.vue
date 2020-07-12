<template>
  <div class="bg-gray-200 h-screen">
    <div class="flex justify-center items-center app-container">
      <div class="text-center">
        <img
          src="../../../assets/images/main_logo.png"
          class="main-logo mx-auto"
        />
        <p class="mt-2 text-gray-700">
          RunningMap Admin 페이지입니다. <br />
          제공되는 템플릿을 활용해 프로젝트를 완성해 보세요!
        </p>
        <ul class="text-blue-700">
          <page-item
            v-for="menu in menus"
            v-bind:key="menu.link"
            v-bind:menu="menu"
          ></page-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import pageItem from "./PageItem";
import { menus } from "../../../constract/Menus.js";

export default {
  data: function() {
    return {
      menus: menus,
    };
  },
  components: {
    "page-item": pageItem,
  },
};
</script>

<style></style>
