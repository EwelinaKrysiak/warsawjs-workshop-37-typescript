function p1(a: Array<number>| null ){
    //[1,2,10] =>{(1), (2), (10)]

    if(a){
        return a.map((x) => `(${x})`).join (' ')
    } else {
        a;
    }

}

console.log(p1([1, 20, 10]));
console.log(p1([1])); //próba wywołania niewłaściwych paarametrów
// console.log(p1(undefined))// jesli w tsconfig będzie wykomentowany strict - przyjmnie null i undefined
