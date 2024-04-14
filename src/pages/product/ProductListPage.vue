<script setup>

import ProductCard from "../../components/product/ProductCard.vue"
import {onMounted, ref} from "vue";
import {http} from "../../axios/index.js";
import {store} from "../../store/index.js";

const products = ref([])
const productsIdsInCard = ref([])


const updateProducts = () => {
  http.get('/api/products')
      .then((res) => {
        products.value = res.data.content
        if (store.isAuth) {
          http.get("/api/cart")
              .then((cartRes) => {
                productsIdsInCard.value = cartRes.data.content.map(x => x.product_id)
              })
        }
      })
}

onMounted(() => {
  updateProducts()
})


</script>

<template>
  <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal">Каталог товаров</h1>
  </div>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <ProductCard v-for="p in products" :existInCart="productsIdsInCard.includes(p.id)"  :updateProducts="updateProducts" :product="p"/>
  </div>
</template>

<style scoped>

</style>
