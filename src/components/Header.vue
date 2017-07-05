<template>
  <div class="header">
    <div class="ui container">
      <div class="four ui buttons">
        <button class="ui black button"><router-link to="/index">自我简述</router-link></button>
        <button class="ui black button"><router-link to="/road">我的成长之路</router-link></button>
        <button class="ui black button"><router-link to="/index">爱好</router-link></button>
        <button class="ui black button"><router-link to="/road">其他</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
.header{
    background-image: linear-gradient(to bottom,#222,#111);
    background-repeat: repeat-x;
    border-color: #252525;
    background-color: #1b1b1b;
    box-shadow: 0 1px 10px rgba(0,0,0,0.1);
}
</style>
