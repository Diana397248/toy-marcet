<template>
  <div
      class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center"
  >
    <div class="col">
      <div class="row">
        <div class="px-0">
          <div class="form-floating mb-3">
            <input
                v-model="form.email"
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Email"
            />
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input
                v-model="form.password"
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
            />
            <label for="floatingPassword">Пароль</label>
          </div>
          <div class="text-danger pb-2" v-if="hasErrors">
            Ошибка входа в аккаунт
          </div>
          <button
              @click="logIn"
              class="w-100 btn btn-lg bg-teachat__blgr text-white mb-3"
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {useRoute, useRouter} from "vue-router";
import {http} from "../../axios/index.js";
import {reactive, ref} from "vue";
import {checkUserPass, store} from "../../store/index.js";

const route = useRoute();
const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});

const hasErrors = ref(false);

const logIn = () => {
  let isCorrect = checkUserPass(form);
  if (!isCorrect) {
    hasErrors.value = true;
    return
  }
  store.isAuth = true;
  store.isAdmin = false;


  // localStorage.setItem("user_role", res.data.user_role);
  // store.isAdmin = res.data.user_role === "ADMIN";


  hasErrors.value = false;

  router.push({name: "Catalog"});

}

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
.bg-teachat__blgr {
  background: #708d81;
}
</style>
