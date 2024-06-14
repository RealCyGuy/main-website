<script lang="ts" setup>
const props = withDefaults(defineProps<{ description?: string }>(), {
  description: "description",
});
</script>

<template>
  <div class="w-full h-full justify-start px-10 bg-[#0c1322] text-[#eceef4]">
    <h1 class="text-[10rem] m-0 mt-36 mb-7">Cyrus Yip</h1>
    <p class="text-4xl leading-tight m-0 mx-2 text-balance">
      {{ description }}
    </p>
  </div>
</template>
