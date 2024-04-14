<template>
  <!-- <CompPost v-for="p in posts" :key="p.id" :post="p" /> -->
  <CompProfile/>

  <!--  <v-card class="card bg-teachat mx-auto my-8" width="690" variant="flat">-->
  <!--    &lt;!&ndash;        img user and action&ndash;&gt;-->
  <!--    <v-card-title class="d-flex">-->
  <!--      <v-avatar-->
  <!--          rounded="3"-->
  <!--          size="122px"-->
  <!--          class="avatar__block align-self-center"-->
  <!--      >-->
  <!--        <v-img-->
  <!--            alt="Avatar"-->
  <!--            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"-->
  <!--        ></v-img>-->
  <!--      </v-avatar>-->
  <!--      <p class="text-teachat avatar__block__name">@viliskas</p>-->
  <!--    </v-card-title>-->

  <!--    &lt;!&ndash;        content&ndash;&gt;-->
  <!--    <v-card class="mx-auto card bg-teachat card__content" width="690">-->
  <!--      <v-img :src="imgFile" height="690" cover></v-img>-->

  <!--      <v-card-title class="text-teachat fs-4 my-2"-->
  <!--      >Булочка “парфе”</v-card-title-->
  <!--      >-->
  <!--      <v-card-text class="text-white fs-5">-->
  <!--        Очень вкусные французские булки в самом сердце Италии-->
  <!--      </v-card-text>-->
  <!--    </v-card>-->
  <!--  </v-card>-->

</template>
<script setup>
import CompProfile from "../../components/profile/CompProfile.vue"
</script>
<style scoped>
button {
  border-radius: 10px;
}

.bg-teachat {
  background: #001427;
}

.card {
  border-radius: 10px;
}

.text-teachat {
  color: #f4d58d;
}

.card__content {
  margin-top: -10%;
  z-index: -1;
}

.avatar__block__name {
  margin: 1em 0 0 1em;
}

.avatar__block {
  border: 1px solid #f4d58d;
  margin-left: 1vw;
}
</style>
