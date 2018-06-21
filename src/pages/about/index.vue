<template>
  <div>
    <header-view/>
    <div id="about">
      <div class="profile-wrap">
        <div class="profile-row profile-row-has-child">
          <div>
            <img
              class="profile-icon"
              alt='profile-icon'
              src='~/assets/img/tanakaworld.png'/>
          </div>
          <div class="profile-property">
            <div>
              <router-link to="http://tanaka.world">tanakaworld</router-link>
            </div>
            <div>Software Engineer</div>
            <div>
              たかさ 1.75m
            </div>
            <div>
              おもさ 62.0kg
            </div>
          </div>
        </div>
        <div class="profile-row">
          あおやまがくいんだいがくりこうがくぶじょうほうテクノロジーがっかそつ。<br/>
          <a href='http://www.mti.co.jp/' target='_blank'>エムティーアイ</a>、
          <a href='http://fukurou-labo.co.jp/' target='_blank'>フクロウラボ</a>、
          こじんじぎょうぬしをへて、2016ねん8がつ
          <a href='https://www.curiosity-inc.jp/' target='_blank'>curiosity, inc.</a> ににゅうしゃ。エンジニアとして、
          Webのフロントエンドからインフラまでおおくのプロジェクトにたずわる。<br/>
          JavaScript・C#・Rubyをもちいたアプリケーションかいはつをとくいとしている。<br/>
          ピクセルアート、ルービックキューブ、ピクトグラム、イヌをこよなくあいする。
        </div>
        <div class="profile-row no-border sns-links-wrap">
          <div v-for="(account, index) in snsAccounts" :key="index">
            <a class="sns-link sns-link-twitter" :class="`sns-link-${account.name.toLowerCase()}`" :href="account.url"
               target="_blank">
              {{account.name}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderView from '@/components/common/HeaderView';

  const title = 'About - The TANAKA WORLD';
  const description = 'Who am I ?';

  export default {
    head: {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:url', name: 'og:url', content: 'https://tanaka.world/about' },
        { hid: 'og:description', name: 'og:description', content: description },
      ],
    },
    name: 'about',
    components: {
      HeaderView,
    },
    methods: {},
    computed: {
      snsAccounts() {
        return [
          { name: 'Twitter', url: 'https://twitter.com/_tanakaworld' },
          { name: 'Github', url: 'https://github.com/tanakaworld' },
          { name: 'Qiita', url: 'http://qiita.com/tanakaworld' },
          { name: 'Facebook', url: 'https://www.facebook.com/tanaka.world' },
          { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yutaro-tanaka-world-7863b249/' },
          { name: 'RubyGems', url: 'https://rubygems.org/profiles/tanakaworld' },
        ];
      },
    },
  };
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

    +sns-link('twitter', #4A9FEC)
    +sns-link('facebook', #4966AD)
    +sns-link('github', #98a1a8)
    +sns-link('qiita', #72C23A)
    +sns-link('linkedin', #3175B0)
    +sns-link('rubygems', #D96149)
</style>
