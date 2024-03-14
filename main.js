// const form = document.querySelector('forma');
// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#result');

//     if(height === '' || height <= 0 || isNaN(height)){
//         results.innerHTML = `Please give a valid height `;
//     } else if (weight === '' || weight <= 0 || isNaN(weight)){
//         results.innerHTML = `Please give a valid weight `;
//     } else {
//         const bmi = (weight / ((height * height) / 10000 )).toFixed(2)

//         results.innerHTML = `<span> ${bmi} </span>`;
//     }
// })

const fo = document.querySelector('form');
fo.addEventListener('submit', function(r){
    r.preventDefault();

    const he = parseInt(Document.querySelector('#he').value)
    const we = parseInt(Document.querySelector('#we').value)
    const re = parseInt(Document.querySelector('#re'))

    if (he === '' || he <= 0 || isNaN(he)){
        re.innerHTML = `Plese give a valid height!`;
    }
    if (we === '' || we <= 0 || isNaN(we)){
        re.innerHTML = `Plese give a valid weight!`;
    }
    else {
        const bmi = (we / ((he * he) / 10000)).toFixed(2);
        re.innerHTML = `<span>${bmi}</span>`;
    }
})
