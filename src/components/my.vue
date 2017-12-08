<template>
    <div class='my'>
        <h3>欢迎 {{name}}</h3>
        <button @click="quit">注销登录</button>
    </div>
</template>

<script>
/*引入公共方法*/
import {setCookie,getCookie,delCookie} from './../cookie.js'
    export default{
        data(){
            return{
                name: ''
            }
        },
        mounted(){
            /*页面挂载获取保存的cookie值，渲染到页面上*/
            let uname = getCookie('username')
            this.name = uname
            /*如果cookie不存在，则跳转到登录页*/
            if(uname == ""){
                this.$router.push('/login')
            }
        },
        methods:{
            quit(){
                /*删除cookie*/
                delCookie('username')
                setTimeout(function(){
                     this.$router.push('/login')
                }.bind(this),1000)
            }
        }
    }
</script>
<style>
	.my button{
		display:block;
		width:80%; 
		height:2rem; 
		line-height: 2rem; 
		margin:0 auto; 
		border:none; 
		background-color:#e4393c; 
		color:#fff; 
		font-size:0.8rem; 
		margin-bottom:1rem;
	}
</style>