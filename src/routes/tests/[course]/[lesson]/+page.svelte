<script lang="ts">
    // export let data: { title: string; questions: any[] };
    export let data:any;
  
    let currentQuestionIndex = 0;
    let selectedOption = '';
    let showExplanation = false;
  
    // Handlers and functions similar to the previous example
    function handleOptionSelect(option:any) {
    selectedOption = option;
    showExplanation = true;
  }

  function nextQuestion() {
    if (currentQuestionIndex < data.questions.length - 1) {
      currentQuestionIndex++;
      showExplanation = false;
      selectedOption = '';
    } else {
      // Quiz completed, handle accordingly
      console.log('Quiz Completed');
    }
  }
  </script>
  <h1>hola </h1>
  
  {#if data}
    <div>
      <h1 class="text-4xl font-bold mb-4">{data.title}</h1>
      {#each data.questions as question, index (question)}
        {#if index === currentQuestionIndex}
          <div>
            <p>{question.question}</p>
            <ul>
              {#each question.options as option}
                <li on:click={() => handleOptionSelect(option)}>{option}a</li>
              {/each}
            </ul>
            {#if showExplanation}
              <p>
                {selectedOption === question.answer
                  ? 'Correct! '
                  : 'Incorrect. '}
                {question.explanation}
              </p>
              <button on:click={nextQuestion}>Next Question</button>
            {/if}
          </div>
        {/if}
      {/each}
    </div>
  {:else}
    <p>Loading quiz...</p>
  {/if}