<template>
  <header>
    <h1 id="title">
      <n-link to="/">
        TANAKA WORLD
      </n-link>
    </h1>
    <nav id="nav">
      <ul>
        <li>
          <n-link to="/about">
            About
          </n-link>
        </li>
        <li>
          <n-link to="/gallery">
            Gallery
          </n-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HeaderView'
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
</style>
