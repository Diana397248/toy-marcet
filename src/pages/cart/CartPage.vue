<template>
  <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal">Корзина</h1>
  </div>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <CartCard v-for="c in items" :cardData="c" :updateCard="updateCartData"/>
  </div>
  <div class="row justify-content-center gap-1">
    <h2 v-if="items.length ===0 && requestSuccess" class="mb-5">ваша корзина пуста добавьте продукт</h2>
    <h2 v-if="items.length !==0" class="mb-5 text-center">Итоговая стоимость: {{ allPrice }}р.</h2>
    <button @click="confirmOrder" v-if="items.length !==0" type="button" class="col-6 btn btn-lg mb-3 p-3"
            style="background-color: rgba(255,18,118,0.4)">
      Оформить заказ
    </button>
  </div>
</template>

<script setup>
import CartCard from "../../components/cart/CartCard.vue"
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {clearCartData, getCartData} from "../../store/index.js";

let items = ref([])
let allPrice = ref(0)
let requestSuccess = ref(false)
const router = useRouter();

const confirmOrder = () => {
  clearCartData()
  updateCartData()
}

const updateCartData = () => {
  let cartData = getCartData()
  requestSuccess.value = true
  items.value = cartData
  allPrice.value = 0
  for (const i of cartData) {
    allPrice.value += i.price * i.count
  }
}

onMounted(() => {
  updateCartData()
})

let fakeCartData = [
  {
    'price': 500,
    'description': 'XXX',
    'count': 2,
    'product_id': 1,
  }
]
</script>

<style scoped>

</style>