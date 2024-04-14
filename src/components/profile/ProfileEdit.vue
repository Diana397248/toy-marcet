<template>
  <v-container>


    <v-row justify="center">
      <v-col class="w-100" md="4">
        <div class="d-flex justify-lg-space-between align-center">
          <div class="d-flex w-100 align-center">
            <p class="fs-3 text-white pr-2">@</p>
            <v-text-field
                variant="outlined"
                class="text-white py-1 edit__field"
                v-model="profile.name"
                :counter="10"
                label="Изменить username"
            >
            </v-text-field>
          </div>
        </div>
        <span class="d-block mb-4 text-danger ml-9" v-if="errors?.name">{{ errors.name[0] }}</span>
      </v-col>
    </v-row>


    <v-row justify="center">
    </v-row>
    <div class="d-flex justify-center">
      <div style="border-radius: 10px; border: 1px solid #f4d58d" class="p-5 w-50">
        <v-row justify="center">
          <v-img
              alt="Avatar"
              :src="avatarSrc"
              height="400"
              class="v-col-9 edit__avatar"
          >
          </v-img>
        </v-row>
        <v-row justify="center" class="">
          <v-file-input
              label="Выбрать фото"
              variant="outlined"
              class="text-white v-col-10 pa-0 ma-0"
              prepend-icon=""
              @change="selectFile($event)"
              clearable="false"
              @click:clear="cleanFile"
          ></v-file-input>
        </v-row>
        <v-row>
          <v-progress-linear
              v-model="progress"
              color="light-blue"
              height="25"
              reactive
          >
            <strong class="text-white">{{ progress }} %</strong>
          </v-progress-linear>
        </v-row>
      </div>
    </div>


    <v-row class="color-category mt-3" align="center">
      <v-col class="d-flex flex-row align-center justify-center">
        <div class="w-50">
          <v-combobox
              multiple
              v-model="currentCategories"
              :items="categories"
              label="Любимые категории"
              variant="outlined"
              item-title="name"
              item-value="id"
              center-affix="true"
          ></v-combobox>
          <span class="d-block mb-4 text-danger w-50" v-if="errors?.category_id">{{ errors.category_id }}</span>
        </div>
      </v-col>
    </v-row>


    <v-row class="d-flex justify-center">
      <v-btn width="50%" @click="editProfile" color="#708D81" class="mt-4 ty-2 edit__button "
             style="border-radius: 10px">
        Изменить
      </v-btn>
    </v-row>


  </v-container>
</template>
<script setup>
import {onMounted, reactive, ref} from "vue";
import {http, multipart, upload} from "../../axios/index.js";
import {useRouter} from 'vue-router'
import {toast} from "vue3-toastify";

const router = useRouter();


const currentCategories = ref([])

const categories = ref([])

const profile = reactive({
  "name": "",
});
const avatarSrc = ref('')
const errors = ref([])
//file
const currentFile = ref(undefined)
const progress = ref(0)


const selectFile = (event) => {
  progress.value = 0;
  currentFile.value = event.target.files[0];
}

const cleanFile = () => {
  currentFile.value = undefined;
}
const editProfile = () => {
  let req = null;
  if (currentFile.value === undefined) {
    req = multipart(
        (event) => {
          progress.value = Math.round((100 * event.loaded) / event.total);
        },
        `/api/profile`,
        (formDat) => {
          formDat.append("name", profile.name);
          if (currentCategories.value.length > 0) {
            for (let i = 0; i < currentCategories.value.length; i++) {
              formDat.append('like_categories_ids[]', currentCategories.value[i].id);
            }
          }
        }
    )
  } else {
    req = upload(currentFile.value, (event) => {
          progress.value = Math.round((100 * event.loaded) / event.total);
        },
        "avatar",
        `/api/profile`,
        (formDat) => {
          formDat.append("name", profile.name);
          if (currentCategories.value.length > 0) {
            for (let i = 0; i < currentCategories.value.length; i++) {
              formDat.append('like_categories_ids[]', currentCategories.value[i].id);
            }
          }
        }
    )
  }

  req.then((res) => {
    router.push({name: 'Profile'})
    cleanFile()
  }).catch(error => {
    if (error.response.status === 422) {
      errors.value = error.response.data.errors
      toast.error("ошибка при обновлении")
    }
  })
}

const getCategories = () => {
  http.get("/api/category")
      .then((res) => {
        categories.value = res.data;
      })
}


onMounted(() => {
  http.get('/api/profile')
      .then((res) => {
        profile.value = res.data

        avatarSrc.value = res.data.avatar_src
        profile.name = res.data.name
        currentCategories.value = res.data.like_categories;
        console.log(currentCategories.value)
      })
  getCategories();
})

</script>
<style scoped>
@media (max-device-width: 480px) {
  .edit__field {
    min-width: 8.5em;
  }


  .justify-center {
    justify-content: flex-start !important;
  }

  .edit__button {
    min-width: 9em;
    margin-left: 12em;
    font-size: 11px;
  }

  .edit__avatar {
    min-width: 7em;
  }
}

.color-category {
  color: #f4d58d;
}
</style>
