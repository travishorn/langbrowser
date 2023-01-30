<script setup></script>

<template>
  <div class="min-h-screen bg-slate-900 text-gray-200">
    <div class="container mx-auto px-5 py-10 flex flex-col gap-10">
      <RouterLink to="/" class="text-3xl text-center hover:underline">
        <h1>Language Browser</h1>
      </RouterLink>

      <Suspense>
        <RouterView />
      </Suspense>
    </div>
  </div>
</template>
