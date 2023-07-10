import { error } from "@sveltejs/kit";


export async function load({ params }: any) {
    try {
        const post = await import(`../../posts/${params.slug}.shark`)
        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {

        throw error(404, `No se pudo encontrar ${params.slug}`)

    }
}