<template>
<div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
</div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
    name: 'City', 
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet,
    },
    data(){
        return {
            cities:{},//城市列表按照A-Z为键，值为相应城市
            hotCities:[],//热门城市
            letter:'',//当前字母
        }
    },
    mounted(){
        this.getCityInfo()
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res){
            res = res.data
            if(res.ret&&res.data){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities 
            }
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    }
}
</script>

<style>

</style>