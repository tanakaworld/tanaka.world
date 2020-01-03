import { Configuration as NuxtConfiguration } from '@nuxt/types';

const config: NuxtConfiguration = {
  mode: 'universal',
  srcDir: 'src',
  head: {
    title: 'tanaka.world',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'tanakaworld is a Software Engineer in Japan.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'tanakaworld,SoftwareEngineer,tanaka.world,art,pixelart'
      },
      { hid: 'og:title', property: 'og:title', content: 'The Tanaka World' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://tanaka.wrold' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://tanaka.world/img/og.png'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'The Tanaka World'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'tanakaworld is a Software Engineer in Japan.'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'tanaka.world'
      },

      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#da532c'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/favicons/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },
  loading: { color: '#91C3DC' },
  css: ['~/styles/main.css'],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/typescript-build'],
  build: {
    extractCSS: true
  },
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [{ code: 'en', file: 'en.ts' }, { code: 'ja', file: 'ja.ts' }],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en'
        }
      }
    ]
  ]
};

export default config;
