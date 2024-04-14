<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >
    <v-img
        height="200px"
        :src="props.img"
        cover
    ></v-img>

    <v-card-title>
      {{ props.price }} руб
    </v-card-title>

    <v-card-text class="mb-5">
      <v-row justify="space-between" align="center">
        <v-col>{{ props.description }}</v-col>
        <v-col cols="3">
          <v-btn @click="addProductToCart" icon="mdi-cart-outline" size="large" style="font-size: 25px" variant="text"
                 color="#FF1276"></v-btn>
        </v-col>
      </v-row>
    </v-card-text>

  </v-card>
</template>


<script setup>
import {incCart, store} from "../../store/index.js";
import router from "../../router/index.js";

const props = defineProps({
  "description": String,
  "img": String,
  "price": Number,
  "product_id": Number,
})

const addProductToCart = () => {
  if (!store.isAuth) {
    router.push({name: "Login"});
    return
  }
  incCart({
    'price': props.price,
    'description': props.description,
    'product_id': props.product_id,
  })
}

</script>

<style scoped>

</style>