import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

// import { createRequire } from 'module';
//const require = createRequire(import.meta.url);

const argument = minimist(process.argv.slice(2));
const num = argument.number || 1;

let numOfFlips = coinFlips(num)

console.log(numOfFlips);
console.log(countFlips(numOfFlips));