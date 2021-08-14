<template>
  <div class="Gallery">
    <h2 class="Gallery__SubTitle" v-text="$t('zodiac')" />
    <section class="Gallery__Section">
      <GalleryPhoto v-for="p in zodiacs" :key="p.file" :photo="p" />
    </section>

    <h2 class="Gallery__SubTitle" v-text="$t('me')" />
    <section class="Gallery__Section">
      <GalleryPhoto v-for="p in portraits" :key="p.file" :photo="p" />
    </section>

    <h2 class="Gallery__SubTitle" v-text="$t('friends')" />
    <section class="Gallery__Section">
      <GalleryPhoto v-for="p in friends" :key="p.file" :photo="p" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GalleryPhoto from '~/pages/gallery/-components/GalleryPhoto.vue';
import { zodiacs, portraits, friends } from '~/utils/gallery';

const title = 'Gallery - The TANAKA WORLD';
const description = 'Arts made by me';

export default Vue.extend({
  components: {
    GalleryPhoto,
  },
  data() {
    return {
      zodiacs,
      portraits,
      friends,
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
        content: 'https://tanaka.world/gallery',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
    ],
  },
});
</script>

<style scoped>
.Gallery {
  max-width: 900px;
}

.Gallery__SubTitle {
  text-align: center;
}

.Gallery__Section {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
</style>
