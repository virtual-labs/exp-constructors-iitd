
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. What is false about constructor?",
      answers: {
        a: " Constructors cannot be synchronized in Java",
        b: " Java does not provide default copy constructor",
        c: "Constructor can have a return type",
        d: "“this” and “super” can be used in a constructor"
      },
      correctAnswer: "c"
    },

    {
      question: "Q2. What would be behavior if the constructor has a return type?",
      answers: {
        a: "Compilation error",
        b: "Runtime error",
        c: "Compilation and runs successfully",
        d: "Only String return type is allowed"



      },
      correctAnswer: "a"
    },

    {
      question: "Q3. What is default accessibility modifier of a default constructor?",
      answers: {
        a: " Public",
        b: "private",
        c: "Same as class accessibility modifier",
        d: "default"
      },
      correctAnswer: "c"
    },
	
	{
      question: "Q4. We can declare constructor as private?",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q5. Which of the following is/are true about constructors in Java? <BR> A) Constructor name should be same as class name.<BR> B) If you dont define a constructor for a class, a default parameter less constructor is automatically created by the compiler.<BR> C) The default constructor calls super() and initializes all instance variables to default value like 0, null.<BR> D) If we want to parent class constructor, it must be called in first line of constructor.",

      answers: {
        a: "1",
        b: "1, 2",
      	c: "1, 2 and 3",
      	d: " 1, 2, 3 and 4"
     },
      correctAnswer: "b"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
