<template>
    <div class="style">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str1 in list1Img" v-text=str1.name :style="{ backgroundImage: 'url(' + str1.url + ')' }"></div>
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
                    {name:'金属',url: '../../static/image/home/banner1.jpg'},
                    {name:'后摇',url: '../../static/image/home/banner2.jpg'},
                    {name:'民谣',url: '../../static/image/home/banner3.jpg'},
                    {name:'摇滚',name:'金属',url: '../../static/image/home/banner4.jpg'},
                    {name:'嘻哈',url: '../../static/image/home/banner5.jpg'}
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
        margin: 0.5rem auto;
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