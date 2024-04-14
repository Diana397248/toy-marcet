<template>
  <CategoryForm :updateCategories="getCategories"/>
  <ListCategories :updateCategories="getCategories" :categories="categories"/>
</template>

<script setup>
import ListCategories from "../../components/category/ListCategories.vue"
import CategoryForm from "../../components/category/CategoryForm.vue";
import {onMounted, ref} from "vue";
import {http} from "../../axios/index.js";

const categories = ref([])

const getCategories = () => {
  http.get("/api/category")
      .then((res) => {
        categories.value = res.data;
      })
}

onMounted(() => {
  getCategories();
})

</script>