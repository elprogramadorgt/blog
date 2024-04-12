<script lang="ts">
  import confetti from 'canvas-confetti';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let quiz:any = null;
  let currentQuestionIndex = 0;
  let selectedOption = '';
  let showExplanation = false;
  let isFetching = true;

  onMount(async () => {
    const { course, lesson } = $page.params;
    const response = await fetch(`/api/tests/${course}/${lesson}`);
    if (response.ok) {
      quiz = await response.json();
      
    }
    isFetching = false;
  });

  function handleOptionSelect(option:string) {
    selectedOption = option;
    showExplanation = true;
    if (option === quiz.questions[currentQuestionIndex].answer) {
      runConfetti();
    }
  }

  function runConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 } // Make sure confetti comes from the bottom of the screen
    });
  }

  function nextQuestion() {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      currentQuestionIndex++;
      showExplanation = false;
      selectedOption = '';
    } else {
      console.log('Quiz Completed');
      // Add further actions here
    }
  }
</script>


<style>
  /* Container and General Layout */
  .quiz-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background:#f9f9f9;
    /* border-radius: 10px; */
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
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


  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translateX(-10px);
    }
    20%, 40%, 60%, 80% {
      transform: translateX(10px);
    }
  }

  .incorrect {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    background-color: #ffe4e6; /* Reddish background to indicate wrong */
    border-color: #fc8181;
  }

  .option.incorrect:hover, .option.incorrect:focus {
    background-color: #ffe4e6; /* Lighter shade of red for hover on incorrect */
    border-color: #fc8181; /* Darker shade of red for border on hover */
    /* transform: scale(1.05); Keep the transform effect if you like */
}

/* Loading Animation */

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 1.2em;
}

@keyframes fadeInOut {
    0%, 100% {
        opacity: 0;
        transform: scale(0.5);
    }
    50% {
        opacity: 1;
        transform: scale(1.2);
    }
}

.loading-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0 5px;
    animation: fadeInOut 1.5s infinite ease-in-out;
}

.loading-dot:nth-child(1) {
    background-color: #e63946; /* A vibrant red */
    animation-delay: 0s;
}

.loading-dot:nth-child(2) {
    background-color: #f1c40f; /* A bright yellow */
    animation-delay: 0.5s;
}

.loading-dot:nth-child(3) {
    background-color: #2a9d8f; /* A calming teal */
    animation-delay: 1s;
}


.not-available {
    text-align: center;
    color: #ff6b6b; /* Soft red color for error messages */
    font-size: 1.2em;
    margin-top: 50px;
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}


.not-available {
    text-align: center;
    color: #ff6b6b; /* A stronger color for error or attention */
    font-size: 1.5em; /* Larger font for better readability */
    margin-top: 50px;
    animation: fadeIn 0.5s ease-out;
    padding: 20px; /* More padding for better focus */
    background-color: #ffe4e6; /* Soft background color to draw attention */
}

</style>


<div class="quiz-container">
  {#if isFetching}
  <span>Loading</span>
  <div class="loading">
    <div class="loading-dot"></div>
    <div class="loading-dot"></div>
    <div class="loading-dot"></div>
  </div>
  {:else if quiz && quiz.ok}
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
  <div class="not-available">Quiz not available.</div>
  {/if}
</div>
