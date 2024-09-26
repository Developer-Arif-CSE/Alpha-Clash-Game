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