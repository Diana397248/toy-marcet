<script setup>
import CompPost from "../../components/post/CompPost.vue"
import {onMounted, ref} from "vue";
import {http} from "../../axios/index.js";

const posts = ref([]);

onMounted(() => {
  http.get('/api/post')
      .then((res) => {
        posts.value = res.data
      })
})

</script>
<template>
    <CompPost v-for="p in posts" :key="p.id" :post="p" />   
</template>