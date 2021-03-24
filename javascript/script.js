//----------
// Variables
//----------

// gameArea: Grab HTML containing element (id)
const gameArea = document.querySelector('#game-area')

// fundation: Grab HTML element first bloc (fundation) (by id)
const fundation = document.querySelector('#fundation')

let currentScore = 0
let highscore = 0
const highscores = []
/*
Array of objects:
- playerName: John Doe
- score: 1234
*/

let speed = 1

const blocHeight = fundation.style.height

let isStarted = false

//----------
// Functions
//----------

// Function = "blocAnimation" -- joris
/*  animation lunched => event.listener(click) => stop animation
using js   define status of bloc (isMooving:true/false) then switch true/false by event.click
            
            
 */


// Function resizeBloc : resize the current element / bloc (div) || or loose ??? --Do -

const resizeCurrentElement = () => {
  //Select the current bloc : getElement
  const currentElement = document.querySelector(".block:last-of-type")
  const leftMovingBlock = currentElement.getBoundingClientRect().x
  const rightMovingBlock = currentElement.getBoundingClientRect().right 

  //Select the previous bloc : ~ node.previousSibling 
  const previousElement = currentElement.previousSibling // ou document.queryS
  const leftFixedBlock = previousElement.getBoundingClientRect().x
  const rightFixedBlock = previousElement.getBoundingClientRect().right
  
    // if we are here it means that both bloc are not equal
    if (leftMovingBlock ==! leftFixedBlock){
      if (leftFixedBlock < leftMovingBlock && leftMovingBlock < rightFixedBlock){  //if x is between [ab]
          rightMovingBlock === rightFixedBlock    
          const resizedWidth = previousElement.width - (rightMovingBlock - rightFixedBlock)                                 //so, y = b
        }
        else if (leftFixedBlock < rightMovingBlock && rightMovingBlock < rightFixedBlock){   //if y is between [ab]
          leftMovingBlock === leftFixedBlock 
          const resizedWidth = previousElement.width - (leftMovingBlock - leftFixedBlock)                                        //so, x = a 
        }  
    // set the new size to the element
    currentElement.width = resizedWidth    
}


// createElement Function to create and position a new element / bloc (div) --Ed
function createElement() {
  // 1) create element: document.createElement("div")
  const newElement = document.createElement('div')
  // 2) Set width from previous bloc, height and (negative?) margin
  newElement.style.width = `${fundation.style.width}px`
  newElement.style.height = `${fundation.style.height}px`
  newElement.style.marginLeft = `${100 + currentScore}px`
  // 3) Set color: hsl, hue + 10
  newElement.style.background = `hsl(${0 + 10 * currentScore}, 50%, 50%)`
  // 4) append child element to the container (gameArea): appendChild
  gameArea.appendChild(newElement)
}

/** Function blocAnimation 
- to add / create animation (css) for the new element / bloc (div) --Solene
change class + JS (toggle?)
set speed +1
*/

// Function = "countScore" (and sets highscore if score > highscore) && save it to localStorage --joris
/* score = (nombre de <div> crée par function create new element) save the score at the end of game
  highscore = best loaded score in local storage by user

 */

// function startGame
/** Function to restart the game : delete all blocs --Solene
 when bloc = 0 (ie if click when moving bloc is outside of area previous fixed bloc)
  querySelectorAll(div) + function remove div (movingbloc.remove()?) so that only fixed bloc stays 
+ reset score to 0
*/

// fetchHighscore Fetch highscores from localStorage and assign them to variable highscore --Ed
function fetchHighscore() {
  // 1) fetch the data : localStorage.getItem('highscores')
  // 2) parse it : JSON.parse
  const locSto = JSON.parse(localStorage.getItem('highscore'))
  // Sort by highscore
  locSto.sort((a, b) => b.score - a.score)
  // 3) Assign it to highscores
  highscore = locSto[0].score
}

//----------------
// Event Listeners
//----------------

// Create an event listener to start the game && 'drop' the bloc && restart the game
// on click, spacebar, tap event -- Do


/* 
Start the game: 
When start button is clicked, call the createElement function
When spacebar is pressed, call the createElement function

Drop the bloc : 
When user click, call the drop function
When spacebar is pressed, call the drop function

Restart the game
When user click, go back to the initial game 
When spacebar, go back to the initial game
*/
