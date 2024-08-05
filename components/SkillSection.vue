<template>
  <div
    class="flex flex-col bg-text bg-opacity-95 text-background rounded-xl px-8 py-6 sm:p-5 md:p-6 lg:p-10 xl:p-12"
  >
    <span class="pb-5 lg:pb-7 font-bold">{{ title }}</span>
    <p class="">
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
