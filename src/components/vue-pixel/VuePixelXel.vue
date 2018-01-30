<template>
  <div class="xel"
       :class="{debug: debug}" :style="{background: bgColor}"
       @mouseover="handleHover()"></div>
</template>

<script>
  export default {
    name: 'vue-pixel-xel',
    data() {
      return {
        bgColor: this.beforeColor,
        transformed: false,
      };
    },
    props: {
      debug: {
        type: Boolean,
        required: false,
        default: false,
      },
      static: {
        type: Boolean,
        required: false,
        default: false,
      },
      beforeColor: {
        type: String,
        required: true,
      },
      afterColor: {
        type: String,
        required: false,
        default: null,
      },
    },
    methods: {
      handleHover() {
        if (!this.static && !this.transformed && this.afterColor) {
          this.bgColor = this.afterColor;
          this.transformed = true;
        }
      },
    },
  };
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
