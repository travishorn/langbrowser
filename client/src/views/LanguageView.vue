<script setup>
import { useRoute } from "vue-router";
import ParadigmTags from "@/components/ParadigmTags.vue";
import PurposeTags from "@/components/PurposeTags.vue";
import LanguageEditor from "@/components/LanguageEditor.vue";
import { api } from "@/api.js";

const developmentMode = !import.meta.env.PROD;

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

  <div v-if="language.paradigms.length">
    <h3 class="font-bold">Paradigms</h3>
    <ParadigmTags :tags="language.paradigms" />
  </div>

  <div v-if="language.originalPurposes.length">
    <h3 class="font-bold">Original purpose</h3>
    <PurposeTags :tags="language.originalPurposes" />
  </div>

  <LanguageEditor v-if="developmentMode" :name="language.name" class="mt-44" />
</template>
