// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import type { Post } from '$lib/types'


export async function load({ fetch }: any) {
    const response = await fetch('api/posts')
    const posts: Post[] = await response.json()
    return { posts }
}
