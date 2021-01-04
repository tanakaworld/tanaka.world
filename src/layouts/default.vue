<template>
  <div>
    <Header ref="headerView" />
    <main>
      <nuxt
        :style="{
          width: isScaleMode ? `${mainWidth}px` : 'auto',
          height: isScaleMode ? `${mainHeight}px` : 'auto',
        }"
      />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      mainWidth: 0,
      mainWidthMax: 600,
      mainHeight: 0,
      fixBody: true,
      isScaleMode: true,
    };
  },
  watch: {
    $route: {
      handler(to) {
        this.$nextTick(() => {
          this.isScaleMode = to.path === this.localePath('index');
        });
      },
      immediate: true,
    },
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
    },
  },
  head() {
    return {
      bodyAttrs: {
        // @ts-ignore
        class: this.fixBody ? 'no-scrodll' : '',
      },
      ...this.$nuxtI18nSeo(),
    };
  },
});
</script>
