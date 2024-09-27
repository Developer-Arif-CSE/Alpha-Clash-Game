function hideElementById(eleMentId){
    const element=document.getElementById(eleMentId)
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden')
}


function setLightInBgById(elementID){
    const element=document.getElementById(elementID)
    element.classList.add('bg-orange-400')

}
function removeBackgroundById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}
function getRandomElement(){

    // alphabet string theke alada alada index ber kora split diye
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');

    // random er sathe gun diye joto index lage toto index porjonto generate kora jay
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);

    // split kora alphabet gulan random index diye pass kore deya
    const alphabet=alphabets[index];
    return alphabet;
}


function getElementTextValueById(elementId){
     const element=document.getElementById(elementId)
        const elementValueText=element.innerText;
           const value=parseInt(elementValueText)
              return value;
}


function setElementTExtVAlueById(elementId,value){
    const element=document.getElementById(elementId)
        element.innerText=value;
}


function getTextElementByID(elementId){
    const element=document.getElementById(elementId)
      const text=element.innerText;
        return text;
}