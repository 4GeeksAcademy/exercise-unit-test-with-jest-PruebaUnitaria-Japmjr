const fromEuroDollar=function(valueInEuro){
    let valueInDollar = valueInEuro *1.07;
    return valueInDollar;
}

const fromEuroYenes=function(valueInEuro){
    let valueInYenes = valueInEuro *156.5;
    return valueInYenes;
}
const fromEuroPound=function(valueInEuro){
    let valueInPound = valueInEuro *0.87;
    return valueInPound;
}

const sum = (a, b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = {
    sum, fromEuroDollar, fromEuroYenes, fromEuroPound
};