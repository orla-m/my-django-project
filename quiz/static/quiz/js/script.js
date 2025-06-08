let startButton = document.getElementById("startButton")
let start = document.getElementById("start")
let play = document.getElementById("play")
let end = document.getElementById("end")
let finishButton = document.getElementById("finishButton")
let question = document.getElementById("question")
let answer = document.getElementById("answer")
let scoreOutput = document.getElementById("scoreOutput")
let finalScore = document.getElementById("finalScore")
let playAgain = document.getElementById("playAgain")
const rootStyles = getComputedStyle(document.documentElement);
const mainColor = rootStyles.getPropertyValue('--main-color').trim();

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
  num1=Math.floor(Math.random() * 11)+2;
  num2=Math.floor(Math.random() * 11)+2;
  question.innerText = num1+" x "+num2+" =";

});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkKey(event) {
  if (event.key === "Enter") {
    let userAnswer = parseInt(answer.value);
    if (userAnswer === num1*num2) {
      score += 1
      scoreOutput.innerText = "score: "+score;
    } else {
      answer.style.backgroundColor = "rgb(255, 0, 0)";
      answer.value=num1*num2
      await sleep(1000);
    }
  answer.value=""
  answer.style.backgroundColor = mainColor;
  num1=Math.floor(Math.random() * 11)+2;
  num2=Math.floor(Math.random() * 11)+2;
  question.innerText = num1+" x "+num2+" =";
  }
}

finishButton.addEventListener("click", function() {
  play.style.display="none";
  end.style.display="block";
  finishButton.style.display="none";
  finalScore.innerText="you scored: "+score;
  document.getElementById("score-input").value = score;
  
});