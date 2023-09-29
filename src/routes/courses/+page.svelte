<script lang="ts">
  import ListTitles from "../../components/ListTitles.svelte";

  export let data;
</script>

<section class="pb-10">
  <ListTitles titles={data.courses} />
</section>
