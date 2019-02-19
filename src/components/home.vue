<template>
<div class='native'>
  <div class='nav'>
    <!-- 引入头部 -->
    <Pheader></Pheader>
  <!-- 轮播 -->
  <div>
    <app-banner :listImg="listImg"></app-banner>
  </div>
  <!-- 推荐 -->
  <div class='recommend'>
    <ul>
      <li class='tel'>
        <h1>风格推荐</h1>
        <span class='tishi'>根据您的购票历史推荐</span>
      </li>
      <li class='ter'>
        <router-link :to="{path: 'allstyle', query: {product: list}}">
          MORE >
        </router-link>
      </li>
    </ul>
    
    <div class="style">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <router-link :to="{path: 'style', query: {product: list}}" @click.native='saveName(str1)' class="swiper-slide" v-for="(str1,index) in list1Img" :key='index' :style="{ backgroundImage: 'url(' + str1.url + ')' }">
                  <span class='stylename' v-text='str1.name'></span>
                </router-link>
            </div>
        </div>
    </div>
  </div>
  <div class='fenge'></div>
  <!-- 演出列表 -->
  <div>
    <h1 class='tel show'>演出活动</h1>
    <router-link :to="{path: 'details', query: {product: item}}" class='list-yanchu' v-for='(item,index) in list' :key='index'>
      <div class='yanchu-content'>
        <ul class='list-yanchu-top'>
          <li class='left'><span class='back-img' :style="{ backgroundImage: 'url(' + item.url + ')' }"></span></li>
          <li class='right'>
            <ol class='details'>
              <li class='title'>{{item.title}}</li>
              <li class='date'>时间:{{item.date}}</li>
              <li class='adress'>场馆:{{item.adress}}</li>
              <li class='logo'><span class='leibie'><i class='icon iconfont icon-1'></i>{{item.logo}}</span></li>
            </ol>
          </li>
        </ul>
        <ul class='list-yanchu-bottom'>
          <li class='price'>￥{{item.price}}</li>
          <li class='collet'><i class='icon iconfont icon-shoucang'></i>{{item.collet}}</li>
        </ul>
      </div>
      <div class='fenge'></div>
    </router-link>
  </div>
  <!-- 引入公共底部 -->
  <Pfooter></Pfooter>
  </div>  
</div>
</template>

<script>
import Pheader from './template/pheader'
import Pfooter from './template/pfooter'
import Banner from './template/banner'
import {setCookie,getCookie} from './../cookie.js'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      // store:"store",
      listImg:[
          {url: '../../static/image/home/banner1.jpg'},
          {url: '../../static/image/home/banner2.jpg'},
          {url: '../../static/image/home/banner3.jpg'},
          {url: '../../static/image/home/banner4.jpg'},
          {url: '../../static/image/home/banner5.jpg'}
        ],
        list1Img:[
                    {name:'金属 Metal',url: '../../static/image/home/jinshu.jpeg'},
                    {name:'后摇 Post-Rock',url: '../../static/image/home/houyao.jpg'},
                    {name:'民谣 Folk',url: '../../static/image/home/minyao.jpeg'},
                    {name:'摇滚 Rock',url: '../../static/image/home/yaogun.jpeg'},
                    {name:'流行 Pop',url: '../../static/image/home/liuxing.jpeg'},
                    {name:'嘻哈 Hip Hop',url: '../../static/image/home/xiha.jpeg'}
                ],
        list:[
          {
            url:'../../static/image/home/qiyingli.jpeg',
            title:'迷蝶 后摇  The seven mile journey',
            date:'12.06 20:00 本周三',
            adress:'迷蝶酒吧[西安]',
            logo:'后摇',
            price:'100',
            collet:'66'
          },
          {
            url:'../../static/image/home/sude.jpg',
            title:'1973 摇滚 Sude(山羊皮)',
            date:'12.09 20:00 本周六',
            adress:'1973酒吧[西安]',
            logo:'摇滚',
            price:'120',
            collet:'99'
          },
          {
            url:'../../static/image/home/tangchao.jpeg',
            title:'迷蝶固定场 金属摇滚 唐朝乐队',
            date:'12.01 20:00 下周五',
            adress:'迷蝶酒吧[西安]',
            logo:'金属',
            price:'80',
            collet:'33'
          },
          {
            url:'../../static/image/home/tangchao.jpeg',
            title:'迷蝶固定场 金属摇滚 唐朝乐队',
            date:'12.01 20:00 下周五',
            adress:'迷蝶酒吧[西安]',
            logo:'金属',
            price:'80',
            collet:'33'
          }
        ]
    }
  },
  components:{Pfooter,Pheader,'app-banner': Banner},
  mounted(){
      var swiper = new Swiper('.style .swiper-container', {
          slidesPerView: 2.2,
          paginationClickable: true,
          spaceBetween: 10,
          freeMode: true
      });

      /*页面挂载获取保存的cookie值，渲染到页面上*/
      let uname = getCookie('username')
      this.name = uname
      /*如果cookie不存在，则跳转到登录页*/
      if(uname == ""){
          this.$router.push('/')
      }
      // juery操作dom方法以及设置滚动条
      $("div[class='fenge']:last").css({'height':'2rem','line-height':'2rem'}).html('我是有底线的');
      window.scrollTo(0,0);
      this.$store.commit('savelist',this.list)
  },
  methods:{
      // 获取只含中文类名并且存入到vuex中
      saveName(str1){
          var message=str1.name.replace(/[^\u4e00-\u9fa5]/gi,"")
          this.$store.commit('change',message)
      }
  }
}

