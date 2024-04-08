<script lang="ts">
  import { formatDate } from "$lib/utils";
  import * as config from "$lib/config";
  import ListPosts from "../components/ListPosts.svelte";

  export let data;



  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';


  
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<!-- Posts -->

<!-- <section>
  <ListPosts posts={data.posts} />
</section> -->


<Navbar />
<div class="container mx-auto px-4 py-8">
  <h1 class="font-heading text-5xl text-center mb-8">Explore Programming & Cybersecurity</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.posts as post}
    <div class="card p-6 rounded-lg shadow-md">
      <h2 class="card-title font-heading text-xl font-semibold mb-4">{post.title}</h2>
        <p class="font-sans text-base mb-4">{post.description}</p>
        <a href={`/${post.url}/${post.slug}`} class="card-link">Read More</a>
      </div>
    {/each}
  </div>
</div>
<Footer />
