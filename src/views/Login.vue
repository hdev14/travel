<template>
  <div>
    <h1>Login</h1>
    <div>
      <label for="username">Username</label>
      <input v-model="username" type="text" name="usernaem">
      <label for="password">Password</label>
      <input v-model="password" type="text" name="password">
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login () {
      store.user = this.username
      this.$router.push('/user')
    }
  }
}
</script>