</script>

<style>
.native{
  position:absolute;
  width:100%;
}
.nav{
  margin-top:3rem;
  margin-bottom: 3rem;
}
.nav .style{
  margin-top:0;
}
.recommend{margin:8px;}
.tel{
  text-align: left;
  padding-bottom:0.5rem;
}
.ter{
  text-align: right;
  font-size:1rem;
  color:#FA5509;
  height:100%;
  line-height: 300%;
}
.ter a{
  color:#FA5509;
}
h1{
  font-size:1.2rem;
  font-weight: normal;
  margin:0;
}
.recommend ul{
  height:2rem;
  padding:0;
  margin-top:0.5rem;
  margin-bottom:0;
}
.recommend ul>li{
  width:50%;
  float:left;
  list-style: none;
}
.tishi{
  font-size:0.3rem;
}
.yanchu-content{
  margin:0.5rem;
  margin-bottom:0;
}
.yanchu-content ul{
  padding:0;
}
.show{
  border-bottom:2px solid #eee;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
}
.list-yanchu{
  padding-top:0.5rem;
}
.yanchu-content .list-yanchu-top{
  height:8rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #eee;
  margin:0;
}
.yanchu-content  li{
  float:left;
  list-style: none;
}
.list-yanchu-top>.left{
  width:35%;
  height:100%;
}
.list-yanchu-top>.right{
  width:60%;
  height:100%;
}
.list-yanchu-top>li>.back-img{
  display:inline-block;
  border-radius: 8px;
  width:85%;
  height:100%;
  background-size: 100% 100%;
}
.yanchu-content .details{
  height:100%;
  padding:0;
  position:relative;
}
.yanchu-content .details li{
  width:100%;
  list-style: none;
  text-align: left;
  font-size:0.5rem;
  color:#666;
}
.yanchu-content .details .title{
  margin-bottom:0.8rem;
  font-size: 1rem;
  color:#000;
}
.yanchu-content .details .logo{
  position:absolute;
  bottom:0;
  left:0;
}
.yanchu-content .details .logo .leibie{
  background:#eee;
  border-radius: 10px;
  padding:0.4rem;
}
.list-yanchu-bottom{
  height:2rem;
  margin:0.2rem;
}
.list-yanchu-bottom li{
  width:50%;
  height:100%;
  line-height: 200%;
}
.price{text-align: left;}
.collet{text-align: right;}
.collet i{margin-right:0.5rem;}
.fenge{
  height:0.7rem;
  background:#eee;
}
.list-yanchu .iconfont{
  font-size:1rem;
}
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