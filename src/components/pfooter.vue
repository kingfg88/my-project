<template>
	<ul class='footer'>
		<li><a href="#" class='home'></a><p>首页</p></li>
		<li><a href="#" class='find'></a><p>发现</p></li>
		<li><a href="#" class='msg'></a><p>消息</p></li>
		<li><a href="#" class='my'></a><p>我的</p></li>
	</ul>
</template>
<script>
	
</script>
<style>
	.footer{
		height:3rem;
		width:100%;
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		z-index: 999;
		background:#fff;
		border-top: 1px solid #eee;
		margin:0;
		padding:0;
	}
	.footer>li{
		float:left;
		width:25%;
		height:100%;
		list-style: none;
	}
	.footer li a{
		display: inline-block;
		width:1.5rem;
		height:1.3rem;
		background-size:100% 100%;
		margin-top:0.5rem;
	}
	.footer li p{
		font-size: 0.5rem;
		margin:0;
		margin-top:-0.25rem;
	}
	.footer li .home{
		background-image: url(../../static/image/home.png);
	}
	.footer li .find{
		background-image: url(../../static/image/unfind.png);
	}
	.footer li .msg{
		background-image: url(../../static/image/unmsg.png);
	}
	.footer li .my{
		background-image: url(../../static/image/unmy.png);
	}
</style>