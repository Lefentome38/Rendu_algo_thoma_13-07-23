"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo2 = void 0;
const exo2 = () => {
    console.log('exo2');
    let tableau = [];
    let index = 0;
    while (index < 10) {
        tableau[index] = index + 1;
        index = index + 1;
    }
    console.log('mon tableau', tableau);
    console.log('le premier tableau', tableau[0]);
    console.log('la longueur du tableau', tableau.length);
    console.log('dernier élément', tableau[tableau.length - 1]);
    console.log('le quatrième élément', tableau[4]);
    let tableauBis = [];
    for (let index = 0; index < tableau.length; index++) {
        const element = tableau[index];
        tableauBis[index] = element * 2;
    }
    console.log("tableau doublé", tableauBis);
};
exports.exo2 = exo2;
