<template>
  <div class="auto-mx">
    <h1 class="title mb-5">Square<span class="font-normal">?</span></h1>
    <div class="mt-10 flex justify-between flex-wrap gap-y-5">
      <p class="text-xl sm:text-2xl flex flex-col">
        <span class="mb-2">Here is a spinning square:</span>
        <span
          class="inline-block overflow-hidden duration-[2000ms] transition-[max-height]"
          :class="clicks < 5 ? 'max-h-0' : 'max-h-16'"
          >Clicks: {{ clicks }}</span
        >
        <span
          class="inline-block overflow-hidden duration-[2000ms] transition-[max-height]"
          :class="clicks < 20 ? 'max-h-0' : 'max-h-16'"
          >Clicks per second (last 10): {{ cps.toFixed(2) }}</span
        >
        <span
          class="inline-block overflow-hidden duration-[2000ms] transition-[max-height]"
          :class="clicks < 50 ? 'max-h-0' : 'max-h-16'"
          >Average clicks per second: {{ averageCps.toFixed(2) }}</span
        >
        <span
          class="inline-block overflow-hidden duration-[2000ms] transition-[max-height]"
          :class="clicks < 100 ? 'max-h-0' : 'max-h-16'"
          >Time spent clicking: {{ (now - beginning) / 1000 }}s</span
        >
        <span
          class="inline-block overflow-hidden duration-[2000ms] transition-[max-height]"
          :class="loops == 0 ? 'max-h-0' : 'max-h-16'"
          >Colour loops completed: {{ loops }}</span
        >
        <span
          class="inline-block overflow-hidden duration-[2000ms] transition-[max-height]"
          :class="clicks < 400 ? 'max-h-0' : 'max-h-16'"
          >Congrats! There is no more content.</span
        >
        <span
          class="inline-block overflow-hidden duration-[2000ms] transition-[max-height]"
          :class="clicks < 720 ? 'max-h-0' : 'max-h-16'"
          >Why are you still clicking.</span
        >
        <span
          class="inline-block overflow-hidden duration-[2000ms] transition-[max-height]"
          v-if="clicks > 799"
          v-for="click in Math.floor((clicks - 700) / 100)"
          >{{ "?".repeat(click) }}</span
        >
      </p>
      <div class="flex-1 px-8">
        <div
          class="bg-primary w-1/6 min-w-[5rem] max-w-[8rem] aspect-square m-5 animate-spin-slow mx-auto cursor-pointer relative overflow-hidden [-webkit-tap-highlight-color:transparent]"
          @click="click"
          :style="`filter: hue-rotate(${degrees}deg)`"
        >
          <div
            class="animate-spin-slow-reverse w-full h-full"
            ref="wave_container"
          >
            <Wave
              v-for="wave in waves"
              :style="`left: ${wave[0]}px; top: ${wave[1]}px`"
              :key="wave[2]"
            ></Wave>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Square",
});

useSeoMeta({
  description: "A spinning square?",
});

const degrees = ref(0);
const waves = ref<[number, number, number][]>([]);
const wave_container = ref<HTMLDivElement>();
let clicks = 0;
let loops = 0;
let cps = 0;
const clickTimes: number[] = [];
let beginning: number;
let now: number;
let averageCps = 0;

function click(event: MouseEvent) {
  degrees.value++;
  if (degrees.value >= 360) {
    degrees.value = 0;
    loops++;
  }
  if (!wave_container.value) {
    return;
  }
  const rect = wave_container.value.getBoundingClientRect();
  waves.value.push([
    event.clientX - rect.left,
    event.clientY - rect.top,
    clicks++,
  ]);

  now = Date.now();
  if (!beginning) {
    beginning = now;
  }

  clickTimes.push(Date.now());
  if (clickTimes.length > 10) {
    clickTimes.shift();
  }
  const timeElapsed = clickTimes[clickTimes.length - 1] - clickTimes[0];
  cps = clickTimes.length / (timeElapsed / 1000);
  averageCps =
    clicks / ((clickTimes[clickTimes.length - 1] - beginning) / 1000);

  setTimeout(() => {
    waves.value.shift();
  }, 3000);

  // setTimeout(() => {
  //   click(event);
  // }, 50);
}

onMounted(handleAnimation);
</script>
