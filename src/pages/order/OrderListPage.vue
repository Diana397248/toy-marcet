<template>

  <div v-for="o in orders" className="row row-cols-1 row-cols-md-3 mb-3 text-center bg-light">
    <h2 className="w-100">Заказ №{{ o.id }}</h2>

    <div v-for="p in o.order_products" className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{{ p.name }}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">{{ p.price }}р.<small className="text-muted fw-light"> &times;
            {{ p.count }} шт.</small></h1>
          <p>{{ p.description }}</p>
        </div>
      </div>
    </div>
    <h2 className="w-100">Итоговая стоимость: {{ o.totalAmount }}р.</h2>
  </div>


</template>

<script setup>
import {onMounted, ref} from "vue";
import {http} from "../../axios/index.js";

const orders = ref([])

onMounted(() => {
  http.get('/api/orders')
      .then((res) => {
        orders.value = res.data.content
      })
})
</script>

<style scoped>

</style>