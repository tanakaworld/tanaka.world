<template>
  <section class="ProfileActivities">
    <h2 class="ProfileActivities__Title" v-text="$t('activity')" />
    <ul class="ProfileActivities__List">
      <li
        v-for="(activity, index) in activities"
        :key="index"
        class="ProfileActivities__ListItem"
      >
        <time
          class="ProfileActivities__ListItemRange -textSub"
          :datetime="activity.date"
          v-text="activity.date"
        />
        <div>
          <a
            :href="activity.url"
            class="ProfileActivities__ListItemLink"
            rel="noopener noreferrer"
            target="_blank"
            v-text="activity.name"
          />
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { activities } from '~/utils/about';

export default Vue.extend({
  data() {
    return {
      activities,
    };
  },
});
</script>

<style scoped>
.ProfileActivities__Title {
  width: 100%;
  text-align: center;
  list-style: none;
}

.ProfileActivities__List,
.ProfileActivities__ListItem {
  margin: 0;
  padding: 0;
}

.ProfileActivities__ListItem {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.ProfileActivities__ListItemLink {
  margin-left: 16px;
}

@media screen and (max-width: 560px) {
  .ProfileActivities__ListItem:not(:first-child) {
    margin-top: 8px;
  }

  .ProfileActivities__ListItemRange {
    width: 100%;
  }

  .ProfileActivities__ListItemLink {
    margin-left: 0;
  }
}
</style>
