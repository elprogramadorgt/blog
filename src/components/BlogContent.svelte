<script lang="ts">
  import { formatDate } from "$lib/utils";
  export let data: any;
  import Navbar from '../components/Navbar.svelte';

</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="data.meta.title" />
</svelte:head>


<article class="max-w-4xl mx-auto p-5 md:p-10">
  <header class="mb-8 text-center">
    <h1 class="text-3xl md:text-5xl font-bold mb-4">{data.meta.title}</h1>
    <p class="text-gray-400 mb-4">Published {formatDate(data.meta.date)}</p>
    <div class="flex justify-center flex-wrap">
      {#each data.meta.tags as tag}
        <span class="tag text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">{tag}</span>
      {/each}
    </div>
  </header>

  <div class="markdown-content max-w-none">
    <svelte:component this={data.content} />
  </div>
</article>

<!-- <article class="container">
  <div class="">
    <hgroup>
      <h1>{data.meta.title}</h1>
      <p>Publicado {formatDate(data.meta.date)}</p>
    </hgroup>

    <div class="tags mb-8 text-center">
      {#each data.meta.tags as tag}
        <span class=" m-4">&num;{tag}</span>
      {/each}
    </div>
  </div>

  <div>
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
    background-color: #512b92;
    padding: var(--size-2) var(--size-3);
    border-radius: var(--radius-round);
  }
</style> -->
