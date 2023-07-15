<script setup lang="ts">
const { data }= useFetch("/api/todo")
// const { }= $fetch('/api/todo', { method: 'post', body: { test: 123 } })
</script>
<template>
  <div>
    <h1>{{ data }}</h1>
    <NuxtWelcome />
  </div>
</template>
