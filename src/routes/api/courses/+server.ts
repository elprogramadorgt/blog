import { json } from "@sveltejs/kit";
import type { Post } from "$lib/types";
import { getDocumentMetadata } from "$lib/utils/document";

async function getCourses() {
  const paths = import.meta.glob("/src/content/courses/**/*.shark", {
    eager: true,
  });

  return Object.keys(paths).map((path) => {
    const directoryPath = path.replace(/\/[^/]+\.shark$/, "");
    const parts = directoryPath.split("/");
    const name = parts.pop();
    return { name, slug: name, url: `courses/` };
  }).reduce((acc: any, item: any) => {
    if (!acc.some((obj: any) => obj.slug === item.slug)) {
      acc.push(item);
    }
    return acc;
  }, []);


}

export async function GET() {
  const courses = await getCourses();

  return json(courses);
}
