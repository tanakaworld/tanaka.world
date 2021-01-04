<template>
  <div class="vue-pixel-board" :class="{ gameEnd: isGameEnd }">
    <div v-show="showMenu" class="pixel-menu color">
      <ButtonRandomColor v-if="showMenu" @click="onClickRandom" />
    </div>
    <div class="pixel-menu skip">
      <ButtonSkipPixel
        v-if="showMenu"
        :pixel-count="pixelCount"
        @click="skipAnimation"
      />
    </div>
    <template v-if="showBoard">
      <div
        v-for="(s, i) in seed"
        :key="`board.${i}`"
        class="board"
        @touchmove="handleTouchMove($event)"
      >
        <div class="row">
          <vue-pixel-xel
            v-for="(xel, j) in s"
            :key="`row.${j}`"
            :ref="`xel.${i}.${j}`"
            :data-xel-id="`xel.${i}.${j}`"
            :before-color="xel.before"
            :after-color="xel.after"
            :static="xel.static === true"
            :debug="debug"
            :pixel-count="pixelCount"
            :show-menu="showMenu"
            @transform-xel="onTransformXel"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Xel } from '~/types/app/pixel';
import VuePixelXel from '~/components/vue-pixel/VuePixelXel.vue';
import ButtonRandomColor from '~/components/ButtonRandomColor.vue';
import ButtonSkipPixel from '~/components/ButtonSkipPixel.vue';

export default Vue.extend({
  components: {
    VuePixelXel,
    ButtonRandomColor,
    ButtonSkipPixel,
  },
  props: {
    debug: {
      type: Boolean,
      default: false,
    },
    isGameEnd: {
      type: Boolean,
      default: false,
    },
    mainColor: {
      type: String,
      default: null,
    },
    pixelCount: {
      type: Number,
      required: true,
    },
    seed: {
      type: Array as PropType<Xel>,
      required: true,
    },
    showBoard: {
      type: Boolean,
      required: true,
    },
    showMenu: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    // For touch devices
    handleTouchMove(e: MouseEvent) {
      if (e && e.target) {
        const { pageX, pageY } = e;
        const elm: any = document.elementFromPoint(pageX, pageY);
        if (!elm) return;
        const xelId = elm.dataset.xelId;
        if (!xelId) return;
        const xelComponent = this.$refs[xelId];
        if (xelComponent && xelComponent[0] instanceof Vue) {
          xelComponent[0].handleHover();
        }
      }
    },
    skipAnimation() {
      const xels: HTMLElement[] = [];
      Object.keys(this.$refs).forEach((key) => {
        const component = this.$refs[key];
        if (key.startsWith('xel.') && component[0] instanceof Vue) {
          xels.push(component[0]);
        }
      });
      xels
        .sort(() => Math.random() - 0.5)
        .forEach((xel: any) =>
          setTimeout(() => xel.onMouseOver(), Math.random() * 2)
        );
    },
    onClickRandom() {
      this.$emit('click-random');
    },
    onTransformXel() {
      this.$emit('transform-xel');
    },
  },
});
</script>

<style scoped lang="sass">
.gameEnd
  animation: swing .4s ease
  animation-iteration-count: infinite

  @keyframes swing
    15%
      -webkit-transform: translateX(5px)
      transform: translateX(5px)

    30%
      -webkit-transform: translateX(-5px)
      transform: translateX(-5px)

    50%
      -webkit-transform: translateX(3px)
      transform: translateX(3px)

    65%
      -webkit-transform: translateX(-3px)
      transform: translateX(-3px)

    80%
      -webkit-transform: translateX(2px)
      transform: translateX(2px)

    100%
      -webkit-transform: translateX(0)
      transform: translateX(0)

  @keyframes shrink
    0%
      transform: scale(1)
    30%
      transform: scale(1.2)
    100%
      transform: scale(0)

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
