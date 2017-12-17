<template>
	<div class="style">
		<i class='icon iconfont icon-fanhui'></i>
		<h1 class='header-style' v-text='title'></h1>
		<!-- 演出列表 -->
  <div>
    <div class='list-yanchu'>
      <div class='yanchu-content'>
        <ul class='list-yanchu-top'>
          <li class='left'></li>
          <li class='right'>
            <ol class='details'>
              <li class='title'>123</li>
              <li class='date'>456</li>
              <li class='adress'>场馆:123</li>
              <li class='logo'><span class='leibie'><i class='icon iconfont icon-1'></i>1</span></li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  </div>
	</div>
</template>
<script>
export default{
data () {
	return{
		title:'123'		
		}
	}
}
</script>
<style>
.style{

}
i{
	display:inline-block;
	width:25px;
	height:25px;
}
.icon-fanhui{
	position:absolute;
	left:1rem;
	top:1rem;
}
.header-style{
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
  margin:0;
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
</style>