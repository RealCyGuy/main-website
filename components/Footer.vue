<template>
  <footer>
    <div
      class="py-16 flex justify-center flex-col items-center h-screen bg-black fixed bottom-0 w-full"
    >
      <p class="mb-4">
        &copy; {{ year }}
        <SimpleLink to="https://cyrusyip.com">Cyrus Yip</SimpleLink>. All rights
        reserved.
      </p>
      <p class="mb-4">
        Source code on
        <SimpleLink to="https://github.com/RealCyGuy/personal-website/tree/v4"
          >GitHub</SimpleLink
        >.
      </p>
      <p>
        <SimpleLink to="https://v1--realcyguy.netlify.app">v1</SimpleLink> -
        <SimpleLink to="https://v2--realcyguy.netlify.app">v2</SimpleLink> -
        <SimpleLink to="https://v3--realcyguy.netlify.app">v3</SimpleLink> -
        <span class="opacity-60">v4</span>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
