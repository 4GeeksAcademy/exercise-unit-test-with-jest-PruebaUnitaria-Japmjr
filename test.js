const {sum} = require (`./app.js`)

test (`adds 14 + 9 to equal 23`, () => {
    let total = sum (14,9);

    expect(total).toBe(23)
})

test ("One euro should be 1.07 dollar", function(){
const {fromEuroDollar}= require(`./app.js`);

const dollars = fromEuroDollar(3.5);

expect (fromEuroDollar(3.5)).toBe(3.745);
})

test ("One euro should be 156.5 yenes", function(){
const {fromEuroYenes}= require(`./app.js`);

const yenes = fromEuroYenes(1);

expect (fromEuroYenes(1)).toBe(156.5);
})


test ("One euro should be 0.87 pound", function(){
const {fromEuroPound}= require(`./app.js`);

const pound = fromEuroPound(1);

expect (fromEuroPound(1)).toBe(0.87);
})

