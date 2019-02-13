<template>
  <div id="app">
    <div id="nav">
      <button @click="goBack">后退</button>
      <button @click="goForward">前进</button>
      <button @click="goHome">返回首页</button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/mine">我的</router-link>|
      <router-link to="/test">test</router-link>|
      <router-link :to="{name:'test1',params:{name:'zs',age:'32'}}">test1</router-link>|
      <router-link to="/test2/zu/90">test2</router-link>|
      <router-link to="/home/ww/40">返回首页</router-link>|
      <router-link to="/viewstest">别名</router-link>|
      <router-link to="/Error404">错误</router-link>|
  </div>
    <transition name="fade">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  methods:{
   goBack(){
    this.$router.go(-1)
    },
   goForward(){
    this.$router.go(1)
    },
   goHome(){
    this.$router.push('/')
    },
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s ease 1s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s ease;
}
.fade-leave-to{
  opacity: 0;
}
</style>
