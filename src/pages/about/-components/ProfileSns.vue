<template>
  <div class="ProfileSns">
    <h2 class="ProfileSns__Title" v-text="$t('links')" />
    <div
      v-for="(account, index) in snsAccounts"
      :key="index"
      class="ProfileSns__Links"
    >
      <a
        class="ProfileSns__Link"
        :class="`-${account.name.toLowerCase()}`"
        :href="account.url"
        target="_blank"
        v-text="account.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getAgeLocal } from '~/utils/date';
import { snsAccounts } from '~/utils/about';

export default Vue.extend({
  data() {
    return {
      snsAccounts,
      level: getAgeLocal('1990-11-07'),
    };
  },
});
</script>

<style scoped lang="sass">
.ProfileSns
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.ProfileSns__Title
  width: 100%
  text-align: center

.ProfileSns__Link
  &:not(:first-child)
    margin-left: 12px

@mixin sns-link($name, $color)
  .ProfileSns__Link.-#{$name}
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
