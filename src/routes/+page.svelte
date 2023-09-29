<script lang="ts">
  import { formatDate } from "$lib/utils";
  import * as config from "$lib/config";
  import ListPosts from "../components/ListPosts.svelte";

  export let data;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
  <ListPosts posts={data.posts} />
</section>
