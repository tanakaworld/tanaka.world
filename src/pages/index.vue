<template>
  <VuePixel
    class="VuePixel"
    data-test="HomeVuePixel"
    :main-color="mainColor"
    :pixel-count="pixelCount"
    :seed="seed"
    :is-game-end="isGameEnd"
    :is-show-board="isShowBoard"
    :is-show-menu="isShowMenu"
    :debug="isDebug"
    @click-random="onClickRandom"
    @init-pixels="initXels"
    @transform-xel="onTransformXel"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import randomcolor from 'randomcolor';
import VuePixel from '~/pages/-components/VuePixel.vue';
import * as VuePixelStore from '~/store/modules/vue-pixel';
import { countXels, generateSeed } from '~/utils/pixel';

export default Vue.extend({
  components: {
    VuePixel,
  },
  data() {
    return {
      seed: generateSeed(),
      isShowBoard: true,
    };
  },
  computed: {
    ...mapGetters({
      isGameEnd: `${VuePixelStore.namespace}/gameEnd`,
      isShowMenu: `${VuePixelStore.namespace}/showMenu`,
      pixelCount: `${VuePixelStore.namespace}/pixelCount`,
    }),
    mainColor() {
      return this.$route.query.color;
    },
    isDebug() {
      return !!this.$route.query.debug;
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
      this.isShowBoard = false;
      // refresh
      const color = randomcolor();
      this.$router.push(
        this.localePath({ name: 'index', query: { color: color.slice(1) } })
      ); // remove '#'
      this.$nextTick(() => {
        this.isShowBoard = true;
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
      // @ts-ignore FIXME
      if (!this.isShowMenu) {
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

      // @ts-ignore FIXME
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

<style scoped>
.VuePixel {
  margin: 0 auto;
}
</style>
