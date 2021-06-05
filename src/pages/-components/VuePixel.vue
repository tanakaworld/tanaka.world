<template>
  <div class="VuePixel" :class="{ '-gameEnd': isGameEnd }">
    <div v-show="isShowMenu" class="VuePixel__Menu -left">
      <ButtonRandomColor
        v-if="isShowMenu"
        data-test="ButtonColor"
        @click="onClickRandom"
      />
    </div>
    <div class="VuePixel__Menu -right">
      <ButtonSkipPixel
        v-if="isShowMenu"
        data-test="ButtonSkipPixel"
        :pixel-count="pixelCount"
        @click="skipAnimation"
      />
    </div>
    <template v-if="isShowBoard">
      <div
        v-for="(s, i) in seed"
        :key="`board.${i}`"
        class="VuePixel__Board"
        @touchmove="handleTouchMove($event)"
      >
        <div class="VuePixel__BoardRow">
          <VuePixelXel
            v-for="(xel, j) in s"
            :key="`row.${j}`"
            :ref="`xel.${i}.${j}`"
            data-test="VuePixelXel"
            :data-xel-id="`xel.${i}.${j}`"
            :before-color="xel.before"
            :after-color="xel.after"
            :static="xel.static === true"
            :debug="debug"
            :pixel-count="pixelCount"
            :show-menu="isShowMenu"
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
import VuePixelXel from '~/pages/-components/VuePixelXel.vue';
import ButtonRandomColor from '~/pages/-components/ButtonRandomColor.vue';
import ButtonSkipPixel from '~/pages/-components/ButtonSkipPixel.vue';

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
    isShowBoard: {
      type: Boolean,
      required: true,
    },
    isShowMenu: {
      type: Boolean,
      required: true,
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

<style scoped>
.VuePixel {
  position: relative;
}

.VuePixel.-gameEnd {
  animation: swing 0.4s ease;
  animation-iteration-count: infinite;
}

.VuePixel__Menu {
  position: absolute;
  top: 0;
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  z-index: 10;
}

.VuePixel__Menu.-left {
  left: 42px;
}

.VuePixel__Menu.-right {
  right: 42px;
  display: flex;
  flex-direction: column;
}

.VuePixel__Board {
  z-index: 5;
  max-width: 600px;
  margin: 0 auto;
}

.VuePixel__BoardRow {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

@media screen and (max-width: 730px) {
  .VuePixel {
    margin-top: 40px;
  }
  .VuePixel__Menu {
    top: -40px;
  }
}
</style>
