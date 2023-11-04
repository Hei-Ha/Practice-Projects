<script setup>
import { ref } from 'vue';
// import { HelloWorld } from './components/HelloWorld.tsx';

import { Button } from 'ant-design-vue';
const a = ref(1);

const addA = () => {
  a.value = a.value + 1;
}

</script>

<template>
  <div>
    <Button type="primary" @click="addA">Click</Button>
    <span>
      {{ a }}
    </span>
  </div>
</template>

<style scoped>

</style>