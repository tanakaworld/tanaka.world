<template>
  <footer class="Footer">
    <div class="-textSub">
      (c) {{ year }}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/tanakaworld/tanaka.world"
        v-text="'tanakaworld'"
      />
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
});
</script>

<style scoped>
.Footer {
  width: 100%;
  padding: 12px;
  display: flex;
  flex-flow: row;
  justify-content: center;
}
</style>
