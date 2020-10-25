# HW4-Web-APIs

The purpose of the homework assignment is to design a coding quiz with intials and high scores, as well as, stored in the DOM.
It wasn't until Thursday that  one of my classmates instructed me to seperate the JS into different pages and just link them together in the HTML. I didn't know when that first started this, and now that I know that it make
it so much easier to tackle and come up with stuff It as just one REALLY long scrpit, so I felt stupid, (well more stupid). But it works...sorta. I mean, the functionality is there, but I couldn't figure out how to stack the choice one top of the other. 
So that kind of annoyed me and I couldn't find anything on Stack Overflow. I must not be asking the question in the right way, but its fine.....its fine. Anyway I hope you get at least a smile from my quiz. ENJOY!

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Coding Quiz</title>

    <link rel="stylesheet" href="./assets/css/styles.css"/>
  </head>

  <body>
    <a href="highscores.html"><button> High Scores</button></a>
    <!-- I googled how to combine a href and a button -- https://stackoverflow.com/questions/3341011/making-a-button-thats-a-link-in-html-->
    <button class="timer">Timer: <span id="time">0</span></button>

    <div class="wrapper">
      <div id="start-screen" class="start">
        <h1>Computer Coding Quiz</h1>
        <p>
          Answer the following questions, IF YOU DARE!
          You have 75 seconds to answer 5 questions. For each question you get wrong, 10 seconds 
          will be deducted. However much time you have left at the end will be your score
        </p>

        <p>Click Start Quiz to begin</p>
        <button id="start">Start Quiz</button>
      </div>

      <div id="questions" class="hide">
        <h2 id="question-title"></h2>
        <div id="choices" class="choices"></div>
      </div>

      <div id="end-screen" class="hide">
        <h1>End of Quiz</h1>
        <p>Your score is <span id="final-score"></span></p>
        <p>
          Enter your initials <input type="text" id="initials"/>
          <button id="submit">Submit</button>
        </p>
      </div>

      <div id="feedback" class="feedback hide"></div>
    </div>

    <script src="./assets/js/questions.js"></script>
    <script src="./assets/js/logic.js"></script>
  </body>
</html>




questions
let questions = [
//I googled "what does html stand for funny acronyms"  
  {
    title: "What does HTML stand for?",
    choices: ["Hats Tickle My Lobotomy", "Haven't Taken My Lithium", "Hypertext Markup Language", "Hey! That Monekey's Luxurious"],
    answer: "Hypertext Markup Language"
  },
//i goggled "what is JavaScrpit wrong answer only"
  {
    title: "What is JavaScrpit?",
    choices: ["a machine that turns coffee into code", "the greatest thing ever invented", "scripting or programming language that allows you to implement complex features on web pages", "a drinking game for computer programmers"],
    answer: "scripting or programming language that allows you to implement complex features on web pages"
  },
  {
    title: "Complete the quote  -- Computers are useless. They only give you _____ " ,
    choices: [
      "headaches",
      "cat videos",
      "anxiety",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "In JavaScrpit, what is a 'for loop' used for?",
    choices: ["cereal", "hula-hoops", "A for loop repeats until a specified condition evaluates to false ", "gymnastics"],
    answer: "A for loop repeats until a specified condition evaluates to false "
  },
  {
    title:
      "Please select the statement that best describes Arrays",
    choices: ["The thing I'm suppose get every year", "light from the sun", "An array is a special variable, which can hold more than one value at a time", "A pirate with a lisp"],
    answer: "An array is a special variable, which can hold more than one value at a time.log"
  }
];

