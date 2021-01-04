<template>
  <button class="ButtonRandomColor" @click="onClick">
    <div class="ButtonRandomColor__Row">
      <div
        :style="{ 'background-color': suggestColors[0] }"
        class="ButtonRandomColor__Item"
      />
      <div
        :style="{ 'background-color': suggestColors[1] }"
        class="ButtonRandomColor__Item"
      />
    </div>
    <div class="ButtonRandomColor__Row">
      <div
        :style="{ 'background-color': suggestColors[2] }"
        class="ButtonRandomColor__Item"
      />
      <div
        :style="{ 'background-color': suggestColors[3] }"
        class="ButtonRandomColor__Item"
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

.ButtonRandomColor
  @include reset-button
  cursor: pointer
  display: flex

.ButtonRandomColor__Row
  display: flex
  flex-direction: column

.ButtonRandomColor__Item
  width: 20px
  height: 20px
</style>
