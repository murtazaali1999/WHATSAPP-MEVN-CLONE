<template>
  <span>
    <v-layout>
      <SideBar />
    </v-layout>

    <v-layout>
      <Chat />
    </v-layout>
  </span>
</template>

<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import Chat from "./components/Chat.vue";
</script>

<style></style>
