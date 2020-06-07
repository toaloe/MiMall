<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'
// import jsonp from 'jsonp'
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      // res:{}

    }
  },
  mounted(){
    this.getUser();
    this.getCartCount();
    // storage.setItem('a',1);
    // storage.setItem('suer',{a:1});
    // storage.setItem('abc',{a:1},'suer');
    // storage.clear('a','user');
    //  本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res
    // })
    // 通过easy-mock平台实现数据mock
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res
    // })
    //本地集成mock.js实现数据mock
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res
    // })
  },
  methods:{
    getUser(){
      this.axios.get('/mock/user/login.json').then((res)=>{
        //to-do保存到vuex里面
        this.$store.dispatch('saveUserName',res.username);
      })
    },

    getCartCount(){
      this.axios.get('/mock/user/prosum.json').then((res)=>{
        //to-do保存到vuex里面
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/modal.scss';
@import './assets/scss/button.scss';
</style>
