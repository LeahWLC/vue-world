<template>
  <div class="question">
    <p>问题{{queNo}}</p>
    <h3>{{questionItem.que}}?</h3>
    <ol type="A">
      <li v-for="(res, index) in questionItem.choice" v-bind:key="index" @click="giveChoice(res.to)">
        {{res.answer}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Question',
  data() {
    return {
      queNo: 1
    }
  },
  computed: {
    questionItem() {
      return this.$store.state.aboData.list[this.queNo-1];
    }
  },
  async beforeRouteUpdate(to, /*from*/) {
    // react to route changes...
    this.queNo = to.params.no
  },
  methods: {
    giveChoice(no) {
      if(typeof no == 'number'){
        this.$router.push('/question/'+no)
      }
      else{
        this.$router.push('/result/'+no)
      }
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
  margin: 0 5% 0 10%;
  text-align: left;
}
ol {
  padding-left: 20%;
}
li {
  margin: 0 10px;
  text-align: left;
  height:70px;
  line-height: 70px;
}
a {
  color: #42b983;
}
</style>
