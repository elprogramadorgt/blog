<script lang="ts">
  import { formatDate } from "$lib/utils";
  import * as config from "$lib/config";
  import ListPosts from "../components/ListPosts.svelte";

  export let data;



  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';


  let searchQuery = '';

// Filter posts based on the search query
$: filteredPosts = data.posts.filter(post => 
  post.title.toLowerCase().includes(searchQuery.toLowerCase()) 
);

  
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<!-- Posts -->

<!-- <section>
  <ListPosts posts={data.posts} />
</section> -->


<div class="container mx-auto px-4 py-8">
  <h1 class="font-heading text-5xl text-center mb-8">Explore Programming & Cybersecurity</h1>
  <div class="mb-8 flex justify-center">
    <input 
      type="text" 
      bind:value={searchQuery} 
      placeholder="Search posts..." 
      class="search-input bg-white border-2 border-gray-400 text-gray-700 rounded-lg shadow-sm leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 w-full max-w-xl transition duration-150 ease-in-out"
    >
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each filteredPosts as post}
    <div class="card flex flex-col justify-between p-6 rounded-lg shadow-md">
      <div>
        <a href={`${post.url}${post.slug}`} ><h2 class="card-title font-heading text-xl font-semibold mb-2"> {post.title}</h2></a>
        <p class="text-sm text-gray-500 mb-4">{formatDate(post.date)}</p> <!-- Date display -->
        <p class="font-sans text-base mb-4">{post.description}</p>
      </div>
      <a href={`${post.url}${post.slug}`} class="card-link mt-4 self-end">Read More</a>
    </div>
    {/each}
  </div>
  
  <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each filteredPosts as post}
    <div class="card p-6 rounded-lg shadow-md">
      <h2 class="card-title font-heading text-xl font-semibold mb-4">{post.title}</h2>
        <p class="font-sans text-base mb-4">{post.description}</p>
        <a href={`/${post.url}/${post.slug}`} class="card-link">Read More</a>
      </div>
    {/each}
  </div> -->
</div>
<!-- <Footer /> -->
