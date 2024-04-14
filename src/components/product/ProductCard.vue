<script setup>
import {http} from "../../axios/index.js";
import {store} from "../../store"

const props = defineProps({
  product: Object,
  existInCart: Boolean,
  updateProducts: Function
})

const addToCart = (id) => {
  http.post(`/api/cart/${id}`)
      .then((res) => {
        props.updateProducts()
      })
}

</script>
<template>
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">{{ props.product.name }}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">{{ props.product.price }}р.</h1>
        <p>{{ props.product.description }}</p>
        <button v-if="store.isAuth && !existInCart" @click="addToCart(props.product.id)" type="button"
                class="w-100 btn btn-lg btn-outline-primary"> Добавить в корзину
        </button>
        <router-link :to="{name : 'Cart'}" v-if="store.isAuth && existInCart" @click="addToCart(props.product.id)"
                     type="button"
                     class="w-100 btn btn-lg btn-outline-secondary">
          Перейти в корзину
        </router-link>
      </div>
    </div>
  </div>


</template>


<style scoped>

</style>