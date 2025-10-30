const fromEuroDollar=function(valuelnEuro){
    let valuelnEuro = valuelnEuro *1.07;
    return valuelnEuro;
}

const sum = (a, b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = {
    sum, fromEuroDollar
};