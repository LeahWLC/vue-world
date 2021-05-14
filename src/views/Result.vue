<template>
  <div class="result">
    <p>测试结果</p>
    <h3>{{resultItem.title}}</h3>
    <div>
      {{resultItem.des1}}
    </div>
    <div>
      {{resultItem.des2}}
    </div>
    <div class="more">
      关于测试结果想 <button @click='showModual()'>了解更多</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      resNo: 'A',
      //questionItem: 
    }
  },
  computed: {
    resultItem() {
      return this.$store.state.aboData.result[this.resNo];
    }
  },
  props: {
  },
  async beforeRouteUpdate(to, /*from*/) {
    // react to route changes...
    this.resNo = to.params.res
  },
  methods: {
    showModual(){
      this.$malert.alert({
        title:'更多信息',
        text:this.$store.state.aboData.text
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: left;
  text-indent: 10%;
}
h3 {
  margin: 0 5% 16px 10%;
  text-align:left;
}
.result div{
  margin:0 5% 0 10%;
  text-align: left;
}
.result .more{
  margin-top:40px;
}
.result .more button{
  background-color: orange;
  color:#FFFFFF;
  height: 28px;
  line-height: 20px;
  padding: 4px;
  border:none;
  border-radius: 5px;
}
</style>
