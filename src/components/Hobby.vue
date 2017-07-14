<template>
  <div class="hobby">
    <div class="ui stackable grid container">
      <div class="sixteen wide column basketball">
        <h1 class="ui header">篮球</h1>
        <p class="introduce">{{basketball}}</p>
        <img src="../assets/images/basketball.jpg" class="ui centered medium autumn leaf image transition hidden">
      </div>
      <div class="sixteen wide column readbook">
        <h1 class="ui header">读书</h1>
        <p class="introduce">{{book}}</p>
        <img src="../assets/images/book.jpg" class="ui centered medium autumn leaf image transition hidden">
      </div>
      <div class="sixteen wide column run">
        <h1 class="ui header">跑步</h1>
        <p class="introduce">{{basketball}}</p>
        <img src="../assets/images/run.jpg" class="ui centered medium autumn leaf image transition hidden">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      basketball: '篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常篮球对于我来说是一项挺重要的运动。小时候经常',
      book:'读书最大的好处是起到了修养身心  获得知识  开阔自己的视野  塑造正确的人生观价值观  还有学会与人相处 面对压力的时候的方法态度  至于挣钱嘛  那是比较直接的利益关系  只是不是必然的利益关系了  读书要活读 万万不能死读  读书也是一生的事  要持之以恒  要不断的给自己充电  与时俱进  获得内心的强大世界  寻求心灵的永恒  是精神食粮 不可缺少 是塑造灵魂的重要途径'
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
  font-family: 'Source Sans Light', 'Apple LiSung Light', 'STHeiti Light', 'SimSun', sans-serif;
}
.stackable{
  overflow:hidden
}
.hobby .header{
  font-size:35px
}
.introduce{
  font-size:20px;
}

</style>
