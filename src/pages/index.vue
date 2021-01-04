<template>
  <vue-pixel
    data-test="HomeVuePixel"
    :main-color="mainColor"
    class="vue-pixel"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import VuePixel from '~/components/vue-pixel/VuePixel.vue';

export default Vue.extend({
  components: {
    VuePixel,
  },
  computed: {
    mainColor() {
      return this.$route.query.color;
    },
  },
});
</script>

<style scoped lang="sass">
.vue-pixel
  margin: 0 auto

  .actions
    display: flex
</style>
