<template>
  <section class="ProfileTimeline">
    <h2 class="ProfileTimeline__Title" v-text="$t('timeline')" />
    <ul class="ProfileTimeline__List">
      <li
        v-for="(history, index) in jobHistories"
        :key="index"
        class="ProfileTimeline__ListItem"
      >
        <div
          class="ProfileTimeline__ListItemRange -textSub"
          v-text="history.range"
        />
        <div>
          <a
            :href="history.link"
            class="ProfileTimeline__ListItemLink"
            rel="noopener noreferrer"
            target="_blank"
            v-text="history.linkLabel"
          />
        </div>
        <div
          v-if="history.role"
          class="ProfileTimeline__ListItemRole -textSub"
          v-text="`- ${history.role}`"
        />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { jobHistories } from '~/utils/about';

export default Vue.extend({
  data() {
    return {
      jobHistories,
    };
  },
});
</script>

<style scoped>
.ProfileTimeline__Title {
  width: 100%;
  text-align: center;
}

.ProfileTimeline__List,
.ProfileTimeline__ListItem {
  list-style: none;
  margin: 0;
  padding: 0;
}

.ProfileTimeline__ListItem {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.ProfileTimeline__ListItemLink {
  margin-left: 16px;
}

.ProfileTimeline__ListItemRole {
  margin-left: 8px;
}

@media screen and (max-width: 560px) {
  .ProfileTimeline__ListItem:not(:first-child) {
    margin-top: 8px;
  }

  .ProfileTimeline__ListItemRange {
    width: 100%;
  }

  .ProfileTimeline__ListItemLink {
    margin-left: 0;
  }
}
</style>
