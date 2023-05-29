
const target = document.querySelector<HTMLDivElement>('.target');
creForm1();
// target.classList.add('container', 'rounded');


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
    target.style.width = '500px';

    target.style.backgroundColor = '#F8E8EE';

    target.innerHTML = cardform1;
    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {

        const verifier = document.querySelector<HTMLInputElement>('#r1').checked;
        if (verifier) {
            creForm2();
        }
        else {
            alert('CHOISIR LA BONNE REPONSE');
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
    // form1.innerHTML = cardform;
    target.style.width = '500px';

    target.style.backgroundColor = '#F8E8EE';

    target.innerHTML = cardform2;
    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {
        const verifier = document.querySelector<HTMLInputElement>('#r2');
        if (verifier.checked) {
            creForm3();
        }
        else {
            alert('CHOISIR LA BONNE REPONSE');
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
    // form1.innerHTML = cardform;
    target.style.width = '500px';

    target.style.backgroundColor = '#F8E8EE';
    target.innerHTML = cardform3;
    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {
        const verifier = document.querySelector<HTMLInputElement>('#r3');
        if (verifier.checked) {
            creForm4();
        }
        else {
            alert('CHOISIR LA BONNE REPONSE');
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
    // form1.innerHTML = cardform;
    target.style.width = '500px';

    target.style.backgroundColor = '#F8E8EE';
    target.innerHTML = cardform4;
    let btt = document.querySelector('#test');
    btt.addEventListener('click', () => {
        const verifier = document.querySelector<HTMLInputElement>('#r2').checked;
        if (verifier) {
            final();
        }
        else {
            alert('CHOISIR LA BONNE REPONSE');
        }
    })
}


function final() {
    // const divf = document.createElement('div');
    target.style.backgroundColor = '#F8E8EE';
    target.style.width = '500px';
    target.innerHTML = "Bravo vous avez reussir votre note est 100";


    const formf = document.createElement('form');
    let x = 'Merci pour votre participation';
    let y = 'vous avez un bon niveau et votre note est 100';
    let but = 'finir'
    let butf = 'Refaire le QCM';

    let cardformf = `
    <div class="container m-auto">
    <h4>${x}</h4>
    <p>${y}</p>
    <button class="btn btn-primary" id="test">${but}</button>
    <button class="btn btn-primary" id="testf">${butf}</button>
</div>
    `;
    // form1.innerHTML = cardform;
    target.innerHTML = cardformf;
    let btt = document.querySelector('#test');
    let bttf = document.querySelector('#testf');

    btt.addEventListener('click', () => {

        target.innerHTML = 'Au Revoir';
    })
    bttf.addEventListener('click', () => {
        creForm1();

    })
}