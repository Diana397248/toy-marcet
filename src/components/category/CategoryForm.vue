<template>
  <v-container>
    <v-row justify="center" a>
      <v-col cols="2" md="4">
        <div class="d-flex justify-lg-space-between align-center">
          <div class="d-flex w-100 align-center">
            <v-text-field
                :disabled="isActiveRequest"
                v-model="name"
                variant="outlined"
                class="text-white py-1 edit__field"
                :counter="10"
                label="Название категории"
            >
            </v-text-field>
          </div>
        </div>
      </v-col>
      <v-col cols="3">
        <v-btn @click="createCategory" :disabled="isActiveRequest" color="#708D81" class="mt-4 ty-2 edit__button" style="border-radius: 5px">
          Добавить
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import {http} from "../../axios/index.js";
import {ref} from "vue";

const props = defineProps({
  updateCategories: Function,
})

const name = ref('')
const isActiveRequest = ref(false)
const createCategory = () => {
  isActiveRequest.value = true
  http.post(`/api/category`, {
    "name": name.value
  })
      .then((res) => {
        props.updateCategories();
        isActiveRequest.value = false
        name.value = ''
      })
      .catch((res) => {
        isActiveRequest.value = false
      })
}

</script>