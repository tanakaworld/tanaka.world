import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  target: 'static',
  srcDir: 'src',
  head: {
    title: 'tanaka.world',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'tanakaworld is a Software Engineer based in Tokyo.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'tanakaworld,SoftwareEngineer,tanaka.world,art,pixelart',
      },
      { hid: 'og:title', property: 'og:title', content: 'The Tanaka World' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://tanaka.wrold' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://tanaka.world/img/cover.jpg',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'The Tanaka World',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'tanakaworld is a Software Engineer in Japan.',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'tanaka.world',
      },

      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/favicons/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  loading: { color: '#91C3DC' },
  css: ['normalize.css', '~/styles/main.css', '~/styles/animation.css'],
  plugins: [],
  buildModules: ['@nuxt/typescript-build'],
  build: {
    extractCSS: true,
  },
  modules: [
    [
      'nuxt-i18n',
      {
        baseUrl: 'https://tanaka.world',
        // used `this.$nuxtI18nSeo()` in layouts/default.vue
        seo: false,
        locales: [
          { code: 'en', file: 'en.ts', iso: 'en-US' },
          { code: 'ja', file: 'ja.ts', iso: 'ja-JP' },
        ],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
        },
      },
    ],
  ],
};

export default config;
