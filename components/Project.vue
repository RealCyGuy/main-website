<template>
  <div
    class="flex md:gap-3 rounded bg-white bg-opacity-0 md:hover:bg-opacity-5 duration-200 ease-out md:px-5 py-3 flex-col md:flex-row relative"
    :id="project.title"
  >
    <span
      class="opacity-90 flex md:flex-col justify-between md:justify-normal items-center text-center gap-2"
    >
      {{ new Date(project.date).getUTCFullYear() }}
      <div
        class="w-10 md:w-2/3 h-1.5 rounded-full"
        :class="{
          'bg-green-400':
            project.status == null || project.status === ProjectStatus.Active,
          'bg-gray-400': project.status === ProjectStatus.Paused,
          'bg-red-500': project.status === ProjectStatus.Offline,
        }"
      ></div>
    </span>
    <div class="flex justify-between flex-col flex-1">
      <div
        class="flex justify-between flex-col md:flex-row mb-2 sm:mb-1 md:mb-0"
      >
        <span class="font-bold">
          {{ project.title }}
        </span>
        <span class="md:max-w-[50%] md:text-right break-keep">
          <span
            v-for="(tag, index) in project.tags.sort((a, b) =>
              a.localeCompare(b),
            )"
          >
            <span class="opacity-95 hover:opacity-100 duration-50">
              {{ tag.replace(" ", "&nbsp;") }}
            </span>
            <span v-if="index < project.tags.length - 1">&nbsp;&middot; </span>
          </span>
        </span>
      </div>
      <div class="flex justify-between flex-col md:flex-row md:items-end">
        <span class="opacity-90">
          <ContentRenderer :value="description" class="prose" />
        </span>
        <div
          class="flex gap-1 md:gap-0.5 flex-shrink-0 mt-1 md:mt-0 flex-col sm:flex-row"
        >
          <NuxtLink
            v-for="(link, index) in links"
            :to="link.url"
            class="flex-1 px-2.5 py-2 bg-white bg-opacity-5 md:py-0 md:flex-none flex justify-center items-center gap-2 md:gap-1 hover:bg-opacity-10"
            target="_blank"
            :aria-label="link.label"
            :title="link.label"
            :class="{
              'sm:rounded-l-md md:rounded-l': index === 0,
              'sm:rounded-r-md md:rounded-r': index === links.length - 1,
            }"
          >
            <Icon class="scale-125 md:scale-100" :name="link.icon" />
            <span>{{ link.label.slice(8) }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Project, ProjectStatus } from "@/types";
import { transformContent } from "@nuxt/content/transformers";

const props = defineProps<{
  project: Project;
}>();

const description = await transformContent(
  "content:dummy.md",
  props.project.description,
);

let links: { label: string; icon: string; url: string }[] = [];
for (const key in props.project.links) {
  switch (key) {
    case "website":
      links.push({
        label: "Link to " + props.project.title,
        icon: "ph:globe-light",
        url: props.project.links[key]!,
      });
      break;
    case "github":
      links.push({
        label: "Link to GitHub",
        icon: "grommet-icons:github",
        url: "https://github.com/" + props.project.links[key],
      });
      break;
    case "github2":
      links.push({
        label: "Link to 2nd GitHub",
        icon: "grommet-icons:github",
        url: "https://github.com/" + props.project.links[key],
      });
      break;
    case "discord":
      links.push({
        label: "Link to Discord server",
        icon: "ic:baseline-discord",
        url: props.project.links[key]!,
      });
      break;
    case "pypi":
      links.push({
        label: "Link to PyPI",
        icon: "simple-icons:pypi",
        url: "https://pypi.org/project/" + props.project.links[key],
      });
      break;
    case "npm":
      links.push({
        label: "Link to npm",
        icon: "mdi:npm-variant",
        url: "https://www.npmjs.com/package/" + props.project.links[key],
      });
      break;
  }
}
</script>
