<script setup>
import { ref } from 'vue'
import Test1 from './views/test1.vue';
const onee = ref(1)
const twoo = ref(2)

</script>

<template>
    <div>father: {{ qqq }}</div>
    <Test1
            v-model:one="onee"
            v-model:two="twoo"
    />

</template>

<style scoped>

</style>