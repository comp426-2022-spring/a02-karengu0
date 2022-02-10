import { coinFlip, coinFlips } from "./modules/coin.mjs";
// const minimist = require('minimist')
var argument = process.argv.slice(2);
//console.log(argument);
if (!argument) {
    console.log(coinFlip());
} else {
    console.log(coinFlips(argument));
}