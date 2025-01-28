<template>
  <div>
    <div class="relative overflow-clip [clip-path:inset(0)]">
      <div
        class="w-full h-svh fixed left-0 top-0 ml-auto sm:flex z-10 pointer-events-none hidden"
      >
        <div class="h-full w-full md:w-2/3 md:translate-x-1/2">
          <canvas
            id="canvas3d"
            class="h-full w-full relative opacity-0"
          ></canvas>
        </div>
      </div>
      <section class="h-svh flex flex-col justify-end w-full">
        <div class="left-0 bottom-0 w-full z-20">
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
      <section class="py-16 sm:py-24 md:py-32 auto-mx mr-10">
        <Split
          text="I was born at a very, very young age. In fact, I was one of the youngest living things during that time."
          class="intro-text text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] flex-1 max-w-screen-2xl leading-none gap-x-4 md:gap-x-6 lg:gap-x-10"
        />
      </section>
      <section
        class="skills auto-mx flex flex-wrap gap-y-4 justify-between pb-24 text-sm sm:text-base lg:text-lg"
      >
        <div
          class="w-full sm:w-[45%] md:w-[40%] flex flex-col gap-y-4 lg:gap-5"
        >
          <SkillSection title="Web development">
            <SkillLink to="https://nuxt.com">Nuxt</SkillLink>,
            <SkillLink to="https://vuejs.org">Vue.js</SkillLink>,
            <SkillLink to="https://gsap.com">GSAP</SkillLink>,
            <SkillLink to="https://tailwindcss.com">Tailwind CSS</SkillLink>,
            <SkillLink to="https://en.wikipedia.org/wiki/HTML">HTML</SkillLink>,
            <SkillLink to="https://en.wikipedia.org/wiki/CSS">CSS</SkillLink>,
            <SkillLink to="https://en.wikipedia.org/wiki/JavaScript"
              >JavaScript</SkillLink
            >,
            <SkillLink to="https://www.typescriptlang.org/"
              >TypeScript</SkillLink
            >
          </SkillSection>
          <SkillSection title="Bot development">
            <SkillLink to="https://www.python.org">Python</SkillLink>,
            <SkillLink to="https://discordpy.readthedocs.io/en/stable/"
              >discord.py</SkillLink
            >, <SkillLink to="https://pycord.dev/">pycord</SkillLink>,
            <SkillLink to="https://www.mongodb.com">MongoDB</SkillLink>,
            <SkillLink to="https://github.com/tesseract-ocr/tesseract"
              >Tesseract OCR</SkillLink
            >
          </SkillSection>
          <SkillSection title="Game development">
            <SkillLink to="https://godotengine.org">Godot</SkillLink>,
            <SkillLink
              to="https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html"
              >GDScript</SkillLink
            >, <SkillLink to="https://unity.com">Unity</SkillLink>,
            <SkillLink to="https://aseprite.org">Aseprite</SkillLink>
          </SkillSection>
          <SkillSection title="Script development">
            <SkillLink to="https://www.rust-lang.org">Rust</SkillLink>,
            <SkillLink to="https://www.autohotkey.com">AutoHotkey</SkillLink>
          </SkillSection>
        </div>
        <div
          class="w-full sm:w-[45%] md:w-[40%] flex flex-col gap-y-4 lg:gap-5"
        >
          <SkillSection title="Automation">
            <SkillLink to="https://www.git-scm.com">Git</SkillLink>,
            <SkillLink to="https://github.com/features/actions"
              >GitHub Actions</SkillLink
            >
          </SkillSection>
          <SkillSection title="Web design">
            <SkillLink to="https://figma.com">Figma</SkillLink>
          </SkillSection>
          <SkillSection title="Media editing">
            <SkillLink
              to="https://www.blackmagicdesign.com/ca/products/davinciresolve"
              >DaVinci Resolve</SkillLink
            >,
            <SkillLink to="https://tenacityaudio.org">Tenacity</SkillLink>
          </SkillSection>
          <SkillSection title="Open-source contribution">
            <SkillLink
              to="https://github.com/modmail-dev/Modmail/issues?q=author%3Arealcyguy+is%3Ap"
              >modmail-dev/Modmail</SkillLink
            >,
            <SkillLink
              to="https://github.com/monkeytypegame/monkeytype/issues?q=author%3Arealcyguy+is%3Apr"
              >monkeytypegame/monkeytype</SkillLink
            >,
            <SkillLink
              to="https://github.com/search?q=author%3Arealcyguy++-owner%3Arealcyguy+&type=pullrequests"
              >more</SkillLink
            >!
          </SkillSection>
        </div>
      </section>
    </div>
    <section class="relative bg-blue-950 bg-opacity-20 py-20">
      <div class="mb-12 lg:mb-20 auto-mx">
        <Split
          text="Here are four random selections of projects I've created."
          class="projects-text text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] flex-1 max-w-screen-2xl leading-none gap-x-4 md:gap-x-6 lg:gap-x-10"
        />
      </div>
      <div class="auto-mx pb-10">
        <div
          class="text-sm sm:text-base lg:text-lg grid 2xl:grid-cols-2 gap-2 my-5 md:my-10"
        >
          <div
            v-for="project in projects!.slice(0, 4)"
            class="flex flex-col py-2 gap-1"
          >
            <span>
              <SimpleLink
                :to="'/projects#' + project.title"
                class="font-bold"
                >{{ project.title }}</SimpleLink
              >
              made with
              <span
                v-for="(tag, index) in project.tags.sort((a, b) =>
                  a.localeCompare(b),
                )"
              >
                <span>
                  {{ tag.replace(" ", "&nbsp;") }}
                </span>
                <span
                  v-if="
                    index < project.tags.length - 1 && project.tags.length > 2
                  "
                  >,
                </span>
                <span v-if="index == project.tags.length - 2"> and </span>
              </span>
              in {{ new Date(project.date).getUTCFullYear() }}.
            </span>
            <span class="opacity-90">{{ project.description }}</span>
          </div>
        </div>
        <SimpleLink to="/projects" class="text-lg md:text-2xl"
          >View all {{ projects!.length }} projects.</SimpleLink
        >
      </div>
    </section>
    <section class="min-h-screen flex justify-center items-center">
      <div class="auto-mx">
        <Split
          text="Why do people choose to sleep? I think... It is because they're afraid to awaken from the dream."
          class="end-text text-3xl flex-1 max-w-screen-2xl leading-none gap-x-2"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Application } from "@splinetool/runtime";

