<template>
<div class='Router'>
  <div class="allstyle">
    <div class="header-style">
      <i class='icon iconfont icon-fanhui' @click='$router.goBack()'></i>
      <h1 v-text='title'>{{$store.state.msg}}</h1>
    </div>
	<div class="body-style">
		<router-link :to="{path: 'style'}" @click.native='saveName(str1)' v-for="(str1,index) in list1Img" :key='index' :style="{ backgroundImage: 'url(' + str1.url + ')' }">
				<span class='stylename' v-text='str1.name'></span>
		</router-link>
	</div>
   </div>
</div>
</template>
<script>
export default{
	data(){
		return{
			title:'全部风格',
			list1Img:[
					{name:'金属 Metal',url: '../../static/image/home/jinshu.jpeg'},
					{name:'后摇 Post-Rock',url: '../../static/image/home/houyao.jpg'},
					{name:'民谣 Folk',url: '../../static/image/home/minyao.jpeg'},
					{name:'摇滚 Rock',url: '../../static/image/home/yaogun.jpeg'},
					{name:'流行 Pop',url: '../../static/image/home/liuxing.jpeg'},
					{name:'嘻哈 Hip Hop',url: '../../static/image/home/xiha.jpeg'}
			],
		}
	},
	created(){
		// 获取列表
		// this.list=this.$route.query.product
		// console.log(this.list);
	},
	methods:{
		saveName(str1){
			var message=str1.name.replace(/[^\u4e00-\u9fa5]/gi,"")
			this.$store.commit('change',message)
		}
	}
}
</script>
<style>
.allstyle{
  margin-top:3rem;
}
i{
	display:inline-block;
	width:12px;
}
.icon-fanhui{
  font-size: 1.2rem;
	position:absolute;
	left:0.5rem;
	top:0;
  z-index: 999;
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
  margin:0;
}
.body-style{
	width:94%;
	padding:3%;
	margin:3rem auto;
}
.body-style a{
	display: inline-block;
	width:48%;
	height:5rem;
	margin:1%;
	background-size: 100% 100%;
	position:relative;
	color:#fff;
}
.body-style a span{
	position:absolute;
	left:0.5rem;
	bottom:0.3rem;
}
/*.body-styl ul{
	width:100%;
	overflow: hidden;
	padding:0.5rem;

}
.body-styl li{
	width:100%;
	height:5rem;
	list-style: none;
}
.body-styl li a{
	float:left;
	display: inline-block;
	width:44%;
	height:100%;
	margin-left:0.5rem;
	margin-top:0.5rem;
	position: relative;
	color:#fff;
	background-size: 100% 100%;
}
*/
</style>