<template>
  <div id="app">
    <!-- 引入内容 -->
    <router-view></router-view> 
    <!-- 引入公共底部 -->
    <Pfooter></Pfooter>
  </div>
</template>

<script>

import Pfooter from './components/pfooter'
export default {
  components:{Pfooter}
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
}
</style>
