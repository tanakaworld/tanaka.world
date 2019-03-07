<template>
  <div>
    <header-view :ref="'headerView'" />
    <vue-pixel
      :style="vuePixelStyles"
      :main-color="mainColor"
      class="vue-pixel"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderView from '~/components/common/HeaderView.vue'
import VuePixel from '~/components/vue-pixel/VuePixel.vue'

export default Vue.extend({
  name: 'Home',
  head() {
    return {
      bodyAttrs: {
        class: this.fixBody ? 'no-scroll' : ''
      }
    }
  },
  components: {
    HeaderView,
    VuePixel
  },
  data() {
    return {
      vuePixelWidth: 0,
      vuePixelWidthMax: 600,
      vuePixelHeight: 0,
      fixBody: true
    }
  },
  computed: {
    vuePixelStyles() {
      return {
        width: `${this.vuePixelWidth}px`,
        height: `${this.vuePixelHeight}px`
      }
    },
    mainColor() {
      return this.$route.query.color
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateViePixelHeight)
    this.updateViePixelHeight()
    this.fixBody = true
  },
  beforeDestroy() {
    this.fixBody = false
    window.removeEventListener('resize', this.updateViePixelHeight)
  },
  methods: {
    updateViePixelHeight() {
      if (window) {
        const windowHeight = window.innerHeight
        const windowWidth = window.innerWidth
        const headerHeight = this.$refs['headerView'].$el.clientHeight
        // calc height
        this.vuePixelHeight = windowHeight - headerHeight
        // calc width
        let tmpWidth = (this.vuePixelHeight * 14) / 16
        if (tmpWidth > windowWidth) tmpWidth = windowWidth
        this.vuePixelWidth = tmpWidth
      }
    }
  }
})
</script>

<style scoped lang="sass">
  .vue-pixel
    margin: 0 auto

    .actions
      display: flex
</style>
