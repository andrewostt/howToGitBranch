const gerona = (a, b, c) => {
    const p = (1 / 2) * (a + b + c);
    return console.log(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
};