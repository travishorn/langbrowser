<script setup>
import { api } from "../api.js";

const greeting = (await api.get("/messages", { params: { name: "greeting" } }))
  .data;
</script>

<template>
  <h1 class="text-3xl font-bold underline">{{ greeting.message }}</h1>
</template>
