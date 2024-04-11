export type Categories = "sveltekit" | "svelte";

export type Post = {
  title: string;
  slug: string;
  url: string;
  description: string;
  date: string;
  tags: [];
  published: boolean;
};
