<template>
  <div id="country">
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
      <div class="cards">
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
#country {
  display: flex;
  flex-direction: column;
  padding: 50px;
}

section.destination {
  margin-bottom: 50px;
}

section.destination h1 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--green);
}

section.destination div {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

section.destination div img {
  width: auto;
  height: 100%;
  border-radius: 5px;
  margin-right: 50px;
}

section.destination div p {
  max-width: 700px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.6rem;
}

section.experiences .cards {
  margin: 30px 0;
  display: flex;
  overflow-x: scroll;
  justify-content: space-between;
  padding: 10px 20px;
}

.cards .card {
  height: auto;
  position: relative;
  text-decoration: none;
  margin: 0 20px;
}

.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;

}

.cards .card a img {
  object-fit: cover;
  filter: grayscale(0.4);
  border-radius: 5px;
}
</style>
