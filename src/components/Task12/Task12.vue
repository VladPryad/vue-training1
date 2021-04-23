<template>
    <div>
        <h1> Tasks 1,2 </h1>
        <input type="text" v-model="name" placeholder="enter name" />
        <p> Привет, {{ name || "незнакомец" }} </p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            name: ""
        }
    }
}
</script>
