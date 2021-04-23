<template>
<div>
  <Task12
  v-bind:name="name"
   />
  <Task345 />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Task12 from '@/components/Task12/Task12.vue'
import Task345 from '@/components/Task345/Task345.vue'

export default defineComponent({
  name: "App",
  components: {
    Task12,
    Task345
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
