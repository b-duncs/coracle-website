<script setup>
import Header from '../components/DefaultHeader.vue'
import Footer from '../components/DefaultFooter.vue'
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>