// Datos del cuestionario (10 preguntas)
const questions = [
    {
        question: "My cousin ... 3 books every quarter. He told me.",
        options: [
            { text: "was reading", explanation: "" },
            { text: "read", explanation: "We do not use Past Simple 'read' /red/ because the sentence describes a habit, not a past action." },
            { text: "reads", explanation: "'reads' /riːdz/ is in Present Simple Tense and correctly implies a habitual action." },
            { text: "is reading", explanation: "Incorrect. Continuous tenses describe actions happening at the moment of speaking, not habits." }
        ],
        correctAnswer: 0 // Index of the correct option
    },
    {
        question: "On Sundays, my family and I ... lamb for breakfast together.",
        options: [
            { text: "went", explanation: "'had' /hæd/ is incorrect because the action describes a current habit." },
            { text: "have", explanation: "Correct. 'have' /hæv/ fits perfectly for this habitual action." },
            { text: "is having", explanation: "Incorrect. Present Continuous describes actions happening right now." },
            { text: "'s had", explanation: "Incorrect. Present Perfect is used for indefinite time, but 'On Sundays' is specific." }
        ],
        correctAnswer: 1 // Index of the correct option
    },
    {
        question: "Alfred always ... about his little brother.",
        options: [
            { text: "worry", explanation: "/ˈwɜːri/ is incorrect. Third person singular requires '-s' in Present Simple." },
            { text: "worried", explanation: "/ˈwɜːrid/ Past Tense is incorrect as there's no past time reference." },
            { text: "worries", explanation: "/ˈwɜːriz/ is correct. It describes Alfred's routine." },
            { text: "'s worried", explanation: "Incorrect placement of the contraction 's (verb be) with 'always'." }
        ],
        correctAnswer: 2 // Index of the correct option
    },
    {
        question: "In the evenings she ... with her friends.",
        options: [
            { text: "goes out", explanation: "Correct. 'In the evenings' indicates a habitual action." },
            { text: "go out", explanation: "Incorrect. Third person singular requires 'goes'." },
            { text: "goes", explanation: "Incorrect. The correct phrase is 'goes out with'." },
            { text: "goes out with", explanation: "Incorrect. 'With' appears twice in this option." }
        ],
        correctAnswer: 0 // Index of the correct option
    },
    {
        question: "Every morning my parents ... home at 6 or earlier.",
        options: [
            { text: "live", explanation: "Incorrect. 'leave' and 'live' have different meanings." },
            { text: "leaves", explanation: "Incorrect. Plural subject requires 'leave'." },
            { text: "leave", explanation: "Correct. 'Every morning' indicates a habitual action." },
            { text: "lives", explanation: "Incorrect. Plural subject requires 'leave'." }
        ],
        correctAnswer: 2 // Index of the correct option
    },
    {
        question: "My father is an engineer and he ... for a big company from Brazil, and he ... enough for the five of us.",
        options: [
            { text: "works/wins", explanation: "Incorrect. People 'earn' money, they don't 'win' it." },
            { text: "is working/'s earning", explanation: "Incorrect. This suggests temporary situations, not habitual actions." },
            { text: "'s working/ 's earning", explanation: "Incorrect. The contractions suggest temporary situations." },
            { text: "works/earns", explanation: "Correct. Describes habitual actions perfectly." }
        ],
        correctAnswer: 3 // Index of the correct option
    },
    {
        question: "My mom ... once a year.",
        options: [
            { text: "was swimming", explanation: "Incorrect. Continuous tenses describe ongoing actions." },
            { text: "swam", explanation: "Incorrect. Past Simple doesn't describe habits." },
            { text: "swims", explanation: "Correct. Present Simple describes habitual actions." },
            { text: "is swimming", explanation: "Incorrect. Continuous tenses describe ongoing actions." }
        ],
        correctAnswer: 2 // Index of the correct option
    },
    {
        question: "In my house we ... water and electricity.",
        options: [
            { text: "saved", explanation: "Incorrect. Past Tense doesn't describe current habits." },
            { text: "save always", explanation: "Incorrect. Adverb placement is wrong." },
            { text: "save", explanation: "Correct, though less specific than option 4." },
            { text: "always save", explanation: "Best answer. Describes habitual conservation." }
        ],
        correctAnswer: 3 // Index of the correct option
    },
    {
        question: "In 2011, a tsunami ... Japan and ... an atomic catastrophe.",
        options: [
            { text: "hit/caused", explanation: "Correct. 'In 2011' justifies Past Tense." },
            { text: "hits/causes", explanation: "Incorrect. Present Tense doesn't match past time reference." },
            { text: "hit/hit", explanation: "Incorrect. Second 'hit' is wrong verb for this context." },
            { text: "caused/caused", explanation: "Incorrect. First 'caused' is wrong verb for tsunami action." }
        ],
        correctAnswer: 0 // Index of the correct option
    },
    {
        question: "Early this morning, my parents...a car accident on their way to work and...some pictures.",
        options: [
            { text: "see/take", explanation: "Incorrect. Present Tense doesn't match past time reference." },
            { text: "were seeing/were taking", explanation: "Incorrect. Continuous suggests prolonged actions." },
            { text: "saw/took", explanation: "Correct. Past Simple for completed past actions." }
        ],
        correctAnswer: 2 // Index of the correct option
    },
    {
        question: "These four girls in the photo... me some words in French.",
        options: [
            { text: "learned", explanation: "Incorrect. Wrong verb for this context." },
            { text: "said", explanation: "Incorrect. 'Say' isn't used for teaching." },
            { text: "taught", explanation: "Correct. 'Taught' means instructed in this context." },
            { text: "spoke", explanation: "Incorrect. Doesn't convey the teaching aspect." }
        ],
        correctAnswer: 2 // Index of the correct option
    },
    {
        question: "Last year, in September some books...off the shelves in the earthquake.",
        options: [
            { text: "took", explanation: "Incorrect. Wrong verb for this context." },
            { text: "fall", explanation: "Incorrect. Needs to be Past Tense." },
            { text: "fallen", explanation: "Incorrect. Past Participle needs auxiliary verb." },
            { text: "fell", explanation: "Correct. 'Fell off' is the proper phrasal verb." }
        ],
        correctAnswer: 3 // Index of the correct option
    },
    {
        question: "The first time I...tiffos, they ...me a terrible diarrhea.",
        options: [
            { text: "ate/got sick", explanation: "Incorrect. 'Got sick of' implies disgust, not illness." },
            { text: "had/gave", explanation: "Correct. Proper verbs for this context." },
            { text: "ate/had", explanation: "Possible but less precise than option 2." },
            { text: "eat/have", explanation: "Incorrect. Needs to be Past Tense." }
        ],
        correctAnswer: 1 // Index of the correct option
    },
    {
        question: "A year ago, we ...five days with no water supply. The sixth day, we ...to close the main avenue.",
        options: [
            { text: "spent/decided", explanation: "Correct. Proper Past Tense verbs for this context." },
            { text: "went/stopped", explanation: "Incorrect. Verbs don't fit the context well." },
            { text: "spend/decide", explanation: "Incorrect. Needs to be Past Tense." }
        ],
        correctAnswer: 0 // Index of the correct option
    }
    // More questions...
];
let currentQuestion = 0;
let score = 0;
const userName = localStorage.getItem("nombreUsuario"); // Recuperamos el nombre del login

