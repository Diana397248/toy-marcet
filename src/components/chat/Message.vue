<template>
  <v-container>
    <v-row :class="{'flex-row-reverse':props.site === 'right'}">
      <v-col>
        <v-card
            class="message__box"
            width="600"
            color="white"
            :subtitle="'@'+props.message.user_name"
            :text="props.message.text_messenger"
            variant="tonal"
        ></v-card>
      </v-col>
      <v-col :class="{'d-flex':true , 'flex-row-reverse':props.site === 'right'}">
        <div></div>
        <div v-if="props.site === 'right'">
          <svg v-if="props.message.status === 'sent' " xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24">
            <path fill="white"
                  d="m9.55 15.15l8.475-8.475q.3-.3.713-.3t.712.3q.3.3.3.713t-.3.712l-9.2 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713q.3-.3.713-.3t.712.3z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="white"
                  d="m6 17.3l-4.25-4.25q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l3.55 3.55l1.4 1.4l-.725.7q-.3.275-.7.288T6 17.3m5.65 0L7.4 13.05q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3l3.525 3.525l8.5-8.5q.3-.3.7-.287t.7.312q.275.3.288.7t-.288.7l-9.2 9.2q-.3.3-.7.3t-.7-.3m.7-4.95l-1.425-1.4l4.25-4.25q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712z"/>
          </svg>
          <br>

          <span class="text-white">{{ parseDate(props.message.created_at) }}</span>
        </div>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>

const props = defineProps({
  site: {
    type: String,
    default: 'left'
  },
  message: Object,
})

const parseDate = (d) => {
  let date = new Date(d);
  return date.toLocaleTimeString("ru-Ru", {
        "hour": "2-digit",
        "minute": "2-digit",
        hourCycle: "h24",
      }
  )
};

</script>

<style scoped>
@media (max-device-width: 480px) {
  * {
    font-size: 0.8rem !important;
  }

  .message__box {
    max-width: 12.8rem;
  }
}
</style>