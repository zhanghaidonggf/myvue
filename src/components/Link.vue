<template>
  <div class="link">
      <div class="ui container">
         <h1 class="ui title">打个招呼吧</h1>
         <h2 class="introduce">留言功能和留言板正在建设当中......</h2>
         <div class="ui massive form">
            <div class="eight wide field">
               <input type="text" placeholder="称呼" v-focus>
            </div>
            <div class="sixteen wide field">
               <textarea type="text" placeholder="留言"></textarea>
            </div>
            <div class="eight wide field">
               <input type="text" placeholder="邮箱">
            </div>
            <div class="eight wide field">
               <input type="text" placeholder="个人主页或github地址">
            </div>
            <div class="sixteen wide field sendbutton">
               <i class="send outline big icon"></i>
            </div>
         </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'link',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    $('.autumn.leaf').transition('drop');
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
.link{
  margin-top:80px;
  background:url('../assets/images/city.jpg');
  background-size: cover;
  height:100%;
}
.link .title{
  font-size:45px;
  width:100%;
}
.introduce{
  font-size:25px;
  width:100%
}
.form{
  margin-top:40px;
}
.ui.form textarea{
  height:10rem
}
.wide.field{
  display:inline-block;
  margin-bottom:40px;
}
.sendbutton{
  text-align:center
}
.link .container{
  width:970px;
}
.sendbutton i{
  cursor: pointer;
}
.sendbutton i:hover{
  color:#545454
}
</style>
