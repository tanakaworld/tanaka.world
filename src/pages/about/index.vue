<template>
  <div id="about">
    <div class="profile-wrap">
      <div class="profile-row profile-row-has-child">
        <div>
          <img
            class="profile-icon"
            alt="Profile Icon"
            src="/img/tanakaworld-2018.png"
          />
        </div>
        <div class="profile-property">
          <div>
            <router-link to="http://tanaka.world">
              tanakaworld
            </router-link>
          </div>
          <div>Software Engineer</div>
          <div>LV.{{ level }}</div>
          <div>
            たかさ 1.74 m
          </div>
          <div>
            おもさ 58.0 kg
          </div>
        </div>
      </div>
      <div class="profile-row">
        Web
        に関することは何でもやるマン。上場企業・スタートアップ・個人事業主を経て、フロントエンドからインフラまで多くのプロジェクトに携わる。JavaScript・C#・Ruby
        を用いたアプリケーション開発を得意としている。
        ピクセルアート、ルービックキューブ、イヌが好き。趣味は、
        <a
          href="https://www.youtube.com/watch?v=qpkCstorMxs&t=1207s"
          target="_blank"
        >
          パズル
        </a>
        ・将棋（ウォーズ初段）。
      </div>
      <div class="profile-row no-border sns-links-wrap">
        <h2 class="profile-row-title">
          SNS
        </h2>
        <div v-for="(account, index) in snsAccounts" :key="index">
          <a
            :class="`sns-link-${account.name.toLowerCase()}`"
            :href="account.url"
            class="sns-link sns-link-twitter"
            target="_blank"
          >
            {{ account.name }}
          </a>
        </div>
      </div>
      <div class="profile-row no-border sns-links-wrap">
        <h2 class="profile-row-title">
          Product
        </h2>
        <div v-for="(p, index) in products" :key="index">
          <a
            :class="`sns-link-${p.name.toLowerCase()}`"
            :href="p.url"
            class="sns-link sns-link-twitter"
            target="_blank"
          >
            {{ p.name }}
          </a>
        </div>
      </div>
      <div class="profile-row no-border histories-wrap">
        <h2 class="profile-row-title">
          History
        </h2>
        <div
          v-for="(history, index) in histories"
          :key="index"
          class="history-item"
        >
          <div class="history-item-range">
            {{ history.range }}
          </div>
          <div>
            <a :href="history.link" class="history-item-link" target="_blank">
              {{ history.linkLabel }}
            </a>
          </div>
          <div v-if="history.role" class="history-item-role">
            - {{ history.role }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const title = 'About - The TANAKA WORLD';
const description = 'Who am I ?';
const brithday = new Date('1990-11-07');

export default Vue.extend({
  data() {
    return {
      histories: [
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
          linkLabel: 'TANAKA WORLD (Self Employed Project)',
          role: null
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
      ]
    };
  },
  computed: {
    snsAccounts() {
      return [
        { name: 'Blog', url: 'https://blog.tanaka.world' },
        { name: 'Twitter', url: 'https://twitter.com/_tanakaworld' },
        { name: 'Github', url: 'https://github.com/tanakaworld' },
        { name: 'Slides', url: 'https://speakerdeck.com/tanakaworld' },
        { name: 'Qiita', url: 'http://qiita.com/tanakaworld' },
        { name: 'Facebook', url: 'https://www.facebook.com/tanaka.world' },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/yutaro-tanaka-world-7863b249/'
        }
      ];
    },
    products() {
      return [
        { name: 'Proff.io', url: 'https://proff.io' },
        { name: 'RubyGems', url: 'https://rubygems.org/profiles/tanakaworld' },
        { name: 'NPM', url: 'https://www.npmjs.com/~tanakaworld' }
      ];
    },
    level(): number {
      return Math.floor(
        Math.abs(Date.now() - brithday.getMilliseconds()) /
          (1000 * 3600 * 24) /
          365
      );
    }
  },
  methods: {},
  head: {
    title,
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tanaka.world/about'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      }
    ]
  }
});
</script>

<style scoped lang="sass">
@import "../../styles/color"

#about
  display: flex
  justify-items: center
  justify-content: center
  font-size: 20px

  .profile-row
    padding: 16px
    line-height: 1.5em

    &:not(:first-child)
      border-top: solid 1px $color-sky-blue

    &.no-border
      border-top: none

    &.profile-row-has-child
      flex-direction: row
      display: flex
      align-items: center
      justify-content: space-between

      &:not(:first-child)
        margin-left: 12px

    .profile-property
      padding: 24px
      flex-direction: column
      align-items: center
      justify-content: space-around

    &-title
      width: 100%
      text-align: center

  .profile-wrap
    max-width: 700px
    padding: 24px
    box-sizing: border-box

    > div
      &:not(:first-child)
        margin-top: 12px

  .profile-icon
    transform: scaleX(-1)
    width: 100%
    max-width: 500px
    max-height: 500px

  @media screen and (max-width: 730px)
    #about
      font-size: 12px
    .profile-row
      padding: 8px
    .profile-wrap
      width: 100%

    .profile-icon
      width: 100%

  @media screen and (max-width: 320px)
    #about
      font-size: 10px
    .profile-row
      flex-direction: column !important

  .makeUnownTextInput
    width: 100%
    padding: 4px
    text-decoration: none
    color: $color-gray

  .makeUnownTextInputDisplay
    width: 100%

.sns-links-wrap
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  .sns-link
    &:not(:first-child)
      margin-left: 12px

  @mixin sns-link($name, $color)
    .sns-link-#{$name}
      &:hover
        color: $color

  +sns-link('blog', #ece7e7)
  +sns-link('twitter', #4A9FEC)
  +sns-link('facebook', #4966AD)
  +sns-link('github', #98a1a8)
  +sns-link('qiita', #72C23A)
  +sns-link('linkedin', #3175B0)
  +sns-link('rubygems', #D96149)

.histories-wrap
  .history-item
    display: flex
    justify-content: flex-start
    align-items: center
    flex-wrap: wrap

    &-link
      margin-left: 16px

    &-role
      margin-left: 8px

@media screen and (max-width: 560px)
  #about
    font-size: 16px

    .histories-wrap
      .history-item
        &:not(:first-child)
          margin-top: 8px

        &-range
          width: 100%

        &-link
          margin-left: 0
</style>
