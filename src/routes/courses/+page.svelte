<script lang="ts">
  import ListTitles from "../../components/ListTitles.svelte";

  export let data;
</script>

<div class="courses-container">
  <h1 class="font-heading text-5xl text-center mb-8">Available Courses</h1>
  <ul class="course-list">
    {#each data.courses as course}
      <li class="course-item">
        <a href={course.url + course.slug} class="course-link">
          {course.name}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .courses-container {
    padding: 20px;
    max-width: 800px; /* Adjust based on your layout needs */
    margin: auto;
  }

  .course-list {
    list-style: none;
    padding: 0;
  }

  .course-item {
    margin-bottom: 10px;
    background-color: var(--card-bg-color);
    border-radius: 8px;
    transition:
      background-color 0.3s,
      box-shadow 0.3s;
  }

  .course-link {
    display: block;
    padding: 15px 20px;
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: bold;
  }

  .course-link:hover,
  .course-link:focus {
    background-color: var(--quiz-button-hover-bg);
    color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .courses-container h1 {
    font-family: "Helvetica Neue", Arial, sans-serif; /* Choosing a sleek, modern font */
    font-size: 2rem; /* Appropriate size for header */
    font-weight: bold; /* Strong weight for prominence */

    text-align: center; /* Center alignment to anchor the page */
    margin-top: 20px;
    margin-bottom: 40px; /* Adequate spacing for visual separation */
  }
</style>
