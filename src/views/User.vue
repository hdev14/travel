<template>
  <div>
    <h1>Welcome {{ user }}</h1>
    <router-link to="/invoices">My invoices</router-link>
    <button @click="logOut">log out</button>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data () {
    return {
      user: store.user
    }
  },
  methods: {
    logOut () {
      store.user = null
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

h1 {
  margin-top: 100px;
  text-transform: capitalize;
}

a {
  display: block;
  margin: 50px;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--green);
  text-transform: capitalize;
}

button {
  position: absolute;
  left: 50px;
  bottom: 50px;

  border: 0;
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  color: tomato;
  cursor: pointer;
}
</style>
