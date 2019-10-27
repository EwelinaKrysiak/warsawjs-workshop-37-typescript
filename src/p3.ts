import isLetter from 'is-letter';
import {MarkRequired, StrictOmit} from "ts-essentials";

type A = Array<string> | null;
type B = {
    a: A,
    x: number,
}
type C = {
    a: A,
    x?: number,
}

type CR = MarkRequired<C, 'x'>

type D = StrictOmit<B, 'x'>;

const b: B = {
    a: ['abc', 'x', 'y', 'def', 'Z'],
    x: 2,
};

const c: C = {
    a: ['abc', 'x', 'y', 'def', 'Z'],
    x: 2,
};

const d: D={
    a: ['abc', 'x', 'y', 'def', 'Z'],
};

const cr: CR = {
    a: ['abc', 'x', 'y', 'def', 'Z'],
    x: 3,
};


function p3(b: B): string {
    //[1,2,10] =>{(1), (2), (10)]
    if (b.a) {
        return b.a.filter(isLetter)
            .map((x) => `(${x})`)
            .slice( 0, b.x )
            .join(' ');
    }
    return '';
}

console.log(p3(b));
console.log(p3({a: null, x:1}));