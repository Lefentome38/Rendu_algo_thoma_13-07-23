"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rendu_exo1 = void 0;
const Rendu_exo1 = () => {
    let a = 5;
    let b = 1;
    if (a > Math.PI) {
        console.log(a, "est surperieur à PI");
    }
    else {
        console.log(a, "est inferrieur à PI");
    }
    if (b > Math.PI) {
        console.log(a, "est surperieur à PI");
    }
    else {
        console.log(a, "est inferrieur à PI");
    }
    const La_plus_grande_valeura = a > Math.PI ? "est la plus grande des valeur" : "est la plus petite des valeur";
    const La_plus_grande_valeurb = b > Math.PI ? "est la plus grande des valeur" : "est la plus petite des valeur";
    console.log(a, La_plus_grande_valeura);
    console.log(b, La_plus_grande_valeurb);
};
exports.Rendu_exo1 = Rendu_exo1;
