<template>
  <button class="color-button" @click="onClick">
    <div class="color-button-row">
      <div
        :style="{ 'background-color': suggestColors[0] }"
        class="color-button-item"
      />
      <div
        :style="{ 'background-color': suggestColors[1] }"
        class="color-button-item"
      />
    </div>
    <div class="color-button-row">
      <div
        :style="{ 'background-color': suggestColors[2] }"
        class="color-button-item"
      />
      <div
        :style="{ 'background-color': suggestColors[3] }"
        class="color-button-item"
      />
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { generateSuggestColors } from '~/utils/pixel';

export default Vue.extend({
  data() {
    return {
      suggestColors: generateSuggestColors(),
    };
  },
  methods: {
    onClick() {
      this.suggestColors = generateSuggestColors();
      this.$emit('click');
    },
  },
});
</script>

<style scoped lang="sass">
@import "~/styles/mixin.sass"

.color-button
  @include reset-button
  cursor: pointer
  display: flex
  &-row
    display: flex
    flex-direction: column
  &-item
    width: 20px
    height: 20px
</style>
