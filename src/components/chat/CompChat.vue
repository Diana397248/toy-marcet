<template>
  <!-- Banner with alert  -->
  <router-link :to="{name: 'Dialogs' , params: { chatId: props.chat.id }}">
     <v-banner lines="one" class="my-4" bg-color="transparent">
    <v-img
      alt="Avatar"
      :src="props.chat.avatar_src"
      width="210"
      style="border-radius: 10px; border: 1px solid #f4d58d"
      class="v-col-2 chat__img"
    >
    </v-img>
    <v-banner-text class="v-col-9 ml-4 fs-5 chat__text" style="color: #f4d58d">
      @{{props.chat.user_name}}
    </v-banner-text>
<!--      <v-banner-action-->
<!--      class="fs-5 py-3 px-4"-->
<!--        block-->
<!--        :icon="`mdi-numeric-${n}`"-->
<!--        border-->
<!--        height="40"-->
<!--        variant="text"-->
<!--        width="40"-->
<!--        style="background:#f4d58d; border-radius: 10px; text-align: center;"-->
<!--        >1</v-banner-action-->
<!--      >-->
  </v-banner>
  </router-link>
</template>

<script setup>
const props = defineProps({
  chat:Object,
});

</script>

<style scoped>
button {
  border-radius: 10px;
}
a{
  text-decoration: none;
  color: black;
}
.chat__img{
  max-width: 10rem;
}
@media (max-device-width: 480px){
  .chat__img{
    min-width: 4.5rem;
  }
  .chat__text{
    font-size: 0.8rem !important;
    max-width: 6rem;
    margin: 0 !important;
  }
}
</style>
