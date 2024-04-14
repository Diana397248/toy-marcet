<script setup>
import {useRouter} from 'vue-router'

import {reactive, ref} from "vue";
import {http} from "../../axios/index.js";

const router = useRouter();

const form = reactive({
  "name": "",
  "description": "",
  "price": ""
})

const errors = ref([])

const addProduct = () => {
  http.post(`/api/product`, form)
      .then((res) => {
        router.push({name: 'Products'})
      })
      .catch(error => {
        if (error.response.status === 422) {
          errors.value = error.response.data.errors
        }
      })
}

</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
    <div class="col">
      <div class="row">
        <h1 class="h3 mb-3 fw-normal">Пожалуйста заполните все поля</h1>
        <div class="form-floating mb-3">
          <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Название">
          <label for="name">Название</label>
          <span class="text-danger" v-if="errors?.name">{{ errors.name[0] }}</span>
        </div>
        <div class="form-floating mb-3">
          <input v-model="form.description" type="text" class="form-control" id="description"
                 placeholder="description">
          <label for="description">Описание</label>
          <span class="text-danger" v-if="errors?.description">{{ errors.description[0] }}</span>
        </div>
        <div class="form-floating mb-3">
          <input v-model="form.price" type="number" class="form-control" id="price"
                 placeholder="0">
          <label for="price">Цена</label>
          <span class="text-danger" v-if="errors?.price">{{ errors.price[0] }}</span>
        </div>

        <button @click="addProduct" class="w-100 btn btn-lg btn-primary mb-3" type="submit">Добавить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
