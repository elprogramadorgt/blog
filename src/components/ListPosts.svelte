<script lang="ts">
    import { formatDate } from "$lib/utils.js";
    export let posts: any;
    console.log("postsssss", posts);
</script>

<ul class="posts grid gap-8">
    {#each posts as post}
        <li class="post">
            <a href={post.url + post.slug} class="post-title hover:underline"
                >{post.title}</a
            >
            <p class="date">{formatDate(post.date)}</p>
            <p class="mt-4">{post.description}</p>
        </li>
    {/each}
</ul>
