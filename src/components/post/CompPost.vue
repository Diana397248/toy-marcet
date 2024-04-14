<template>
  <v-card class="card bg-teachat mx-auto my-8" width="43em" variant="flat">
    <!--        img user and action-->
    <v-card-title class="d-flex cap__block">
      <v-avatar
          rounded="3"
          size="6.5em"
          class="avatar__block align-self-center"
      >
        <v-img
            alt="Avatar"
            :src="props.post.avatar_src"
        ></v-img>
      </v-avatar>
      <p class="text-teachat avatar__block__name">@{{ props.post.user_name }}</p>
    </v-card-title>

    <!--        content-->
    <v-card class="mx-auto card bg-teachat card__content" width="43rem">
      <v-img :src="props.post.content_src" height="43rem" class="card content__img" cover></v-img>

      <v-card-title class="fs-4 my-2 content__p1 d-flex flex-row ga-3">
        <span class="text-teachat">{{ props.post.title }}</span>
        <v-chip class="text-category" size="large" :color="getColorFromWord(props.post.category_name)">
          {{ props.post.category_name }}
        </v-chip>
      </v-card-title
      >
      <v-card-text class="text-white fs-5 content__p">
        {{ props.post.description }}
      </v-card-text>
    </v-card>
  </v-card>

</template>

<script setup>
import imgFile from "@assets/post-img__1.png";

const props = defineProps({
  post: Object
})


const getColorFromWord = (str) => {
  let hash = 0;
  str.split('').forEach(char => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash)
  })
  let colour = '#'
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    colour += value.toString(16).padStart(2, '0')
  }
  return colour
}
</script>
<style scoped>
.bg-teachat {
  background: #001427;
}

.card {
  border-radius: 10px;
}

.text-category {
  color: #a4d58d;
}

.text-teachat {
  color: #f4d58d;
}

.card__content {
  margin-top: -10%;
  z-index: -1;
}

.avatar__block__name {
  margin: 1em 0 0 1em;
}

.avatar__block {
  border: 1px solid #f4d58d;
  margin-left: 1vw;
}

@media (max-width: 400px) {
  .content__img {
    width: 290px;
    max-width: 290px;
    height: 290px;
    max-height: 290px;
  }

  .avatar__block {
    max-width: 3.5em;
    max-height: 3.5em;
  }

  .cap__block {
    margin-bottom: 35px;
  }

  .avatar__block__name {
    font-size: 11px;
  }

  .content__p1 {
    font-size: 1em !important;
    margin: 0 !important;
  }

  .content__p {
    font-size: 0.7em !important;
    margin: 0 !important;
  }
}
</style>
