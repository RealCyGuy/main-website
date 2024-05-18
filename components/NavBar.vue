<template>
  <nav
    class="flex justify-between px-5 py-8 text-lg fixed w-full top-0 overflow-hidden md:px-10 z-20 opacity-0"
  >
    <div class="flex">
      <NuxtLink to="/" class="md:px-3 hover-underline">
        <span class="animated-underline block">Cyrus Yip</span>
      </NuxtLink>
    </div>
    <div class="flex">
      <ol
        class="flex fixed h-screen w-screen left-0 top-0 flex-col bg-background md:bg-transparent md:flex-row md:h-auto md:w-auto md:static md:opacity-100 md:visible justify-center list-[decimal-leading-zero] list-inside duration-500 items-center z-10"
        :class="[toggled ? '' : 'invisible opacity-0 top-[-100%]']"
      >
        <NuxtLink
          to="/"
          class="px-3 text-text hover:text-opacity-60 duration-500 mb-10 md:mb-0"
        >
          <li class="animated-underline duration-50">About</li>
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="px-3 text-text hover:text-opacity-60 duration-500 mb-10 md:mb-0"
        >
          <li class="animated-underline duration-50">Projects</li>
        </NuxtLink>
        <NuxtLink
          to="/social"
          class="px-3 text-text hover:text-opacity-60 duration-500 mb-10 md:mb-0"
        >
          <li class="animated-underline duration-50">Social</li>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="px-3 text-text hover:text-opacity-60 duration-500"
        >
          <li class="animated-underline duration-50">Contact</li>
        </NuxtLink>
      </ol>
      <button
        class="md:hidden z-10 w-8 -inline-block relative group"
        @click="toggle"
        aria-label="Menu"
        :aria-expanded="toggled"
      >
        <div
          class="w-full h-1 bg-text group-hover:bg-opacity-60 absolute duration-500 top-0 rounded group-aria-expanded:top-1/2 group-aria-expanded:rotate-45 group-aria-expanded:-translate-y-1/2 group-aria-expanded rotate-[540deg]"
        ></div>
        <div
          class="w-full h-1 bg-text group-hover:bg-opacity-60 absolute duration-500 top-1/2 -translate-y-1/2 rounded group-aria-expanded:w-0 rotate-[540deg] group-aria-expanded:rotate-0 left-1/2 -translate-x-1/2 group-aria-expanded:opacity-0"
        ></div>
        <div
          class="w-full h-1 bg-text group-hover:bg-opacity-60 absolute duration-500 top-full -translate-y-full rounded group-aria-expanded:top-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:-translate-y-1/2 rotate-[540deg]"
        ></div>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.animated-underline {
  @apply relative overflow-hidden;
}

.animated-underline::after {
  @apply absolute bottom-0 left-1/2 opacity-0 rounded duration-500 ease-in bg-primary bg-gradient-to-r h-[0.12em] w-full;
  content: "";
  transform: translateX(-150%);
}

a:hover .animated-underline::after,
ol a:focus .animated-underline::after,
ol .router-link-active .animated-underline::after {
  @apply opacity-100 ease-out;
  transform: translateX(-50%);
}
</style>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

const toggled = ref(false);

function toggle() {
  toggled.value = !toggled.value;
  $gsap.set("nav", { opacity: 1 });
  document.body.classList.toggle("fixed");
  // document.body.classList.toggle("overflow-y-scroll");
}

onMounted(() => {
  const tl = $gsap.timeline({
    defaults: { ease: "power3.out" },
  });
  tl.set("nav", { opacity: 1 })
    .from(
      "nav ol a li",
      {
        y: -100,
        duration: 1,
        stagger: 0.1,
      },
      0,
    )
    .from(
      "nav>div>a, nav button",
      {
        opacity: 0,
        duration: 2,
        stagger: 0.5,
      },
      0,
    );
});

const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    toggled.value = false;
    document.body.classList.remove("fixed");
    // document.body.classList.toggle("overflow-y-scroll");
  },
);
</script>
