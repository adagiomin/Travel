<template>
  <ul class="list">
      <li class="item" 
      v-for="item of letters" 
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object,
    },
    data(){
        return {
            touchStatus:false,
            startY: 0,
            timer: null
        }
    },
    updated(){
        //当页面的数据被更新的时候，同时页面完成了自己的渲染后,这个钩子函数被执行
        // 代码优化，不再将this.$refs['A'][0].offsetTop放在handleTouchMove
        // 不然手指每次移动，都要执行一次
        this.startY = this.$refs['A'][0].offsetTop
    },
    computed:{
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        handleLetterClick(e){
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart(){
            this.touchStatus = true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                // 使用timer来截流，大大节约handleTouchMove的执行频率，提高网站效率
                // 如果正在做这件事情的时候，给它延迟16毫秒的事件再执行
                // 假如在这16毫秒时间内你又操作了，它会将上次的操作清除，重新执行你这次做的事情
                this.timer = setTimeout(()=>{
                    const startY = this.startY
                    // e.touches的第0项表示手指的一些信息
                    // 求出的touchY是手指距离列表顶部的距离（即不包括上面的蓝色部分）
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY-startY)/20)// 20是每个字母的高度
                    if(index >=0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16)  
            }
        },
        handleTouchEnd(){

        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.list
    display:flex
    flex-direction :column
    justify-content: center
    position:absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
        color: $bgColor
        line-height: .4rem
        text-align:center
</style>