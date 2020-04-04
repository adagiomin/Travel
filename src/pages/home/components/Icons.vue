<template>
    <swiper>
        <swiper-slide v-for = "(page,index) of pages" :key="index">
            <div class="icons">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.iconUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
export default {
    name:'HomeIcons',
    data(){
        return {
            iconList:[
                {
                    id:'0001',
                    iconUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                    desc:'海外酒店法法发发分分分'
                },
                {
                    id:'0002',
                    iconUrl:'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
                    desc:'民宿客栈'
                },
                {
                    id:'0003',
                    iconUrl:'https://s.qunarzz.com/homenode/images/touchheader/package.png',
                    desc:'度假'
                },
                {
                    id:'0004',
                    iconUrl:'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
                    desc:'攻略'
                },
                {
                    id:'0005',
                    iconUrl:'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
                    desc:'自由行'
                },
                {
                    id:'0006',
                    iconUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc:'景点门票'
                },
                {
                    id:'0007',
                    iconUrl:'https://s.qunarzz.com/homenode/images/touchheader/train.png',
                    desc:'火车票'
                },
                {
                    id:'0008',
                    iconUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
                    desc:'机票'
                },
                {
                    id:'0009',
                    iconUrl:'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
                    desc:'汽车票船票'
                },
            ]
        }
    },
    computed: {
        pages (){
            const pages =[]
            this.iconList.forEach((item,index)=>{
                const page = Math.floor(index / 8)
                if(!pages[page]){ 
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.icons
    overflow: hidden
    height: 0
    padding-bottom:50%
    .icon
        position relative
        overflow :hidden
        float:left
        width:25%
        height: 0
        padding-bottom:25%      
        .icon-img
            position: absolute 
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .icon-imgcontent
                display:block
                margin:0 auto
                height : 100%
        .icon-desc
            position: absolute 
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis()
</style>