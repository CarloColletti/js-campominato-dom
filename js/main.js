/** 
Consegna
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
 - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
 Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
(ovvero quando ha rivelato tutte le celle che non sono bombe).

Errata corrige: rendere le caselle "non cliccabili" e far finire la partita è un superbonus, non è richiesto dalla consegna!

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.
BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio

Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

SUPERBONUS 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.

SUPERBONUS 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

*/



/****************************************************************
 *                                                              *
 *                      Code on load                            *
 *                                                              *
 ****************************************************************
*/


// collego il bottone per la funzione
const startbuttonElement = document.getElementById('start-game')

// richiamo la funzione per dubug
// createGrid(gridElement)

// aggiungo un evento al click  
startbuttonElement.addEventListener(
    'click',
    function () {
        // prendo la griglia 
        const gridElement = document.getElementById('grid');
        // do una dimensione 
        const dimension = document.getElementById('level');
        // richiamo la funzione
        createGrid(gridElement, dimension.value);
    }

)



/****************************************************************
 *                                                              *
 *                      Function                                *
 *                                                              *
 ****************************************************************
*/


/**
 *
 * @param {*} gridElement elemento del documento in cui inserire div>square
 *  
*/

// funzione genero una grilia
function createGrid(gridElement, dimension) {

    // mi assicuro che la griglia sia vuota
    gridElement.innerHTML = " ";

    // creo un array vuoto che conterra le bombe 
    const bombs = [];
    // crea un numero random da 1 a il numero di caselle 
    for (let i = 0; i < 16; i++) {
        let randomNumber = getRandomNumber(1, dimension);

        // se il numero non è contenuto nel array mettilo altrimenti riprova
        while (bombs.includes(randomNumber)) {
            randomNumber = getRandomNumber(1, dimension)
        }

        // aggiungi il numero all'arry 
        bombs.push(randomNumber);
        console.log(bombs);
    }

    // per 100 volte (numero quadrati all'interno della griglia)
    for (let i = 0; i < dimension; i++) {
        // creo un div per far contenere le classi ecc 
        const squareElement = document.createElement('div');

        // aggiungo la classe square per bordi ecc 
        squareElement.classList.add('square');

        if (dimension == 81) {
            squareElement.classList.add('medium_scuare');
        }
        else if (dimension == 49) {
            squareElement.classList.add('big_scuare');
        }

        // genero varibile che contiene il numero della i 
        const number = i + 1;

        // li metto a schermo
        gridElement.append(squareElement);

        // creo la variabile del punteggio 
        tot = 0;

        // aggiungo la funzione per colorare la casella
        squareElement.addEventListener(
            'click',
            function () {
                // se il numero della casella è lo stesso di una bomba ESPLODI
                if (bombs.includes(number)) {
                    this.classList.add('explode');
                    this.innerHTML = number;
                    alert(`Il gioco è finito hai totalizzato un punteggio di: ${tot} su ${dimension - bombs.length}`);
                } else {
                    // ALTRIMENTI CONTINUI A GIOCARE 
                    this.classList.add('safe');
                    this.innerHTML = number;
                    tot++;
                }

            }

        )


    }
}

/**
 *
 * @param {int} min numero minimo da cui parte il ciclo
 * @param {int} man numero massimo da cui parte il ciclo
 *  
*/

// creo un array di numeri random che saranno le bombe \
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}