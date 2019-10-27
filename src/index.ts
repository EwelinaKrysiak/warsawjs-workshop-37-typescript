import isLetter from "is-letter";

type A = Array<string> | null;

export function p1(a: A ): string {

    if (a) {
        return a.map((x) => `(${x})`).join(' ');
    }
    return '';
}