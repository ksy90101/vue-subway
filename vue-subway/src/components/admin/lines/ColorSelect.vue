<template>
  <span>
    <button
      v-bind:data-color="color.bgColor"
      v-bind:class="[
        color.bgColor,
        color.hoverColor,
        'color-select-option button w-6 h-6 font-bold p-1 rounded',
      ]"
    ></button>
    <br v-if="(index + 1) % 7 === 0" />
  </span>
</template>

<script>
export default {
  props: { color: Object, index: Number },
};
</script>

<style></style>
