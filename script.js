//Product Analysis

const prices = [120, 450, 80, 999, 250, 1500, 60, 700];

const exclusive = prices.forEach((highPrice) => {

    hp = highPrice > 500  

    if(hp) {
        evenOdd = highPrice % 2 === 0 ? "even" : "odd"

        console.log(`${highPrice}, - Expensive - ${evenOdd}`)
    } else {
         console.log(highPrice, "- Affordable")
    }
    
})



const totalExclusive = prices.filter((highPrice) => highPrice >= 500)
const totalAffordable = prices.filter((lowPrice) => lowPrice < 500)

let highestPrice = 0;

prices.forEach((price) => {
    if (price > highestPrice) {
        highestPrice = price;
    }
});

const te = totalExclusive.length
const ta = totalAffordable.length

console.log("total exclusive:", te)
console.log("total affordable:", ta)
console.log("Highest Price: ", highestPrice)
