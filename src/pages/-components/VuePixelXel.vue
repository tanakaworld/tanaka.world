<template>
  <div
    :class="{ '-debug': debug }"
    :style="{ background: bgColor }"
    class="VuePixelXel"
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

<style scoped>
.VuePixelXel {
  flex: 1;
  font-size: 10px;
  cursor: pointer;
  position: relative;
  width: 100%;
  transition: all 0.3s ease;
}

.VuePixelXel.-debug {
  border: 1px solid gray;
}

.VuePixelXel:before {
  content: '';
  display: block;
  padding-top: 100%;
}
</style>
