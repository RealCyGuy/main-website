<template>
  <div class="mb-5">
    <h3 class="pt-2 mb-4 opacity-0" :id="title.toLowerCase().replace(' ', '_')">
      {{ title }}
    </h3>
    <div
      class="grid justify-between grid-cols-[repeat(auto-fill,_15rem)] gap-4"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
