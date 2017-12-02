<template>
  <div id="app">
    <!-- 引入公共头部 -->
    <Pheader></Pheader>
    <!-- 引入内容 -->
    <Home></Home>
    <!-- <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{ finished:item.isFinished }" v-on:click="togglefinish(item)">
        {{item.lable}}
      </li>
    </ul>
    <ComponentA msgfromfather="oh! my son!"></ComponentA> -->
    <!-- 引入公共底部 -->
    <Pfooter></Pfooter>
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/componentA'
import Pheader from './components/pheader'
import Pfooter from './components/pfooter'
import Home from './components/home'
export default {
  data () {
    return {
      items:Store.fetch(),
      newItem:""
    }
  },
  components:{ComponentA,Pheader,Pfooter,Home},
  watch:{
    items:{
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  },
  methods:{
    togglefinish:function(item){
        item.isFinished=!item.isFinished;
      },
    addNew:function(){
      this.items.push({
          lable:this.newItem,
          isFinished:true
        });
      this.newItem="";
    }
  }
}
</script>

<style>
.finished{
  color:blue;
}
body{margin:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
