/** 
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.


Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio
Di cosa ho bisogno per generare i numeri ?
    Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Aggiungo uno screen senza e con bonus, ma potete realizzare la parte grafica a vostro gusto(dopo aver finito la parte logica!)

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

        // aggiungo la funzione per colorare la casella
        squareElement.addEventListener(
            'click',
            function () {
                this.classList.toggle('active');
                console.log(number);
            }
        )
        // li metto a schermo
        gridElement.append(squareElement);

        // aggiungo il numero a square 
        squareElement.append(number);

    }
}