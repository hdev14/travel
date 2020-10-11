<template>
  <div id="app">
    <TheNavigation />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"/>
    </transition>
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

:root {
  --black: #333;
  --green: #42b983;
  --white: #d6ffec;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--black);
  background-color: var(--white);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
