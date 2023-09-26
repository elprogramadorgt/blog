import { error } from "@sveltejs/kit";

export async function load({ params }: any) {
  try {
    const post = await import(
      `../../../../content/courses/${params.course}/${params.chapter}.shark`
    );

    return {
      content: post.default,
      meta: post.metadata,
    };
  } catch (e) {
    throw error(404, `No se pudo encontrar ${params.slug}`);
  }
}
