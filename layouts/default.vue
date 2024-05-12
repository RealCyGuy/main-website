<template>
  <div
    class="bg-slate-900 text-pink-400 min-h-screen overflow-hidden selection:bg-pink-400 selection:bg-opacity-40"
  >
    <div
      :style="[mounted ? '' : 'display: none']"
      class="min-h-screen flex flex-col"
    >
      <NavBar />
      <div class="auto-mx mt-8 md:mt-16 flex-1">
        <slot />
      </div>
      <Footer />
      <div
        v-if="!usedTouch"
        id="cursor"
        class="w-3 h-3 rounded-full fixed bg-pink-200 pointer-events-none duration-100 opacity-0 z-50"
        :class="{
          'scale-[5]': isCursorPointer,
          'opacity-20': moved,
        }"
        ref="cursor"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mounted = ref(false);
const m = useState("mounted", () => false);
const route = useRoute();

const cursor = ref<HTMLElement | null>(null);
const isCursorPointer = ref(false);
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let moved = ref(false);
const usedTouch = ref(false);

onMounted(() => {
  mounted.value = true;
  if (route.name != "index") {
    m.value = true;
  }

  document.addEventListener("mouseover", (e) => {
    const target = e.target as HTMLElement;

    if (window.getComputedStyle(target).cursor === "pointer") {
      isCursorPointer.value = true;
    } else {
      isCursorPointer.value = false;
    }
  });
  document.addEventListener("mousemove", (e) => {
    if (!moved.value) {
      cursorX = e.clientX;
      cursorY = e.clientY;
      moved.value = true;
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  document.addEventListener("touchend", (e) => {
    usedTouch.value = true;
  });
  function updateCursor() {
    if (cursor.value) {
      const deltaX = (mouseX - cursorX) * 0.09;
      const deltaY = (mouseY - cursorY) * 0.09;

      cursorX += deltaX;
      cursorY += deltaY;

      cursor.value.style.transform = `translate(-50%, -50%) translate(${cursorX}px, ${cursorY}px) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`;
    }
    requestAnimationFrame(updateCursor);
  }
  requestAnimationFrame(updateCursor);
});
</script>

<style>
.page-enter-active,
.page-leave-active,
.page-enter-active .title,
.page-leave-active .title {
  @apply duration-500 ease-in-out;
}

.page-enter-from,
.page-leave-to {
  @apply opacity-0;
}

.page-enter-from .title {
  @apply -translate-x-32;
}

.page-leave-to .title {
  @apply translate-x-64;
}
</style>
