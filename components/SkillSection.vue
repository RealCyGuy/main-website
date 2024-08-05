<template>
  <div
    class="flex flex-col bg-text text-background rounded-xl px-8 py-6 sm:p-5 md:p-6 lg:p-10 xl:p-12"
  >
    <span class="pb-5 lg:pb-7 text-xl lg:text-2xl xl:text-4xl">{{
      title
    }}</span>
    <p class="lg:text-xl xl:text-2xl">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
