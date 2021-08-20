const quizForm = document.querySelector(".quiz-form");

// console.log(quizForm);
const submitBtn = document.querySelector("#submit-answer-btn");
const output = document.querySelector("#output");
// console.log(submitBtn);

const answers = ["90°", "right-angled"];

const calculateScore = () => {
  let score = 0;
  let index = 0;
  const formData = new FormData(quizForm);
  //   console.log(formData);
  for (let value of formData.values()) {
    if (answers[index] === value) score++;
    index++;
  }

  output.innerText = "You've scored " + score + " points";
};
submitBtn.addEventListener("click", calculateScore);