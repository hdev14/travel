<template>
  <div>
    <GoBack />
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards" id="experience">
        <div
          v-for="experience in destination.experiences"
          :key="experience.name"
          class="card"
        >
          <router-link :to="{
            name: 'ExperienceDetails',
            params: { experienceSlug: experience.slug },
            hash: '#experience'
          }">
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
            />
            <span class="card__text">{{ experience.name }}</span>
          </router-link>
        </div>
      </div>

      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'
import store from '@/store'

export default {
  components: {
    GoBack
  },
  data () {
    return {}
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination () {
      return store.destinations.find((d) => d.slug === this.slug)
    }
  }
}
</script>

<style scoped>

</style>
