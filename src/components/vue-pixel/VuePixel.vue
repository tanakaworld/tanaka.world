<template>
  <vue-pixel-board :seed="seed"/>
</template>

<script>
  import VuePixelBoard from '@/components/vue-pixel/VuePixelBoard';
  import randomcolor from 'randomcolor';
  import hexRgb from 'hex-rgb';
  import rgbHex from 'rgb-hex';

  const COLOR_MIN = 0;
  const COLOR_MAX = 255;
  const COLOR_DIFF = 45;
  const castInRange = (n) => {
    if (n < COLOR_MIN) return COLOR_MIN;
    if (n > COLOR_MAX) return COLOR_MAX;
    return n;
  };
  const alphaPercent = (alpha) => `${(alpha / COLOR_MAX) * 100}%`;

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
        return '#008cc8';
      },
      getMainThinColor(mainColor) {
        const {red, green, blue, alpha} = hexRgb(mainColor);
        const hex = rgbHex(
          castInRange(red + COLOR_DIFF),
          castInRange(green + COLOR_DIFF),
          castInRange(blue + COLOR_DIFF),
          alphaPercent(alpha)
        );
        return `#${hex}`;
      }
    }
  };
</script>

<style scoped>

</style>
