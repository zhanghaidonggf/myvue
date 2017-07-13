<template>
  <div class="hobby">
    <div class="ui stackable grid container">
      <div class="sixteen wide column">
        {{msg}}
        <h1>篮球</h1>
        <p>篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常</p>
        <img src="../assets/images/basketball.jpg" class="ui small autumn leaf image transition hidden">
      </div>
      <div class="sixteen wide column">
        <p></p>
        <p></p>
      </div>
      <div class="sixteen wide column">
        <p></p>
        <p></p>
      </div>
      <div class="sixteen wide column">
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '欢迎来到我的兴趣爱好'
    }
  },
  mounted(){
      $('.autumn.leaf').transition('horizontal flip');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hobby{
  overflow:hidden;
  margin-top:30px;
}
.stackable{
  overflow:hidden
}
</style>
