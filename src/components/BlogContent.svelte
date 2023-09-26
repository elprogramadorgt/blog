<script lang="ts">
  import { formatDate } from "$lib/utils";
  export let data: any;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="data.meta.title" />
</svelte:head>

<article class="container">
  <div class="blog-header">
    <hgroup>
      <h1>{data.meta.title}</h1>
      <p>Publicado {formatDate(data.meta.date)}</p>
    </hgroup>

    <div class="tags text-center">
      {#each data.meta.categories as category}
        <span class="surface-4">&num;{category}</span>
      {/each}
    </div>
  </div>

  <div class="prose">
    <svelte:component this={data.content} class="container" />
  </div>
</article>

<style>
  h1 + p {
    margin-top: var(--size-2);
    color: var(--text-2);
  }

  .tags {
    margin-top: var(--size-7);
  }

  .tags > * {
    padding: var(--size-2) var(--size-3);
    border-radius: var(--radius-round);
  }
</style>
