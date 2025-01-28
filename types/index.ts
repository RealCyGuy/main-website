import type { ParsedContent } from "@nuxt/content";

interface Links {
  website?: string;
  github?: string;
  github2?: string;
  discord?: string;
  pypi?: string;
  npm?: string;
}

export enum ProjectStatus {
  Active = 0,
  Paused = 1,
  Offline = 2,
}

export interface Project extends ParsedContent {
  title: string;
  description: string;
  tags: string[];
  date: string;
  links: Links;
  status?: ProjectStatus;
}
