<template>
  <div
    :class="{debug: debug}"
    :style="{background: bgColor}"
    class="xel"
    @mouseover="handleHover"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import * as VuePixelStore from './store'

export default Vue.extend({
  name: 'VuePixelXel',
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
  data() {
    return {
      bgColor: this.beforeColor,
      transformed: false
    }
  },
  methods: {
    async handleHover() {
      if (!this.static && !this.transformed) {
        this.bgColor = this.afterColor
        this.transformed = true

        if (!this.$store.getters['vuePixel/showMenu']) {
          await this.$store.dispatch(
            VuePixelStore.ToggleMenu(
              { flag: true },
              { namespace: VuePixelStore.namespace }
            )
          )
        }

        await this.$store.dispatch(
          VuePixelStore.DecrementPixelCount(null, {
            namespace: VuePixelStore.namespace
          })
        )

        if (this.$store.getters['vuePixel/pixelCount'] === 0) {
          await this.$store.dispatch(
            VuePixelStore.ToggleMenu(
              { flag: false },
              { namespace: VuePixelStore.namespace }
            )
          )
          setTimeout(async () => {
            await this.$store.dispatch(
              VuePixelStore.GameEnd(
                { isEnd: true },
                { namespace: VuePixelStore.namespace }
              )
            )
            setTimeout(() => {
              this.$router.push('/about')
            }, 1000)
          }, 500)
        }
      }
    }
  }
})
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
