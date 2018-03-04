<template>
  <div id="app">
    <Logo />
    <Carousel />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Logo from './components/Logo.vue'
import Carousel from './components/Carousel.vue'

export default {
  name: 'app',
  components: {
    Logo,
    Carousel
  }
}
</script>

<style>
#app {
  background-color: #f1f1f1;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}

body {
  margin: 0;
}
</style>
