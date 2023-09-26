import type { Post } from "$lib/types"

export function getDocumentMetadata(file: any, slug: string | undefined) {

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
        const metadata = file.metadata as Omit<Post, 'slug'>
        const post = { ...metadata, slug } satisfies Post
        if(post.published){
            return post
        }
    }
    return false
}