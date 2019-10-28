interface X {
    plus5(x: number): number;
}
declare class Y implements X {
    minus5(x: number): number;
    plus5(x: number): number;
}
declare const o: Y;
declare function ff(x: X): void;
