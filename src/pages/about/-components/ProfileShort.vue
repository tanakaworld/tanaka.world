<template>
  <section class="ProfileShort">
    <div class="ProfileShort__Icon">
      <img
        class="ProfileShort__IconImg"
        alt="Profile Icon"
        src="/img/tanakaworld-2018.png"
      />
    </div>
    <div class="ProfileShort__Property">
      <div>
        <n-link :to="localePath('index')" v-text="$t('name')" />
      </div>
      <div class="-textSub" v-text="$t('job')" />
      <div class="-textSub" v-text="$t('level', [level])" />
      <div class="-textSub" v-text="$t('height', ['1.74'])" />
      <div class="-textSub" v-text="$t('weight', ['55.0'])" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { getAgeLocal } from '~/utils/date';

export default Vue.extend({
  data() {
    return {
      level: getAgeLocal('1990-11-07'),
    };
  },
});
</script>

<style scoped>
.ProfileShort {
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ProfileShort__IconImg {
  transform: scaleX(-1);
  width: 100%;
  max-width: 500px;
  max-height: 500px;
}

.ProfileShort__Property {
  margin-left: 12px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

@media screen and (max-width: 730px) {
  .ProfileShort__IconImg {
    width: 100%;
  }
}
</style>
