<template>
  <div id="view-home">
    <h1>All Destinations</h1>
    <div  class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.name"
        :to="{ name: 'DestinationDetails', params: { slug: destination.slug }}"
        class="destination-link">
        <h2>{{destination.name}}</h2>
        <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Home',
  data () {
    return {
      destinations: store.destinations
    }
  }
}

</script>

<style scoped>
#view-home {
  margin: 50px auto;
}

#view-home > h1 {
  margin-bottom: 20px;
}

.destinations {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5%;
}
.destination-link {
  width: 350px;
  margin: 10px 0;
  text-decoration: none;
  color: var(--green);
}

.destination-link h2 {
  margin-bottom: 10px;
}

.destination-link img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  filter: grayscale(0.5);
  transition: filter 50ms ease-out;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0);
}

.destination-link:hover > img {
  filter: grayscale(0);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
}

</style>
