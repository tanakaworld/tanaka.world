<template>
  <div class="xel"
       :class="{debug: debug}" :style="{background: bgColor}"
       @mouseover="handleHover()"></div>
</template>

<script>
  import {GAME_END, TOGGLE_MENU} from '@/store';

  export default {
    name: 'vue-pixel-xel',
    data() {
      return {
        ableToTransform: this.afterColor !== null,
        bgColor: this.beforeColor,
        transformed: false
      };
    },
    props: {
      debug: {
        type: Boolean,
        required: false,
        default: false
      },
      static: {
        type: Boolean,
        required: false,
        default: false
      },
      beforeColor: {
        type: String,
        required: true
      },
      afterColor: {
        type: String,
        required: false,
        default: null
      }
    },
    methods: {
      async handleHover() {
        if (!this.static && !this.transformed && this.ableToTransform) {
          this.bgColor = this.afterColor;
          this.transformed = true;

          if (!this.$store.state.showPixelCount) {
            await this.$store.dispatch(TOGGLE_MENU, true);
          }
          this.$store.commit('decrementPixelCount');
          if (this.$store.state.pixelCount === 0) {
            await this.$store.dispatch(TOGGLE_MENU, false);
            setTimeout(async () => {
              await this.$store.dispatch(GAME_END, true);
              setTimeout(() => {
                this.$router.push('/about');
              }, 1000);
            }, 500);
          }
        }
      }
    }
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
