//--------------Quiz (random questions) project using function constructors, methode etc.------------------
function Question(question, answer, correctAnswer) {
  this.question = question;
  this.answer = answer;
  this.correct = correctAnswer;
}

Question.prototype.displayQuestion = function () {
  console.log(this.question);

  for (let i = 0; i <= this.answer.length - 1; i++) {
    console.log(i + ": " + this.answer[i]);
  }
};

Question.prototype.checkAnswer = function () {
  if (userAns === this.correct) {
    console.log("Correct Answer");
  } else if (userAns !== this.correct && userAns == userAns) {
    console.log("Incorrect Answer");
  } else if (userAns !== userAns) {
    alert("Please choose from the given options. Please reload.");
  }
};

let question1 = new Question(
  "Who is the prime minister of India in 2021?",
  ["Modi ji", "Sodi ji"],
  0
);
let question2 = new Question(
  "Who is the supreme commander of Indian armed defence forces?",
  ["Defence Minister", "President", "General of that force"],
  1
);
let question3 = new Question(
  "Indian Army day is celebrated on which date?",
  ["15 August", "16 August", "15 January", "26 January"],
  2
);
let question4 = new Question(
  "Who is the cheif justice of India in 2021?",
  ["Sharad Arvind Bobde", "Ranjan Gogoi"],
  0
);

let que = [question1, question2, question3, question4];

let randomQue = Math.floor(Math.random() * que.length);
que[randomQue].displayQuestion();

let userAns = parseInt(prompt("write your answer"));
que[randomQue].checkAnswer();
