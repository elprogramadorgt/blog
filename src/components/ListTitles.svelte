<script lang="ts">
    export let titles: any;
</script>

<ul class="posts grid gap-8">
    {#each titles as title}
        <li class="post">
            <a href={title.url + title.slug} class="post-title hover:underline"
                >{title.name}</a
            >
        </li>
    {/each}
</ul>
