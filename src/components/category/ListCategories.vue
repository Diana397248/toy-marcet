<template>
  <CategoryItem
      v-for="c in categories"
      :category="c"
      :setEditCategoryId="setEditCategoryId"
      :updateCategories="props.updateCategories"
      :editable="c.id===currentEditCategoryId"
  />
</template>
<script setup>
import {ref} from "vue";
import {useRouter} from 'vue-router'
import CategoryItem from "./CategoryItem.vue";

const props = defineProps({
  updateCategories: Function,
  categories: Array,
})

const router = useRouter();

const currentEditCategoryId = ref(0)


const setEditCategoryId = (id) => {
  currentEditCategoryId.value = id;
}
</script>

