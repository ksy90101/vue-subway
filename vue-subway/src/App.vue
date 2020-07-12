<template>
  <div>
    <menu-nev></menu-nev>
    <router-view></router-view>
  </div>
</template>

<script>
import menuNev from "./components/admin/nev/MenuNev.vue";

export default {
  components: {
    "menu-nev": menuNev,
  },
};
</script>

<style>
@import "./assets/css/admin-app.css";
@import "./assets/css/admin-edge.css";
@import "./assets/css/admin-line.css";
@import "./assets/css/admin-station.css";
</style>
