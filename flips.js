import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

// import { createRequire } from 'module';
//const require = createRequire(import.meta.url);

var argument = minimist(process.argv.slice(2));
const num = argument.num || 1;

let numOfFlips = coinFlips(num)

console.log(numOfFlips);
console.log(countFlips(flips));