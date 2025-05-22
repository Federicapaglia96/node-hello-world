
console.log("Hello boolean")

import { contaVocali } from "./parola.js";
import { numeroMaggiore } from "./numero.js";

const argv= process.argv;
const numeroVocali = contaVocali(argv[2]);
console.log(numeroVocali)

let numeriElem= numeroMaggiore(argv[3]);
console.log(numeriElem)
