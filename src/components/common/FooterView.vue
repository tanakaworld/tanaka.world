<template>
  <footer>
    <div>
      <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
      /
      <nuxt-link :to="switchLocalePath('ja')">JA</nuxt-link>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="sass">
footer
  position: fixed
  bottom: 0
  margin: 0
  padding: 12px
  display: flex
  flex-flow: row
  flex-wrap: wrap

  a
    padding: 4px
    border-radius: 4px
    height: 24px
    line-height: 24px
    text-align: center
</style>
