import { Account, Activity, JobHistory, Product } from '~/types/app/about';

export const jobHistories: JobHistory[] = [
  {
    range: '2021.2 ~',
    link: 'https://www.mercari.com/',
    linkLabel: 'Mercari, Inc. (US Remote)',
    role: 'Software Engineer',
  },
  {
    range: '2018.8 ~ 2021.0',
    link: 'https://merpay.com/',
    linkLabel: 'Merpay, Inc.',
    role: 'Software Engineer / Engineering Manager',
  },
  {
    range: '2017.8 ~',
    link: 'https://iki.mn/',
    linkLabel: 'IKIMONO Inc.',
    role: 'Software Engineer',
  },
  {
    range: '2016.8 ~ 2018.7',
    link: 'https://www.curiosity-inc.jp/',
    linkLabel: 'curiosity, inc.',
    role: 'Software Engineer',
  },
  {
    range: '2016.2 ~',
    link: 'https://tanaka.world',
    linkLabel: 'TANAKA WORLD (Self Employed Project)',
  },
  {
    range: '2016.8 ~ 2017.8',
    link: 'https://returnees.jp/',
    linkLabel: 'RETURNEES, Inc.',
    role: 'Lead Engineer',
  },
  {
    range: '2015.3 ~ 2016.7',
    link: 'http://fukurou-labo.co.jp/',
    linkLabel: 'Fukurou Labo',
    role: 'Web Engineer',
  },
  {
    range: '2013.4 ~ 2015.2',
    link: 'http://www.mti.co.jp/',
    linkLabel: 'MTI Ltd.',
    role: 'Backend Developer',
  },
];

export const snsAccounts: Account[] = [
  { name: 'Blog', url: 'https://blog.tanaka.world' },
  { name: 'Twitter', url: 'https://twitter.com/_tanakaworld' },
  { name: 'GitHub', url: 'https://github.com/tanakaworld' },
  { name: 'Speaker Deck', url: 'https://speakerdeck.com/tanakaworld' },
  { name: 'Qiita', url: 'http://qiita.com/tanakaworld' },
  { name: 'Facebook', url: 'https://www.facebook.com/tanaka.world' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yutaro-tanaka-7863b249/',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCO4zZE1KFP3_VA33aEzXgFg',
  },
  {
    name: 'Proff',
    url: 'https://proff.io/p/tanakaworld',
  },
];

export const products: Product[] = [
  { name: 'Proff.io', url: 'https://proff.io' },
  { name: 'RubyGems', url: 'https://rubygems.org/profiles/tanakaworld' },
  { name: 'NPM', url: 'https://www.npmjs.com/~tanakaworld' },
];

export const activities: Activity[] = [
  {
    name: 'メルカリグループの英語学習大解剖',
    url: 'https://mercari.connpass.com/event/241842/',
    date: '2022.03.22',
  },
  {
    name: 'Merpay Advent Calendar 2021- Test Automation Policy in Merpay Frontend',
    url: 'https://engineering.mercari.com/en/blog/entry/20211208-test-automation-policy-in-merpay-frontend/',
    date: '2021.12.08',
  },
  {
    name: 'mercan - #WorkWithMerpay',
    url: 'https://mercan.mercari.com/en/articles/29774/',
    date: '2021.10.08',
  },
  {
    name: 'メルペイ・メルコイン会社説明会&座談会',
    url: 'https://mercari.connpass.com/event/220021/',
    date: '2021.08.04',
  },
  {
    name: 'Merpay Frontend Tech Talk (Q&A)',
    url: 'https://mercari.connpass.com/event/217193/',
    date: '2021.07.08',
  },
  {
    name: 'Merpay Advent Calendar 2020 - Automation with Cypress and TestRail',
    url: 'https://engineering.mercari.com/blog/entry/20201207-cypress-testrail-frontend-e2e-automation/',
    date: '2020.12.08',
  },
  {
    name: 'mercan - Team Interview',
    url: 'https://mercan.mercari.com/articles/19495/',
    date: '2020.01.07',
  },
  {
    name: ' Merpay Advent Calendar 2019 - Looking back Merpay Admin Dashboard',
    url: 'https://engineering.mercari.com/blog/entry/2019-12-12-202128/',
    date: '2019.08.26',
  },
  {
    name: 'NuxtMeetUp#9 オールスターズ',
    url: 'https://nuxt-meetup.connpass.com/event/135514',
    date: '2019.08.26',
  },
  {
    name: 'Mercari x Merpay Frontend Tech Talk vol.2',
    url: 'https://mercari.connpass.com/event/134185/',
    date: '2019.07.03',
  },
  {
    name: 'kawasaki.rb #073〜6周年記念LT大会',
    url: 'https://speakerdeck.com/tanakaworld/how-fast-dev-dot-to-is',
    date: '2019.06.26',
  },
  {
    name: 'メルペイ 会社・事業説明会 for エンジニア #2',
    url: 'https://mercari.connpass.com/event/126795/',
    date: '2019.04.17',
  },
  {
    name: 'In-house Tech Meetup vol.1',
    url: 'https://speakerdeck.com/tanakaworld/how-fast-dev-dot-to-is',
    date: '2018.10.23',
  },
  {
    name: 'Vue.js Tokyo v-meetup #8',
    url: 'https://vuejs-meetup.connpass.com/event/95678/',
    date: '2018.08.28',
  },
  {
    name: 'SXSW 2018 Trade Show',
    url: 'https://www.youtube.com/watch?v=3HFv3-cubxs',
    date: '2018.03.11',
  },
];
