<template>
<div>
<h1> Tasks 3 </h1>
<BreedListAll />
<h1> Task 4 </h1>
<RandomBreed />
</div>
</template>

<script>
import BreedListAll from '@/components/Task345/BreedListAll.vue'
import RandomBreed from '@/components/Task345/RandomBreed.vue'

export default {
  components: {
    BreedListAll,
    RandomBreed
  }
}
</script>

<style scoped>

</style>