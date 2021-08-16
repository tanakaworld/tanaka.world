<template>
  <section class="ProfileProduct">
    <h2 class="ProfileProduct__Title" v-text="$t('products')" />
    <div
      v-for="(p, index) in products"
      :key="index"
      class="ProfileProduct__Links"
    >
      <a
        class="ProfileProduct__Link"
        :href="p.url"
        rel="noopener noreferrer"
        target="_blank"
        v-text="p.name"
      />
    </div>
  </section>
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

<style scoped>
.ProfileProduct {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ProfileProduct__Title {
  width: 100%;
  text-align: center;
}

.ProfileProduct__Link:not(:first-child) {
  margin-left: 12px;
}

.ProfileProduct__Link.-blog:hover {
  color: #ece7e7;
}
.ProfileProduct__Link.-twitter:hover {
  color: #4a9fec;
}
.ProfileProduct__Link.-facebook:hover {
  color: #4966ad;
}
.ProfileProduct__Link.-github:hover {
  color: #98a1a8;
}
.ProfileProduct__Link.-qiita:hover {
  color: #72c23a;
}
.ProfileProduct__Link.-linkedin:hover {
  color: #3175b0;
}
.ProfileProduct__Link.-rubygems:hover {
  color: #d96149;
}
</style>
