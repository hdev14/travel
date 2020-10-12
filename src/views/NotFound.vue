<template>
  <div>
    <h1>Not Found</h1>
    <p>
      Oops we coudn't find that page. Try going
      <router-link :to="{ name: 'Home' }">home!</router-link>
    </p>
  </div>
</template>

<style scoped>
div {
  display: grid;
  place-items: center;
  place-content: center;
  height: calc(100vh - 80px);
}

h1 {
  margin-bottom: 50px;
  color: var(--green);
}

p a {
  color: var(--green);
  text-decoration: none;
}
</style>
