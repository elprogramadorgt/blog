import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'
import { getDocumentMetadata } from '$lib/utils/document'


async function getPosts() {

    let posts: Post[] = []

    const paths = import.meta.glob('/src/content/posts/**/*.shark', { eager: true })

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.shark', '')

        const doc = getDocumentMetadata(file, slug)

        if(!!doc){
            posts.push(doc)
        }
    }

    posts = posts.sort((first: Post, second: Post) => new Date(second.date).getTime() - new Date(first.date).getTime())

    return posts
}


export async function GET() {
    const posts = await getPosts()

    return json(posts)
}

