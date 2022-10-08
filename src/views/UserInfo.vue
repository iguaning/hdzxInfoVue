<template>
  <main>
    <h2>UserInfo</h2>
  </main>
</template>

<script setup>
import TheFooter from '../components/layouts/footer/TheFooter.vue'
</script>

<style scoped>
main {
  width: 100%;
  position: absolute;
  top: 70px;
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--color-primary);
  width: 100%;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.6);
}
</style>