<template>
<div>
  <!-- 轮播 -->
  <div>
    <app-banner :listImg="listImg"></app-banner>
  </div>
  <!-- 推荐 -->
  <div>
    <ul>
      <li class='tel'>
        <h1>风格推荐</h1>
        <span class='tishi'>根据您的购票历史推荐</span>
      </li>
      <li class='ter'> MORE > </li>
    </ul>
    <app-style></app-style>
  </div>
</div>
</template>

<script>
import Banner from './template/banner'
import Style from './template/style'
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
      list1Img:[
          {url: '../../static/image/home/banner1.jpg'},
          {url: '../../static/image/home/banner2.jpg'},
          {url: '../../static/image/home/banner3.jpg'},
          {url: '../../static/image/home/banner4.jpg'},
          {url: '../../static/image/home/banner5.jpg'}
        ]
    }
  },
  components:{'app-banner': Banner,'app-style':Style}
}
</script>

<style>
.tel{text-align: left;}
.ter{
  text-align: right;
  font-size:1rem;
  color:#FA5509;
  margin-top:0.5rem;
}
h1{
  font-size:1.2rem;
  font-weight: normal;
  margin:0;
}
ul{
  height:3rem;
  padding:0;
  margin-top:0.5rem;
  margin-bottom:0;
}
ul>li{
  width:50%;
  float:left;
  list-style: none;
}
.tishi{
  font-size:0.3rem;
}
</style>