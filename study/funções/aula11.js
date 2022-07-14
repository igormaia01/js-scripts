function* geradora1() {
    // código qualquer...
    yield 1;
    // código qualquer...
    yield 2;
    // código qualquer...
    yield 3;
}

const g1=geradora1();

for (let i of g1) {
    console.log(i);
}


function* geradora2() {
    yield* geradora1();
    yield 4;
    yield 5;
}

const g2 = geradora2();

for (let i of g2) {
    console.log(i);
}