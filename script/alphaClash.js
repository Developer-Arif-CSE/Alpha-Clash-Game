// function play(){
// //    Step 1: hidden the home Screen.To hide the screen we have to add a class in our home section

// const homeSection=document.getElementById('home-section')
// // console.log(homeSection.classList)
// homeSection.classList.add('hidden')

// // Step 2: Show the play ground
//  const playGroundSection=document.getElementById('play-ground-section')
// //  console.log(playGroundSection.classList)
//  playGroundSection.classList.remove('hidden')
// }

// call back the function
function handleKeyBUttonPress(event){
    const playerPressed=event.key;
    
// stop the game
   if(playerPressed == 'Escape'){
    gameOver();
   }


    //    get the expected press
       const currentAlphabetElement=document.getElementById('current-alphabet')
            const currentAlphabet=currentAlphabetElement.innerText;
               const expectedAlphabet=currentAlphabet.toLowerCase();
                //   checked math or not
                   if(playerPressed==expectedAlphabet){
                    //  console.log('pressed math')
                    //  start a new round
                    // step 1 get the new score
                    //     const currentScoreElement=document.getElementById('current-score')
                    //         const currentScoreText=currentScoreElement.innerText;
                    //             const currentScore=parseInt(currentScoreText)
                    //                console.log(currentScore)
                    // // step 2 update the score now
                    // const newScore=currentScore + 1;

                    // // step 3 show the score
                    // currentScoreElement.innerText=newScore;



                    const currentScore=getElementTextValueById('current-score')
                    const updatedScore=currentScore + 1;
                    setElementTExtVAlueById('current-score',updatedScore)

                    removeBackgroundById(expectedAlphabet)
                    continueGame()
                   }
                   else{
                    // console.log('pressed do not match')

                    //  //step 1: get the current life count
                    //  const currentLifeElement=document.getElementById('current-life')
                    //  const currentLifeText=currentLifeElement.innerText;
                    //  const currentLIfe=parseInt(currentLifeText)
                     
                    // //  step 2: update the current life count
                         
                    // const newLife= currentLIfe - 1;

                    // // step 3: show the life count

                    // currentLifeElement.innerText=newLife

                    const currentLife=getElementTextValueById('current-life')
                    const updatedLife= currentLife - 1;
                    setElementTExtVAlueById('current-life',updatedLife)

                    if(updatedLife == 0){
                        gameOver();
                    }
                   }

}

// capture key press
document.addEventListener('keyup',handleKeyBUttonPress)


function continueGame(){
    // random element gulake call kora hoiche
   const alphabet=getRandomElement();
   
   //display te current alphabet guloke show kora hoiche    
   const currentAlphabetShow=document.getElementById('current-alphabet')
   currentAlphabetShow.innerText=alphabet;

   //    set  background color
   setLightInBgById(alphabet);
}

function play(){
    hideElementById('home-section')
    hideElementById('final-score')
    showElementById('play-ground-section')

    setElementTExtVAlueById('current-life',5) 
    setElementTExtVAlueById('current-score',0)

    continueGame()
}

function gameOver(){
   hideElementById('play-ground-section')
   showElementById('final-score')
//    update final score
// 1get the current score
  const lastSCore=getElementTextValueById('current-score')
//   console.log(lastSCore);
  setElementTExtVAlueById('game-score',lastSCore)

//   clear the last selected alphabet hide

const currentAlphabet=getTextElementByID('current-alphabet')
// console.log(currentAlphabet)
removeBackgroundById(currentAlphabet);
}