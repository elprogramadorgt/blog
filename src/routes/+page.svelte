<script lang="ts">
  import { formatDate } from "$lib/utils";
  import * as config from "$lib/config";

  export let data;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
  <ul class="posts grid gap-8">
    {#each data.posts as post}
      <li class="post">
        <a href={`posts/${post.slug}`} class="post-title">{post.title}</a>
        <p class="date">{formatDate(post.date)}</p>
        <p class="mt-4">{post.description}</p>
      </li>
    {/each}
  </ul>
</section>
