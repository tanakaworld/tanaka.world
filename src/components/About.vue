<template>
  <div id="about">
    <div class="profile-wrap">
      <div class="profile-row profile-row-has-child">
        <div>
          <img
            class="profile-icon"
            alt='profile-icon'
            src='https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2Ftanakaworld.jpg?alt=media&token=d87a363e-25a2-4628-ba9e-f146c23ad695'/>
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
        ピクセルアートとルービックキューブをこよなくあいする。
      </div>
      <div>
        <ul>
          <li><a href="https://twitter.com/_tanakaworld">Twitter</a></li>
          <li><a href="https://github.com/tanakaworld">GitHub</a></li>
          <li><a href="http://qiita.com/tanakaworld">Qiita (Short Tips)</a></li>
          <li><a href="https://www.facebook.com/tanaka.world">Facebook</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
  };
</script>

<style scoped lang="sass">
  @import ../styles/color

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
</style>
