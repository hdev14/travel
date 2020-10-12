<template>
  <section>
    <h2>{{experience.name}}</h2>
    <div class="experience-details">
      <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
      <p>{{experience.description}}</p>
    </div>
  </section>
</template>

<script>
import store from '@/store'

export default {
  props: {
    slug: { type: String, required: true },
    experienceSlug: { type: String, required: true }
  },
  computed: {
    destination () {
      return store.destinations.find(d => d.slug === this.slug)
    },
    experience () {
      return this.destination.experiences.find(e => e.slug === this.experienceSlug)
    }
  }
}
</script>

<style scoped>

section {
  padding: 40px 0;
}

section h2 {
  font-size: 1.8rem;
  margin: 30px 0;
  color: var(--green);
}

section div {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

section div img {
  width: auto;
  height: 100%;
  border-radius: 5px;
  margin-right: 50px;
}

section div p {
  max-width: 700px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.6rem;
}

</style>
