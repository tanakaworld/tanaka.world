<template>
  <div>
    <header-view :ref="'headerView'"/>
    <vue-pixel class="vue-pixel" :style="vuePixelStyles"/>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import HeaderView from '@/components/common/HeaderView';
  import VuePixel from '@/components/vue-pixel/VuePixel';

  export default {
    name: 'home',
    data() {
      return {
        vuePixelWidth: 0,
        vuePixelWidthMax: 600,
        vuePixelHeight: 0,
      };
    },
    components: {
      HeaderView,
      VuePixel,
    },
    methods: {
      ...mapMutations([
        'toggleFixBody',
      ]),
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
      },
    },
    mounted() {
      window.addEventListener('resize', this.updateViePixelHeight);
      this.toggleFixBody(true);
      this.updateViePixelHeight();
    },
    beforeDestroy() {
      this.toggleFixBody(false);
      window.removeEventListener('resize', this.updateViePixelHeight);
    },
    computed: {
      vuePixelStyles() {
        return {
          width: `${this.vuePixelWidth}px`,
          height: `${this.vuePixelHeight}px`,
        };
      },
    },
  };
</script>

<style scoped lang="sass">
  .vue-pixel
    margin: 0 auto
</style>
