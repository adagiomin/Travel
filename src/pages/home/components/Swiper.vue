<template>
  <div class="wrapper">
    <!-- 使用v-if防止空数组时就加载循环，导致数据加载进来后首先显示最后一张 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
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
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true, 
        autoplay:5000
      },
    }
  },
  computed:{
    showSwiper(){
      return this.list.length
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: red !important 
.wrapper
  overflow: hidden
  width: 100%
  height:0
  padding-bottom: 31.25%
  background: #eee
  .swiper-img
    width: 100%
</style>