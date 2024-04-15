<script lang="ts">
  import ListPosts from "../../../components/ListPosts.svelte";

  export let data;
  console.log(data.posts)
</script>



<div class="lessons-list">
  {#each data.posts as lesson}
    {#if lesson.published}
      <div class="lesson-item">
        <a href={lesson.url+ lesson.slug} class="lesson-title">{lesson.title}</a>
        <p class="lesson-description">{lesson.description}</p>
        <div class="lesson-meta">
          <span class="lesson-date">{new Date(lesson.date).toLocaleDateString()}</span>
          <ul class="lesson-tags">
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

.lesson-item {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  transition: box-shadow 0.3s ease;
}

.lesson-item:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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

.lesson-description {
  font-size: 1em;
  color: #666;
  margin-bottom: 10px;
}

.lesson-meta {
  font-size: 0.9em;
  color: #999;
}

.lesson-tags {
  list-style: none;
  padding: 0;
}

.lesson-tags li {
  display: inline;
  margin-right: 5px;
}

.lesson-date {
  font-style: italic;
}

</style>