<template>
  <div id="app">
    <headers></headers>
    <transition name="fade">
        <router-view></router-view>
    </transition>
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
<style>
*{
  margin:0;
  padding:0
}
#app {
  font-family: 'Source Sans Light', 'Apple LiSung Light', 'STHeiti Light', 'SimSun', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
