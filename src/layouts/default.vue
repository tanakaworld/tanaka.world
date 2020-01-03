<template>
  <div>
    <header-view ref="headerView" />
    <main>
      <nuxt
        :style="{
          width: isScaleMode ? `${mainWidth}px` : 'auto',
          height: isScaleMode ? `${mainHeight}px` : 'auto'
        }"
      />
    </main>
    <footer-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderView from '~/components/common/HeaderView.vue';
import FooterView from '~/components/common/FooterView.vue';

export default Vue.extend({
  components: {
    HeaderView,
    FooterView
  },
  data() {
    return {
      mainWidth: 0,
      mainWidthMax: 600,
      mainHeight: 0,
      fixBody: true
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateViePixelHeight);
    this.updateViePixelHeight();
    this.fixBody = true;
  },
  beforeDestroy() {
    this.fixBody = false;
    window.removeEventListener('resize', this.updateViePixelHeight);
  },
  computed: {
    isScaleMode() {
      return this.$route.path === this.localePath('index');
    }
  },
  methods: {
    updateViePixelHeight() {
      if (window) {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const headerHeight = this.$refs.headerView.$el.clientHeight;
        // calc height
        this.mainHeight = windowHeight - headerHeight;
        // calc width
        let tmpWidth = (this.mainHeight * 14) / 16;
        if (tmpWidth > windowWidth) tmpWidth = windowWidth;
        this.mainWidth = tmpWidth;
      }
    }
  },
  head() {
    return {
      bodyAttrs: {
        // @ts-ignore
        class: this.fixBody ? 'no-scrodll' : ''
      }
    };
  }
});
</script>
