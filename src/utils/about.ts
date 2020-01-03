import { Account, JobHistory, Product } from '~/types/app/about';

export const jobHistories: JobHistory[] = [
  {
    range: '2018.8 ~',
    link: 'https://merpay.com/',
    linkLabel: 'Merpay, Inc.',
    role: 'Software Engineer (Frontend)'
  },
  {
    range: '2017.8 ~',
    link: 'https://iki.mn/',
    linkLabel: 'IKIMONO Inc.',
    role: 'Software Engineer'
  },
  {
    range: '2016.8 ~ 2018.7',
    link: 'https://www.curiosity-inc.jp/',
    linkLabel: 'curiosity, inc.',
    role: 'Software Engineer'
  },
  {
    range: '2016.2 ~',
    link: 'https://tanaka.world',
    linkLabel: 'TANAKA WORLD (Self Employed Project)'
  },
  {
    range: '2016.8 ~ 2017.8',
    link: 'https://returnees.jp/',
    linkLabel: 'RETURNEES, Inc.',
    role: 'Lead Engineer'
  },
  {
    range: '2015.3 ~ 2016.7',
    link: 'http://fukurou-labo.co.jp/',
    linkLabel: 'Fukurou Labo',
    role: 'Web Engineer'
  },
  {
    range: '2013.4 ~ 2015.2',
    link: 'http://www.mti.co.jp/',
    linkLabel: 'MTI Ltd.',
    role: 'Backend Developer'
  }
];

export const snsAccounts: Account[] = [
  { name: 'Blog', url: 'https://blog.tanaka.world' },
  { name: 'Twitter', url: 'https://twitter.com/_tanakaworld' },
  { name: 'Github', url: 'https://github.com/tanakaworld' },
  { name: 'Slides', url: 'https://speakerdeck.com/tanakaworld' },
  { name: 'Qiita', url: 'http://qiita.com/tanakaworld' },
  { name: 'Facebook', url: 'https://www.facebook.com/tanaka.world' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yutaro-tanaka-7863b249/'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCO4zZE1KFP3_VA33aEzXgFg'
  }
];

export const products: Product[] = [
  { name: 'Proff.io', url: 'https://proff.io' },
  { name: 'RubyGems', url: 'https://rubygems.org/profiles/tanakaworld' },
  { name: 'NPM', url: 'https://www.npmjs.com/~tanakaworld' }
];
