import { coinFlip, coinFlips } from "./modules/coin.mjs";
var argument = process.argv.slice(2);

//how to extract just the number?
if (argument.number > 0) {
    console.log(coinFlips(argument.number));
} else {
    console.log(coinFlip());
}