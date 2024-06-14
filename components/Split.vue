<template>
  <div class="flex flex-wrap">
    <div v-if="indent" class="w-1/5 hidden md:block"></div>
    <template v-for="word in text.split(' ')">
      <div class="inline-block overflow-hidden">
        <span class="inline-flex word pb-2.5">{{ word }}</span>
      </div>
      {{ " " }}
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  indent?: boolean;
}>();
</script>
