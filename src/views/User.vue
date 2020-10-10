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
