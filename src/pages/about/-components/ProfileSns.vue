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

<style scoped>
.ProfileSns {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ProfileSns__Title {
  width: 100%;
  text-align: center;
}

.ProfileSns__Link:not(:first-child) {
  margin-left: 12px;
}

.ProfileSns__Link.-blog:hover {
  color: #ece7e7;
}
.ProfileSns__Link.-twitter:hover {
  color: #4a9fec;
}
.ProfileSns__Link.-facebook:hover {
  color: #4966ad;
}
.ProfileSns__Link.-github:hover {
  color: #98a1a8;
}
.ProfileSns__Link.-qiita:hover {
  color: #72c23a;
}
.ProfileSns__Link.-linkedin:hover {
  color: #3175b0;
}
.ProfileSns__Link.-rubygems:hover {
  color: #d96149;
}
</style>
