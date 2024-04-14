<template>
  <div class="my-4 d-flex">
    <v-img
        alt="Avatar"
        :src="props.user.avatar_src"
        width="210"
        style="border-radius: 10px; border: 1px solid #f4d58d;"
        class="v-col-2 friend-search__img"
    >
    </v-img>
    <v-banner-text class="v-col-6 ml-4 fs-5 friend-search__name" style="color: #f4d58d">
      @{{ props.user.name }}

    </v-banner-text>
    <v-banner-text class="flex-column v-col-3 friend-search__add__box">
      <v-btn
          block
          @click="addToFriend(props.user.id)"
          class="text-none my-4 friend-search__add"
          color="#708D81"
          size="large"
          variant="flat"
      >
        Добавить
      </v-btn>
    </v-banner-text>
  </div>
</template>
<script setup>


import {http} from "../../axios/index.js";

const props = defineProps({
  user: Object,
  getMyFriends: Function,
  getMyReqFriends: Function,
  closeDialog: Function,
})

const addToFriend = (friendId) => {
  http.post(`/api/friend?friend_id=${friendId}`)
      .then((res) => {
        props.getMyFriends()
        props.getMyReqFriends()
        props.closeDialog()
      })
      .catch(error => {
        // todo toast
      })
}


</script>
<style scoped>
button {
  border-radius: 10px;
}
@media (max-device-width:480px){
  *{
    font-size: 0.7rem !important;
  }
  .friend-search__name{
    max-width: 6.4rem;
    margin: 0 !important;
  }
  .friend-search__img{
    min-width: 3rem;
    max-height: 3rem;
  }
  .friend-search__add{
    min-width: 6rem;
    max-height: 2.5rem;
    margin: 0 !important;
  }
  .friend-search__add__box{
    min-width: 7rem;
  }
}
</style>