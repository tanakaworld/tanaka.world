<template>
  <div class="vue-pixel-board">
    <div v-show="showMenu" class="pixel-menu color">
      <a v-if="showMenu" class="color-button" @click="goToRandom">
        <div class="color-button-row">
          <div
            :style="{ 'background-color': suggestColors[0] }"
            class="color-button-item"
          />
          <div
            :style="{ 'background-color': suggestColors[1] }"
            class="color-button-item"
          />
        </div>
        <div class="color-button-row">
          <div
            :style="{ 'background-color': suggestColors[2] }"
            class="color-button-item"
          />
          <div
            :style="{ 'background-color': suggestColors[3] }"
            class="color-button-item"
          />
        </div>
      </a>
    </div>
    <div class="pixel-menu skip">
      <a v-if="showMenu" class="skip-button" @click="skipAnimation">
        <div class="skip-button-text">Skip</div>
        <div class="pixel-count-text">{{ pixelCount }}</div>
      </a>
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
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import randomcolor from 'randomcolor'
import * as VuePixelStore from './store'
import VuePixelXel from '~/components/vue-pixel/VuePixelXel.vue'

const generateSuggestColors = () => {
  return [randomcolor(), randomcolor(), randomcolor(), randomcolor()]
}

export default Vue.extend({
  name: 'VuePixelBoard',
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
      showBoard: true,
      suggestColors: generateSuggestColors()
    }
  },
  computed: {
    ...mapGetters({
      showMenu: `${VuePixelStore.namespace}/showMenu`,
      pixelCount: `${VuePixelStore.namespace}/pixelCount`
    })
  },
  mounted() {
    this.initPixels()
  },
  methods: {
    // For touch devices
    handleTouchMove(e) {
      if (e && e.target) {
        const { pageX, pageY } = e
        const xelId = document.elementFromPoint(pageX, pageY).dataset.xelId
        const xelComponent = this.$refs[xelId]

        if (xelComponent && xelComponent[0] instanceof Vue) {
          xelComponent[0].handleHover()
        }
      }
    },
    skipAnimation() {
      const xels = []
      Object.keys(this.$refs).forEach(key => {
        const component = this.$refs[key]
        if (key.startsWith('xel.') && component[0] instanceof Vue) {
          xels.push(component[0])
        }
      })
      xels
        .sort(() => Math.random() - 0.5)
        .forEach(xel => setTimeout(() => xel.handleHover(), Math.random() * 2))
    },
    goToRandom() {
      this.showBoard = false

      // refresh
      const color = randomcolor()
      this.$router.push(`/?color=${color.slice(1)}`) // remove '#'
      this.suggestColors = generateSuggestColors()
      this.initPixels()

      this.$nextTick(() => {
        this.showBoard = true
      })
    },
    initPixels() {
      const pixelCount = Object.keys(this.$refs).filter(
        k => !this.$refs[k][0].static
      ).length
      this.$store.commit(
        VuePixelStore.SetPixelTotal(
          {
            pixelCount
          },
          { namespace: VuePixelStore.namespace }
        )
      )
    }
  }
})
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
