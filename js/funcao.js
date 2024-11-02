const $iniciarButton  = document.querySelector(".iniciar-quizz")
const $questionContainer = document.querySelector(".question-container")
const $nextButton = document.querySelector(".next-button")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $answerText = document.querySelector(".answer")

$iniciarButton.addEventListener('click', startGame) // Iniciar quizz
$nextButton.addEventListener('click', displayQuestions)




let currentQuestion = 0
let currentAnswer = 0


// Esta função esta fazendo um event para quando cliclar no button o jogo começe.
function startGame() {
    $iniciarButton.classList.add('hide'); //fazendo o botão de começar sumir
    $questionContainer.classList.remove('hide'); // Removendo a classe hide.
    displayQuestions()
}

// Esta função é chamada para mostrar as perguntas e as respostas.
function displayQuestions() {
    resetQuestion()

    if ( Questions.length === currentQuestion ) {
        return finishQuizz()
        
    }
    
    $questionText.textContent = Questions[currentQuestion].Question
    Questions[currentQuestion].Answers.forEach(Answers => {
        const $nexAnswer = document.createElement('button')
        $nexAnswer.classList.add("answer")
        $nexAnswer.textContent = Answers.text
        if (Answers.correct) {
            $nexAnswer.dataset.correct = Answers.correct
        }
        $answersContainer.appendChild($nexAnswer)

        $nexAnswer.addEventListener('click', selectAnswer ) 
    })

    // Esta função muda a cor do body e do button de acordo com a resposta.   
 function selectAnswer(event) {
    const answerClick = event.target
    if (answerClick.dataset.correct) {
        document.body.classList.add("correct")
        currentAnswer ++
    }else {
        document.body.classList.add("incorrect")
        

    }

    document.querySelectorAll(".answer").forEach (button => { 
        if(button.dataset.correct) {
            button.classList.add("correct")
        }else {
            button.classList.add("incorrect")
        }
        button.disabled = true

    })
    
    $nextButton.classList.remove('hide')
    currentQuestion++
}

function resetQuestion() {
    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }
    document.body.classList.remove("correct")
    document.body.classList.remove("incorrect")
    $nextButton.classList.add('hide')
   
   

 }

 function finishQuizz() {
    const totalQuestions = Questions.length

    let message = ""

    if (currentAnswer <= 5) {
        message = "Você precisar estudar mais.Tente novamente :(."
    }else if (currentAnswer <= 8) {
        message = "Você foi bem continue melhorando :)."
    }else {
        message = "Você foi exelente! Parabéns!"
    }
    $questionContainer.innerHTML = ` <h3> Você acertou ${currentAnswer} de ${totalQuestions} questões.
    
    ${message}</h3>
    
    <button class="iniciar-quizz" onclick= window.location.reload()>Jogar novamente</button>
    
    
    
    `


 }
 
}


















const Questions = [

    {
        Question : "1) Qual comando exibe uma mensagem no console do navegador?",
        
        Answers : [
            { text: "print()", correct: false },
            { text:  "console.log()", correct: true},
            { text: "alert()", correct: false},
            { text: "prompt()", correct: false}
        ]
    },
    {
        Question : "2) Qual tipo de dado representa um valor verdadeiro ou falso em JavaScript?",
        
        Answers : [
            { text: "String", correct: false },
            { text: "Number", correct: false},
            { text: "Boolean", correct: true},
            { text: "Decimal", correct: false}
        ]
    },
    {
       Question : "3) Qual é a função usada para juntar elementos de um array em uma string?",
       
       Answers : [
            { text: "concat()", correct: false },
            { text: "join()", correct: true},
            { text: "push()", correct: false},
            { text: "pop()", correct: false}
        ]
    },
    {
        Question :"4) Como você declara uma variável em JavaScript?",

        Answers : [
            { text: "var nome = 'João'", correct: true },
            { text: "variable nome = 'João'", correct: false},
            { text: "letvar nome = 'João'", correct: false},
            { text: "constvar nome = 'João'", correct: false}
        ]
    },
    {
        Question : "5) Qual símbolo é usado para atribuir um valor a uma variável em JavaScript?",

        Answers : [

            { text: "=", correct: true },
            { text: "++", correct: false},
            { text: "= =", correct: false},
            { text: "= = =", correct: false}
        ]
    },
    {
        Question : "6) Como você declara uma função em JavaScript?",
        
        Answers : [
            { text: "function nomeDaFuncao() {}", correct: true },
            { text: "let nomeDaFuncao() {}", correct: false},
            { text: "var nomeDaFuncao() {}", correct: false},
            { text: "const nomeDaFuncao() {}", correct: false}
        ]
    },
    {
        Question : "7) Qual é a função usada para verificar se um valor é um número?",
        
        Answers : [
            { text: "isInteger()", correct: false},
            { text: "isFloat()", correct: false},
            { text: "isNaN()", correct: true },
            { text: "isBoolean()", correct: false}
        ]
    },
    {
        Question : "8) Qual é a função usada para concatenar strings em JavaScript?",
        
        Answers : [
            { text: "join()", correct: false},
            { text: "concat()", correct: true },
            { text: "push()", correct: false},
            { text: "pop()", correct: false}
        ]
    },
    {
        Question : "9) Como você declara uma constante em JavaScript?",
        
        Answers : [
            { text: "constant nomeDaConstante = 'João'", correct: false },
            { text: "let nomeDaConstante = 'João'", correct: false},
            { text: "var nomeDaConstante = 'João'", correct: false},
            { text: "const nomeDaConstante = 'João'", correct: true}
        ]
    },
    {
        Question : "10) Qual é a função usada para verificar se um valor é um número inteiro?",
        
        Answers : [
            { text: "isNaN()", correct: false },
            { text: "isInteger()", correct: true},
            { text: "isFloat()", correct: false},
            { text: "isBoolean()", correct: false}
        ]
    }

]

  