// Elementos del DOM
const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const userResult = document.getElementById("user-name");
const scoreResult = document.getElementById("score");

// Mostrar la pregunta actual
function showQuestion() {
    const question = questions[currentQuestion];
    questionTitle.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionText.textContent = question.question;
    optionsContainer.innerHTML = "";

    // Restablece el feedback (limpia clases y contenido)
    feedback.innerHTML = ""; // Limpia el texto
    feedback.className = "feedback"; // Elimina las clases "correct" e "incorrect"
    
    // Vuelve a habilitar los botones de opciones (por si acaso)
    const optionButtons = optionsContainer.querySelectorAll("button");
    optionButtons.forEach(button => button.disabled = false);

    // Oculta el botón "Siguiente"
    nextBtn.classList.add("hidden");

    // Genera los botones de opciones para la nueva pregunta
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

// Verificar respuesta seleccionada
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const isCorrect = selectedIndex === question.correctAnswer;
    const selectedOption = question.options[selectedIndex];
    const correctOption = question.options[question.correctAnswer];

    // Limpia clases anteriores y añade la clase correspondiente
    feedback.className = "feedback " + (isCorrect ? "correct" : "incorrect");

    feedback.innerHTML = `
        <div class="feedback-content">
            <div>
                <strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong>
                <p class="explanation">${selectedOption.explanation}</p>
                ${!isCorrect ? `
                    <div class="correct-answer">
                        <strong>Correct Answer:</strong> ${correctOption.text}<br>
                        <span class="explanation">${correctOption.explanation}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    // Deshabilitar botones después de responder
    const optionButtons = optionsContainer.querySelectorAll("button");
    optionButtons.forEach(button => button.disabled = true);
    nextBtn.classList.remove("hidden");

    if (isCorrect) {
        score++;
    }
}

// Pasar a la siguiente pregunta o mostrar resultados
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

// Mostrar resultados finales
function showResults() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    userResult.textContent = `Name: ${userName}`;
    scoreResult.textContent = `Score: ${score} of ${questions.length}`;
}

// Botón "Repetir ejercicio"
document.getElementById("restart-btn").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    showQuestion();
});

// Botón "Volver al menú" (ajusta la ruta según tu estructura de archivos)
document.getElementById("menu-btn").addEventListener("click", () => {
    window.location.href = "semester4.html"; // Cambia "menu.html" por tu ruta real
});
// Iniciar el cuestionario
showQuestion();