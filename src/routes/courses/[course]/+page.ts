import type { Post } from "$lib/types";

export async function load({ fetch, params }: any) {
  const response = await fetch(`/api/courses/${params.course}/classes`);
  const posts: Post[] = await response.json();
  return { posts };
}
