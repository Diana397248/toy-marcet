<template>
  <v-container>
    <v-row>
      <v-col cols="5" class="my-7 dialog__box">
        <router-link :to="{name: 'Chats'}" class="dialog__user-box">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="dialogs__arrow"
              width="28"
              height="28"
              viewBox="0 0 24 24"
          >
            <path
                fill="white"
                d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"
            />
          </svg>
        </router-link>

      </v-col>
      <v-col cols="5" class="my-7">
        <v-text class="text-white fs-5">@{{curFriend.user_name}}</v-text>
      </v-col>
      <v-col cols="2" align="right">
        <v-img
            alt="Avatar"
            :src="curFriend.avatar_src"
            width="122"
            style="border-radius: 10px; border: 1px solid #f4d58d"
            class="v-col-6 dialogs__img"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
  <!-- scroll -->
  <v-infinite-scroll
      status="loading"
      height="39rem"
      class="dialogs__scroll"
      side="start"
      @load="load"
  >
    <!--    <template v-slot:empty>-->
    <!--      if need empty result -->
    <!--      <v-alert type="warning">No more items!</v-alert>-->
    <!--    </template>-->

    <Message v-for="mess in messages" :key="mess.id" :message="mess" :site="calculateSide(mess.user_id)"/>
    <div ref="chatSection"></div>
  </v-infinite-scroll>

  <!-- end scroll -->
  <div>
    <v-container>
      <v-row>
        <v-col class="py-0" cols="12">
          <v-text-field
              v-on:keyup.enter="sendMessage"
              v-model="newMessage.text_messenger"
              variant="outlined"
              clear-icon="mdi-close-circle"
              clearable
              placeholder="Напишите сообщение"
              type="text"
              class="text-white"
              append-icon="mdi-send"
              @click:append="sendMessage"
              :disabled="isMakeRequest"
          ></v-text-field>
        </v-col>
        <!-- Это мусор -->
        <!-- <v-col cols="1">
          <v-btn @click="sendMessage" :disabled="isMakeRequest" color="#001427" icon="mdi-send" size="x-large"></v-btn>
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import Message from "@components/chat/Message.vue"
import {onBeforeUnmount, onMounted, reactive, ref} from "vue";
import {store} from "../../store/index.js"
import {http} from "../../axios/index.js";
import {toast} from "vue3-toastify";
import {useRoute} from 'vue-router'

const route = useRoute();

const chatSection = ref(null);

function endToChat() {
  chatSection.value.scrollIntoView({block: "end", behavior: "smooth"});
}

const load = ({done}) => {
  done('empty')
}
const newMessage = reactive({
  "text_messenger": ""
})
const messages = ref([])
const errors = ref([])
const curFriend = ref({
  "user_name" : "",
  "avatar_src" : "",
})
const updateTimeIntervalId = ref(null)
const isMakeRequest = ref(false)

onMounted(() => {
  getInfoAboutFriend()
  getAllMessages().then(() => endToChat())
  updateTimeIntervalId.value = setInterval(getAllMessages, 1500);
})


onBeforeUnmount(() => {
  clearInterval(updateTimeIntervalId.value);
});

const getInfoAboutFriend = () => {
  const chatIdString = route.params.chatId
  return http.get(`/api/chat/${chatIdString}`)
      .then((res) => curFriend.value = res.data)
}
const calculateSide = (userId) => {
  return store.userId.toString() === userId.toString() ? 'right' : 'left';
}

const getAllMessages = () => {
  const chatIdString = route.params.chatId
  return http.get(`/api/chat/${chatIdString}/message`)
      .then((res) => {
        messages.value = res.data
        const needReadMessages = []
        for (let m of res.data) {
          if (m.chat_id.toString() === chatIdString && m.user_id.toString() !== store.userId.toString() && m.status === "sent") {
            needReadMessages.push(m.id)
          }
        }
        //todo this method not secury WARN
        if (needReadMessages.length > 0) {
          http.post("/api/message/read_messages", {"ids": needReadMessages})
              .then(() => getAllMessages())
              .catch(() => toast.error("Не удалось отправить прочитанные сообщения"))
        }
      })
}


const sendMessage = () => {
  isMakeRequest.value = true
  const chatId = route.params.chatId
  http.post(`/api/chat/${chatId}/message`, newMessage)
      .then((res) => {
        isMakeRequest.value = false
        newMessage.text_messenger = ""
        getAllMessages()
            .then(() => endToChat())
      })
      .catch(error => {
        isMakeRequest.value = false
        if (error.response.status === 422) {
          errors.value = error.response.data.errors
        }
      })
}

</script>
<style scoped>
button {
  border-radius: 10px;
}

/* width */
::-webkit-scrollbar {
  display: none;
}
@media (max-device-width: 480px){
  *{
    font-size: 0.8rem !important;
  }
  .dialogs__arrow{
    max-width: 1.3rem;
  }
  .dialog__box{
    max-width: 6rem;
    margin: 1.5rem 0 !important;
  }
  .dialogs__img{
    min-width: 4rem;
    margin: 0.35rem 0;
  }
  .dialogs__scroll{
    max-height: 31.2rem;
  }
}
</style>
