module.exports = {
  head: {
    title: 'tanaka.world',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'tanakaworld is a Software Engineer in Japan.' },
      { hid: 'keywords', name: 'keywords', content: 'tanakaworld,SoftwareEngineer,tanaka.world' },
      { hid: 'og:title', name: 'og:title', content: 'The Tanaka World' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://tanaka.wrold' },
      { hid: 'og:locale', name: 'og:locale', content: 'ja_JP' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'The Tanaka World' },
      {
        hid: 'og:description', name: 'og:description',
        content: 'tanakaworld is a Software Engineer in Japan.',
      },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'tanaka.world' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#da532c' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  plugins: [],
  loading: { color: '#22419B' },
  buildDir: '../public',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    babel: {
      presets: [
        '@babel/preset-env',
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-template-literals"
      ]
    },
    modules: [
      '@nuxtjs/pwa',
    ],
    manifest: {
      name: 'tanaka.world',
      lang: 'ja',
    },
    vendor: [
      'babel-polyfill'
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
