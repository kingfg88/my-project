<template>
	<ul class='header'>
		<li class='adress'>{{adress}}<i class='jiantou icon iconfont icon-jiantouxia'></i></li>
		<li class='title'>秀动</li>
		<li class='logo'><i class='date icon iconfont icon-rili'></i><i class='icon iconfont icon-sousuo'></i></li>
	</ul>
</template>
<script>
export default {
  data () {
    return {
      adress: '西安'
    }
  },
  mounted(){
  	$(function(){
	$('.adress').click(function(){
		$('.jiantou').addClass('up');
	});
})
  }
}



</script>

<style scoped>
	.header{
		position:fixed;
		top:0;
		left:0;
		right:0;
		z-index: 10;
		background:#fff;
		border-bottom: 1px solid #eee;
		height:3rem;
		line-height: 3rem;
		padding-left:1rem;
		padding-right:1rem;
		margin:0;
	}
	.header>li{
		list-style: none;
		float:left;
		width:33%;
		height:100%;
	}
	.adress{
		text-align: left;
		font-size:0.9rem;
	}
	i{
		display:inline-block;
		width:25px;
		height:25px;
	}
	.jiantou{
		margin-left:5px;
	}
	.up{
		transform:rotate(180deg);
		transform-origin:8px 24px;
		transition:transform 0.5s;
	}
	.title{
		font-size: 1rem;
		font-weight: bold;
	}
	.logo{
		text-align: right;
	}
	.logo .iconfont{
		color:#000;
		font-size: 1.3rem;
	}
	.date{
		margin-right:15px;
	}
</style>