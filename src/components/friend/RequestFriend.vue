<script setup>
import {http} from "../../axios/index.js";

const props = defineProps({
  friendRequest: Object,
  getMyFriends: Function,
  getMyReqFriends: Function,
})

const acceptRequest = (friendId) => {
  http.post(`/api/friend_request?friend_id=${friendId}`)
      .then((res) => {
        props.getMyFriends()
        props.getMyReqFriends()
      })
      .catch(error => {
        // todo toast
      })
}

const cancelRequest = (id) => {
  http.post(`api/friend_request/cancel/${id}`)
      .then((res) => {
        props.getMyFriends()
        props.getMyReqFriends()
      })
      .catch(error => {
        // todo toast
      })
}


</script>
<template>
  <v-banner lines="one" class="my-4 friend__banner" bg-color="transparent">
    <v-img
        alt="Avatar"
        :src="props.friendRequest.friend_avatar_src"
        width="210"
        style="border-radius: 10px; border: 1px solid #f4d58d;"
        class="v-col-2 friend__img"
    >
    </v-img>
    <v-banner-text class="v-col-8 ml-4 fs-5 friend__text" style="color: #f4d58d">
      @{{ props.friendRequest.friend_name }}
    </v-banner-text>
    <v-banner-text class="flex-column v-col-2">
      <v-btn
          block
          class="text-none my-4 friend__button"
          size="x-large"
          color="#708D81"
          variant="flat"
          @click="acceptRequest(props.friendRequest.friend_id)"
      >
        Принять
      </v-btn>
      <v-btn
          block
          @click="cancelRequest(props.friendRequest.id)"
          class="text-none my-4"
          size="x-large"
          color="#8D0801"
          style="color:#f4d58d"
          variant="flat"

      >
        Отклонить
      </v-btn>
    </v-banner-text>
  </v-banner>
</template>
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