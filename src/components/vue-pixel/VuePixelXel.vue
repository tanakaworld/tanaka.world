<template>
  <div
    :class="{ debug: debug }"
    :style="{ background: bgColor }"
    class="xel"
    @mouseover="handleHover"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import * as VuePixelStore from '~/store/modules/vue-pixel';

export default Vue.extend({
  props: {
    debug: {
      type: Boolean,
      default: false,
    },
    static: {
      type: Boolean,
      default: false,
    },
    beforeColor: {
      type: String,
      default: null,
    },
    afterColor: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      bgColor: this.beforeColor,
      transformed: false,
    };
  },
  computed: {
    ...mapGetters({
      showMenu: `${VuePixelStore.namespace}/showMenu`,
      pixelCount: `${VuePixelStore.namespace}/pixelCount`,
    }),
  },
  methods: {
    async handleHover() {
      if (!this.static && !this.transformed) {
        this.bgColor = this.afterColor;
        this.transformed = true;

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
      }
    },
  },
});
</script>

<style scoped lang="sass">
.xel
  flex: 1
  font-size: 10px
  cursor: pointer
  &.debug
    border: 1px solid gray

  position: relative
  width: 100%
  &:before
    content: ''
    display: block
    padding-top: 100%

  transition: all .3s ease
</style>
