<template>
  <div>
    <div class="board" v-for="(s, i) in seed" :key="`board.${i}`">
      <div class="row">
        <vue-pixel-xel v-for="(xel, j) in s" :key="`row.${j}`"
                       :before-color="xel.before"
                       :after-color="xel.after"
                       :static="xel.static === true"
                       :debug="debug"/>
      </div>
    </div>
  </div>
</template>

<script>
  import VuePixelXel from '@/components/vue-pixel/VuePixelXel';

  export default {
    name: 'vue-pixel-board',
    components: {
      VuePixelXel,
    },
    props: {
      seed: {
        type: Array,
        required: true,
      },
      debug: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  };
</script>

<style scoped lang="sass">
  .board
    max-width: 600px
    margin: 0 auto

    .row
      display: flex
      flex-direction: row
      justify-content: center
</style>
