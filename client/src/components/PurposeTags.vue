<script setup>
const props = defineProps(["tags"]);
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <RouterLink
      class="text-xs bg-green-700 hover:bg-green-800 text-white rounded-sm px-2 py-[3px] shadow-sm"
      v-for="tag in props.tags"
      :key="tag"
      :to="`/purpose/${encodeURIComponent(tag)}`"
      >{{ tag }}</RouterLink
    >
  </div>
</template>
