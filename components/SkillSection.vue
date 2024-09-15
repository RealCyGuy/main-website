<template>
  <div class="border border-opacity-60 border-text px-10 py-8 xl:p-14">
    <div class="flex flex-col text-center">
      <span class="pb-5 lg:pb-5 text-lg sm:text-xl lg:text-2xl">{{
        title
      }}</span>
      <p class="text-balance">
        <slot />
      </p>
    </div>
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
