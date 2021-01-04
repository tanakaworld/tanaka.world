<template>
  <div class="ProfileProduct">
    <h2 class="ProfileProduct__Title" v-text="$t('products')" />
    <div
      v-for="(p, index) in products"
      :key="index"
      class="ProfileProduct__Links"
    >
      <a
        class="ProfileProduct__Link"
        :href="p.url"
        target="_blank"
        v-text="p.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { products } from '~/utils/about';

export default Vue.extend({
  data() {
    return {
      products,
    };
  },
});
</script>

<style scoped lang="sass">
.ProfileProduct
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.ProfileProduct__Title
  width: 100%
  text-align: center

.ProfileProduct__Link
  &:not(:first-child)
    margin-left: 12px

@mixin sns-link($name, $color)
  .ProfileProduct__Link.-#{$name}
    &:hover
      color: $color

+sns-link('blog', #ece7e7)
+sns-link('twitter', #4A9FEC)
+sns-link('facebook', #4966AD)
+sns-link('github', #98a1a8)
+sns-link('qiita', #72C23A)
+sns-link('linkedin', #3175B0)
+sns-link('rubygems', #D96149)
</style>
