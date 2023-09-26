<script lang="ts">
    import { formatDate } from "$lib/utils.js";

    export let data;
</script>

<section class="pb-10">
    <ul class="posts grid gap-8">
        {#each data.posts as post}
            <li class="post">
                <a href={post.slug} class="post-title">{post.title}</a>
                <p class="date">{formatDate(post.date)}</p>
                <p class="mt-4">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>

<style>

</style>
