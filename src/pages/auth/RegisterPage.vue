<template>
  <div
      class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center"
  >
    <div class="col">
      <div class="row">
        <div class="px-0">
          <h1 class="h4 mb-3 fw-normal text-white">
            Пожалуйста заполните все поля
          </h1>
          <div class="form-floating mb-3">
            <input
                v-model="form.name"
                type="text"
                class="form-control"
                id="floatingName"
                placeholder="name"
            />
            <label for="floatingName">Имя</label>
            <span class="text-danger" v-if="errors?.name">{{
                errors.name[0]
              }}</span>
          </div>
          <div class="form-floating mb-3">
            <input
                v-model="form.last_name"
                type="text"
                class="form-control"
                id="floatingFio"
                placeholder="surname"
            />
            <label for="floatingFio">Фамилия</label>
            <span class="text-danger" v-if="errors?.last_name">{{ errors.last_name[0] }}</span>
          </div>
          <!--          <div class="form-floating mb-3">-->
          <!--            <input-->
          <!--                v-model="form.login"-->
          <!--                type="text"-->
          <!--                class="form-control"-->
          <!--                id="floatingInput"-->
          <!--                placeholder="Login"-->
          <!--            />-->
          <!--            <label for="floatingInput">Логин</label>-->
          <!--            <span class="text-danger" v-if="errors?.login">{{-->
          <!--                errors.login[0]-->
          <!--              }}</span>-->
          <!--          </div>-->
          <div class="form-floating mb-3">
            <input
                v-model="form.email"
                type="email"
                class="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
            />
            <label for="floatingEmail">E-mail</label>
            <span class="text-danger" v-if="errors?.email">{{
                errors.email[0]
              }}</span>
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
            <span class="text-danger" v-if="errors?.password">{{
                errors.password[0]
              }}</span>
          </div>
          <!--          <div class="form-floating mb-3">-->
          <!--            <input-->
          <!--                v-model="form.repeatPassword"-->
          <!--                type="password"-->
          <!--                class="form-control"-->
          <!--                id="floatingRepeatPassword"-->
          <!--                placeholder="repeatPassword"-->
          <!--            />-->
          <!--            <label for="floatingRepeatPassword">Повтор пароля</label>-->
          <!--            <span class="text-danger" v-if="errors?.repeatPassword">{{-->
          <!--                errors.repeatPassword[0]-->
          <!--              }}</span>-->
          <!--          </div>-->
          <v-checkbox
              v-model="isAgree"
              color="secondary"
              label="Соглашаюсь продать свою душу"
          ></v-checkbox>
          <v-btn
              :disabled="!isAgree"
              @click="register"
              class="w-100 p-3"
              type="submit"
              color="rgba(255,18,118,0.4)"
              style="height: 50px"
          >
            Регистрация
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {useRouter} from "vue-router";

import {reactive, ref} from "vue";
import {http} from "../../axios/index.js";
import {registerUser} from "../../store/index.js";

const router = useRouter();
const isAgree = ref(false)
const form = reactive({
  name: "",
  last_name: "",
  // login: "",
  email: "",
  password: "",
  // repeatPassword: "",
});

const errors = ref({});

const register = () => {
  let isValid = true
  errors.value = {}
  if (form.name.trim() === '') {
    isValid = false
    errors.value.name = ['Обязательное поле']
  }
  if (form.last_name.trim() === '') {
    isValid = false
    errors.value.last_name = ['Обязательное поле']
  }
  if (form.email.trim() === '') {
    isValid = false
    errors.value.email = ['Обязательное поле']
  }
  if (form.password.trim() === '') {
    isValid = false
    errors.value.password = ['Обязательное поле']
  }
  if (!isValid) {
    return false
  }
  let success = registerUser(form);
  if (success) {
    router.push({name: "Catalog"});
  } else {
    errors.value.email = ['Такой пользователь уже зарегистрирован']
  }
};
</script>


<style scoped>
.bg-teachat__blgr {
  background: #708d81;
}
</style>
