
const target = document.querySelector<HTMLDivElement>('.target');
target.addEventListener('click', (event) => {
    creForm1();

})

function creForm1() {
    const form1 = document.createElement('form');
    let x = 'Question n°1 :';
    let y = 'Quels éléments sont nécessaires pour créer une liste non-ordonnée ?';
    let reponch1 = '1. ul et li';
    let reponch2 = '2. ol et li';
    let reponch3 = '3. ul et ol';
    let but = 'Repondre';

    let cardform1 = `
    <div class="container m-auto">
    <h4>${x}</h4>
    <p>${y}</p>
    <input type="radio" id="r1" >
    <label for="r1">${reponch1}</label><br>
    
    <input type="radio" id="r2" >
    <label for="r2">${reponch2}</label><br>
    
    <input type="radio" id="r3" >
    <label for="r3">${reponch3}</label><br><br>
    
    <button class="btn btn-primary" id="test">${but}</button>
</div>
    `;
    // form1.innerHTML = cardform;
    target.innerHTML = cardform1;
    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {

        const verifier = document.getElementById('r1')
        if (verifier.ariaChecked) {
            creForm2();
        }
        else {
            alert('choisir la bon reponse');
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
    <input type="radio" id="r1">
    <label for="r1">${reponch1}</label><br>
    
    <input type="radio" id="r2">
    <label for="r2">${reponch2}</label><br>
    
    <input type="radio" id="r3">
    <label for="r3">${reponch3}</label><br>
    
    <button class="btn btn-primary" id="test">${but}</button>
</div>
    `;
    // form1.innerHTML = cardform;
    target.innerHTML = cardform2;
    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {
        const verifier = document.querySelector('input#r2')
        if (verifier) {
            creForm3();
        }
        else {
            alert('choisir la bon reponse');
        }
    })
}

function creForm3() {
    const form3 = document.createElement('form');
    let x = 'Question n°3 : :';
    let y = 'Pour définir un titre DANS une page HTML, on utilise...';
    let reponch1 = '1. L\'élément title';
    let reponch2 = '2. L\'élément head';
    let reponch3 = '3. Un élément h1, h2, ... h6';
    let but = 'Repondre';

    let cardform3 = `
    <div class="container m-auto">
    <h4>${x}</h4>
    <p>${y}</p>
    <input type="radio" id="r1">
    <label for="r1">${reponch1}</label><br>
    
    <input type="radio" id="r2">
    <label for="r2">${reponch2}</label><br>
    
    <input type="radio" id="r3">
    <label for="r3">${reponch3}</label><br>
    
    <button class="btn btn-primary" id="test">${but}</button>
    </div>

    `;
    // form1.innerHTML = cardform;
    target.innerHTML = cardform3;
    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {
        const verifier = document.querySelector('input#r3')
        if (verifier) {
            creForm4();
        }
        else {
            alert('choisir la bon reponse');
        }
    })
}


function creForm4() {
    const form4 = document.createElement('form');
    let x = 'Question n°4 :';
    let y = 'Lorsque vous utilisez l'élément a, vous devez obligatoirement préciser...';
    let reponch1 = '1. Un attribut target';
    let reponch2 = '2. Un attribut href';
    let reponch3 = '3. Deux attributs href et target';
    let but = 'Repondre';

    let cardform4 = `
    <div class="container m-auto">
    <h4>${x}</h4>
    <p>${y}</p>
    <input type="radio" id="r1">
    <label for="r1">${reponch1}</label><br>
    
    <input type="radio" id="r2">
    <label for="r2">${reponch2}</label><br>
    
    <input type="radio" id="r3">
    <label for="r3">${reponch3}</label><br>
    
    <button class="btn btn-primary" id="test">${but}</button>
</div>
    `;
    // form1.innerHTML = cardform;
    target.innerHTML = cardform4;
    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {
        const verifier = document.querySelector('input#r2')
        if (verifier) {
            final();
        }
        else {
            alert('Choisir la bonne reponse');
        }
    })
}


function final() {
    target.innerHTML = 'Bravo vous avez reussir'
}