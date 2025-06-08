let startButton = document.getElementById("startButton")
let start = document.getElementById("start")
let play = document.getElementById("play")
let end = document.getElementById("end")
let finishButton = document.getElementById("finishButton")
let question = document.getElementById("question")
let answer = document.getElementById("answer")
let submitButton = document.getElementById("submitButton")
let nextButton = document.getElementById("nextButton")
let scoreOutput = document.getElementById("scoreOutput")
let finalScore = document.getElementById("finalScore")
let playAgain = document.getElementById("playAgain")

play.style.display="none";
end.style.display="none";
finishButton.style.display="none";
score=0;

playAgain.addEventListener("click", function() {
  start.style.display="block";
  play.style.display="none";
  end.style.display="none";
  finishButton.style.display="none";
  score=0;
  scoreOutput.innerText = "score: "+score;
  answer.value=""
  answer.style.boxShadow="0 0 0px 0px"

});


startButton.addEventListener("click", function() {
  start.style.display="none";
  play.style.display="block";
  finishButton.style.display="block";
  num1=Math.floor(Math.random() * 12);
  num2=Math.floor(Math.random() * 12);
  question.innerText = num1+" x "+num2+" =";

});

nextButton.addEventListener("click", function() {
  num1=Math.floor(Math.random() * 12);
  num2=Math.floor(Math.random() * 12);
  question.innerText = num1+" x "+num2+" =";
  answer.value=""
  answer.style.boxShadow="0 0 0px 0px"

});

submitButton.addEventListener("click", function() {
  let userAnswer = parseInt(answer.value);
  if (userAnswer === num1*num2) {
    score += 1
    scoreOutput.innerText = "score: "+score;
    answer.style.boxShadow = "0 0 10px 1px #408000";
  } else {
    answer.style.boxShadow = "0 0 10px 1px #800000";
    answer.value=""
  }
});

finishButton.addEventListener("click", function() {
  play.style.display="none";
  end.style.display="block";
  finishButton.style.display="none";
  finalScore.innerText="you scored: "+score;
  document.getElementById("score-input").value = score;
  
});