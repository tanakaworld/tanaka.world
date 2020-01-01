<template>
  <div class="Gallery">
    <h2 class="Gallery__SubTitle">干支</h2>
    <div class="Gallery__Section">
      <GalleryPhoto v-for="p in etos" :key="p.file" :photo="p" />
    </div>

    <h2 class="Gallery__SubTitle">ME</h2>
    <div class="Gallery__Section">
      <GalleryPhoto v-for="p in me" :key="p.file" :photo="p" />
    </div>

    <h2 class="Gallery__SubTitle">Others</h2>
    <div class="Gallery__Section">
      <GalleryPhoto v-for="p in photos" :key="p.file" :photo="p" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GalleryPhoto from '~/components/GalleryPhoto.vue';
import { etos, me, photos } from '~/utils/gallery';

const title = 'Gallery - The TANAKA WORLD';
const description = 'Arts made by me';

export default Vue.extend({
  components: {
    GalleryPhoto
  },
  data() {
    return {
      etos,
      me,
      photos
    };
  },
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
  }
});
</script>

<style scoped lang="sass">
@import ../../styles/color

.Gallery
  .Gallery__SubTitle
    text-align: center

  .Gallery__Section
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
