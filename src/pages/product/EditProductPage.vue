<script setup>
import ProductForm from "../../components/product/ProductForm.vue";
import {useRoute} from 'vue-router'

const route = useRoute();

</script>

<template>

  <h1>Редактирование продукта</h1>
  <h3>id:{{route.params.productId }}</h3>
  <ProductForm/>

</template>

<style scoped>

</style>
