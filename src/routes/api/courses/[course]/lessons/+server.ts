import type { Post } from "$lib/types";
import { getDocuments } from "$lib/utils/document";
import { json } from "@sveltejs/kit";

async function getClases(course: string) {
  let paths: any = [];
  switch (course.toLowerCase()) {
    case "go":
      paths = import.meta.glob("/src/content/courses/go/*.shark", {
        eager: true,
      });
      break;
    case "htmx":
      paths = import.meta.glob("/src/content/courses/htmx/*.shark", {
        eager: true,
      });
      break;
    case "linux":
      paths = import.meta.glob("/src/content/courses/linux/*.shark", {
        eager: true,
      });
      break;
  }

  let posts: Post[] = getDocuments(paths);



  posts = posts.sort(
    (first: Post, second: Post) =>
      new Date(first.date).getTime() - new Date(second.date).getTime()
  );

  return posts;
}

export async function GET({ params }: any) {
  const courses = await getClases(params.course);
  return json(courses);
}
