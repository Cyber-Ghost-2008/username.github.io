const questions = [
    {
        question: "What house at Hogwarts does Harry belong to?",
        options: ["Revenclaw", "Slytherin", "Hufflepuff", "Gryffindor"],
        answer: "Gryffindor"
    },
    {
        question: "What is the spell to disarm an opponent?",
        options: ["Lumos", "Stupefy", "Expelliarmus", "Aguamenti"],
        answer: "Expelliarmus"
    },
    {
        question: "Who is the headmaster of Hogwarts during Harry's first year?",
        options: ["Dumbledore", "Snape", "McGonagall", "Flitwick"],
        answer: "Dumbledore"
    },
    {
        question: "What magical creature is Hagrid's pet?",
        options: ["Hedwig", "Fang", "Fluffy", "Buckbeak"],
        answer: "Fang"
    },
    {
        question: "What is the name of Harry's first broomstick?",
        options: ["Nimbus 2000", "Firebolt", "Comet 260", "Cleansweep Seven"],
        answer: "Nimbus 2000"
    },
    {
        question: "What potion makes you lucky for a period of time?",
        options: ["Veritaserum", "Polyjuice Potion", "Amortentia", "Felix Felicis"],
        answer: "Felix Felicis"
    },
    {
        question: "What spell is used to conjure a Patronus?",
        options: ["Riddikulus", "Expecto Patronum", "Accio", "Avada Kedavra"],
        answer: "Expecto Patronum"
    },
    {
        question: "What is the name of the bank in the wizarding world?",
        options: ["Gringotts", "Wells Fargo", "Chase", "Bank of America"],
        answer: "Gringotts"
    },
    {
        question: "What creature pulls the Hogwarts carriages?",
        options: ["Dragons", "Hippogriffs", "Thestrals", "Unicorns"],
        answer: "Thestrals"
    },
    {
        question: "What type of wand does Harry have?",
        options: ["Holly and Phoenix Feather", "Elder", "Yew", "Birch"],
        answer: "Holly and Phoenix Feather"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreBox = document.getElementById("score-box");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const nextButton = document.getElementById("next-btn");
const redirect = document.getElementById("redirect");
const finalPopup = document.getElementById("final-popup");
const finalScore = document.getElementById("final-score");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreBox.textContent = `Score: ${score}/100`;
    redirect.style.display = "none";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => selectOption(option);
        optionsElement.appendChild(li);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score += 10;
        popupContent.textContent = "Correct! 🎉";
    } else {
        popupContent.textContent = "Wrong! 😢 the correct answer is " + (currentQuestion.answer);
    }

    scoreBox.textContent = `Score: ${score}/100`;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        popup.style.display = "block";
    } else {
        showFinalScore();
    }
}

nextButton.onclick = () => {
    popup.style.display = "none";
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
};

function showFinalScore() {
    popup.style.display = "none";
    finalScore.textContent = score;
    redirect.style.display = "block";
}

startQuiz();
