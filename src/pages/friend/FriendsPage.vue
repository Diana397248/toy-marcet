<script setup>
import Friend from "../../components/friend/Friend.vue"
import RequestFriend from "../../components/friend/RequestFriend.vue"
import FriendAdd from "../../components/friend/FriendAdd.vue"
import {onMounted, ref} from "vue";
import {http} from "../../axios/index.js";

const myFriends = ref([]);
const search = ref('');

const friendRequests = ref([]);
const userListForAddFriend = ref([]);
const dialog = ref(false);

const getMyFriends = () => {
  http.get('/api/friend')
      .then((res) => {
        console.log(res)
        myFriends.value = res.data
      })
}
const getMyReqFriends = () => {
  http.get('/api/friend_request')
      .then((res) => {
        friendRequests.value = res.data
      })
}


const getUserListForAddFriend = () => {
  let url = '/api/friend/list_users_for_add'
  if (search.value !== "") {
    url += `?username=${search.value}`
  }
  http.get(url)
      .then((res) => {
        userListForAddFriend.value = res.data
      })
}
onMounted(() => {
  getMyFriends()
  getMyReqFriends()
})


const openModalAddFriend = () => {
  dialog.value = true;
  getUserListForAddFriend()
}
</script>
<template>
  <v-container class="search__button" style="width: 35rem">
    <v-row>
      <v-text-field
          v-model="search"
          variant="outlined"
          clearable
          placeholder="Поиск пользователя"
          type="text"
          class="text-white"
          @click:clear="clearMessage"
          @click:send="findName"
      ></v-text-field>
      <v-btn @click="openModalAddFriend" @:keyup.enter="openModalAddFriend" color="#001427" icon="mdi-magnify"
             density="default"
             size="large"></v-btn>

    </v-row>
  </v-container>
  <p class="text-white mx-4 fs-3 friend__p">Заявки в друзья:</p>
  <RequestFriend v-for="fr in friendRequests" :key="fr.id" :friendRequest="fr" :getMyFriends="getMyFriends"
                 :getMyReqFriends="getMyReqFriends"/>
  <template v-if="friendRequests.length===0">
    <p class="text-white mx-4 fs-6 ml-10">Запросы в друзья не найдены</p>
  </template>

  <p class="text-white mx-4 fs-3 friend__p">Мои друзья:</p>
  <Friend v-for="f in myFriends" :key="f.id" :friend="f" :updateMyFriends="getMyFriends"/>
  <template v-if="myFriends.length===0">
    <p class="text-white mx-4 fs-6 ml-10">Друзья не найдены</p>
  </template>


  <v-dialog
      v-model="dialog"
      width="auto"
      scrollable
  >
    <v-card color="#001427">
      <FriendAdd v-for="f in userListForAddFriend"
                 :key="f.id"
                 :user="f" search=""
                 :closeDialog="() => dialog = false"
                 :getMyFriends="getMyFriends"
                 :getMyReqFriends="getMyReqFriends"/>
      <template v-if="userListForAddFriend.length===0">
        <p class="text-white mx-4 fs-6 ml-10 pt-4">Пользователи не найдены</p>
      </template>
    </v-card>
  </v-dialog>
</template>
<style scoped>
@media (max-device-width: 480px) {
   .search__button{
    max-width: 20rem;
  }
  .friend__p{
    font-size: 1rem !important;
  }
}
 
</style>