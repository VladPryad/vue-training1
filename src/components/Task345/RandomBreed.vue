<template>
    <div v-if="randomBreed">
        <button v-on:click="forcesUpdate">LOAD</button>
        <BreedItem v-bind:name="(brd)[0]" :key="index" v-bind:subBreed="(brd)[1]" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BreedItem from '@/components/Task345/BreedItem.vue'

export default {
    data() {
        return{
            index : 0,
            brd: []
        }
    },
    computed: {
    ...mapGetters(['randomBreed'])
  },
  components: {
      BreedItem
  },
    methods: {
    ...mapActions(['fetchAllBreeds']),
    forcesUpdate: function() {
        this.index += 1;
        this.brd = this.randomBreed;
    }
  },
  mounted: async function() {
    this.fetchAllBreeds();
  },
}
</script>

<style scoped>

</style>