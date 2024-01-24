const timerDuration = 30; // Durée du timer en secondes
let timerInterval; // Déclarer la variable en dehors de la fonction pour la rendre accessible à l'ensemble du script

const target = document.querySelector<HTMLDivElement>('.target');
creForm1();

// timer 
function afficherTimer(secondeRestante, callback) {
    const timerElement = document.createElement('div');
    timerElement.innerHTML = `Temps restant : ${secondeRestante}s`;
    target.appendChild(timerElement);

    timerInterval = setInterval(() => {
        secondeRestante--;
        timerElement.innerHTML = `Temps restant : ${secondeRestante}s`;

        if (secondeRestante <= 0) {
            clearInterval(timerInterval);
            callback();
        }
    }, 1000);
}




function creForm1() {
    const form1 = document.createElement('form');
    let x = 'Question n°1 :';
    let y = 'Quels éléments sont nécessaires pour créer une liste non-ordonnée ?';
    let reponch1 = '1. ul et li';
    let reponch2 = '2. ol et li';
    let reponch3 = '3. ul et ol';
    let but = 'Repondre';
    let cardform1 = `
    <div class="container m-auto" >
    <h4>${x}</h4>
    <p>${y}</p>
    <input type="radio" id="r1" name="rr">
    <label for="r1">${reponch1}</label><br>
    
    <input type="radio" id="r2" name="rr">
    <label for="r2">${reponch2}</label><br>
    
    <input type="radio" id="r3" name="rr">
    <label for="r3">${reponch3}</label><br><br>
    
    <button class="btn btn-primary" id="test">${but}</button>
</div>
    `;
    target.style.backgroundColor = '#F8E8EE';
    target.innerHTML = cardform1;
    afficherTimer(timerDuration, creForm2);
    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {

        const verifier = document.querySelector<HTMLInputElement>('#r1').checked;
        if (verifier) {
            clearInterval(timerInterval);
            creForm2();
        }
        else {
            alert("Veuillez choisir la bonne réponse pour passer à la question suivante.");
        }
    })
}



function creForm2() {

    const form2 = document.createElement('form');
    let x = 'Question n°2 :';
    let y = 'Le rôle du HTML est de...';
    let reponch1 = '1. Mettre en forme du texte';
    let reponch2 = '2. Ordonner du contenu';
    let reponch3 = '3. Créer des sites e-commerce';
    let but = 'Repondre';

    let cardform2 = `
    <div class="container m-auto">
    <h4>${x}</h4>
    <p>${y}</p>
    <input type="radio" id="r1" name="rr">
    <label for="r1">${reponch1}</label><br>
    
    <input type="radio" id="r2" name="rr">
    <label for="r2">${reponch2}</label><br>
    
    <input type="radio" id="r3" name="rr">
    <label for="r3">${reponch3}</label><br>
    
    <button class="btn btn-primary" id="test">${but}</button>
</div>
    `;


    target.style.backgroundColor = '#F8E8EE';

    target.innerHTML = cardform2;
    afficherTimer(timerDuration, creForm3);

    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {
        const verifier = document.querySelector<HTMLInputElement>('#r2');
        if (verifier.checked) {
            clearInterval(timerInterval);

            creForm3();
        }
        else {
            alert("Veuillez choisir la bonne réponse pour passer à la question suivante.");
        }
    })
}

function creForm3() {

    const form3 = document.createElement('form');
    let x = 'Question n°3 :';
    let y = 'Pour définir un titre DANS une page HTML, on utilise...';
    let reponch1 = '1. L\'élément title';
    let reponch2 = '2. L\'élément head';
    let reponch3 = '3. Un élément h1, h2, ... h6';
    let but = 'Repondre';

    let cardform3 = `
    <div class="container m-auto">
    <h4>${x}</h4>
    <p>${y}</p>
    <input type="radio" id="r1" name="rr">
    <label for="r1">${reponch1}</label><br>
    
    <input type="radio" id="r2" name="rr">
    <label for="r2">${reponch2}</label><br>
    
    <input type="radio" id="r3" name="rr">
    <label for="r3">${reponch3}</label><br>
    
    <button class="btn btn-primary" id="test">${but}</button>
    </div>

    `;

    target.style.backgroundColor = '#F8E8EE';
    target.innerHTML = cardform3;
    afficherTimer(timerDuration, creForm3);

    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {
        const verifier = document.querySelector<HTMLInputElement>('#r3');
        if (verifier.checked) {
            clearInterval(timerInterval);

            creForm4();
        }
        else {
            alert("Veuillez choisir la bonne réponse pour passer à la question suivante.");
        }
    })
}


function creForm4() {

    const form4 = document.createElement('form');
    let x = 'Question n°4 :';
    let y = 'Lorsque vous utilisez l\'élément a, vous devez obligatoirement préciser...';
    let reponch1 = '1. Un attribut target';
    let reponch2 = '2. Un attribut href';
    let reponch3 = '3. Deux attributs href et target';
    let but = 'Repondre';

    let cardform4 = `
    <div class="container m-auto">
    <h4>${x}</h4>
    <p>${y}</p>
    <input type="radio" id="r1" name="rr">
    <label for="r1">${reponch1}</label><br>
    
    <input type="radio" id="r2" name="rr">
    <label for="r2">${reponch2}</label><br>
    
    <input type="radio" id="r3" name="rr">
    <label for="r3">${reponch3}</label><br>
    
    <button class="btn btn-primary" id="test">${but}</button>
</div>
    `;

    target.style.backgroundColor = '#F8E8EE';
    target.innerHTML = cardform4;
        afficherTimer(timerDuration, final);

    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {
        const verifier = document.querySelector<HTMLInputElement>('#r2').checked;
        if (verifier) {
            clearInterval(timerInterval);

            final();
        }
        else {
            alert("Veuillez choisir la bonne réponse pour passer à la question suivante.");
        }
    })
}



function afficherLeaderboard() {
   
    // Create leaderboard container
    const leaderboardElement = document.createElement('div');
    leaderboardElement.innerHTML = '<h5>Leaderboard</h5>';

    leaderboardElement.innerHTML += `<p class="text-end">Perfect Score: 100/100 </p>`;

    // Append the leaderboard container to the target
    target.appendChild(leaderboardElement);
}





function final() {
    
    target.style.backgroundColor = '#F8E8EE';
    const formf = document.createElement('form');
    let x = 'Merci pour votre participation';
    let butf = 'Refaire le QCM';

    let cardformf = `
    <div class="container m-auto">
    <h5 class="shadow p-3 mb-5">${x}</h5>
    
    <div class="alert alert-success" role="alert">
        Bravo, vous avez réussi !
    </div>
    <button class="btn btn-primary mb-2" id="testf">${butf}</button>
</div>
    `;
    
    target.innerHTML = cardformf;

   
    let bttf = document.querySelector('#testf');

    bttf.addEventListener('click', () => {

        creForm1();

    })

    // Display leaderboard
    afficherLeaderboard();

}