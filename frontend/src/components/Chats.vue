<template>
  <div>
    <v-list>
      <!-- iterate list here -->
      <v-card
        v-for="(chat, index) in chat_s"
        :key="index"
        @click="check(chat)"
        elevation="0"
      >
        <v-row>
          <v-col cols="2">
            <img :src="chat.image" alt="" class="image" />
          </v-col>
          <v-col cols="10" align="left">
            <v-card-title class="text-h6">{{ chat?.title }}</v-card-title>
            <v-card-subtitle>{{ chat?.subtitle }}</v-card-subtitle>
          </v-col>
        </v-row>
      </v-card>
    </v-list>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: ["chats"],
  setup() {
    const chat_s = ref([{ image: "", title: "", subtitle: "" }]);
    const check = (chat: any) => {
      console.log(chat);
    };

    return { chat_s, check };
  },
  components: {},
  created() {},
  beforeCreate() {
    this.chat_s = this.chats;
  },
};
</script>

<style scoped>
.image {
  width: 40px;
  height: 40px;
  margin-left: 15px;
  margin-top: 15px;

  border-radius: 60%;
}

.fvico {
  margin-left: 8px;
  margin-right: 8px;
}
</style>
