<template>
  <div class="About">
    <div class="About__Inner">
      <ProfileShort class="About__Row" />
      <div class="About__Row -border">{{ $t('bio') }}</div>
      <ProfileSns class="About__Row" />
      <ProfileProduct class="About__Row" />
      <ProfileActivity class="About__Row" />
      <ProfileTimeline class="About__Row" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { jobHistories, products, snsAccounts } from '~/utils/about';
import { getAgeLocal } from '~/utils/date';
import ProfileShort from '~/pages/about/-components/ProfileShort.vue';
import ProfileSns from '~/pages/about/-components/ProfileSns.vue';
import ProfileProduct from '~/pages/about/-components/ProfileProduct.vue';
import ProfileActivity from '~/pages/about/-components/ProfileActivity.vue';
import ProfileTimeline from '~/pages/about/-components/ProfileTimeline.vue';

const title = 'About - The TANAKA WORLD';
const description = 'Who am I ?';

export default Vue.extend({
  components: {
    ProfileShort,
    ProfileSns,
    ProfileProduct,
    ProfileActivity,
    ProfileTimeline,
  },
  data() {
    return {
      jobHistories,
      snsAccounts,
      products,
      level: getAgeLocal('1990-11-07'),
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
        content: 'https://tanaka.world/about',
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
.About {
  display: flex;
  justify-items: center;
  justify-content: center;
  font-size: 20px;
}

.About__Inner {
  max-width: 700px;
  padding: 24px;
  box-sizing: border-box;
}

.About__Row {
  padding: 16px;
  line-height: 1.5em;
}

.About__Row:not(:first-child) {
  margin-top: 12px;
}

.About__Row.-border {
  border-top: solid 1px var(--color-sky-blue);
}

@media screen and (max-width: 730px) {
  .About__Inner {
    width: 100%;
  }

  .About__Row {
    padding: 8px;
  }
}

@media screen and (max-width: 560px) {
  .About {
    font-size: 16px;
  }
}

@media screen and (max-width: 320px) {
  .About {
    font-size: 10px;
  }

  .About__Row {
    flex-direction: column !important;
  }
}
</style>
