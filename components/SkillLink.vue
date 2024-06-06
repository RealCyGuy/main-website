<template>
  <NuxtLink
    :to="to"
    class="overflow-hidden relative group underline duration-500 decoration-text/20 hover:decoration-text/80 hover:opacity-80"
  >
    <span class="">
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
