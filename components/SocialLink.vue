<template>
  <div class="social-link flex py-1 items-center relative opacity-0">
    <NuxtLink
      :to="to"
      class="absolute w-full h-full top-0"
      target="_blank"
      :aria-labelledby="icon"
    />
    <img
      :src="icons[icon]"
      alt=""
      class="w-8 h-8 object-contain mr-3"
      :class="[rounded ? 'rounded-md' : '']"
    />
    <div class="flex flex-col text-sm" :id="icon">
      <span class="font-bold">{{ title }}</span>
      <span class="z-10 select-all w-min text-nowrap">
        <span v-if="prefix" class="opacity-90">{{ prefix }}</span>
        <span>{{ username }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { filename } from "pathe/utils";

const glob = import.meta.glob("~/assets/icons/*", { eager: true });
const icons = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default]),
);

defineProps<{
  title: string;
  username: string;
  to: string;
  icon: string;
  prefix?: string;
  rounded?: boolean;
}>();
</script>
