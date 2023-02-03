<template>
  <div>
    <v-app-bar class="w-25" color="grey-lighten-3" elevation="0"
      ><v-container align="left">
        <v-img
          src="https://i.ytimg.com/vi/NT299zIk2JY/mqdefault.jpg"
          class="image rounded-circle"
        ></v-img>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="4" link>
            <v-icon class="fvico" link>mdi-progress-alert</v-icon>
          </v-col>
          <v-col cols="4" link>
            <v-icon class="fvico" link>mdi-message-bulleted</v-icon>
          </v-col>
          <v-col cols="4" link>
            <v-icon class="fvico" link>mdi-menu</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer class="w-25" color="white" permanent>
      <v-textarea
        append-inner-icon="mdi-search-web"
        class="mx-2 pa-2"
        label="Search or Start new chat"
        rows="1"
      ></v-textarea>

      <h3 class="ml-4">Add New Chat</h3>

      <!-- Use chats component here -->
      <Chats :chats="chats" />
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Chats from "./Chats.vue";

export default {
  setup() {
    const chats = ref([
      {
        image:
          "https://qph.cf2.quoracdn.net/main-qimg-e3345c62c79ef4470ea4821847481fd9-lq",
        title: "Mob",
        subtitle: "Hi",
      },
      {
        image:
          "https://img1.ak.crunchyroll.com/i/spire2/78702204fdcd5871ede63cbf503a935b1669552835_main.jpg",
        title: "Tori",
        subtitle: "Im",
      },
      {
        image:
          "https://qph.cf2.quoracdn.net/main-qimg-07383076ff09593d7ddebeb44135293a-lq",
        title: "Shikamaru",
        subtitle: "New",
      },
    ]);

    return { chats };
  },
  components: { Chats },
  created() {},
  beforeCreate() {},
};
</script>

<style scoped>
.image {
  width: 30px;
  height: 30px;
}

.fvico {
  margin-left: 8px;
  margin-right: 8px;
}
</style>
