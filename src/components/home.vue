<template>
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
      <li class='ter'> MORE > </li>
    </ul>
    <!-- 引入style -->
    <app-style></app-style>
  </div>
  <div class='fenge'></div>
  <!-- 演出列表 -->
  <div>
    <h1 class='tel show'>演出活动</h1>
    <div class='list-yanchu' v-for='item in list'>
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
    </div>
    
  </div>
</div>
</template>

<script>
import Pheader from './template/pheader'
import Banner from './template/banner'
import Style from './template/style'
import {setCookie,getCookie} from './../cookie.js'
export default {
  data () {
    return {
      listImg:[
          {url: '../../static/image/home/banner1.jpg'},
          {url: '../../static/image/home/banner2.jpg'},
          {url: '../../static/image/home/banner3.jpg'},
          {url: '../../static/image/home/banner4.jpg'},
          {url: '../../static/image/home/banner5.jpg'}
        ],
        list:[
          {
            url:'../../static/image/home/qiyingli.jpeg',
            title:'迷蝶 后摇  The seven mile journey',
            date:'12.06 20:00 本周三',
            adress:'迷蝶酒吧[西安]',
            logo:'后摇滚',
            price:'100',
            collet:'66'
          },
          {
            url:'../../static/image/home/sude.jpg',
            title:'1973 摇滚 Sude(山羊皮)',
            date:'12.09 20:00 本周六',
            adress:'1973酒吧[西安]',
            logo:'后摇',
            price:'120',
            collet:'99'
          },
          {
            url:'../../static/image/home/tangchao.jpeg',
            title:'迷蝶固定场 金属摇滚 唐朝乐队',
            date:'12.01 20:00 下周五',
            adress:'迷蝶酒吧[西安]',
            logo:'摇滚',
            price:'80',
            collet:'33'
          }
        ]
    }
  },
  components:{Pheader,'app-banner': Banner,'app-style':Style},
  mounted(){
            /*页面挂载获取保存的cookie值，渲染到页面上*/
            let uname = getCookie('username')
            this.name = uname
            /*如果cookie不存在，则跳转到登录页*/
            if(uname == ""){
                this.$router.push('/')
            }
  },
  mounted(){
      $("div[class='fenge']:last").css({'height':'2rem','line-height':'2rem'}).html('我是有底线的');
      window.scrollTo(0,0);
  },
  methods:{
            quit(){
                /*删除cookie*/
                delCookie('username')
            }
  }
}

</script>

<style>
.nav{
  margin-top:3rem;
  margin-bottom: 3rem;
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
  margin-bottom:0;
}
.yanchu-content li{
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
.details{
  height:100%;
  padding:0;
  position:relative;
}
.details li{
  width:100%;
  list-style: none;
  text-align: left;
  font-size:0.5rem;
  color:#666;
}
.details .title{
  margin-bottom:0.8rem;
  font-size: 1rem;
  color:#000;
}
.details .logo{
  position:absolute;
  bottom:0.5rem;
  left:0;
}
.details .logo .leibie{
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
.fenge{
  height:0.7rem;
  background:#eee;
}
.list-yanchu .iconfont{
  font-size:1rem;
}
</style>