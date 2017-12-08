<template>
    <div class="style">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str1 in list1Img" :style="{ backgroundImage: 'url(' + str1.url + ')' }">
                    <span v-text='str1.name'></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        data () {
            return {
                list1Img:[
                    {name:'金属 Metal',url: '../../static/image/home/jinshu.jpeg'},
                    {name:'后摇',url: '../../static/image/home/houyao.jpg'},
                    {name:'民谣',url: '../../static/image/home/minyao.jpeg'},
                    {name:'摇滚',url: '../../static/image/home/yaogun.jpeg'},
                    {name:'流行',url: '../../static/image/home/liuxing.jpeg'},
                    {name:'嘻哈',url: '../../static/image/home/xiha.jpeg'}
                ]
            }
        },
        mounted() {
            var swiper = new Swiper('.style .swiper-container', {
                slidesPerView: 2.2,
                paginationClickable: true,
                spaceBetween: 10,
                freeMode: true
            });
        }
    }
    
    
</script>
<style>
    .style .swiper-container {
        width: 100%;
        height: 5rem;
        margin: 1rem auto;
        margin-bottom:1rem;
    }
    .style .swiper-container span{
        position:absolute;
        bottom:0;
        left:0.5rem;
        font-size: 1rem;
    }
    .style .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        color:#fff;
        background-size:100% 100%;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>