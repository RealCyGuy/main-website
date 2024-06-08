<template>
  <div
    ref="wave"
    class="absolute w-96 h-96 radial-gradient rounded-full origin-center -mx-48 -my-48"
  ></div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

const wave = ref<HTMLDivElement>();
onMounted(() => {
  $gsap.fromTo(
    wave.value!,
    { scale: 0, opacity: 0.2 },
    { scale: 1, opacity: 0, duration: 1.5, ease: "ease-out" },
  );
});
</script>

<style>
.radial-gradient {
  background: radial-gradient(circle, #ffffff01, #ffffff, #e1e1e1);
}
</style>
