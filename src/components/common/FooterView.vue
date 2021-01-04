<template>
  <footer>
    <div class="-textSub">(c) {{ year }} tanakaworld</div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
});
</script>

<style scoped lang="sass">
footer
  width: 100%
  padding: 12px
  display: flex
  flex-flow: row
  justify-content: center
</style>
