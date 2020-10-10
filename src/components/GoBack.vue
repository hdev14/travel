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
