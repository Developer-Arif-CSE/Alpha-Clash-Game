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
    showElementById('play-ground-section')
    continueGame()
}