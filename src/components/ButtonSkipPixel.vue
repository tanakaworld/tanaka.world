<template>
  <button class="skip-button" @click.prevent="onClick">
    <div class="skip-button-text" v-text="$t('skip')" />
    <div class="pixel-count-text" v-text="pixelCount" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    pixelCount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
});
</script>

<style scoped lang="sass">
@import "~/styles/mixin.sass"

.skip-button-text
  color: var(--color-warning)
  white-space: nowrap

.skip-button
  @include reset-button
  cursor: pointer
  display: flex
  flex-direction: column
  align-items: center
  &:not(:first-child)
    margin-top: 0.4rem

@media (prefers-color-scheme: light)
  .skip-button-text
    text-shadow: -1px 0 var(--color-text), 0 1px var(--color-text), 1px 0 var(--color-text), 0 -1px var(--color-text);
</style>
