<template>
  <div id="app">
    <headers></headers>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/Header'
export default {
  name: 'app',
  components: {
      headers: header
  }
}
</script>
<style scoped>
*{
  margin:0;
  padding:0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
