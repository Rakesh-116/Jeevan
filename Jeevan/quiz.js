function goToHome(){
    window.location.assign("home.html");
}

function takeAQuiz(){
    window.location.assign("quiz.html");
}

let startExam = document.getElementById("startExam");

let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
let question4 = document.getElementById("question4");

let userInput1 = document.getElementById("userInput1");
let userInput2 = document.getElementById("userInput2");
let userInput3 = document.getElementById("userInput3");
let userInput4 = document.getElementById("userInput4");

let errorMsg1 = document.getElementById("errorMsg1");
let errorMsg2 = document.getElementById("errorMsg2");
let errorMsg3 = document.getElementById("errorMsg3");
let errorMsg4 = document.getElementById("errorMsg4");

let score=0;

let resultContainer = document.getElementById("result");
let finalScore = document.getElementById("finalScore");

function totalScore(){
    finalScore.textContent = "Your Score is: " + score + " out of 8";
}

function firstQuestion(){
    startExam.style.display = "none";
    question1.style.display = "block";
}

function secondQuestion() {
    let userInputValue = userInput1.value;
    userInputValue = userInputValue.toUpperCase();
    if (userInputValue === "") {
        errorMsg1.textContent = "Enter the Option";
        userInput1.value = "";
        return;
    } else {
        errorMsg1.textContent = "";
        if (userInputValue === "A" || userInputValue === "B" || userInputValue === "C") {
            if (userInputValue === "A") {
                score += 0;
            } else if (userInputValue === "B") {
                score += 1;
            } else if (userInputValue === "C") {
                score += 2;
            }
            question1.style.display = "none";
            question2.style.display = "block";
        } else {
            errorMsg1.textContent = "Invalid Option. Enter A, B, or C.";
            userInput1.value = "";
            return;
        }
    }
    userInput1.value = "";
}

function thirdQuestion(){
    let userInputValue = userInput2.value;
    userInputValue = userInputValue.toUpperCase();
    if (userInputValue === "") {
        errorMsg2.textContent = "Enter the Option";
        userInput2.value = "";
        return;
    } else {
        errorMsg2.textContent = "";
        if (userInputValue === "A" || userInputValue === "B" || userInputValue === "C") {
            if (userInputValue === "A") {
                score += 0;
            } else if (userInputValue === "B") {
                score += 1;
            } else if (userInputValue === "C") {
                score += 2;
            }
            question2.style.display = "none";
            question3.style.display = "block";
        } else {
            errorMsg2.textContent = "Invalid Option. Enter A, B, or C.";
            userInput2.value = "";
            return;
        }
    }
    userInput2.value = "";
}

function fourthQuestion(){
    let userInputValue = userInput3.value;
    userInputValue = userInputValue.toUpperCase();
    if (userInputValue === "") {
        errorMsg3.textContent = "Enter the Option";
        userInput3.value = "";
        return;
    } else {
        errorMsg3.textContent = "";
        if (userInputValue === "A" || userInputValue === "B" || userInputValue === "C") {
            if (userInputValue === "A") {
                score += 0;
            } else if (userInputValue === "B") {
                score += 1;
            } else if (userInputValue === "C") {
                score += 2;
            }
            question3.style.display = "none";
            question4.style.display = "block";
        } else {
            errorMsg3.textContent = "Invalid Option. Enter A, B, or C.";
            userInput3.value = "";
            return;
        }
    }
    userInput3.value = "";
}

function result(){
    let userInputValue = userInput4.value;
    userInputValue = userInputValue.toUpperCase();
    if (userInputValue === "") {
        errorMsg4.textContent = "Enter the Option";
        userInput4.value = "";
        return;
    } else {
        errorMsg4.textContent = "";
        if (userInputValue === "A" || userInputValue === "B" || userInputValue === "C") {
            if (userInputValue === "A") {
                score += 0;
            } else if (userInputValue === "B") {
                score += 1;
            } else if (userInputValue === "C") {
                score += 2;
            }
            question4.style.display = "none";
            resultContainer.style.display = "block";
            totalScore();
        } else {
            errorMsg4.textContent = "Invalid Option. Enter A, B, or C.";
            userInput4.value = "";
            return;
        }
    }
    userInput4.value = "";
}
