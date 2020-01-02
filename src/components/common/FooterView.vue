<template>
  <header>
    <h1 id="title">
      <n-link to="/">
        TANAKA WORLD
      </n-link>
    </h1>
    <div>
      <nuxt-link :to="switchLocalePath('en')" :disabled="$i18n.locale === 'en'">
        EN
      </nuxt-link>
      /
      <nuxt-link :to="switchLocalePath('ja')" :disabled="$i18n.locale === 'ja'">
        JA
      </nuxt-link>
    </div>
    <nav id="nav">
      <ul>
        <li>
          <n-link to="/about">
            {{ $t('about') }}
          </n-link>
        </li>
        <li>
          <n-link to="/gallery">
            {{ $t('gallery') }}
          </n-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
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
