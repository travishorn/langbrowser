<script setup>
import { ref } from "vue";
import { api } from "@/api.js";

const props = defineProps(["name"]);

const language = ref(
  (await api.get(`/language/${encodeURIComponent(props.name)}`)).data
);

const allPurposes = (await api.get("/purpose")).data.map((p) => p.name);
const allParadigms = (await api.get("/paradigm")).data.map((p) => p.name);

const originalName = language.value.name.slice();
</script>

<template>
  <form class="flex flex-col gap-5" method="post">
    <div class="flex flex-col">
      <label for="name">Name</label>
      <input
        id="name"
        name="name"
        class="bg-slate-700 py-1 px-2"
        v-model="language.name"
      />
    </div>

    <div class="flex flex-col">
      <label for="description">Description</label>
      <textarea
        id="description"
        name="description"
        class="bg-slate-700 py-1 px-2"
        rows="3"
        v-model="language.description"
      ></textarea>
    </div>

    <div class="flex flex-col">
      <label for="appeared">First appeared</label>
      <input
        id="appeared"
        name="appeared"
        class="bg-slate-700 py-1 px-2"
        type="date"
        v-model="language.appeared"
      />
    </div>

    <div class="flex flex-col gap-2">
      <div>Original purpose</div>
      <div class="flex flex-wrap gap-x-8 gap-y-1 px-4">
        <div v-for="purpose in allPurposes" :key="purpose" class="flex gap-1">
          <input
            :id="purpose"
            type="checkbox"
            :checked="language.originalPurposes.includes(purpose)"
          />
          <label :for="purpose">{{ purpose }}</label>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div>Paradigms</div>
      <div class="flex flex-wrap gap-x-8 gap-y-1 px-4">
        <div
          v-for="paradigm in allParadigms"
          :key="paradigm"
          class="flex gap-1"
        >
          <input
            :id="paradigm"
            type="checkbox"
            :checked="language.paradigms.includes(paradigm)"
          />
          <label :for="paradigm">{{ paradigm }}</label>
        </div>
      </div>
    </div>

    <input type="hidden" name="originalName" :value="originalName" />

    <button class="bg-indigo-700 hover:bg-indigo-800 px-1 py-2">Save</button>
  </form>
</template>
