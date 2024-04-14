<template>
  <header class="desktop">
    <div class="d-flex flex-column flex-md-row align-items-center">
      <router-link
          :to="{ name: 'Posts' }"
          class="d-flex align-items-center text-dark text-decoration-none"
      >
        <img :src="imgLogo" class="fs-4 py-2"/>
      </router-link>
      <nav class="mx-12">
        <router-link
            :to="{ name: 'Catalog' }"
            class="me-8 py-2  text-decoration-none fs-4 fw-bold"
        >
          Главная
        </router-link>
<!--        <router-link-->
<!--            :to="{ name: 'Chats' }"-->
<!--            class="me-8 py-2  text-decoration-none fs-4 fw-bold"-->
<!--        >-->
<!--          О нас-->
<!--        </router-link>-->
      </nav>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto align-center">
        <template v-if="store.isAuth && !store.isAdmin">
          <router-link :to="{ name: 'Cart' }">
            <v-icon icon="mdi-cart-arrow-down"></v-icon>
          </router-link>
        </template>
        <!--        auth routes-->
        <router-link
            v-if="!store.isAuth"
            :to="{ name: 'Login' }"
            class="me-3 py-2 text-decoration-none fs-5 text-teachat__hover"
        >
          Авторизация
        </router-link>
        <router-link
            v-if="!store.isAuth"
            :to="{ name: 'Register' }"
            class="me-3 py-2 text-decoration-none fs-5 text-teachat__hover"
        >
          Регистрация
        </router-link>

        <span
            v-if="store.isAuth"
            @click="logOut"
            role="button"
            class="me-3 py-2  text-decoration-none fs-5 ml-4"
        >Выход</span
        >
      </nav>
    </div>
  </header>


  <template v-if="store.isDebug">
    <h1 class=""> Current user id: {{ store }}</h1>
  </template>
</template>

<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import {clearStore, store} from "../store/index.js";
import imgLogo from "@/assets/logo.svg";

const router = useRouter();
const logOut = () => {
  clearStore()
  // todo
  window.location.href = "/login";
};

onMounted(() => {
});
</script>
<script>
import {clearStore} from "../store/index.js";

export default {
  data: () => ({
    valid: false,
    search: "@",
    searchEngine: [
      (value) => {
        if (value) return true;

        return "Используйте идентификатор @";
      },
      (value) => {
        if (value?.length <= 13) return true;

        return "Имя не может быть длиннее 12 знаков";
      },
    ],
  }),
  methods: {},
};
</script>

<style scoped>
.text-teachat {
  color: #f4d58d;
}

.text-teachat__hover:hover {
  color: #f4d58d;
}


.mobile {
  display: none;
}

.desktop {
  display: block;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }
}

@media only screen and (min-device-width: 481px) {
  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }
}

</style>
