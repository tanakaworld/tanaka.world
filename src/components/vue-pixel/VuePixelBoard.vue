<template>
  <div class="vue-pixel-board">
    <div class="pixel-menu color" v-show="$store.state.showPixelCount">
      <a class="color-button" v-if="$store.state.showPixelCount" @click="goToRandom">
        <div class="color-button-row">
          <div class="color-button-item" :style="{'background-color': suggestColors[0]}"></div>
          <div class="color-button-item" :style="{'background-color': suggestColors[1]}"></div>
        </div>
        <div class="color-button-row">
          <div class="color-button-item" :style="{'background-color': suggestColors[2]}"></div>
          <div class="color-button-item" :style="{'background-color': suggestColors[3]}"></div>
        </div>
      </a></div>
    <div class="pixel-menu skip">
      <a class="skip-button" v-if="$store.state.showPixelCount" @click="skipAnimation">
        <div class="skip-button-text">Skip</div>
        <div class="pixel-count-text">{{$store.state.pixelCount}}</div>
      </a>
    </div>
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
  import Vue from 'vue';
  import randomcolor from 'randomcolor';
  import VuePixelXel from '@/components/vue-pixel/VuePixelXel';

  export default {
    name: 'vue-pixel-board',
    components: {
      VuePixelXel
    },
    props: {
      seed: {
        type: Array,
        required: true
      },
      debug: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        suggestColors: [
          randomcolor(),
          randomcolor(),
          randomcolor(),
          randomcolor()
        ]
      };
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
          const {pageX, pageY} = e;
          const xelId = document.elementFromPoint(pageX, pageY).dataset.xelId;
          const xelComponent = this.$refs[xelId];

          if (xelComponent && xelComponent[0] instanceof Vue) {
            xelComponent[0].handleHover();
          }
        }
      },
      async skipAnimation() {
        const xels = [];
        Object.keys(this.$refs).forEach(key => {
          const component = this.$refs[key];
          if (key.startsWith('xel.') && component[0] instanceof Vue) {
            xels.push(component[0]);
          }
        });
        xels.sort(() => Math.random() - 0.5).forEach(xel =>
          setTimeout(() => xel.handleHover(), Math.random())
        );
      },
      goToRandom() {
        const color = randomcolor();
        this.$router.push(`/?color=${color.slice(1)}`); // remove '#'
      }
    }
  };
</script>

<style scoped lang="sass">
  @import ../../styles/color

  .vue-pixel-board
    position: relative

    .pixel-menu
      position: absolute
      top: 0
      width: 30px
      height: 30px
      font-size: 1.5rem
      z-index: 10

      &.color
        left: 42px
      &.skip
        right: 42px
        display: flex
        flex-direction: column

    .skip-button-text
      color: #fbed29
    .pixel-count-text
      color: #d9edf7

    .skip-button
      cursor: pointer
      display: flex
      flex-direction: column
      align-items: center
      &:not(:first-child)
        margin-top: 0.4rem

    .color-button
      cursor: pointer
      display: flex
      &-row
        display: flex
        flex-direction: column
      &-item
        width: 20px
        height: 20px

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

    @media screen and (max-width: 730px)
      .vue-pixel-board
        margin-top: 40px
      .pixel-menu
        top: -40px
</style>
