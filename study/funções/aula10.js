function recursiva(max) {
    if (max == 0) {
        return 0;
    } else {
        console.log(max);
        recursiva(max - 1);
    }
}

recursiva(10);