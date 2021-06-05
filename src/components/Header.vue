<template>
  <header class="Header">
    <h1 class="Header__Title">
      <n-link :to="localePath('index')" v-text="$t('title')" />
    </h1>
    <nav class="Header__Nav">
      <ul>
        <li>
          <n-link
            class="Header__NavLink"
            :to="localePath('about')"
            v-text="$t('about')"
          />
        </li>
        <li>
          <n-link
            class="Header__NavLink"
            :to="localePath('gallery')"
            v-text="$t('gallery')"
          />
        </li>
        <li>
          <ButtonLocaleSwitch class="Header__NavLink" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

import ButtonLocaleSwitch from '~/components/ButtonLocaleSwitch.vue';

export default Vue.extend({
  components: {
    ButtonLocaleSwitch,
  },
});
</script>

<style scoped>
.Header {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.Header__Title {
  flex: 2;
}
.Header__Title a {
  padding: 10px;
  color: var(--color-link-text);
}
/* overwrite main style */
.Header__Title .nuxt-link-exact-active {
  background-color: initial;
}

.Header__Nav ul {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  list-style: none;
}
.Header__Nav li {
  flex: 1;
}

.Header__NavLink {
  margin: 10px;
  padding: 10px;
  display: inline-block;
  white-space: nowrap;
  border-radius: 3px;
}

@media screen and (max-width: 730px) {
  .Header__Title,
  .Header__Nav {
    text-align: center;
  }

  .Header__Nav {
    width: 100%;
  }
  .Header__Nav ul {
    margin: 0;
    padding: 0;
  }
}
</style>
