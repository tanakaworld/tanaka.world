<template>
  <div class="GalleryPhoto">
    <p
      class="GalleryPhoto__Description -textSub"
      v-text="$t(photo.description)"
    />
    <img
      loading="lazy"
      width="100"
      height="100"
      :src="photo.file"
      :alt="$t(photo.description)"
      class="GalleryPhoto__Icon"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Photo } from '~/types/app/gallery';

export default Vue.extend({
  props: {
    photo: {
      type: Object as PropType<Photo>,
      required: true,
    },
  },
});
</script>

<style scoped>
.GalleryPhoto {
  height: 200px;
}

.GalleryPhoto__Icon {
  margin: 15px 10px;
}

.GalleryPhoto__Description {
  width: 120px;
  margin-top: -10px;
  padding: 0 10px;
  text-align: center;
  line-height: 20px;
  max-height: 20px;
  overflow-wrap: break-word;
}
</style>
