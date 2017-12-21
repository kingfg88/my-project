<template>
    <div class="tuijian">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in list">
                    <div class='back-img' :style="{ backgroundImage: 'url(' + item.url + ')' }">
                        <i class='logo icon iconfont icon-iconfontbiaozhunmoban01'></i>
                    </div>
                    <p v-text='item.name'></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // import Swiper from 'swiper';
    // import 'swiper/dist/css/swiper.min.css';
    export default {
        data () {
            return {
                list:[
                    {name:'郑钧',url: '../../static/image/zhengjun.jpg'},
                    {name:'John Winston Lennon',url: '../../static/image/jone.jpg'},
                    {name:'Avril Lavigne',url: '../../static/image/aiweier.jpg'},
                    {name:'Bob Dylan',url: '../../static/image/bob.jpg'},
                    {name:'窦唯',url: '../../static/image/douwei.jpeg'},
                    {name:'张惠妹',url: '../../static/image/amei.jpg'}
                ]
            }
        },
        mounted() {
            var swiper = new Swiper('.tuijian .swiper-container', {
                slidesPerView: 2.8,
                paginationClickable: true,
                spaceBetween: 5,
                freeMode: true
            });
        }
    }
    
    
</script>
<style>
    .tuijian{
        padding-left:1rem;
    }
    .tuijian .swiper-container {
        width: 100%;
        height: 9rem;
        margin: 1rem auto;
        margin-bottom: 0;
    }
    .tuijian .swiper-container .back-img{
        height:70%;
        width:90%;
        background-size:100% 100%;
        position:relative;
    }
    .tuijian .swiper-container .back-img .logo{
        display: inline-block;
        background:#fff;
        border-radius: 50%;
        position:absolute;
        bottom:-0.4rem;
        right:-0.2rem;
    }
    .icon-iconfontbiaozhunmoban01{
        font-size: 1.5rem;
        color:red;
    }
    .tuijian .swiper-container p{
        margin-top:0.3rem;
        height:20%;
        width:90%;
        text-align: center;
        font-size:0.8rem;
    }
</style>