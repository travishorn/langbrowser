<script setup>
const props = defineProps(["tags"]);
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <RouterLink
      class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm px-2 py-[3px] shadow-sm"
      v-for="tag in props.tags"
      :key="tag"
      :to="`/paradigm/${encodeURIComponent(tag)}`"
      >{{ tag }}</RouterLink
    >
  </div>
</template>
