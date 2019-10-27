import isNotLetter from 'is-not-letter';


const x ='abc';

function plus5 (a: number) {
    return a + 5;
}
console.log(`${x}: ${isNotLetter(x) + 10}`);

console.log (plus5(isNotLetter(x)));

const y = isNotLetter(x);
