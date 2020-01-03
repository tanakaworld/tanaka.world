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
            <n-link :to="localePath('index')" v-text="$t('name')" />
          </div>
          <div v-text="$t('job')" />
          <div v-text="$t('level', [level])" />
          <div v-text="$t('height', ['1.74'])" />
          <div v-text="$t('weight', ['57.0'])" />
        </div>
      </div>
      <div class="profile-row">{{ $t('bio') }}</div>
      <div class="profile-row no-border sns-links-wrap">
        <h2 class="profile-row-title" v-text="$t('links')" />
        <div v-for="(account, index) in snsAccounts" :key="index">
          <a
            :class="`sns-link-${account.name.toLowerCase()}`"
            :href="account.url"
            class="sns-link"
            target="_blank"
            v-text="account.name"
          />
        </div>
      </div>
      <div class="profile-row no-border sns-links-wrap">
        <h2 class="profile-row-title" v-text="$t('products')" />
        <div v-for="(p, index) in products" :key="index">
          <a
            :class="`sns-link-${p.name.toLowerCase()}`"
            :href="p.url"
            class="sns-link"
            target="_blank"
            v-text="p.name"
          />
        </div>
      </div>
      <div class="profile-row no-border histories-wrap">
        <h2 class="profile-row-title" v-text="$t('timeline')" />
        <div
          v-for="(history, index) in jobHistories"
          :key="index"
          class="history-item"
        >
          <div class="history-item-range" v-text="history.range" />
          <div>
            <a
              :href="history.link"
              class="history-item-link"
              target="_blank"
              v-text="history.linkLabel"
            />
          </div>
          <div
            v-if="history.role"
            class="history-item-role"
            v-text="`- ${history.role}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { jobHistories, products, snsAccounts } from '~/utils/about';
import { getAgeLocal } from '~/utils/date';

const title = 'About - The TANAKA WORLD';
const description = 'Who am I ?';

export default Vue.extend({
  data() {
    return {
      jobHistories,
      snsAccounts,
      products,
      level: getAgeLocal('1990-11-07')
    };
  },
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
#about
  display: flex
  justify-items: center
  justify-content: center
  font-size: 20px

  .profile-row
    padding: 16px
    line-height: 1.5em

    &:not(:first-child)
      border-top: solid 1px var(--color-sky-blue)

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
    color: var(--color-gray)

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
