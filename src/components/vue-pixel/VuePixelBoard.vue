<template>
  <div class="vue-pixel-board">
    <div class="pixel-count-display" v-show="$store.state.showPixelCount">{{$store.state.pixelCount}}</div>
    <div class="board" v-for="(s, i) in seed"
         :key="`board.${i}`"
         @touchmove="handleTouchMove($event)">
      <div class="row">
        <vue-pixel-xel v-for="(xel, j) in s" :key="`row.${j}`"
                       :ref="`xel.${i}.${j}`"
                       :data-xel-id="`xel.${i}.${j}`"
                       :before-color="xel.before"
                       :after-color="xel.after"
                       :static="xel.static === true"
                       :debug="debug"/>
      </div>
    </div>
  </div>
</template>

<script>
  import VuePixelXel from '@/components/vue-pixel/VuePixelXel';

  export default {
    name: 'vue-pixel-board',
    components: {
      VuePixelXel,
    },
    props: {
      seed: {
        type: Array,
        required: true,
      },
      debug: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    mounted() {
      this.$store.commit('setPixelCount', Object.keys(this.$refs).filter(k => {
        return this.$refs[k][0].ableToTransform;
      }).length);
    },
    methods: {
      // For touch devices
      handleTouchMove(e) {
        if (e && e.target) {
          const { pageX, pageY } = e;
          const xelId = document.elementFromPoint(pageX, pageY).dataset.xelId;
          const xelComponent = this.$refs[xelId];

          if (xelComponent) {
            xelComponent[0].handleHover();
          }
        }
      },
    },
  };
</script>

<style scoped lang="sass">
  .vue-pixel-board
    position: relative

    .pixel-count-display
      position: absolute
      top: 0
      left: 42px
      width: 30px
      height: 30px
      font-size: 30px
      z-index: 10

    .board
      z-index: 5
      max-width: 600px
      margin: 0 auto

      .row
        display: flex
        flex-direction: row
        justify-content: center

      .pixelCountDisplay
        height: 10px
</style>
