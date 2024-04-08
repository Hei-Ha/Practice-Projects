<script setup>
defineProps(['title'])
const one = defineModel('one')
const two = defineModel('two')

</script>

<template>
    <div>test1</div>
    <div>{{ one }}</div>
    <div>{{ two }}</div>
    <input v-model="one" />
    <input v-model="two" />
</template>

<style scoped>

</style>