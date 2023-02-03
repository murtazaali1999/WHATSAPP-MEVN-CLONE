<template>
  <div>
    <v-app-bar class="w-75 mr bg-grey-lighten-3" app>
      <v-container align="left">
        <v-img
          src="https://i.ytimg.com/vi/NT299zIk2JY/mqdefault.jpg"
          class="image rounded-circle ml-4 bg-grey-lighten-3"
        ></v-img>

        <v-title class="ml-4">Title</v-title>
        <v-subtitle>SubTitle</v-subtitle>
      </v-container>

      <v-container align="right">
        <v-icon class="fvico ml-2 mr-2" link>mdi-magnify</v-icon>
        <v-icon class="fvico ml-2 mr-2" link>mdi-paperclip</v-icon>
        <v-icon class="fvico ml-2 mr-2" link>mdi-dots-vertical</v-icon>
      </v-container>
    </v-app-bar>
    <v-main class="mr">
      <v-card class="" height="680" width="950" elevation="10">
        <v-card
          v-for="(message, index) in messages"
          :key="index"
          class="ml-2 mt-2 pa-2 messages bg-green"
          >{{ message.message }}</v-card
        >
      </v-card>

      <v-card class="bg-grey-lighten-3 screen" location="bottom">
        <v-textarea
          append-inner-icon="mdi-search-web"
          class="mx-3 pt-2"
          label="Write Text"
          rows="1"
        ></v-textarea
      ></v-card>
    </v-main>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const messages = ref([
      {
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, libero! ",
      },
      {
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, libero!",
      },
      {
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, libero!",
      },
      {
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, libero!",
      },
    ]);

    return { messages };
  },
  components: {},
  created() {},
  beforeCreate() {},
};
</script>

<style scoped>
.mr {
  margin-left: 316px !important;
}
.image {
  width: 30px;
  height: 30px;
}

.messages {
  box-sizing: border-box !important;
  width: 400px !important;
  height: auto !important;
}
</style>
