<template>
	<ul>
		<li class='adress'>{{adress}}<i class='jiantou down'></i></li>
		<li class='title'>秀动</li>
		<li class='logo'><i class='date'></i><i class='search'></i></li>
	</ul>
</template>
<script>
export default {
  data () {
    return {
      adress: '西安'
    }
  }
}

$(function(){
	$('.adress').click(function(){
		$('.down').addClass('up');
	});
})

</script>

<style scoped>
	ul{
		width:100%;
		height:2rem;
		padding:0;
		margin:0.5rem auto;
	}
	ul>li{
		list-style: none;
		float:left;
		width:33%;
		height:100%;
	}
	.adress{
		text-align: left;
		font-size:16px;
	}
	i{
		display:inline-block;
		width:25px;
		height:25px;
	}
	.jiantou{
		background-size: 100% 100%;
		width:15px;
		height:15px;
		margin-left:5px;
	}
	.up{
		/*background-image: url(../image/up.png);*/
		transform:rotate(180deg);
		transition:transform 1s;
	}
	.down{
		margin-bottom: -2px;
		background-image: url(../../static/image/home/down.png);
	}
	.title{
		font-size: 20px;
		font-weight: bold;
	}
	.logo{
		text-align: right;
	}
	.search{
		background-image: url(../../static/image/home/search.png);
		background-size: 100% 100%;
	}
	.date{
		margin-right:15px;
		background-image: url(../../static/image/home/date.png);
		background-size: 100% 100%;
	}
</style>