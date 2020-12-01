'use strict';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    //         Arrondi    random 0 - 1     definition de l'intervalle min inclus max exclu
}


function generateQuote(event) {
    event.preventDefault();

    const newQuote = quotes[getRandomInt(0, 10)];
    fact.textContent = newQuote;

    const newColor = `rgb(${getRandomInt(50, 256)}, ${getRandomInt(50, 256)}, ${getRandomInt(50, 256)})`; //pas en dessous de 50 sinon full blanc c'est illisible
    console.log(newColor);
    for (let i = 0; i < coloredNodes.length; i++) {
        coloredNodes[i].style.color = newColor;
    }
    for (let i = 0; i < coloredNodes.length; i++) {
        backcoloredNodes[i].style.backgroundColor = newColor;
    }

    //backcoloredNodes.style.color = newColor;
}

const fact = document.querySelector('.fact');
const coloredNodes = document.querySelectorAll('.color');
const backcoloredNodes = document.querySelectorAll('.background-color');
const newQuote = document.querySelector('.newQuote');
const quotes = ["Quand Chuck Norris fait l'épreuve des araignées dans Fort Boyard, elles sortent elles-mêmes les petits papiers et lisent à voix haute.", "Chuck Norris peut faire des ronds avec une equerre", "Chuck Norris peut écrire un traitement de texte avec la souris.", "Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris", "Chuck norris se souvient très bien de son futur", "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.", "Google, c'est le seul endroit où tu peux taper Chuck Norris...", "Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris.", "Chuck Norris donne fréquemment du sang à la Croix-Rouge. Mais jamais le sien.", "Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon."];
newQuote.addEventListener('click', generateQuote);