import type { Project } from "@/types";

useSeoMeta({
  description:
    "Cyrus Yip's personal website. I am a developer, designer, and word 3.",
});

const m = useState("mounted", () => false);
const { data } = await useAsyncData("projects", () =>
  queryContent<Project>("projects").find(),
);

const { data: projects } = await useAsyncData("randomprojects", () =>
  Promise.resolve(data.value!.sort(() => 0.5 - Math.random())),
);

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
      start: "top bottom",
      end: "bottom 80%",
      scrub: true,
    },
  });

  $gsap.from(".projects-text span", {
    y: "50%",
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".projects-text",
      start: "top bottom",
      end: "bottom 80%",
      scrub: true,
    },
  });

  $gsap.from(".end-text span", {
    y: "50%",
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".end-text",
      start: "top bottom",
      end: "top 50%",
      scrub: true,
    },
  });

  $gsap.utils.toArray(".skills>div>div>div").forEach((el) => {
    $gsap.from(el as HTMLElement, {
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: el as HTMLElement,
        start: "top bottom",
      },
    });
  });

  const canvas = document.getElementById("canvas3d")! as HTMLCanvasElement;
  app = new Application(canvas);
  app
    .load("https://prod.spline.design/SF3SvGwvtSuhzyIm/scene.splinecode")
    .then(() => {
      let mm = $gsap.matchMedia();
      mm.add({ big: "(min-width: 768px)" }, (context) => {
        $gsap.to("#canvas3d", {
          x: context!.conditions!.big ? "-25%" : "0%",
          scrollTrigger: {
            trigger: ".intro-text",
            start: "bottom 60%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        });
      });
      $gsap.to("#canvas3d", {
        scale: 0.5,
        scrollTrigger: {
          trigger: ".intro-text",
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
        },
      });
      $gsap.to(canvas, { opacity: 1, duration: 0.5, delay: 0.5 }).then(() => {
        $gsap.to("#canvas3d", {
          opacity: 0.8,
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
