<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        data () {
            return {
                listImg:[
                    {url: '../../static/image/home/banner1.jpg'},
                    {url: '../../static/image/home/banner2.jpg'},
                    {url: '../../static/image/home/banner3.jpg'},
                    {url: '../../static/image/home/banner4.jpg'},
                    {url: '../../static/image/home/banner5.jpg'}
                ]
            }
        },
        mounted() {
            var swiper = new Swiper('.banner .swiper-container', {
                pagination: '.banner .swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 4000
            });
        }
    }
</script>

<style lang="less">
    .banner .swiper-container {
        width: 100%;
        height: 10rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:1rem;
            height: 0.3rem;
            display: inline-block;
            background: #fff;
            border-radius:0;
        }
    }
</style>