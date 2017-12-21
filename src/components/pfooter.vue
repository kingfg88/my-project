<template>
	<div class='footer'>
		<router-link to='/home' class='child' exact>
			<i class='icon iconfont icon-shouye'></i><p>首页</p>
		</router-link>
		<router-link to='/find' class='child' @click.native='$router.goBack()'>
			<i class='icon iconfont icon-faxian'></i><p>发现</p>
		</router-link>
		<router-link to='/msg' class='child'>
			<i class='icon iconfont icon-xiaoxi'></i><p>消息</p>
		</router-link>
		<router-link to='/my' class='child'>
			<i class='icon iconfont icon-wode'></i><p>我的</p>
		</router-link>
	</div>
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
		background:#fff;
		border-top: 1px solid #eee;
		margin:0;
		padding:0;
		z-index:10;
	}
	.child .iconfont{
		font-size: 1.5rem;
		color:#999;
	}
	.footer .child{
		float:left;
		width:25%;
		height:100%;
		list-style: none;
	}
	.footer .child>a{
		text-decoration: none;
	}
	.footer .child i{
		display: inline-block;
		width:2.5rem;
		height:2rem;
		margin-top:0.2rem;
	}
	.footer .child p{
		font-size: 0.5rem;
		margin:0;
		margin-top:-0.5rem;
		color:#999;
		text-decoration: none;
	}
	.footer .router-link-active i,.footer .router-link-active p{
		color:#000;
	}
</style>