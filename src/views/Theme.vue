<template>
  <div class="theme">
    <h3>{{aboData.heading}}
      <small>--{{aboData.headingSmall}}</small>
    </h3>
    <div class="text">{{aboData.description}}
    </div>
    <div class="button">
      <router-link to='/question/1'>开始测试</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Theme',
    data() {
      return {
        aboData: this.$store.state.aboData
      }
    }
  }
</script>

<style lang="scss">
.theme{
  padding:0 5%;
  text-align:left;
  h3>small{
    display:block;
    text-align:right;
  }
  .text{
    text-indent:20px;
  }
  .button a{
    background-color:green;
    color:#FFF;
    display:block;
    width:120px;
    height:40px;
    line-height:40px;
    margin:50px auto 0;
    border-radius:5px;
    text-align:center;
    text-decoration:none;
    font-size:18px;
  }
}
</style>