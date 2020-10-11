<template>
  <span class="go-back">
    <button @click="goBack">go back</button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
span {
  position: absolute;
  top: calc(80px + 20px);
  left: 50px;
}

button {
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: var(--green);
  cursor: pointer;
}
</style>
