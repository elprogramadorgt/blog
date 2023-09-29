import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'
import { getDocuments } from '$lib/utils/document'


async function getDocs() {



    const paths = import.meta.glob('/src/content/**/*.shark', { eager: true })

    let posts: Post[] = getDocuments(paths);

    posts = posts.sort((first: Post, second: Post) => new Date(second.date).getTime() - new Date(first.date).getTime())

    return posts
}


export async function GET() {
    const posts = await getDocs()

    return json(posts)
}

