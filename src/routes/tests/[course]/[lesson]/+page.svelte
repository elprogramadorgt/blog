<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let quiz = null;
  let currentQuestionIndex = 0;
  let selectedOption = '';
  let showExplanation = false;
  let isFetching = true;

  onMount(async () => {
    const { course, lesson } = $page.params;
    const response = await fetch(`/api/tests/${course}/${lesson}`);
    if (response.ok) {
      quiz = await response.json();
      isFetching = false;
    } else {
      console.error('Failed to load the quiz');
    }
  });

  function handleOptionSelect(option) {
    selectedOption = option;
    showExplanation = true;
  }

  function nextQuestion() {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      currentQuestionIndex++;
      showExplanation = false;
      selectedOption = '';
    } else {
      console.log('Quiz Completed');
      // Here you could redirect to a results page or show a summary
    }
  }
</script>

<style>
  /* Container and General Layout */
  .quiz-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  /* Title Styling */
  h1 {
    font-size: 2.2rem;
    color: #333;
    text-align: center;
    margin-bottom: 1.5rem;
    animation: slideInFromLeft 1s ease-out;
  }

  /* Questions */
  .question {
    font-size: 1.4em;
    color: #444;
    margin-bottom: 1rem;
    transition: color 0.3s;
  }

  /* Options with hover and focus effects */
  .options {
    list-style: none;
    padding: 0;
  }

  .option {
    display: block;
    padding: 12px 20px;
    margin-bottom: 10px;
    background-color: #ffffff;
    border: 2px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  .option:hover, .option:focus {
    transform: scale(1.05);
    background-color: #e9e9ff;
    border-color: #bbb;
  }

  /* Feedback animation */
  .feedback {
    margin-top: 20px;
    padding: 12px;
    background-color: #f0f8ff;
    border-left: 5px solid #4c51bf;
    font-style: italic;
    animation: fadeIn 1s ease-out;
  }

  /* Correct/Incorrect Colors for Feedback */
  .correct {
    background-color: #e6ffed;
    border-color: #34d399;
  }

  .incorrect {
    background-color: #ffe4e6;
    border-color: #fc8181;
  }

  /* Button Styling */
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #5a67d8;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #4c51bf;
  }

  /* Keyframes for animations */
  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>


<div>
  {#if isFetching}
    <p>Loading quiz...</p>
  {:else if quiz}
    <h1>{quiz.title}</h1>
    <div>
      <p class="question">{quiz.questions[currentQuestionIndex].question}</p>
      <ul class="options">
        {#each quiz.questions[currentQuestionIndex].options as option, index}
          <li
            class="option {selectedOption === option ? (option === quiz.questions[currentQuestionIndex].answer ? 'correct' : 'incorrect') : ''}"
            on:click={() => !showExplanation && handleOptionSelect(option)}>
            {option}
          </li>
        {/each}
      </ul>
      {#if showExplanation}
        <div class="feedback">
          {selectedOption === quiz.questions[currentQuestionIndex].answer
            ? 'Correct! Good job!'
            : `Incorrect. The correct answer is: ${quiz.questions[currentQuestionIndex].answer}`}
          {quiz.questions[currentQuestionIndex].explanation ? ` Explanation: ${quiz.questions[currentQuestionIndex].explanation}` : ''}
        </div>
        <button on:click={nextQuestion}>Next Question</button>
      {/if}
    </div>
  {:else}
    <p>Quiz not available.</p>
  {/if}
</div>
