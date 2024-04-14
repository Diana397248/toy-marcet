<script setup>
import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
import '@mdi/font/css/materialdesignicons.css'
import "vue3-toastify/dist/index.css";
</script>

<template>
  <div class="container py-3">
    <Header/>
    <main>
      <router-view/>
    </main>
    <!-- <Footer/> -->
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
body{
  background: #FFFFFFFF;
  font-family: 'Inter', monospace;
}
</style>