import { createRequire } from 'module';
import { flipACoin } from './modules/coin.mjs';
const require = createRequire(import.meta.url);

const minimist = require('minimist')
var argument = minimist(process.argv.slice(2));

if (argument.call == "heads" || argument.call == "tails") {
    console.log(flipACoin(argument.call));
}

else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
}