// Datos del cuestionario (10 preguntas)
const questions = [
    {
        question: "My cousin ... 3 books every quarter. He told me.",
        options: [
            { text: "was reading", explanation: "" },
            { text: "read", explanation: "We do not use Past Simple 'read' /red/ because the real sense of the sentence is a description of a habit." },
            { text: "reads", explanation: "'reads' /rids/ is in Present Simple Tense and implies habit." },
            { text: "is reading", explanation: "Nope. Because Continuous Tenses describe simultaneous actions." }
        ],
        correctAnswer: 0 // Índice de la opción correcta
    },
    {
        question: "On Sundays, my family and I ... lamb for breakfast together.",
        options: [
            { text: "went", explanation: "'had' /jad/ is not possible because the action sounds like a habit." },
            { text: "have", explanation: "Positive. 'have' /jav/ fills in perfectly." },
            { text: "is having", explanation: "Negative. Present Continuous describes activities happening at the moment of speaking." },
            { text: "'s had", explanation: "Present Perfect describes actions when the time reference is vague and. 'On Sundays' is very specific." }
        ],
        correctAnswer: 1 // Índice de la opción correcta
    },
    {
        question: "Alfred always ... about his little brother.",
        options: [
            { text: "worry", explanation: "/wuorri/ is not possible. The third person 'he' takes plural verbs in Present Simple Tense" },
            { text: "worried", explanation: "/wuorrid/ Past Tense in this case is not possible because there is no time expression in past." },
            { text: "worries", explanation: "/wuorries/ is the best choice.It describes Alfred's routine." },
            { text: "'s worried", explanation: "The correct place for the contraction 's (= verb be) <strong>...is always...</strong>." }
        ],
        correctAnswer: 2 // Índice de la opción correcta
    },
    {
        question: "In the evenings she ... with her friends.",
        options: [
            { text: "goes out", explanation: "Positive. 'In the evenings' is a Time Expression of routine, habits." },
            { text: "go out", explanation: "The correct expression is 'go out with' but remember: 'she go<strong>es</strong>'." },
            { text: "goes", explanation: "In this case the correct expression is 'go out with'." },
            { text: "goes out with", explanation: "No way! This is a mistaken choice because 'with' is twice."}
        ],
        correctAnswer: 0 // Índice de la opción correcta
    },
    {
        question: "All mornings my parents ...home at 6 or earlier.",
        options: [
            { text: "live", explanation: "Nope.'leave' and 'live' have almost similar pronunciation.'lives' = /livs/ and 'leaves' = /li:vs/" },
            { text: "leaves", explanation: "Impossible answer. In this case the correct verb is singular." },
            { text: "leave", explanation: "Positive. 'All mornings' is a Time Expression of routine, habits. 'leave' = /li:v/" },
            { text: "lives", explanation: "No way! This is a mistaken choice."}
        ],
        correctAnswer: 2 // Índice de la opción correcta
    },
    {
        question: "My father is an engineer and he ... for a big company from Brazil, and he ... enough for the five of us.",
        options: [
            { text: "works/wins", explanation: "This is a routine or habit description, but 'wins' is incorrect. People do not ☺win money☺" },
            { text: "is working/'s earning", explanation: "It is ambiguous because it may reflect a stroke of luck." },
            { text: "'s working/ 's earning", explanation: "In this case the contraction is preferred. But the sentence is ambiguous. It doesn't sound as a habit ‼"},
            { text: "works/earns", explanation: "Positive.It fills in perfectly." }
        ],
        correctAnswer: 3 // Índice de la opción correcta
    },
    {
        question: "My mom ... once a year.",
        options: [
            { text: "was swimming", explanation: "Continuous Tenses describe simultaneous actions and this is not definitely the situation ☺" },
            { text: "swam", explanation: "We do not use Past Simple because the real sense of the sentence is a description of a habit." },
            { text: "swims", explanation: "'swims' /suims/ is in Present Simple Tense and implies habit."},
            { text: "is swimming", explanation: "Nope. Because Continuous Tenses describe simultaneous actions." }
        ],
        correctAnswer: 0 // Índice de la opción correcta
    },
    {
        question: "In my house we ... water and electricity.",
        options: [
            { text: "saved", explanation: "Past Tense is not a good answer because it is a current topic☺" },
            { text: "save always", explanation: "The order: 'verb + adverb of frequency' is incorrect." },
            { text: "save", explanation: "This is a good answer."},
            { text: "always save", explanation: "Very well. It describes people care about natural resources." }
        ],
        correctAnswer: 3 // Índice de la opción correcta
    },
    {
        question: "In 2011, a tsunami ... Japan and ... an atomic catastrophe.",
        options: [
            { text: "hit/caused", explanation: "Positive. The date 'In 2011...' justifies the Past Tense answer." },
            { text: "hits/causes", explanation: "It depends on the conversation. This answer may be possible." },
            { text: "hit/hit", explanation: "The first 'hit' is not possible." },
            { text: "caused/caused", explanation: "The second 'caused' is incorrect." }
        ],
        correctAnswer: 0 // Índice de la opción correcta
    },
    {
        question: "Early this morning, my parents...a car accident on their way to work and...some pictures.",
        options: [
            { text: "see/take", explanation: "'Early this morning' expresses past events." },
            { text: "were seeing/were taking", explanation: "Impossible answer, because this answer defines the accident as a long period of time." },
            { text: "saw/took", explanation: "Positive. This past event was a short action." }
        ],
        correctAnswer: 2 // Índice de la opción correcta
    },
    {
        question: "These four girls in the photo... me some words in French.",
        options: [
            { text: "learned", explanation: "Incorrect. This answer is not possible" },
            { text: "said", explanation: "The correct expression is 'go out with' but remember: 'she go<strong>es</strong>'." },
            { text: "taught", explanation: "In this case the correct expression is 'go out with'." },
            { text: "spoke", explanation: "No way! This is a mistaken choice because 'with' is twice. " }
        ],
        correctAnswer: 2 // Índice de la opción correcta
    },

    {
        question: "Last year, in September some books...off the shelves in the earthquake.",
        options: [
            { text: "took", explanation: "Incorrect. This answer is not possible." },
            { text: "fall", explanation: "The correct expression is in Past Tense because of 'Last year'" },
            { text: "fallen", explanation: "This is Past Participle '/folen/ fallen' and cannot be the answer." },
            { text: "fell", explanation: "Excellent! Fell off is a phrasal verb." }
        ],
        correctAnswer: 3 // Índice de la opción correcta
    },

    {
        question: "The first time I...tiffos, they ...me a terrible diarrhea.",
        options: [
            { text: "ate/got sick", explanation: "This is incorrect because it is 'get sick <strong>of</strong>' the complete expression. ☺" },
            { text: "had/gave", explanation: "Right! Because of tiffos you got diarrhea." },
            { text: "ate/had", explanation: "This answer is possible, <strong>but</strong> you were probably sick of diarrhea before eating tiffos." },
            { text: "eat/have", explanation: "The context 'The first time' makes reference to a Past event." }
        ],
        correctAnswer: 1 // Índice de la opción correcta
    },

    {
        question: "A year ago, we ...five days with no water supply. The sixth day, we ...to close the main avenue.",
        options: [
            { text: "spent/decided", explanation: "Good! You 'spend days <strong>in</strong> Cancun or spend money <strong>on</strong> -movies,sodas'☺"},
            { text: "went/stopped", explanation: "Not really. These verbs may be understandable but they are not correct." },
            { text: "spend/decide", explanation: "Incorrect. 'A year ago' is a Time Reference for Past Events." },
        ],
        correctAnswer: 0 // Índice de la opción correcta
    },
    // Más preguntas...
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