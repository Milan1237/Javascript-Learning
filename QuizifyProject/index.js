const dataset = {
    data: [{
            question: `What is the output of the following JavaScript code?
                'console.log(typeof null);'`,
            options: {
                a: 'Object',
                b: 'Null',
                c: 'Number',
                d: 'Undefined'
            },
            correctAnswer: 'a'
        },
        {
            question: `What is the result of 2 + '2' in JavaScript?`,
            options: {
                a: '4',
                b: '"22"',
                c: 'NaN',
                d: 'undefined'
            },
            correctAnswer: 'b'
        },
        {
            question: `Which of the following is a JavaScript data type?`,
            options: {
                a: 'Float',
                b: 'Boolean',
                c: 'Character',
                d: 'Double'
            },
            correctAnswer: 'b'
        },
        {
            question: `Which method is used to add an element to the end of an array?`,
            options: {
                a: 'push()',
                b: 'pop()',
                c: 'shift()',
                d: 'unshift()'
            },
            correctAnswer: 'a'
        },
        {
            question: `How do you declare a JavaScript variable?`,
            options: {
                a: 'var myVar;',
                b: 'v myVar;',
                c: 'variable myVar;',
                d: 'let variable myVar;'
            },
            correctAnswer: 'a'
        },
        {
            question: `What will the following code return: Boolean(10 > 9)?`,
            options: {
                a: 'true',
                b: 'false',
                c: 'undefined',
                d: 'null'
            },
            correctAnswer: 'a'
        },
        {
            question: `What does '=== ' mean in JavaScript?`,
            options: {
                a: 'Equals',
                b: 'Strict equality',
                c: 'Assignment',
                d: 'Comparison without type conversion'
            },
            correctAnswer: 'b'
        },
        {
            question: `Which of the following is NOT a JavaScript framework?`,
            options: {
                a: 'React',
                b: 'Angular',
                c: 'Vue',
                d: 'Django'
            },
            correctAnswer: 'd'
        },
        {
            question: `Which of the following is a looping structure in JavaScript?`,
            options: {
                a: 'if...else',
                b: 'for',
                c: 'switch',
                d: 'let'
            },
            correctAnswer: 'b'
        },
        {
            question: `How do you write a comment in JavaScript?`,
            options: {
                a: `<!-- This is a comment -->`,
                b: `// This is a comment`,
                c: `/* This is a comment */`,
                d: `'This is a comment'`
            },
            correctAnswer: 'b'
        }
    ]
};
//global values
let questionIndex = 0 ; //current question index
let userName = ""; //current user name
let score = 0 ; //current user score

//accessing the needed node from the existing html
const quizBox = document.querySelector(".quiz");
const playButton = document.getElementById("play");

//creating html element and setting attributes which are common
const question = document.createElement("p");
question.classList.add("question");



//this function creates options dynamically
const optionCreation = (options)=>{
    
    const form = document.createElement("form");
    form.setAttribute("action", "#");
    for (let value in options) {
        
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'q1');
        input.setAttribute('value', options[value]);
        label.innerText = options[value];
        label.appendChild(input);
        form.appendChild(label);
    }
    return form ;
}

const questionAppend = (questionIndex) => {
    quizBox.innerHTML = "";
    const questData = dataset.data[questionIndex];
    question.innerText = questData.question;
    const optionForm = optionCreation(questData.options)
    quizBox.appendChild(question);
    quizBox.appendChild(optionForm);
}
//when user start playing
const play = () => {
    //hides the play screen and update the userName

    userName = document.getElementById("nameBox").value;
    if (userName !== "") {
        document.querySelector(".userName").setAttribute("style", "display:none");
        questionAppend(0);//0 is because player is playing for the first time
    }
}
playButton.addEventListener('click', play);

const checkAnswer = (question , userInput)=> 
    question.options[question.correctAnswer] == userInput ? true : false ;

function nextQuestion(){
    let value = "";
    if(questionIndex < dataset.data.length -1){
        if(document.querySelector("input[name=q1]:checked")){
           
           value =  document.querySelector("input[name=q1]:checked").value ;
            console.log(value);
            let result = checkAnswer(dataset.data[questionIndex] , value );
            result && score++ ;
            questionIndex++ ;
            questionAppend(questionIndex);
        }else{
            alert("please select at least one option");
        }
    }
    else{
        quizBox.innerHTML = `<p>Congratulation ${userName} You have completed the quiz and you have scored ${score} out of 10</p>  `
    }
}
//continueing the game until 10

document.getElementById('nextButton').addEventListener('click',nextQuestion);