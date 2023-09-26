<script lang="ts">
  export let data;
</script>

<section class="pb-10">
  <ul class="posts grid gap-8">
    {#each data.courses as course}
      <li class="post">
        <a class="post-title hover:underline" href={`courses/${course.slug}`}
          >{course.name}</a
        >
      </li>
    {/each}
  </ul>
</section>
