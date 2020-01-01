<template>
  <div>
    <header-view ref="headerView" />
    <main>
      <nuxt
        :style="{
          width: `${mainWidth}px`,
          height: `${mainHeight}px`
        }"
      />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderView from '~/components/common/HeaderView.vue';

export default Vue.extend({
  components: {
    HeaderView
  },
  data() {
    return {
      mainWidth: 0,
      mainWidthMax: 600,
      mainHeight: 0,
      fixBody: true
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateViePixelHeight);
    this.updateViePixelHeight();
    this.fixBody = true;
  },
  beforeDestroy() {
    this.fixBody = false;
    window.removeEventListener('resize', this.updateViePixelHeight);
  },
  methods: {
    updateViePixelHeight() {
      if (window) {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const headerHeight = this.$refs.headerView.$el.clientHeight;
        // calc height
        this.mainHeight = windowHeight - headerHeight;
        // calc width
        let tmpWidth = (this.mainHeight * 14) / 16;
        if (tmpWidth > windowWidth) tmpWidth = windowWidth;
        this.mainWidth = tmpWidth;
      }
    }
  },
  head() {
    return {
      bodyAttrs: {
        // @ts-ignore
        class: this.fixBody ? 'no-scrodll' : ''
      }
    };
  }
});
</script>

<style lang="sass">
@import '../styles/color'

@font-face
  font-family: 'Misaki Gothic'
  src: url('../assets/fonts/misaki_gothic.ttf') format('truetype')

@font-face
  font-family: 'Misaki Mincho'
  src: url('../assets/fonts/misaki_mincho.ttf') format('truetype')

*
  box-sizing: border-box
  &:before, &:after
    box-sizing: border-box

body
  font-family: Misaki Gothic, Misaki Mincho, Arial, Helvetica, sans-serif
  color:
  margin: 0
  padding: 0
  background: $color-dark-gray
  color: $color-white

  &.no-scroll
    overflow: hidden

a
  text-decoration: none
  color: $color-sky-blue

main
  display: flex
  align-items: center
  flex-direction: column

section
  padding: 20px
  color: $color-white

@media screen and (max-width: 730px)
  header
    #title, #nav
      text-align: center
    #nav
      width: 100%
      ul
        margin: 0
        padding: 0
</style>
