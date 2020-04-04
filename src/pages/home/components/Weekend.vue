<template>
<div>
    <div class="title">
        热销推荐
    </div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <!-- 可于img外层包一个div,用来撑开图片，防止页面抖动 -->
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>

        </li>
    </ul>
</div>
</template>

<script>
export default {
    name:'HomeWeekend',
    data(){
        return {
            recommendList:[
                {
                    id:'0001',
                    imgUrl:'https://img1.qunarzz.com/sight/p0/1704/71/71a3d23c24494bd2a3.water.jpg_256x160_d5bc3624.jpg',
                    title:'南浔古镇',
                    desc:'水乡古镇九十九，不如南浔走一走',
                },
                {
                    id:'0002',
                    imgUrl:'https://img1.qunarzz.com/sight/p0/1607/21/2142167d4b1bfa84b4.water.jpg_256x160_ea65b4f7.jpg',
                    title:'水墨西塘',
                    desc:'让你感受古镇千年的诗情画意',
                },
                {
                    id:'0003',
                    imgUrl:' https://img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_256x160_5d730aee.jpg',
                    title:'千岛湖',
                    desc:'亲近大自然，放飞心情',
                },
               
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    margin-top: .2rem
    line-height .8rem
    background:#eee
    text-indent: .2rem
.item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
        width:100%
.item-info
    padding: .1rem
    .item-title
        line-height: .54rem
        font-size: .32rem  
        ellipsis()
    .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
</style>