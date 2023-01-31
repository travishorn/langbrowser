<script setup>
import ParadigmTags from "@/components/ParadigmTags.vue";
import { api } from "@/api.js";

/*
 * Call database API. If "paradigm" prop was given, pass it as a parameter.
 * Otherwise, no parameters
 */
const languages = (await api.get("/language")).data;
</script>

<template>
  <div class="flex flex-wrap gap-5 justify-center">
    <RouterLink
      class="flex flex-col justify-between gap-6 w-full md:w-1/4 lg:w-1/5 bg-slate-700 hover:bg-slate-800 text-gray-200 rounded p-3 shadow-md transition"
      v-for="language in languages"
      :key="language.name"
      :to="`/language/${encodeURIComponent(language.name)}`"
    >
      <div class="flex justify-between">
        <div class="font-medium">{{ language.name }}</div>
        <div v-if="language.appeared" class="text-gray-500 text-xs">
          {{ new Date(language.appeared).getUTCFullYear() }}
        </div>
      </div>

      <ParadigmTags
        v-if="language.paradigms.length"
        :tags="language.paradigms"
      />
    </RouterLink>
  </div>
</template>
