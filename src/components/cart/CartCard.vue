<template>
  <div class="col">

    <v-card
        class="mx-auto"
        max-width="344"
    >
      <v-img
          height="200px"
          :src="getImg(props.cardData.product_id)"
          cover
      ></v-img>

      <v-card-title>
        {{ props.cardData.description }}

      </v-card-title>

      <v-card-text class="mb-5">
        <v-row justify="space-between" align="center" class="mb-3">
          <v-col> {{ props.cardData.price }} руб x {{ props.cardData.count }} шт.</v-col>
        </v-row>
        <v-row align="center" justify="center" class="ga-5 m-2">
          <v-btn @click="inc(props.cardData.product_id)" density="comfortable" icon="mdi-plus"
                 size="large"></v-btn>
          <v-btn @click="dec(props.cardData.product_id)" density="comfortable" icon="mdi-minus"
                 size="large"></v-btn>
          <v-btn @click="deleteItem(props.cardData.product_id)" density="comfortable" icon="mdi-delete-forever"
                 size="large"></v-btn>
        </v-row>
      </v-card-text>

    </v-card>
  </div>
</template>

<script setup>
import {http} from "../../axios/index.js";
import {decCart, delCart, incCart, products} from "../../store/index.js";

const props = defineProps({
  cardData: Object,
  updateCard: Function
})
const getImg = (id) => {
  let filter = products.filter(x => x.product_id === id);
  if (!filter) {
    return 'https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg'
  }
  return filter[0].img
}

const deleteItem = (id) => {
  delCart({
    'product_id': id
  })

  props.updateCard()

}

const inc = (id) => {
  incCart({
    'product_id': id
  })

  props.updateCard()
}

const dec = (id) => {

  decCart({
    'product_id': id
  })
  props.updateCard()
}
</script>

<style scoped>

</style>