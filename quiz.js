
let pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;// pos is position of the test question

// this is a multidimensional array
let questions = [
  {
      question: "Which language runs in a web browser?",
      a: "java",
      b: "c",
      c: "pythone",
      d: "javascript",
      answer: "D"
    },
  {
      question: "What does css stand for?",
      a: "central style sheets",
      b: "cascading style sheets",
      c: "cascading simple sheets",
      d:"cars suvs sailboats",
      answer: "B"
    },
  {
      question: "What does html stands for?",
      a: "Hypertext markup language",
      b: "Hypertext markdon language",
      c: "Hyperloop machine language",
      d: "Helicopters terminals motorboats lambrogini",
      answer: "A"
    },
  {
      question: "What year javascript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      answer: "B"
    }
  ];

function get(x){ return document.getElementById(x);}  // this get function is short for the getElementById function


 // this function renders a question for display on the page
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";// show the result of quiz
    pos = 0;  // resets the variable to allow users to restart the test
    correct = 0;  // stops rest of renderQuestion function running when test is completed
    return false;
  }

  
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;

  test.innerHTML = "<h3>"+question+"</h3>"; // display the question

  // display the answer options
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chD+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>"; // display the submit button
}

function checkAnswer(){                               //to check the Array we define a loop
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos].answer){
    correct++;
  }
  pos++;
  renderQuestion();
}

window.addEventListener("load", renderQuestion); // Add event listener to call renderQuestion on page load event

type="text/javascript">
            function refreshPage() {
                if (confirm("Are you sure, want to refresh?")) {
                    location.reload();
                }
            }