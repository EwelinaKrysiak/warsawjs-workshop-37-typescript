;
class Y {
    minus5(x) {
        return x - 5;
    }
    plus5(x) {
        return x + 5;
    }
}
const o = new Y();
function ff(x) {
    console.log(x.plus5(10));
}
;
ff(o);
