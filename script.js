const cardNumber = document.getElementById("cardNumber");
const cardTotal = document.getElementById("cardTotal");
const wordText = document.getElementById("wordText");
const meaningText = document.getElementById("meaningText");
const flipBtn = document.getElementById("flipBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

let flashCards = [
    { question: "best player of all time", answer: "cristiano" },
    { question: "capital of the US", answer: "D.C" },
    { question: "whats the name of my dog", answer: "Milo" }
];

function showCard() {
    let card = flashCards[currentIndex];
    wordText.textContent = card.question;
    meaningText.textContent = '';
    cardNumber.textContent = currentIndex + 1;
    cardTotal.textContent = flashCards.length;
}
showCard();

flipBtn.addEventListener("click", function () {
    let card = flashCards[currentIndex];
    meaningText.textContent = card.answer;
});

nextBtn.addEventListener("click", function () {
    currentIndex = currentIndex + 1;
    if (currentIndex === flashCards.length) {
        currentIndex = 0;
    }
    showCard();
});



