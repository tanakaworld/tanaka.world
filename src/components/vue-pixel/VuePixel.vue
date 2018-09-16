<template>
  <vue-pixel-board :class="{'gameEnd': $store.state.pixelCount === 0}" :seed="seed"/>
</template>

<script>
  import VuePixelBoard from '@/components/vue-pixel/VuePixelBoard';
  import randomcolor from 'randomcolor';
  import colorConverter from 'color-convert';

  const COLOR_MIN = 0;
  const COLOR_MAX = 255;
  const COLOR_DIFF = 45;
  const DEFAULT_COLOR = '#008cc8';
  const castInRange = (n) => {
    if (n < COLOR_MIN) return COLOR_MIN;
    if (n > COLOR_MAX) return COLOR_MAX;
    return n;
  };

  export default {
    name: 'vue-pixel',
    components: {
      VuePixelBoard
    },
    props: {
      mainColor: {
        type: String,
        default: null
      }
    },
    data() {
      const BG = '#555555';
      const MAIN = this.getMainColor();
      const SUB = this.getMainThinColor(MAIN);
      const LIGHT_GRAY = '#f5f5f5';
      const WHITE = '#FFFFFF';
      const HAIR = '#50340a';
      const SKIN = '#fec878';
      const YELLOW = '#fbed29';
      const PINK = '#e75e00';

      return {
        seed: [
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: MAIN, after: HAIR},
            {before: MAIN, after: HAIR},
            {before: MAIN, after: HAIR},
            {before: MAIN, after: HAIR},
            {before: MAIN, after: HAIR},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: MAIN, after: HAIR},
            {before: MAIN, after: HAIR},
            {before: MAIN, after: HAIR},
            {before: MAIN, after: HAIR},
            {before: MAIN, after: HAIR},
            {before: MAIN, after: HAIR},
            {before: MAIN, after: HAIR},
            {before: MAIN, after: BG},
            {before: MAIN, after: BG},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: HAIR, static: true},
            {before: HAIR, static: true},
            {before: HAIR, static: true},
            {before: SKIN, static: true},
            {before: HAIR, static: true},
            {before: SKIN, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: HAIR, static: true},
            {before: SKIN, static: true},
            {before: HAIR, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: HAIR, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: HAIR, static: true},
            {before: SKIN, static: true},
            {before: HAIR, static: true},
            {before: HAIR, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: HAIR, after: SKIN},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: HAIR, static: true},
            {before: HAIR, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: HAIR, after: SKIN},
            {before: HAIR, after: PINK},
            {before: HAIR, after: PINK},
            {before: HAIR, after: SKIN},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: SKIN, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: PINK},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: SUB, after: PINK},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: LIGHT_GRAY, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: SUB, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: YELLOW, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: YELLOW, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: SUB, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: LIGHT_GRAY, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: LIGHT_GRAY, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: WHITE, after: SKIN},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: SUB, after: SKIN},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true}
          ],
          [
            {before: BG, static: true},
            {before: BG, static: true},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: BG, static: true},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: MAIN, after: SKIN},
            {before: BG, static: true},
            {before: BG, static: true}
          ]
        ]
      };
    },
    methods: {
      getMainColor() {
        if (this.mainColor) {
          if (this.mainColor === 'random') return randomcolor({hue: 'random', luminosity: 'random'});
          return `#${this.mainColor}`;
        }
        return DEFAULT_COLOR;
      },
      getMainThinColor(mainColor) {
        const [red, green, blue] = colorConverter.hex.rgb(mainColor);
        const hex = colorConverter.rgb.hex(
          castInRange(red + COLOR_DIFF),
          castInRange(green + COLOR_DIFF),
          castInRange(blue + COLOR_DIFF)
        );
        return `#${hex}`;
      }
    }
  };
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
</style>
