<template>
  <div id="app">
    <transition :name='transitionName'>
      <!-- 引入内容 -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default{
    data () {
      return{
        transitionName: 'slide-right'  // 默认动态路由变化为slide-right
      }
    },
    watch: {
　　　'$route' (to, from) {
　　　　　　var isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
　　　　　　if(isBack) {
　　　　　　　　this.transitionName = 'slide-right'
　　　　　　}else{
　　　　　　  this.transitionName = 'slide-left'
　　　　　 }
　　　　　　this.$router.isBack = false
　　  }
　  }
  }
</script>
<style>
body{margin:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration: none;
  color:#2c3e50;
}
.icon-fanhui{
  font-size: 1.2rem;
  position:absolute;
  left:0.5rem;
  top:0;
  z-index: 999;
}
.Router {
     position: absolute;
     width: 100%;
     transition: all 0.5s ease;
}

.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
