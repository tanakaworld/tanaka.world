<template>
  <button class="Button ButtonSkipPixel" @click.prevent="onClick">
    <div class="ButtonSkipPixel__Text" v-text="$t('skip')" />
    <div class="ButtonSkipPixel__Count" v-text="pixelCount" />
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

<style scoped>
.ButtonSkipPixel__Text {
  color: var(--color-warning);
  white-space: nowrap;
}

.ButtonSkipPixel {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ButtonSkipPixel:not(:first-child) {
  margin-top: 0.4rem;
}

@media (prefers-color-scheme: light) {
  .ButtonSkipPixel__Text {
    text-shadow: -1px 0 var(--color-text), 0 1px var(--color-text),
      1px 0 var(--color-text), 0 -1px var(--color-text);
  }
}
</style>
