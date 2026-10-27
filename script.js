
let somma = 0;
let conteggio = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        somma += i;
        conteggio++;
    }
}

let media = somma / conteggio;
console.log('La media dei dispari è:', media);
