<template>
<div>
  <ul>
<BreedItem v-for="breed in Object.entries(allBreeds)" :key="breed" :name="breed[0]" :subBreed="breed[1]" />
  </ul>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BreedItem from '@/components/Task345/BreedItem.vue'

export default {
  name: 'BreedListAll',
  computed: {
    ...mapGetters(['allBreeds'])
  },
  methods: {
    ...mapActions(['fetchAllBreeds'])
  },
  mounted: async function() {
    this.fetchAllBreeds();
  },
  components: {
    BreedItem
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  width: 50rem;
  display: inline-block;
  vertical-align: middle;
  margin: 10px 0;
}
</style>
