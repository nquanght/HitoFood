<template>
  <NavBar/>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from '@/components/Navbar.vue'
</script>

<style scoped>
.container {
  width: 80%;
}
</style>