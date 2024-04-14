<template>
  <!-- Banner without friends -->
  <v-banner lines="one" class="my-4" bg-color="transparent">
    <v-img
        alt="Avatar"
        :src="profile.avatar_src"
        width="210"
        style="border-radius: 10px; border: 1px solid #f4d58d"
        class="v-col-2 profile__banner"
    >
    </v-img>
    <v-banner-text class="v-col-9 ml-4 fs-3 profile-user__text" style="color: #f4d58d">
      @{{ profile.name }}
    </v-banner-text>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="editProfile__logo"
    >
      <router-link :to="{ name: 'ProfileEdit' }">
        <path
            fill="white"
            d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"
        />
      </router-link>
    </svg>
  </v-banner>

  <!--  <v-container class="mx-0">-->
  <!--    <v-row>-->
  <!--      <v-col cols="12" md="2">-->
  <!--        <v-text class="fs-5 text-white" block rounded="10" width="210"-->
  <!--        >Друзья-->
  <!--        </v-text-->
  <!--        >-->
  <!--      </v-col>-->
  <!--      <v-col cols="12" md="3">-->
  <!--        <v-text class="fs-5 text-white" block rounded="10" width="210"-->
  <!--        >23-->
  <!--        </v-text-->
  <!--        >-->
  <!--      </v-col>-->
  <!--    </v-row>-->
  <!--    <v-row>-->
  <!--      <v-col cols="11" md="2">-->
  <!--        <v-text class="fs-5 text-white" block rounded="10" width="210"-->
  <!--        >Посты-->
  <!--        </v-text-->
  <!--        >-->
  <!--      </v-col>-->
  <!--      <v-col cols="11" md="3">-->
  <!--        <v-text class="fs-5 text-white" block rounded="10" width="210"-->
  <!--        >23-->
  <!--        </v-text-->
  <!--        >-->
  <!--      </v-col>-->
  <!--    </v-row>-->
  <!--  </v-container>-->



</template>

<script setup>
import {onMounted, ref} from "vue";
import {http} from "../../axios/index.js";

const profile = ref({});

onMounted(() => {
  http.get('/api/profile')
      .then((res) => {
        profile.value = res.data
      })
})
</script>
<style scoped>
@media (max-device-width: 480px) {
  .profile__banner{
    width: 10rem;
    border-radius: 5px !important;
  }
  .profile-user__text{
    font-size: 1em !important;
    max-width: 12.5em;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .editProfile__logo{
    width: 1.5em;
    height: 1.5em;
    margin: 0;
  }
}
</style>
