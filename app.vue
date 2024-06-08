<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  themeColor: "#446ada",
});

useSchemaOrg([
  definePerson({
    name: "Cyrus Yip",
    sameAs: ["https://github.com/realcyguy"],
  }),
]);

defineOgImageComponent("Custom");
</script>
