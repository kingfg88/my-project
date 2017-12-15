<template>
	<div class='find'>
		<h1 class='header-find' v-text='title'></h1>
		<div class='nav-find'>
			<!-- 活动群 -->
			<p class='show-find'>
				演出互动群
				<span class='xiahua'></span>
			</p>
    		<div class='qun' v-for='item in list'>
      			<div class='qun-content'>
        			<ul class='qun-top'>
          				<li class='left'><span class='back-img' :style="{ backgroundImage: 'url(' + item.url + ')' }"></span></li>
         				 <li class='right'>
            				<ol class='details'>
              					<li class='name'>{{item.title}}</li>
              					<li class='members'>已有成员{{item.members}}</li>
            				</ol>
          				</li>
        			</ul>
      			</div>
      		</div>
      		<div class='btn'>更多沟通群</div>

      		<div class='find-fenge'></div>
			<!-- 本地场馆 -->
      		<p>
				本地livehouse
				<span class='xiahua'></span>
			</p>
			<div class='live' v-for='item in liveList'>
				<span class='big-img' :style="{ backgroundImage: 'url(' + item.url + ')' }">
					<i class='position-img' :style="{ backgroundImage: 'url(' + item.url1 + ')' }"></i>
				</span>
				<p class='livename'>{{item.livename}}</p>
				<p class='live-adress'>{{item.liveAdress}}</p>
			</div>
			<div class='btn'>更多livehouse</div>

			<div class='find-fenge'></div>
			<!-- 推荐艺人 -->
			<p>
				推荐艺人
				<span class='xiahua'></span>
			</p>
			<!-- 引入swiper -->
    		<Tuijian></Tuijian>

    		<div class='find-fenge'></div>
		</div>
	</div>
</template>
<script>
	import Tuijian from './template/tuijian'
	export default{
		data () {
			return{
				title:'发现',
				list:[
          			{
            			url:'../../static/image/home/qiyingli.jpeg',
            			title:'安子与九妹 ·「归去来兮」 全国巡演',
            			members:'1074'
          			},
          			{
            			url:'../../static/image/home/sude.jpg',
            			title:'草木光年琥珀2017巡演',
            			members:'666'
          			},
          			{
            			url:'../../static/image/home/tangchao.jpeg',
            			title:'#地下8英里 总决赛西安站',
            			members:'888'
          			}
        		],
        		liveList:[
        			{
        				url:'../../static/image/guangyin.jpeg',
        				url1:'../../static/image/guangyin.jpeg',
        				livename:'光音拾陆原创俱乐部',
        				liveAdress:'中国陕西省西安市南二环转盘向东100米'
        			},
        			{
        				url:'../../static/image/guangquan.jpeg',
        				url1:'../../static/image/guangquan.jpeg',
        				livename:'光圈CLUB',
        				liveAdress:'环城西路南段1号光圈APERTURE CLUB'
        			},
        			{
        				url:'../../static/image/midie.jpg',
        				url1:'../../static/image/midie.jpg',
        				livename:'迷蝶Livehouse',
        				liveAdress:'西安碑林区德福巷二号巷子庙旁迷碟酒吧'
        			}
        		]
			}
		},
		components:{Tuijian},
    mounted(){
      $("div[class='qun']:last").css('border-bottom','none');
      window.scrollTo(0,0);
    }
	}

	
</script>
<style>
.header-find{
  font-size: 1rem;
  font-weight: normal;
  height:3rem;
  line-height: 3rem;
  background:#fff;
  margin:0;
  border-bottom: 1px solid #eee;
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index: 999;
}
.nav-find{
  margin-top:3.5rem;
  margin-bottom: 3rem;
}
.show-find{
	font-weight: bold;
	margin-bottom:2rem;
}
.xiahua{
	display: block;
	height:2px;
	width:2rem;
	background:red;
	margin:0.2rem auto;
}
.qun{
	margin-top:2rem;
  	border-bottom: 1px solid #eee;
}
.qun-content .qun-top{
  height:4rem;
  padding-bottom: 1rem;
}
.qun-content li{
  float:left;
  list-style: none;
}
.qun-top{
	margin:0;
	padding:0;
}
.qun-top>.left{
  width:30%;
  height:100%;
}
.qun-top>.right{
  width:60%;
  height:100%;
}
.qun-top>li>.back-img{
  display:inline-block;
  width:70%;
  height:90%;
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
.details .name{
  font-size: 0.88rem;
  color:#000;
}
.btn{
	width:90%;
	height:2rem;
	line-height: 2rem;
	border:1px solid #999;
	border-radius:25px;
	margin:auto;
	font-weight: bold;
}
.find-fenge{
  height:0.7rem;
  background:#eee;
  margin:2rem auto;
}
/*本地*/
.live{
	text-align: left;
}
.big-img{
	display: block;
	width:100%;
	height:12rem;
	background-size:100% 100%;
	position:relative;
}
.position-img{
	display: inline-block;
	width:3rem;
	height:3rem;
	border:2px solid #fff;
	border-radius:50%;
	position:absolute;
	bottom:-1.5rem;
	right:1rem;
	background-size:100% 100%;
}
.livename{
	padding-left:1rem;
	margin-bottom:0;
	font-size:0.8rem;
	font-weight: bold;
}
.live-adress{
	padding-left:1rem;
	font-size:0.5rem;
	margin-top:0.5rem;
}
</style>