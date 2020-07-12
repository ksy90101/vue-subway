<template>
  <nav class="flex items-center justify-between flex-wrap bg-yellow-500 p-4">
  <div class="flex items-center flex-shrink-0 text-gray-800 w-full">
      <a href="/" class="mr-2">
        <img src="../../../assets/images/logo_small.png" class="w-6">
      </a>
    <div class="flex justify-start">
      <nev-item v-for="menu in menus" v-bind:key="menu.link" v-bind:menu="menu"></nev-item>
    </div>
  </div>
</nav>
</template>

<script>
import nevItem from './NevItem.vue'

export default {
  name: "MenuNev",
  data: function(){
    return{
        menus:[
          {
            "link": "stations",
            "name": "역 관리",
          },
          {
            "link":"lines",
            "name": "노선관리"
          },
          {
            "link": "edges",
            "name": "구간관리"
          }
        ]
    }
  },
  components:{
    "nev-item": nevItem
  }
}
</script>

<style>

</style>