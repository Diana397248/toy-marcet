<template>
  <footer class="pt-4 border-top">
    <v-row class="w-100 h-100" align="center" justify="center">
      <v-col class="w-100 h-100">
        <v-row class="w-100 h-100" align="center" justify="center">

          <v-col>
            <div style="width:500px">
              <router-link
                  :to="{ name: 'Catalog' }"
                  class=" text-dark text-decoration-none"
              >
                <img :src="imgLogo" class="fs-4 py-2"/>
              </router-link>
            </div>
            <small class="d-block mb-3 text-muted text-center">&copy; 2023–2024 made Usupova Diana</small>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </footer>
</template>

<script setup>
import imgLogo from "@/assets/logo.svg";
</script>

<style scoped>
footer {
  background-image: url('src/assets/background.svg');
  background-size: contain;
  /*width: 100%;*/
  height: 430px;
}
</style>