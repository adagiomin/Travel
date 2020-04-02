<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true, 
      },
      swiperList:[
        {
          id:'0001',
          imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/705f885c-edc1-46f0-ad63-1514ae947e8e.jpg_r_480x320x95_113e9181.jpg'
        },
        {
          id:'0002',
          imgUrl:'https://imgs.qunarzz.com/p/tts9/1601/2b/2b2be928fa2e88f7.jpg_r_480x320x95_12718a30.jpg'
        }
      ]
    }
  },
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: red !important 
.wrapper
  overflow: hidden
  width: 100%
  height:0
  padding-bottom: 66.66%
  background: #eee
  .swiper-img
    width: 100%
</style>