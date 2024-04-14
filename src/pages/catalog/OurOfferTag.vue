<template>

  <v-card
      class="mx-auto m-3"
      width="466"
  >


    <v-row align="center" class="p-4">
      <v-col
          cols="3"
      >
        <v-img
            width="72"
            height="72"
            :src="props.Img"
            cover
        ></v-img>
      </v-col>
      <v-col>
        <span class="fs-5 fw-bold "> {{ props.Text }} </span>
      </v-col>
    </v-row>

  </v-card>
</template>

<script setup>
const props = defineProps({
  Img: String,
  Text: String
})

</script>

<style scoped>

</style>