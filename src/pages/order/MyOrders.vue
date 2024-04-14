<template>

  <div v-for="o in myOrders" class="row row-cols-1 row-cols-md-3 mb-3 text-center bg-light">
    <h2 class="w-100">Заказ №{{o.id}}</h2>

    <div v-for="p in o.order_products" class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{{p.name}}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">{{p.price}}р.<small class="text-muted fw-light"> &times; {{p.count}} шт.</small></h1>
          <p>{{p.description}}</p>
        </div>
      </div>
    </div>
    <h2 class="w-100">Итоговая стоимость: {{o.totalAmount}}р.</h2>
  </div>


</template>

<script setup>
import {onMounted, ref} from "vue";
import {http} from "../../axios/index.js";

const myOrders = ref([])

onMounted(() => {
  http.get('/api/order')
      .then((res) => {
        myOrders.value = res.data.content
      })
})
</script>

<style scoped>

</style>