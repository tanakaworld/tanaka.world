<template>
  <header>
    <h1 id="title">
      <router-link to="/">
        TANAKA WORLD
      </router-link>
    </h1>
    <nav id="nav">
      <ul>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <!--<li>-->
          <!--<router-link to="/gallery">-->
            <!--Gallery-->
          <!--</router-link>-->
        <!--</li>-->
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'header-view',
  };
</script>

<style scoped lang="sass">
  @import ../../styles/color

  header
    display: flex
    flex-flow: row
    flex-wrap: wrap

    color: $color-white
    background: $color-dark-gray

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
      color: $color-white
      text-decoration: none
      border-radius: 3px
      &.active, &:hover
        background-color: $color-gray
</style>
