<template>
  <div class="hello">
    <div class="ui containe">
        <header id="banner" class="hero-unit no-radius">
            <div class="ui container text-center">
                <h1><img src="../assets/images/title.png" alt="Dandy Weng" v-if="bool==1"><span v-else>{{msg}}</span></h1>
            </div>
        </header>
    </div>
    <div class="ui contentbody">
      <div class="ui container topcard center aligned panel-description">
              <img src="../assets/images/haidong.jpg" class="ui small centered image">
              <h3 class="ui centered">大家好我是haidong,是一名前端工程师,爱好打篮球、旅行</h3>
              <h4 class="ui centered">想看到自信的自己,今天就要强大起来</h4>
              <div class="mysite">
                  <h3>this is mySite,weclome everyone,这是我的网站欢迎大家,这是<a href="https://github.com/zhanghaidonggf/myvue.git" target="_blank">gibhub地址</a></h3>
              </div>
      </div>
      <div class="ui container charts">
        <div class="ui grid">
            <div id="prodiuce" class="eight wide column">
                <p class="wo">
                  刚刚从学校出来,进入第一家公司从css和html开始一点一点开始写起,那时候js框架就知道jq,感觉自己会jq就很无敌了开始着迷新手时期各种前端的效果,在公司呆了一年无论是
              从学习的角度还是从自己价值的角度感觉公司都满足不了自己,所以跳槽了,然后去了一家外部公司。<p>
                <p class="wo"> 
                   都说外包公司能锻炼人这话不全对(自己体会),作为工作一年的菜鸟秉着锻炼学习的态度去了外包公司,确实能锻炼人无论从技术上还是抗压上都有提高,很致命的一点就是很累,还有用到的东西很杂并不能系统起来(当时自己真的没时间去考虑这些,眼里只有干不完的工作工作),只有期盼有一天加班不超过10点回去自己整理一下。。。，真的太累了身体有些吃不消,所以果断辞职了。其实挺感谢这段时间的在这段时间里认识到了boostrap优秀的ui框架,知道了前端的Amd规范并开始学习requirjs的学习和sea.js的学习</p>
                <p class="wo">后来去了一家媒体公司,说实话在这家公司有利有弊,坏处就是很显然不是一家技术公司没有用到啥新技术前端我一个说了算,一直处于边学习边实践的工作中,没有啥压迫力,时刻提醒自己得学习,好处就是跟编辑们学到了很多,最起码变开朗了  待续。。。。
                </p>
            </div>
            <div id="myChart" style="width:50%;height:500px" class="eight wide column">
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to haidong site',
      bool:0,
      option: {
              tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                  orient: 'vertical',
                  left: 'left',
                  data: ['js','css','js库','css库','其他']
              },
              series : [
                  {
                      name: '前端领域',
                      type: 'pie',
                      radius : '55%',
                      center: ['50%', '60%'],
                      data:[
                          {value:335, name:'css'},
                          {value:310, name:'js库'},
                          {value:234, name:'css库'},
                          {value:135, name:'其他'},
                          {value:700, name:'js'}
                      ],
                      itemStyle: {
                          emphasis: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                          }
                      }
                  }
              ]
      }
    }
  },
  mounted() {
    this.bool=1;
    this.drawLine();
  },
  methods: {
    drawLine() {
      var _this=this;
      let echarts = require('echarts/lib/echarts')
      let chartBox=document.getElementsByClassName('charts')[0]
      let myChart=document.getElementById('myChart')
      function resizeCharts() {//为调整图标尺寸的方法
          myChart.style.width=chartBox.style.width+'px'
          myChart.style.height=chartBox.style.height+'px'
              }
         let mainChart = echarts.init(myChart)// 基于准备好的dom，初始化echarts实例
         if (_this.option && typeof _this.option === "object") {
             mainChart.setOption(_this.option, true)
         }
    }
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
.hero-unit {
    position: relative;
    background: url(http://dandyweng.qiniudn.com/images/cover-5.jpg);
    background-size: cover;
    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://dandyweng.qiniudn.com/images/cover-5.jpg', sizingMethod='scale');
    -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/http://dandyweng.qiniudn.comimages/cover-5.jpg', sizingMethod='scale')";
    color: #fff;
    height: 480px;
    margin-bottom: 0;
}
.text-center {
    text-align: center;
    padding-top: 40px;
}
.hero-unit img {
    max-width: 500px;
    -webkit-animation: title-in 1s ease-out 0 1 forwards;
    -webkit-transition: 500ms;
    -moz-transition: 500ms;
    transition: 500ms;
}
.hero-unit img:hover {
    -webkit-transform: translateY(-5px) scale(1.05) rotate(2deg);
    -moz-transform: translateY(-5px) scale(1.05) rotate(2deg);
    transform: translateY(-5px) scale(1.05) rotate(2deg);
}
.topcard{
  background:#ffffff;
  opacity:0.8;
  top:-230px;
  border-radius:10px;
}
.topcard img{
  padding:20px;
  border-radius:75px;
}
.panel-description{

}
.contentbody{
  position:relative;
  background:url('../assets/images/mooning.jpg')
}
.panel-description{
  position:relative;
  -webkit-animation: panel-in 1s linear 0 1;
  -webkit-box-shadow: 0px 1px 8px 1.5px rgba(0, 0, 0, .35), 0px 20px 70px 8px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 8px 1.5px rgba(0, 0, 0, .35), 0px 20px 70px 8px rgba(0, 0, 0, 0.25);
  -ms-box-shadow: 0px 1px 8px 1.5px rgba(0, 0, 0, .35), 0px 20px 70px 8px rgba(0, 0, 0, 0.25);
  -o-box-shadow: 0px 1px 8px 1.5px rgba(0, 0, 0, .35), 0px 20px 70px 8px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 1px 8px 1.5px rgba(0, 0, 0, .35), 0px 20px 70px 8px rgba(0, 0, 0, 0.25);
}
.panel-description h3 {
    font: 500 18px/1.8 'Optima', 'Verdana', 'Microsoft Yahei', sans-serif;
    margin:10px;
}
.panel-description h4 {
    color: rgba(0, 0, 0, 0.7);
    font-size: 14.5px;
    margin:5px;
}
.mysite{
  padding:20px
}
.charts{
  background:#ffffff;
  margin-top:-120px;
  border-radius:10px;
  padding:20px;
  -webkit-animation: panel-in 1s linear 0 1;
  -webkit-box-shadow: 0px 1px 8px 1.5px rgba(0, 0, 0, .35), 0px 20px 70px 8px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 8px 1.5px rgba(0, 0, 0, .35), 0px 20px 70px 8px rgba(0, 0, 0, 0.25);
  -ms-box-shadow: 0px 1px 8px 1.5px rgba(0, 0, 0, .35), 0px 20px 70px 8px rgba(0, 0, 0, 0.25);
  -o-box-shadow: 0px 1px 8px 1.5px rgba(0, 0, 0, .35), 0px 20px 70px 8px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 1px 8px 1.5px rgba(0, 0, 0, .35), 0px 20px 70px 8px rgba(0, 0, 0, 0.25);
  padding-bottom:50px
}
#charts{
   display:inline-block;
   overflow:hidden;
}
#prodiuce{
   display:inline-block;
   background: #FFF url(http://dw-resources.qiniudn.com/images/patterns/white_wall_hash.jpg);
}
.wo{
    font: 500 15px/1.8 'Optima', 'Verdana', 'Microsoft Yahei', sans-serif;
    cursor: default;
    padding:20px;
    text-align:left;
    text-indent:30px; 
}
</style>
