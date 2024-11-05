<template>
  <footer>
    <div
      class="flex flex-col justify-between h-dvh bg-black fixed bottom-0 w-full p-5 footer-sm:p-12 footer-md:py-10 footer-md:px-14 footer-lg:py-16 footer-lg:px-20 gap-5"
    >
      <div class="flex flex-col gap-7">
        <div
          class="text-5xl footer-sm:text-7xl footer-lg:text-8xl flex flex-col footer-lg:block"
        >
          <span>Let's</span> <span><span class="verb">talk</span>.</span>
        </div>
        <p class="text-xl footer-sm:text-3xl footer-lg:text-4xl">
          <SimpleLink to="/contact">Contact me</SimpleLink> or email me
          <SimpleLink to="mailto:cyrusyip@cyrusyip.com"
            >cyrusyip@cyrusyip.com</SimpleLink
          >
        </p>
      </div>
      <div
        class="flex min-h-0 flex-col gap-2 footer-sm:gap-5 text-3xl footer-sm:text-5xl footer-lg:text-6xl items-start flex-wrap"
      >
        <ComplexLink to="/">About</ComplexLink>
        <ComplexLink to="/projects">Projects</ComplexLink>
        <ComplexLink to="/social">Social</ComplexLink>
        <ComplexLink to="/contact">Contact</ComplexLink>
        <ComplexLink to="/square">Square</ComplexLink>
      </div>
      <div
        class="flex flex-col gap-5 text-xl footer-sm:text-3xl footer-lg:text-4xl"
      >
        <p>
          <SimpleLink to="https://v1--realcyguy.netlify.app">v1</SimpleLink> -
          <SimpleLink to="https://v2--realcyguy.netlify.app">v2</SimpleLink> -
          <SimpleLink to="https://v3--realcyguy.netlify.app">v3</SimpleLink> -
          <span class="text-text text-opacity-60">v4</span>
        </p>
        <p class="text-balance">
          &copy; {{ year }}
          <span class="whitespace-nowrap"
            ><SimpleLink to="https://cyrusyip.com">Cyrus Yip</SimpleLink>.</span
          >
          All rights reserved. Source code on
          <span class="whitespace-nowrap">
            <SimpleLink
              to="https://github.com/RealCyGuy/personal-website/tree/v4"
              >GitHub</SimpleLink
            >.
          </span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();

const { $gsap } = useNuxtApp();

onMounted(() => {
  const tl = $gsap.timeline({
    repeat: -1,
  });
  ["discuss", "yap", "converse", "chat", "confer", "talk"].forEach((verb) => {
    tl.to(".verb", {
      text: {
        value: verb,
        speed: 1,
      },
      delay: 1.2,
    });
  });
});
</script>
