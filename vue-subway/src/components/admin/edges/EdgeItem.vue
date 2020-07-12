<template>
  <div
    v-bind:data-id="line.id"
    class="subway-line-item inline-block w-1/2 px-2"
  >
    <div class="rounded-sm w-full slider-list">
      <div v-bind:class="[line.bgColor, 'border lint-name px-4 py-1']">
        {{ line.name }}
      </div>
      <div class="overflow-y-auto height-90">
        <station-item
          v-for="(station, index) of line.stations"
          v-bind:key="index"
          v-bind:station="station"
        ></station-item>
      </div>
    </div>
  </div>
</template>

<script>
import StationItem from "./StationItem";
export default {
  props: {
    line: Object,
  },
  components: {
    "station-item": StationItem,
  },
};
</script>

<style></style>
