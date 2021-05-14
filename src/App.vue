<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <div id="footer">
    本测试结果仅供娱乐
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: 'I am a malert!'
    }
  },
  props: [],
  methods: {
  }
};

</script>

<style lang="scss">
html,body{
  height:100%;
  max-width:500px;
  margin:0 auto;
  background-color:lin
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to bottom, #69f3dfa3, #87cdef);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
#app>div{
  flex-grow:1;
}
#app>#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  flex-grow:0;
  height:50px;
  line-height:50px;
  text-align:left;
  padding:0 3%;
}
#app>#footer{
  flex-grow:0;
  height:50px;
  line-height:50px;
}
</style>
