<template>
<li>
   <h3> {{name}} </h3>
   <ul>
   <li class="subBreeds" v-for="sb in subBreed" :key="sb"> {{sb}} </li>
   </ul>
</li>
</template>

<script>

export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        subBreed: {
            type: Array,
            required: false,
        }
    }
}
</script>

<style scoped>
li {
    border: 1px solid rgb(179, 179, 179);
    border-radius: 5px;
    margin: 10px 0;
}
.subBreeds {
    color: red;
}
ul {
  list-style-type: none;
  display: block;
  margin: 10px 0;
}
</style>