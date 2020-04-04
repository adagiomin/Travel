<template>
<div>
    <div class="title">
        热销推荐
    </div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <!-- 可于img外层包一个div,用来撑开图片，防止页面抖动 -->
            <img class="item-img" :src="item.imgUrl">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name:'HomeRecommend',
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
                    title:'水墨西塘让你感受古镇千年的诗情画意',
                    desc:'',
                },
                {
                    id:'0003',
                    imgUrl:' https://img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_256x160_5d730aee.jpg',
                    title:'亲近大自然，放飞心情',
                    desc:'',
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
.item
    overflow: hidden
    display:flex
    height: 1.9rem
    .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
        .item-button
            line-height: .44rem
            margin-top: .2rem
            background: #ff9300
            padding: 0 .2rem
            border-radius: .06rem
            color: #fff
</style>