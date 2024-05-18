<template>
  <NuxtLink
    :to="to"
    class="duration-100 relative before:absolute before:left-0 before:bottom-0.5 before:w-full before:h-0.5 before:bg-primary before:bg-opacity-50 z-10 hover:before:h-full focus:before:h-full hover:before:bottom-0 focus:before:bottom-0 before:duration-300 inline-block"
  >
    <slot />
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
