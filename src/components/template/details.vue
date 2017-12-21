<template>
	<div class="Router">
		<div class="detail">
			<div class="header-detail">
      			<i class='icon iconfont icon-fanhui' @click='$router.goBack()'></i>
    		</div>
    		<div class="detail-content">
    			<ul>
    				<li class='image'>
    					<span :style="{ backgroundImage: 'url(' + item.url + ')' }"></span>
    				</li>
    				<li><h3>{{item.title}}</h3></li>
    				<li class='price'>￥{{item.price}}</li>
    				<li class='small'>{{item.logo}}</li>
    				<li class='small'>{{item.date}}</li>
    				<li class='small'>{{item.adress}}</li>
    				<li class='func'>
    					<ol>
    						<li>联系客服</li>
    						<li class='left-bk'>设置提醒</li>
    						<li class='left-bk'>查看地图</li>
    					</ol>
    				</li>
    			</ul>
    		</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			item:''
		}
	},
	created(){
		// 获取列表
		this.item=this.$route.query.product;
	}
}
</script>
<style>
.detail{
	margin-top:3rem;
}
.header-detail{
  height:3rem;
  line-height: 3rem;
  background:#fff;
  margin:0;
  position:fixed;
  top:0;
  left:0;
  right:0;
}
.detail-content ul{
	padding:0;
}
.detail-content li{
	list-style: none;
}
.detail-content .image span{
	display: inline-block;
	width:45%;
	height:12rem;
	/*border-radius: 8px;*/
	background-size: 100% 100%;
}
.detail-content li h3{
	margin-bottom: 0;
}
.detail-content .price{
	text-align: center;
	color:red;
	border-bottom:1px solid #eee;
	padding-bottom:1rem;
}
.detail-content .small{
	font-size: 0.8rem;
	text-align:left;
	margin:0.5rem;
}
.detail-content .func ol{
	padding:0;
	overflow: hidden;
	padding-top:0.5rem;
	padding-bottom:0.5rem;
	border-top:1px solid #eee;
	border-bottom:1px solid #eee;
}
.detail-content .func ol li{
	float:left;
	width:33%;
	font-size:0.85rem;
}
.detail-content .func ol .left-bk{
	border-left: 1px solid #eee;
}
</style>