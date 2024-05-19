export default function () {
  const { $gsap, $ScrollTrigger } = useNuxtApp();

  $ScrollTrigger.killAll();
  $gsap.set("footer", { clearProps: true });
  $gsap.from("footer", {
    opacity: 0,
    scrollTrigger: {
      trigger: "main",
      start: "bottom bottom",
      end: "bottom top",
      scrub: true,
      immediateRender: true,
    },
  });
  $gsap.set("nav", { opacity: 1 });
  $gsap.to("nav", {
    opacity: 0,
    scrollTrigger: {
      trigger: "main",
      start: "bottom 10%",
      end: "bottom top",
      scrub: true,
    },
  });
}
