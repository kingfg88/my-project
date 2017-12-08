<template>
	<div class="login">
		<div class="header-login">
			<i class='close icon iconfont icon-guanbi'></i>
		</div>
		<div class="nav-login">
			<i class="logo"></i>
			<div class="login-wrap" v-show="showLogin">
          <p v-show="showTishi">{{tishi}}</p>
          <div class="uname">
            <span>+86</span>
            <input type="text" placeholder="请输入用户名" v-model="username">
          </div>
          <div class="pword">
            <input type="password" placeholder="请输入密码" v-model="password">
            <i :class="{ 'icon iconfont icon-yanjingbiqilai': close, 'icon iconfont icon-zhengyan': open }" @click='change()'></i>
          </div>
          <button v-on:click="login">登录</button>
          <span>
            <span v-on:click="ToRegister">注册帐号</span>
            <i class='fengexian'>|</i>
            <span>忘记密码</span>
          </span>
      </div>

      <div class="register-wrap" v-show="showRegister">
          <p v-show="showTishi">{{tishi}}</p>
          <div class="uname">
            <span>+86</span>
            <input type="text" placeholder="设置用户名" v-model="newUsername">
          </div>
          <div class="pword">
            <input type="password" placeholder="设置登录密码" v-model="newPassword">
            <i :class="{ 'icon iconfont icon-biyan': open, 'icon iconfont icon-zhengyan': close }" @click='change()'></i>
          </div>
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
        close:true,
        open:false
			}
		},
		mounted(){
  			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
   			if(getCookie('username')){
        		this.$router.push('/my')
        	}
    	},
    	methods:{
        // 密码是否明文
        change(){
            this.close=!this.close;
            this.open=!this.open;
            if($('.pword>input')[0].type=='text'){
              $('.pword>input')[0].type='password'
            }else{
              $('.pword>input')[0].type='text'
            }
        },
        // 验证
    		login(){
        		if(this.username == "" || this.password == ""){
            		alert("请输入用户名或密码")
        		}else{
            		let data = {'username':this.username,'password':this.password}
            		/*接口请求*/
            		this.$http.get('./../static/data/name.json',data).then((res)=>{
                		console.log(res)
             			/*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
              			if(res.data == -1){
                  			this.tishi = "该用户不存在"
                  			this.showTishi = true
              			}else if(res.data == 0){
                  			this.tishi = "密码输入错误"
                  			this.showTishi = true
              			}else if(res.data == 'admin'){
              				/*路由跳转this.$router.push*/
                  			this.$router.push('/main')
              			}else{
                  			this.tishi = "登录成功"
                  			this.showTishi = true
                  			setCookie('username',this.username,1000*60)
                  			setTimeout(function(){
                      		this.$router.push('/home')
                  		  }.bind(this),1000)
                    }
          			})
      				}
    		},
    		register(){
            if(this.newUsername == "" || this.newPassword == ""){
                alert("请输入用户名或密码")
            }else{
                let data = {'username':this.newUsername,'password':this.newPassword}
                this.$http.post('./../static/data/name.json',data).then((res)=>{
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