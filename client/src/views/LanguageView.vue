<script setup>
import { useRoute } from "vue-router";
import ParadigmTags from "@/components/ParadigmTags.vue";
import PurposeTags from "@/components/PurposeTags.vue";
import { api } from "@/api.js";

const route = useRoute();

const language = (
  await api.get(`/language/${encodeURIComponent(route.params.name)}`)
).data;
</script>

<template>
  <h2 class="text-6xl">{{ language.name }}</h2>

  <p v-if="language.description">{{ language.description }}</p>

  <p v-if="language.appeared">
    First appeared in {{ new Date(language.appeared).getUTCFullYear() }}.
  </p>

  <div>
    <h3 class="font-bold">Paradigms</h3>
    <ParadigmTags :tags="language.paradigms" />
  </div>

  <div>
    <h3 class="font-bold">Original purpose</h3>
    <PurposeTags :tags="language.originalPurposes" />
  </div>
</template>
