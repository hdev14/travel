<template>
  <nav id="nav">
    <router-link to="/" id="home">
      <h1>Travel</h1>
    </router-link>

    <ul class="nav-links">
      <li class="links">
        <router-link to="/user">
          Dashboard
        </router-link>
      </li>

      <li v-for="destination in destinations" :key="destination.name" class="links">
        <router-link :to="{ name: 'DestinationDetails', params: { slug: destination.slug }}">
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '@/store'

export default {
  data () {
    return {
      destinations: store.destinations
    }
  }
}
</script>

<style scoped>
#nav {
  padding: 0 10%;
  height: 80px;
  background-color: white;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
}

#nav #home {
  text-decoration: none;
  font-size: 1.5rem;
  margin-right: 30px;
  color: var(--green);
}

.nav-links {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
}

.links {
  margin: 0 auto;
}

.links a {
  text-decoration: none;
  font-weight: bold;
  color: var(--black);
  transition: color .2s ease-in;
}

.links a:hover {
  color: var(--green);
}
</style>
