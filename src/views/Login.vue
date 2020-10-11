<template>
  <div id="view-login">
    <h1>Login</h1>
    <div>
      <label for="username">Username</label>
      <input v-model="username" type="text" name="usernaem" autofocus>
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password">
      <button @click="login">Enter</button>
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
      const redirectPath = this.$route.query.redirect || '/'
      this.$router.push(redirectPath)
    }
  }
}
</script>

<style scoped>

#view-login {
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
}

#view-login div {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#view-login div input {
  width: 300px;
  height: 36px;
  margin: 0px 0px 10px;
  border: 2px solid lightgray;
  border-radius: 2.5px;
  padding: 0 10px;
  transition: border .2s ease-out;
  font-size: 14px;
}

#view-login div input:focus {
  border-color: var(--green);
}

#view-login div label {
  margin-bottom: 5px;
  font-weight: bold;
}

#view-login div button {
  margin-top: 10px;
  border: none;
  background-color: var(--green);
  font-size: 1rem;
  display: grid;
  place-items: center;
  height: 36px;
  width: 100%;
  padding: 0 30px;
  border-radius: 2.5px;
  color: var(--black);
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  transition: opacity 100ms ease-out;
}

#view-login div button:hover {
  opacity: 0.85;
}

</style>
