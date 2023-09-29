import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'
import { getDocuments } from '$lib/utils/document'


async function getPosts() {


    const paths = import.meta.glob('/src/content/posts/**/*.shark', { eager: true })

    let posts: Post[] = getDocuments(paths);

    posts = posts.sort((first: Post, second: Post) => new Date(second.date).getTime() - new Date(first.date).getTime())

    return posts
}


export async function GET() {
    const posts = await getPosts()

    return json(posts)
}

