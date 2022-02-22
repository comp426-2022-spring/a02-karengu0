import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const minimist = require('minimist')
var argument = minimist(process.argv.slice(2));

//how to extract just the number?
if (argument.number > 0) {
    var array = coinFlips(argument.number);
    console.log(array);
    console.log(countFlips(array));
} else {
    console.log(coinFlip());
}
