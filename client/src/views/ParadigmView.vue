<script setup>
import LanguageTags from "@/components/LanguageTags.vue";
import { useRoute } from "vue-router";
import { api } from "@/api.js";

const route = useRoute();

const paradigm = (
  await api.get(`/paradigm/${encodeURIComponent(route.params.name)}`)
).data;
</script>

<template>
  <h2 class="text-6xl">{{ paradigm.name }}</h2>

  <p v-if="paradigm.description">{{ paradigm.description }}</p>

  <div v-if="paradigm.languages.length">
    <h3 class="font-bold">Languages</h3>
    <LanguageTags :tags="paradigm.languages" />
  </div>
</template>
