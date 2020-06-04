<template>
	<div class="login">
		<div class="header-login">
			<i class='close icon iconfont icon-guanbi' @click='closed()'></i>
		</div>
		<div class="nav-login">
			<i class="logo"></i>
			<div class="login-wrap" v-show="showLogin">
          <p v-show="showTishi">{{tishi}}</p>
          <div class="uname">
            <span>+86</span>
            <input type="text" placeholder="请输入手机号码" v-model="username">
          </div>
          
          <div class="pword">
            <input type="password" placeholder="请输入密码" v-model="password">
            <i :class="open?'icon iconfont icon-yanjingbiqilai':'icon iconfont icon-zhengyan'" @click='change()'></i>
          </div>
          
          <button v-on:click="login">登录</button>
          <span>
            <span v-on:click="ToRegister">还没帐号?立即注册</span>
            <!-- <i class='fengexian'>|</i>
            <span>忘记密码</span> -->
          </span>
      </div>

      <div class="register-wrap" v-show="showRegister">
          <p v-show="showTishi">{{tishi}}</p>
          <div class="uname">
            <span>+86</span>
            <input type="text" placeholder="请输入手机号码" v-model="newUsername"  @blur='utishi()'>
          </div>
          <span v-show="usertishi">{{usermsg}}</span>
          <div class="pword">
            <input type="password" placeholder="请设置登录密码" v-model="newPassword"  @blur='ptishi()' :type="open?'text':'password'">
            <i :class="{ 'icon iconfont icon-zhengyan':'icon iconfont icon-yanjingbiqilai' }" @click='change()'></i>
          </div>
          <span v-show="pwordtishi">{{pwordmsg}}</span>
          <button v-on:click="register">注册</button>
          <span v-on:click="ToLogin">已有账号？马上登录</span>
      </div>
		</div>
	</div>
</template>
<script>
	import {setCookie,getCookie} from './../cookie.js'
	export default{
		data () {
			return{
				showLogin: true,
        showRegister: false,
        showTishi: false,
        tishi: '',
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        open:false,
        usertishi:false,
        usermsg:'',
        pwordtishi:false,
        pwordmsg:''
			}
		},
		mounted(){
  			/*页面挂载获取cookie，如果存在username的cookie，则跳转到my，不需登录*/
   			if(getCookie('username')){
        		this.$router.push('/my')
        	}
    	},
    	methods:{
        closed(){
          this.$router.push('/home')
        },
        // 注册登录密码是否明文
        change(){
            this.open=!this.open;
        },
        // 手机号码验证
        utishi(){
          if(this.newUsername.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.newUsername)){
            this.usermsg='',
            this.usertishi=false
          }else if(this.newUsername.length==0){
            this.usermsg='手机号不能为空',
            this.usertishi=true
          }else{
            this.usermsg='您输入的手机号有误',
            this.usertishi=true
          }
        },
        // 密码验证
        ptishi(){
          if(this.newPassword.length >= 6 && /^[a-zA-Z]\w{5,17}$/.test(this.newPassword)){
            this.pwordmsg='',
            this.pwordtishi=false
          }else if(this.newPassword.length==0){
            this.pwordmsg='密码不能为空',
            this.pwordtishi=true
          }else{
            this.pwordmsg='以字母开头，长度在6~18之间，只能包含字符、数字和下划线',
            this.pwordtishi=true
          }
        },
        // 登陆
    		login(){
        		if(this.username == "" || this.password == ""){
            		alert("请输入用户名或密码")
        		}else{
            		let data = {'username':this.username,'password':this.password}
                /*接口请求*/
            		this.$http.post('http://127.0.0.1:3000/login',data,{emulateJSON:true}).then((res)=>{
             			/*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
              			if(res.data == -1){
                  			this.tishi = "该用户不存在"
                  			this.showTishi = true
              			}else if(res.data == 0){
                  			this.tishi = "用户名或密码输入错误"
                  			this.showTishi = true
              			}else{
                  			this.tishi = "登录成功"
                  			this.showTishi = true
                  			setCookie('username',this.username,1000*60)
                  			setTimeout(function(){
                      		this.$router.push('/home')
                  		  }.bind(this),1000)
                    }
          			}).catch((error)=>{
                  console.log(error)
                })
      				}
        },
        //注册
    		register(){
            if(this.newUsername == "" || this.newPassword == ""){
                alert("请输入用户名或密码")
            }else{
                let data = {'username':this.newUsername,'password':this.newPassword}
                this.$http.post('http://127.0.0.1:3000/register',data,{emulateJSON:true}).then((res)=>{
                    console.log(res)
                    if(res.data == "ok"){
                      this.tishi = "注册成功"
                      this.showTishi = true
                      this.username = ''
                      this.password = ''
                      /*注册成功之后再跳回登录页*/
                      setTimeout(function(){
                          this.showRegister = false
                          this.showLogin = true
                          this.showTishi = false
                      }.bind(this),1000)
                    }
                })
            }
    		},
    		ToRegister(){
            this.showRegister = true
            this.showLogin = false
    		},
    		ToLogin(){
            this.showRegister = false
            this.showLogin = true
    		}
  		}
  	}
	
</script>
<style>
	.header-login{
		height:3rem;
		position:relative;
	}
	.header-login .close{
		display: inline-block;
		position:absolute;
		right:1rem;
		top:0.8rem;
    font-size:1.3rem;
	}
	.nav-login .logo{
		display:inline-block;
		width:6rem;
		height:6rem;
		margin-top:3rem;
    margin-bottom:3rem;
		background-image: url(../../static/image/logo.png);
		background-size: 100% 100%;
	}
	.nav-login{text-align:center;}
  .nav-login input{width:80%;font-size:0.8rem;display:block;  height:2.5rem; line-height:2.5rem; outline:none; border:none;box-sizing:border-box;}
  .nav-login .uname,.nav-login .pword{position:relative;width:80%;margin:auto;border-bottom:1px solid #eee;padding-left:1rem;}
  .nav-login .uname input{margin-left:2rem;}
  .nav-login .uname span{position:absolute;top:0.7rem;left:0.5rem;border-right:1px solid #eee;
    width:2rem;height:1rem;}
  .nav-login .pword i{position:absolute;top:0.5rem;right:0.7rem;}
  .nav-login p{color:red;}
  .nav-login button{display:block; width:80%; height:2rem; line-height: 2rem; margin:0 auto; border:none; background-color:#e4393c; color:#fff; font-size:0.8rem; margin-bottom:1rem;
    margin-top:3rem;}
  .nav-login span{cursor:pointer;color:#e4393c;font-size: 0.8rem;}
  .nav-login span:hover{color:#41b883;}
  .fengexian{
    	margin:1rem;
  }
  .pword .iconfont{
    font-size: 1.4rem;
  }
</style>
