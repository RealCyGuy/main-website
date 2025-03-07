import Lenis from "lenis";

export default defineNuxtPlugin((nuxtApp: any) => {
  const lenis = new Lenis();

  lenis.on("scroll", nuxtApp.$ScrollTrigger.update);

  nuxtApp.$gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });

  nuxtApp.$gsap.ticker.lagSmoothing(0);
});
