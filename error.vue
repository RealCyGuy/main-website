<template>
  <NuxtLayout>
    <div class="auto-mx">
      <div v-if="error?.statusCode == 404">
        <h1 class="title mb-5">Page not found</h1>
        <p class="text-xl sm:text-2xl">
          Sorry, the page you are looking for does not exist.
          <SimpleLink to="/">Back to home.</SimpleLink>
        </p>
      </div>
      <div v-else>
        <h1 class="title mb-5">Error {{ error?.statusCode }}</h1>
        <p class="text-xl sm:text-2xl">Something is terribly wrong! 😞</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

useSeoMeta({
  title: `Error ${props.error?.statusCode}`,
});
</script>
