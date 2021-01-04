<template>
  <div
    :class="{ debug: debug }"
    :style="{ background: bgColor }"
    class="xel"
    @mouseover="onMouseOver"
  />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    debug: {
      type: Boolean,
      default: false,
    },
    static: {
      type: Boolean,
      default: false,
    },
    beforeColor: {
      type: String,
      default: null,
    },
    afterColor: {
      type: String,
      default: null,
    },
    pixelCount: {
      type: Number,
      required: true,
    },
    showMenu: {
      type: Boolean,
      required: true,
    },
    forceTransform: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bgColor: this.beforeColor,
      transformed: false,
    };
  },
  methods: {
    onMouseOver() {
      if (!this.static && !this.transformed) {
        this.bgColor = this.afterColor;
        this.transformed = true;
        this.$emit('transform-xel');
      }
    },
  },
});
</script>

<style scoped lang="sass">
.xel
  flex: 1
  font-size: 10px
  cursor: pointer
  &.debug
    border: 1px solid gray

  position: relative
  width: 100%
  &:before
    content: ''
    display: block
    padding-top: 100%

  transition: all .3s ease
</style>
