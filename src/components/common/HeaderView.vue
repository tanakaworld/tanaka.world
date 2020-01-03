<template>
  <header>
    <h1 id="title">
      <n-link :to="localePath('index')" v-text="$t('title')" />
    </h1>
    <nav id="nav">
      <ul>
        <li>
          <n-link :to="localePath('about')" v-text="$t('about')" />
        </li>
        <li>
          <n-link :to="localePath('gallery')" v-text="$t('gallery')" />
        </li>
        <li>
          <LocalSwitchButton />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

import LocalSwitchButton from '~/components/LocaleSwitchButton.vue';

export default Vue.extend({
  components: {
    LocalSwitchButton
  }
});
</script>

<style scoped lang="sass">
header
  display: flex
  flex-flow: row
  flex-wrap: wrap

  color: var(--color-white)
  background: var(--color-dark-gray)

  margin-bottom: 48px

  #title
    flex: 2
    a
      padding: 10px
    .nuxt-link-exact-active
      background-color: initial
  #nav
    ul
      display: flex
      flex-flow: row
      flex-wrap: wrap
      list-style: none
    li
      flex: 1
      a
        margin: 10px
        padding: 10px
  a
    display: inline-block
    white-space: nowrap
    color: var(--color-white)
    text-decoration: none
    border-radius: 3px
    &.active, &:hover
      background-color: var(--color-gray)

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
