<script setup>
import OrderForm from "../../components/order/OrderForm.vue"
import {useRoute} from 'vue-router'

const route = useRoute();

</script>

<template>

  <h1>Редактирование заказа</h1>
  <h3>id:{{route.params.orderId }}</h3>
  <OrderForm/>

</template>

<style scoped>

</style>
