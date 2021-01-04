<template>
  <vue-pixel
    class="vue-pixel"
    data-test="HomeVuePixel"
    :is-game-end="isGameEnd"
    :main-color="mainColor"
    :pixel-count="pixelCount"
    :seed="seed"
    :show-board="showBoard"
    :show-menu="showMenu"
    @click-random="onClickRandom"
    @init-pixels="initXels"
    @transform-xel="onTransformXel"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import randomcolor from 'randomcolor';
import VuePixel from '~/components/vue-pixel/VuePixel.vue';
import * as VuePixelStore from '~/store/modules/vue-pixel';
import { countXels, generateSeed } from '~/utils/pixel';

export default Vue.extend({
  components: {
    VuePixel,
  },
  data() {
    return {
      seed: generateSeed(),
      showBoard: true,
    };
  },
  computed: {
    ...mapGetters({
      isGameEnd: `${VuePixelStore.namespace}/gameEnd`,
      showMenu: `${VuePixelStore.namespace}/showMenu`,
      pixelCount: `${VuePixelStore.namespace}/pixelCount`,
    }),
    mainColor() {
      return this.$route.query.color;
    },
  },
  watch: {
    mainColor: {
      handler(val) {
        this.seed = generateSeed(val);
        this.initXels();
      },
    },
  },
  mounted() {
    this.initXels();
  },
  methods: {
    onClickRandom() {
      this.showBoard = false;

      // refresh
      const color = randomcolor();
      this.$router.push(
        this.localePath({ name: 'index', query: { color: color.slice(1) } })
      ); // remove '#'
      this.$nextTick(() => {
        this.showBoard = true;
      });
    },
    initXels() {
      this.$store.dispatch(
        VuePixelStore.GameEnd(
          { isEnd: false },
          { namespace: VuePixelStore.namespace }
        )
      );
      this.$store.commit(
        VuePixelStore.SetPixelTotal(
          {
            pixelCount: countXels(this.seed),
          },
          { namespace: VuePixelStore.namespace }
        )
      );
    },
    async onTransformXel() {
      if (!this.showMenu) {
        await this.$store.dispatch(
          VuePixelStore.ToggleMenu(
            { flag: true },
            { namespace: VuePixelStore.namespace }
          )
        );
      }

      await this.$store.dispatch(
        VuePixelStore.DecrementPixelCount(null, {
          namespace: VuePixelStore.namespace,
        })
      );

      if (this.pixelCount === 0) {
        await this.$store.dispatch(
          VuePixelStore.ToggleMenu(
            { flag: false },
            { namespace: VuePixelStore.namespace }
          )
        );
        setTimeout(async () => {
          await this.$store.dispatch(
            VuePixelStore.GameEnd(
              { isEnd: true },
              { namespace: VuePixelStore.namespace }
            )
          );
          setTimeout(() => {
            this.$router.push(this.localePath('about'));
          }, 1000);
        }, 500);
      }
    },
  },
});
</script>

<style scoped lang="sass">
.vue-pixel
  margin: 0 auto

  .actions
    display: flex
</style>
