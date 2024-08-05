<template>
  <NuxtLink
    :to="to"
    class="overflow-hidden relative group underline duration-500 decoration-background/20 hover:decoration-background/80 hover:opacity-80"
  >
    <span class="break-words">
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
