<template>
<div class='Router'>
  <div class="style">
    <div class="header-style">
      <i class='icon iconfont icon-fanhui' @click='$router.goBack()'></i>
      <h1>{{$store.state.msg}}</h1>
    </div>
    <!-- 演出列表 -->
  <div class='list'>
      <router-link :to="{path: 'details', query: {product: list}}" class='list-style' v-for='list in this.$store.state.lists'>
      <div class='style-content'>
        <ul class='list-style-top'>
          <li class='left'>
            <span class='back-img' :style="{ backgroundImage: 'url(' + list.url + ')' }"></span>
          </li>
          <li class='right'>
            <ol class='details'>
              <li class='title'>{{list.title}}</li>
              <li class='date'>{{list.date}}</li>
              <li class='adress'>场馆:{{list.adress}}</li>
              <li class='logo'>
                <ul>
                  <li class='price'>
                    ￥{{list.price}}
                  </li>
                  <li class='leibie'>
                    {{list.logo}}
                  </li>
                </ul>
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </router-link>
  </div>
  </div>
</div>
</template>
<script>
import store from '../../vuex/store'
import {setCookie,getCookie} from '../../cookie.js'
import Store from '../../store'
export default{
  data () {
	  return{
      lists:[],
		}
	},
  mounted(){
    window.scrollTo(0,0);
  },
  created(){
    console.log(store.state.lists)
    // 循环通过路由传过来的数据
    for(var i=0;i<this.$route.query.product.length;i++){
      // 如果其中logo数据和vuex中存储的数据相同
      if(this.$route.query.product[i].logo==store.state.msg){
        // 则将这个数据push到当前lists中
        this.lists.push(this.$route.query.product[i]);
        this.$store.commit('savelist',this.lists)
      }
    }
  }
}
</script>
<style>
.style{
  margin-top:3rem;
}
i{
	display:inline-block;
	width:12px;
}
.header-style{
  height:3rem;
  line-height: 3rem;
  background:#fff;
  margin:0;
  border-bottom: 1px solid #eee;
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index: 99;
}
.header-style h1{
  font-size: 1.1rem;
}
.list{
  padding-top:0.5rem;
}
.style-content{
  margin:0.5rem;
}
.style-content ul{
  padding:0;
}
.style-content .list-style-top{
  height:8rem;
  padding: 0.5rem;
  padding-left:0;
  padding-bottom:1rem;
  margin:0;
}
.style-content li{
  float:left;
  list-style: none;
}
.list-style-top>.left{
  width:37%;
  height:100%;
}
.list-style-top>.right{
  width:63%;
  height:100%;
}
.list-style-top>li>.back-img{
  display:inline-block;
  border-radius: 8px;
  width:85%;
  height:100%;
  background-size: 100% 100%;
}
.style-content .details{
  height:100%;
  padding:0;
  position:relative;
}
.style-content .details li{
  width:100%;
  list-style: none;
  text-align: left;
  font-size:0.5rem;
  /*color:#666;*/
}
.style-content .details .title{
  margin-bottom:0.8rem;
  font-size: 1rem;
  color:#000;
}
.style-content .details .logo{
  position:absolute;
  bottom:0;
  left:0;
}
.style-content .details .logo>ul>li{
  float:left;
}
.style-content .details .logo>ul{
  height:100%;
  line-height:200%;
}
.style-content .details .logo>ul>.price{
  font-size: 1rem;
  width:79%;
  /*color:#000;*/
}
.style-content .details .logo .leibie{
  background:#eee;
  border-radius: 7px;
  width:20%;
  text-align: center;
  /*height:50%;*/
  /*line-height: 200%;*/
  padding:0.05rem;
  font-size:0.3rem;
}
</style>