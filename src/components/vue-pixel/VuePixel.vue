<template>
  <vue-pixel-board :class="{ gameEnd: isGameEnd }" :seed="seed" />
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import * as VuePixelStore from '~/store/modules/vue-pixel';
import VuePixelBoard from '~/components/vue-pixel/VuePixelBoard.vue';
import { generateSeed } from '~/utils/pixel';
import { Xel } from '~/types/app/pixel';

export default Vue.extend({
  components: {
    VuePixelBoard
  },
  props: {
    mainColor: {
      type: String,
      default: null
    }
  },
  data(): { seed: Xel[][] } {
    return {
      seed: []
    };
  },
  computed: {
    ...mapGetters({
      isGameEnd: `${VuePixelStore.namespace}/gameEnd`
    })
  },
  watch: {
    mainColor: {
      handler(val) {
        this.seed = generateSeed(val);
      },
      immediate: true
    }
  },
  mounted() {
    this.$store.dispatch(
      VuePixelStore.GameEnd(
        { isEnd: false },
        { namespace: VuePixelStore.namespace }
      )
    );
  }
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
</style>
