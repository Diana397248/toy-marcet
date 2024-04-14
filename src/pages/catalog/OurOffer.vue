<template>

  <v-row justify="space-between" align="center">
    <v-col>
      <v-card
          class="mx-auto p-5"
          max-width="520"
      >
        <v-img
            height="auto"
            :src="imgBear"
            cover
        ></v-img>
      </v-card>
    </v-col>

    <v-col>
      <OurOfferTag v-for="tag in dataTags" :Img="tag.img" :Text="tag.text"></OurOfferTag>
    </v-col>
  </v-row>

</template>

<script setup>
import imgBear from "@/assets/bear.svg";
import OurOfferTag from "@/pages/catalog/OurOfferTag.vue"

import imgWindBlower from "@/assets/windBlower.svg";
import imgApple from "@/assets/apple.svg";
import imgCub from "@/assets/cub.svg";

let imgTags = [imgWindBlower, imgApple, imgCub];

let dataTags = [
  {
    'text': 'Магазин товаров для новорожденных и малышей',
    'img': imgWindBlower
  },
  {
    'text': 'Одежда для малышей',
    'img': imgApple
  },
  {
    'text': 'Игрушки и игры',
    'img': imgCub
  }
]
</script>

<style scoped>

</style>