<template>
  <div>
    <header-view/>
    <div id="gallery">
      <div v-for="(c, index) in photos" class="thumbnail" :key="index">
        <p class="description">{{c.description}}</p>
        <img class="gallery-icon" :src="c.file" :alt="c.description"/>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderView from '@/components/common/HeaderView';

  export default {
    name: 'gallery',
    components: {
      HeaderView
    },
    data() {
      return {
        photos: [
          {
            description: 'me',
            file: require('~/assets/img/me-real.png')
          },
          {
            description: 'Blog Logo',
            file: require('~/assets/img/ForXDevelopersLogo.png')
          },
          {
            description: '2D',
            file: require('~/assets/img/8bit-me.png')
          },
          {
            description: '3D',
            file: require('~/assets/img/8bit-me-3d.png')
          },
          {
            description: 'santa/snow',
            file: require('~/assets/img/8bit-me-santa.png')
          },
          {
            description: 'sheep suit',
            file: require('~/assets/img/8bit-me-sheep-suit.png')
          },
          {
            description: 'sheep',
            file: require('~/assets/img/8bit-me-sheep.png')
          },
          {
            description: 'block me clear',
            file: require('~/assets/img/8bit_me_clear.jpg')
          },
          {
            description: 'block me no cap',
            file: require('~/assets/img/8bit_me_nocap.png')
          },
          {
            description: 'MacBook',
            file: require('~/assets/img/mac_sq.png')
          },
          {
            description: 'me',
            file: require('~/assets/img/me-pixel-all.png')
          },
          {
            description: 'my face',
            file: require('~/assets/img/me-real-face.png')
          },
          {
            description: 'Santa 2015',
            file: require('~/assets/img/8bit-me-santa-2015.png')
          },
          {
            description: 'Saru Costume 2016',
            file: require('~/assets/img/8bit-me-mon-2016-costume.png')
          },
          {
            description: 'Saru me 2016',
            file: require('~/assets/img/8bit-me-mon-2016.png')
          },
          // {
          //   description: 'GIFme',
          //   file: require('~/assets/img/me-deformed-16fr.gif'),
          // },
          {
            description: 'Tori me 2017',
            file: require('~/assets/img/me-2017-tori-v1.0.0.500.png')
          },
          // {
          //   description: 'Fly up 2017',
          //   file: require('~/assets/img/me-2017-tori-fly-up.500.gif'),
          // },
          {
            description: 'Cap',
            file: require('~/assets/img/me-real-face-cap.png')
          },
          {
            description: 'Naked',
            file: require('~/assets/img/me-basic.png')
          },
          {
            description: 'TW 2018',
            file: require('~/assets/img/tanakaworld-2018.png')
          }
        ]
      };
    }
  };
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
        margin-top: -10px
        text-align: center
</style>
