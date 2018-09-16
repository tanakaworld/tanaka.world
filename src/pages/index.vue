<template>
  <div>
    <header-view :ref="'headerView'"/>
    <vue-pixel class="vue-pixel" :style="vuePixelStyles" :main-color="mainColor"/>
  </div>
</template>

<script>
  import HeaderView from '@/components/common/HeaderView';
  import VuePixel from '@/components/vue-pixel/VuePixel';

  export default {
    name: 'home',
    head() {
      return {
        bodyAttrs: {
          class: this.fixBody ? 'no-scroll' : ''
        }
      };
    },
    data() {
      return {
        vuePixelWidth: 0,
        vuePixelWidthMax: 600,
        vuePixelHeight: 0,
        fixBody: true
      };
    },
    components: {
      HeaderView,
      VuePixel
    },
    methods: {
      updateViePixelHeight() {
        if (window) {
          const windowHeight = window.innerHeight;
          const windowWidth = window.innerWidth;
          const headerHeight = this.$refs['headerView'].$el.clientHeight;
          // calc height
          this.vuePixelHeight = windowHeight - headerHeight;
          // calc width
          let tmpWidth = this.vuePixelHeight * 14 / 16;
          if (tmpWidth > windowWidth) tmpWidth = windowWidth;
          this.vuePixelWidth = tmpWidth;
        }
      }
    },
    mounted() {
      window.addEventListener('resize', this.updateViePixelHeight);
      this.updateViePixelHeight();
      this.fixBody = true;
    },
    beforeDestroy() {
      this.fixBody = false;
      window.removeEventListener('resize', this.updateViePixelHeight);
    },
    computed: {
      vuePixelStyles() {
        return {
          width: `${this.vuePixelWidth}px`,
          height: `${this.vuePixelHeight}px`
        };
      },
      mainColor() {
        return this.$route.query.color;
      }
    }
  };
</script>

<style scoped lang="sass">
  .vue-pixel
    margin: 0 auto

    .actions
      display: flex
</style>
