<template>
  <div>
    <section class="h-screen relative">
      <div class="w-full h-full md:w-2/3 absolute right-0 flex">
        <canvas id="canvas3d" class="h-full w-full relative opacity-0"></canvas>
      </div>
      <div class="absolute left-0 bottom-0 w-full">
        <div class="flex justify-between md:text-4xl px-5">
          <span>Develop</span>
          <span>Design</span>
          <span>Word 3</span>
        </div>
        <div
          class="text-9xl md:text-[10rem] lg:text-[12rem] leading-none whitespace-nowrap overflow-x-clip"
        >
          <div class="name-container">
            <div class="names flex">
              <h1 class="px-5 lg:px-10" ref="first">Cyrus Yip</h1>
              <span
                class="px-5 lg:px-10"
                aria-hidden="true"
                v-for="index in 10"
                :key="index"
                >Cyrus Yip</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-24 auto-mx">
      <Split
        text="I was born at a very, very young age. In fact, I was one of the youngest living things during that time."
        class="intro-text text-2xl sm:text-3xl md:text-5xl flex-1 max-w-prose md:leading-tight"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Application } from "@splinetool/runtime";

useServerSeoMeta({
  description:
    "Cyrus Yip's personal website. I made this website with Nuxt 3 👍.",
});

const m = useState("mounted", () => false);

const { $gsap, $ScrollTrigger } = useNuxtApp();
let app: Application | null = null;
const first = ref<HTMLElement | null>(null);

function setup() {
  $gsap.killTweensOf(".names");

  $gsap.fromTo(
    ".names",
    { x: 0 },
    {
      x: -first.value!.clientWidth,
      ease: "none",
      duration: 6,
      repeat: -1,
    },
  );
}

onMounted(() => {
  handleAnimation();

  const tl = $gsap.timeline({
    defaults: { ease: "power3.out" },
  });
  tl.from(".names span", {
    y: "50%",
    stagger: 0.3,
    duration: 0.5,
    ease: "power1.in",
  });

  $gsap.to(".names", {
    x: -first.value!.clientWidth,
    ease: "none",
    duration: 6,
    repeat: -1,
  });

  let resizeTimer: NodeJS.Timeout;
  addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setup();
    }, 100);
  });

  $gsap.to(".name-container", {
    x: "-50%",
    scrollTrigger: {
      trigger: ".names",
      start: "bottom bottom",
      end: "top top",
      scrub: true,
    },
  });

  $gsap.from(".intro-text span", {
    y: "50%",
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".intro-text",
      start: "bottom bottom",
      end: "bottom 80%",
      scrub: true,
    },
  });

  const canvas = document.getElementById("canvas3d")! as HTMLCanvasElement;
  app = new Application(canvas);
  app
    .load("https://prod.spline.design/SF3SvGwvtSuhzyIm/scene.splinecode")
    .then(() => {
      $gsap.to(canvas, { opacity: 1, duration: 0.5, delay: 0.5 }).then(() => {
        $gsap.to("#canvas3d", {
          opacity: 0.1,
          scrollTrigger: {
            trigger: ".names",
            start: "bottom bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    });

  if (m.value) return;
  m.value = true;
});

onUnmounted(() => {
  if (app) {
    app.dispose();
  }
});
</script>
