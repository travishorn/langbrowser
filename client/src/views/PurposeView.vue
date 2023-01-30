<script setup>
import LanguageTags from "@/components/LanguageTags.vue";
import { useRoute } from "vue-router";
import { api } from "@/api.js";

const route = useRoute();

const purpose = (
  await api.get(`/purpose/${encodeURIComponent(route.params.name)}`)
).data;
</script>

<template>
  <h2 class="text-6xl">{{ purpose.name }}</h2>

  <p>{{ purpose.description }}</p>

  <div>
    <h3 class="font-bold">Languages</h3>
    <LanguageTags :tags="purpose.languages" />
  </div>
</template>
