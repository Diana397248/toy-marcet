<script setup>
import CompChat from "../../components/chat/CompChat.vue"
import {onMounted,ref} from "vue";
import {http} from "../../axios/index.js";


const chats = ref([]);


onMounted(() => {
  http.get('/api/chat')
      .then((res) => {
        chats.value = res.data
      })
})
</script>
<template>
    <CompChat v-for="ch in chats" :key="ch.id" :chat="ch" />
</template>