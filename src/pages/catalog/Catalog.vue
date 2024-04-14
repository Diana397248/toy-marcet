<template>
  <v-row v-for="row in chunks(products, 4)">
    <v-col v-for="product in row">
      <Product
          :description="product.description"
          :img="product.img"
          :price="product.price"
          :product_id="product.product_id"
      ></Product>
    </v-col>
  </v-row>
  <OurOffer></OurOffer>
  <Slider></Slider>
</template>
<script setup>
import Product from "../../components/product/Product.vue";
import Slider from "../catalog/Slider.vue";
import OurOffer from "../catalog/OurOffer.vue";
import {products} from "@/store"

const chunks = (a, size) =>
    Array.from(
        new Array(Math.ceil(a.length / size)),
        (_, i) => a.slice(i * size, i * size + size)
    );
</script>