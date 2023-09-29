<script lang="ts">
    import { formatDate } from "$lib/utils.js";
    import ListPosts from "../../components/ListPosts.svelte";

    export let data;
</script>

<section class="pb-10">
    <ListPosts posts={data.posts} />
</section>
