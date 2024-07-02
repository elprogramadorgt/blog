<script lang="ts">
  import ListPosts from "../../../components/ListPosts.svelte";

  export let data;
</script>

<div class="grid grid-cols-1 gap-6 lessons-list">
  {#each data.posts as lesson}
    {#if lesson.published}
      <div class="card flex flex-col justify-between p-6 rounded-lg shadow-md">
        <a href={lesson.url + lesson.slug}
          ><h2 class="card-title font-heading text-xl font-semibold mb-2">
            {lesson.title}
          </h2></a
        >
        <span class="lesson-date"
          >{new Date(lesson.date).toLocaleDateString()}</span
        >

        <p class="lesson-description mt-2">{lesson.description}</p>
        <div class="lesson-meta">
          <ul class="lesson-tags mt-3">
            {#each lesson.tags as tag}
              <li>{tag}</li>
            {/each}
          </ul>
        </div>
      </div>
    {/if}
  {/each}
</div>

<style>
  .lessons-list {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }

  /* .lesson-item {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  transition: box-shadow 0.3s ease;
} */

  .lesson-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .lesson-title {
    display: block;
    font-size: 1.4em;
    color: #0077cc;
    text-decoration: none;
    margin-bottom: 5px;
  }

  .lesson-title:hover {
    text-decoration: underline;
  }

  .lesson-meta {
    font-size: 0.9em;
    color: #999;
  }
  .lesson-tags {
    list-style: none; /* Remove default list styling */
    padding: 0;
    display: flex; /* Horizontal layout for tags */
    gap: 10px; /* Spacing between tags */
  }

  .lesson-tags li {
    background-color: var(--tag-bg-color); /* Soft background for tags */
    color: var(--tag-text-color);
    padding: 0.25rem 0.5rem;
    border-radius: 4px; /* Rounded corners for tags */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  }

  .lesson-date {
    font-style: italic;
  }
</style>
