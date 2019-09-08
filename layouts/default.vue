<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App'
})
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
