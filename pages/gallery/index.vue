<template>
  <div>
    <header-view/>
    <div id="gallery">
      <div
        v-for="(c, index) in photos"
        :key="index"
        class="thumbnail"
      >
        <p
          class="description"
          v-html="c.description"
        />
        <img
          :src="c.file"
          :alt="c.description"
          class="gallery-icon"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderView from '~/components/common/HeaderView.vue'

const title = 'Gallery - The TANAKA WORLD'
const description = 'Arts made by me'

export default Vue.extend({
  head: {
    title,
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tanaka.world/gallery'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      }
    ]
  },
  name: 'Gallery',
  components: {
    HeaderView
  },
  data() {
    return {
      photos: [
        {
          description: 'me',
          file: '/img/me-real.png'
        },
        {
          description: 'Blog Logo',
          file: '/img/ForXDevelopersLogo.png'
        },
        {
          description: '2D',
          file: '/img/tanakaworld-2d.png'
        },
        {
          description: 'Dash',
          file: '/img/tanakaworld-2d-dash.gif'
        },
        {
          description: 'santa',
          file: '/img/8bit-me-santa.png'
        },
        {
          description: '2015 未',
          file: '/img/8bit-me-sheep.png'
        },
        {
          description: '2014 Me',
          file: '/img/8bit_me_clear.jpg'
        },
        {
          description: 'MacBook',
          file: '/img/mac_sq.png'
        },
        {
          description: 'Megumi Katoh',
          file: '/img/megumi-katoh.png'
        },
        {
          description: 'Full Body',
          file: '/img/me-pixel-all.png'
        },
        {
          description: 'Face',
          file: '/img/me-real-face.png'
        },
        {
          description: 'Face (secret)',
          file: '/img/me-real-face-secret.png'
        },
        {
          description: '2015 X-mas',
          file: '/img/8bit-me-santa-2015.png'
        },
        {
          description: '2016 申',
          file: '/img/8bit-me-mon-2016.png'
        },
        {
          description: '2017 酉',
          file: '/img/me-2017-tori-v1.0.0.500.png'
        },
        {
          description: 'ツラタン',
          file: '/img/tsura-tang.png'
        },
        {
          description: 'Fly up 2017',
          file: '/img/me-tori-2017-gif.gif'
        },
        {
          description: 'Humans Seq',
          file: '/img/sequence-human.gif'
        },
        {
          description: 'Cap',
          file: '/img/me-real-face-cap.png'
        },
        {
          description: '2018 Me',
          file: '/img/tanakaworld-2018.png'
        },
        {
          description: '2018 No Cap',
          file: '/img/tanakaworld-2018-no-cap.png'
        },
        {
          description: '2018 Naked',
          file: '/img/tanakaworld-2018-nkd.png'
        },
        {
          description: '2018 Halloween',
          file: '/img/tanakaworld-2018-helloween.png'
        },
        {
          description: 'Chick',
          file: '/img/hiyoko.png'
        },
        {
          description: '2018 戌',
          file: '/img/tanakaworld-2018-inu.png'
        },
        {
          description: '2019 亥',
          file: '/img/tanakaworld-2019-iee.png'
        },
        {
          description: '<span class="description-at">@</span>__syumai',
          file: '/img/syumai.png'
        },
        {
          description: '<span class="description-at">@</span>tenntenn',
          file: '/img/tenntenn.png'
        },
        {
          description: '<span class="description-at">@</span>swaaan',
          file: '/img/swaaan-sm.png'
        },
        {
          description: '<span class="description-at">@</span>swaaan',
          file: '/img/swaaan-dash.png'
        },
        {
          description: '<span class="description-at">@</span>codehex',
          file: '/img/codehex.png'
        },
        {
          description: '<span class="description-at">@</span>8saki',
          file: '/img/8saki.png'
        },
        {
          description: 'Ms. Dyamond',
          file: '/img/ms-dia.png'
        },
        {
          description: '<span class="description-at">@</span>peranikov',
          file: '/img/peranikov.png'
        },
        {
          description: '<span class="description-at">@</span>denoland',
          file: '/img/deno.gif'
        }
      ]
    }
  }
})
</script>

<style scoped lang="sass">
  @import ../../styles/color

  #gallery
    width: 90%
    margin: 0 auto
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    padding: 24px
    box-sizing: border-box
    .thumbnail
      height: 200px
      .gallery-icon
        width: 100px
        margin: 15px 10px
      .description
        width: 120px
        margin-top: -10px
        padding: 0 10px
        text-align: center
        line-height: 20px
        max-height: 20px
        overflow-wrap: break-word
</style>
