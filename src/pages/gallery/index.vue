<template>
  <div>
    <header-view />
    <div id="gallery">
      <div v-for="(c, index) in photos" :key="index" class="thumbnail">
        <p class="description">{{ c.description }}</p>
        <img :src="c.file" :alt="c.description" class="gallery-icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderView from '~/components/common/HeaderView.vue';
import { photos } from '~/utils/gallery';

const title = 'Gallery - The TANAKA WORLD';
const description = 'Arts made by me';

export default Vue.extend({
  head: {
    title,
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tanaka.world/gallery'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      }
    ]
  },
  name: 'Gallery',
  components: {
    HeaderView
  },
  data() {
    return {
      photos
    };
  }
});
</script>

<style scoped lang="sass">
@import ../../styles/color

#gallery
  width: 90%
  margin: 0 auto
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  padding: 24px
  box-sizing: border-box
  .thumbnail
    height: 200px
    .gallery-icon
      width: 100px
      margin: 15px 10px
    .description
      width: 120px
      margin-top: -10px
      padding: 0 10px
      text-align: center
      line-height: 20px
      max-height: 20px
      overflow-wrap: break-word
</style>
