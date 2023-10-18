import type { Post } from "$lib/types"

export function getDocumentMetadata(file: any, slug: string | undefined) {

    if (file && typeof file === 'object' && 'metadata' in file && slug) {

        const metadata = file.metadata as Omit<Post, 'slug'>
        const post = { ...metadata, slug } satisfies Post
        if (post.published) {
            return post
        }
    }
    return false
}

export function getDocuments(paths: Record<string, unknown>) {

    const data = [];
    for (const path in paths) {
        const file = paths[path];

        const slug = path.split('/').at(-1)?.replace('.shark', '')

        const doc = getDocumentMetadata(file, slug)


        if (!!doc) {
            data.push(doc)
        }
    }

    return data;

}