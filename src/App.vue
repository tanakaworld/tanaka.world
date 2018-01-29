<template>
  <div id="app">
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
          <li>
            <router-link to="/gallery">
              Gallery
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style lang="sass">
  @import ./styles/color

  @font-face
    font-smooth: never
    -webkit-font-smoothing: none
    font-family: 'pokemon-font', monospace

  *
    box-sizing: border-box
    &:before, &:after
      box-sizing: border-box

  body
    font-family: pokemon-font, Arial, Helvetica, sans-serif
    color:
    margin: 0
    padding: 0
    background: $color-dark-gray
    color: $color-white

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
