<template>
  <section class="ProfileShort">
    <div class="ProfileShort__Icon">
      <img
        class="ProfileShort__IconImg"
        alt="Profile Icon"
        src="/img/tanakaworld-2018.png"
        width="200"
        height="200"
      />
    </div>
    <div class="ProfileShort__Property">
      <div v-text="$t('name')" />
      <div class="-textSub" v-text="$t('job')" />
      <div class="-textSub" v-text="$t('height', ['1.74'])" />
      <div class="-textSub" v-text="$t('weight', ['55.0'])" />
      <div class="-textSub" v-text="$t('place')" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
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
}

.ProfileShort__Property {
  margin-left: 12px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

@media screen and (max-width: 400px) {
  .ProfileShort__IconImg {
    width: 100px;
    height: 100px;
  }
}
</style>
