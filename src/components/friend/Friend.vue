<template>
  <v-banner lines="one" class="my-4 friend__banner" bg-color="transparent">
    <v-img
        alt="Avatar"
        :src="props.friend.avatar_src"
        width="210"
        style="border-radius: 10px; border: 1px solid #f4d58d;"
        class="v-col-2 friend__img"
    >
    </v-img>
    <v-banner-text class="v-col-8 ml-4 fs-5 friend__text" style="color: #f4d58d">
      @{{ props.friend.user_name }}

    </v-banner-text>
    <v-banner-text class="flex-column v-col-2">
      <v-btn
          block
          @click="redirectToChat"
          class="text-none my-4 friend__button"
          color="#708D81"
          size="x-large"
          variant="flat"
      >
        Написать
      </v-btn>
      <v-btn
          block
          @click="deleteFriend(props.friend.user_id)"
          class="text-none my-4"
          size="x-large"
          color="#8D0801"
          style="color:#f4d58d"
          variant="flat"

      >
        Удалить
      </v-btn>
    </v-banner-text>
  </v-banner>
</template>
<script setup>
import {useRouter} from "vue-router";
import {http} from "../../axios/index.js";

const props = defineProps({
  friend: Object,
  updateMyFriends: Function,
})

const router = useRouter();

const redirectToChat= ()=>{
  router.push({name: 'Dialogs',  params: { chatId: props.friend.chat_id }})
}

const deleteFriend = (userId)=>{
  http.delete(`/api/friend/${userId}`)
  .then(()=>{
    props.updateMyFriends();
  })
}
</script>
<style scoped>
button {
  border-radius: 10px;
}
@media (max-device-width: 480px){
  .friend__banner{
   min-width: 60rem;
  }
  .friend__img{
    max-width: 4.5rem;
  }
  .friend__text{
    font-size: 0.8rem !important;
    max-width: 6rem;
    margin: 0 !important;
  }
  .friend__button{
    font-size: 0.8rem;
    min-width: 4rem;
    max-height: 2rem;
  }
}
</style>