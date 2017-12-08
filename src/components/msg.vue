<template>
	<div class="msgall">
		<div class='header-msg'>
			消息
			<span>推送设置</span>
		</div>
		<div class='msg' v-for='item in list'>
      <ul class='msg-content'>
          <li class='left'><span class='back-img' :class='item.url'></span></li>
         	<li class='right'>
            <ol class='details'>
              	<li class='name'>{{item.title}}</li>
              	<li class='members'>{{item.members}}</li>
            </ol>
          </li>
          <li class='msg-logo'><i class='right-jiantou icon iconfont icon-jiantouyou'></i></li>
      </ul>
    </div>
	</div>
</template>
<script>
	export default{
		data () {
			return{
				list:[
          			{
            			url:'icon iconfont icon-tongzhi',
            			title:'官方',
            			members:'经过一年的沉淀，安子...'
          			},
          			{
            			url:'icon iconfont icon-pinglun',
            			title:'评论',
            			members:''
          			},
          			{
            			url:'icon iconfont icon-guanzhu',
            			title:'关注',
            			members:''
          			}
        		]
			}
		}
	}
</script>
<style>
.header-msg{
  font-size: 1.2rem;
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
.header-msg span{
	position: absolute;
	right:0.5rem;
	font-size: 1rem;
	font-weight: normal;
}
.msgall{
  margin-top:3rem;
  margin-bottom: 3rem;
}
.msg{
	height:5rem;
}
.msg-content{
  height:100%;
  margin:0;
  padding:0;
  border-bottom:1px solid #eee;
}
.msg-content>li{
  float:left;
  list-style: none;
  height:100%;
}
.msg-content>.left{
  width:30%;
}
.msg-content>.left>.iconfont{
  font-size: 1.8rem;
}
.msg-content>.right{
  width:60%;
}
.msg-content>li>.back-img{
  display:inline-block;
  width:2rem;
  height:2rem;
  background-size: 100% 100%;
  margin-top:1.2rem;
}
.msg-content .details{
  height:75%;
  margin-top:0.7rem;
  padding:0;
  position:relative;
}
.msg-content .details li{
  width:100%;
  list-style: none;
  text-align: left;
  font-size:0.5rem;
  color:#666;
}
.msg-content .details .name{
  font-size: 0.88rem;
  color:#000;
}
.msg-content .msg-logo{
	width:10%;
}
.msg-content .msg-logo .right-jiantou{
	display: inline-block;
	margin-top:2rem;
}
</style>