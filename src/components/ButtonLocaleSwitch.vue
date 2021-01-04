<template>
  <div class="ButtonLocaleSwitch">
    <nuxt-link class="ButtonLocaleSwitch__Link" :to="switchLocalePath('en')">
      🇺🇸
    </nuxt-link>
    <span>/</span>
    <nuxt-link :to="switchLocalePath('ja')">🇯🇵</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="sass">
.ButtonLocaleSwitch
  padding: 12px
  display: flex
  flex-flow: row
  align-items: center
  justify-content: center

.ButtonLocaleSwitch__Link
  padding: 4px
  border-radius: 4px
  height: 24px
  line-height: 24px
  text-align: center
</style>
