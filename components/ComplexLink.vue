<template>
  <NuxtLink
    :to="to"
    class="flex items-center overflow-hidden py-0.5 relative group pr-16"
  >
    <Icon
      class="absolute -left-16 rotate-90 opacity-0 group-hover:opacity-100 group-hover:rotate-0 group-hover:translate-x-16 transition-all duration-300 ease-out w-12"
      name="material-symbols:arrow-circle-right"
    />
    <span
      class="group-hover:translate-x-16 transition-transform duration-300 ease-out"
    >
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
