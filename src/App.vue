<template>
  <div id="app">
    <TheNavigation />
    <router-view/>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'

export default {
  components: {
    TheNavigation
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
