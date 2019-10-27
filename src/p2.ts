import isLetter from 'is-letter';

type A = Array<string> | null;

function p2(a: A | null): string {
    //[1,2,10] =>{(1), (2), (10)]
    if (a) {
        return a.filter(isLetter).map((x) => `(${x})`).join(' ');
    }
    return '';
}

console.log(p2(['abc', 'x', 'y', 'def', 'Z']))