<template>
  <div>
    <header-view/>
    <vue-pixel/>
  </div>
</template>

<script>
  import HeaderView from '@/components/common/HeaderView';
  import VuePixel from '@/components/vue-pixel/VuePixel';

  export default {
    name: 'home',
    components: {
      HeaderView,
      VuePixel,
    },
  };
</script>

<style scoped>

</style>
