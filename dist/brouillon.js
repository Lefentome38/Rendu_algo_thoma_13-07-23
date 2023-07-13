"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brouillon = void 0;
const brouillon = () => {
    let a = 0;
    if (a === 0) {
        console.log("hello");
    }
    const vit_wagon = 92;
    const nbr_wagon = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const rendu = nbr_wagon.map((valeur) => {
        return valeur * 3;
    }); //donne le nombre de passager*3 avec (tableau nbr_wagon)
    function getRandomWagonIndex() {
        const random = Math.floor(Math.random() * nbr_wagon.length);
        return random;
    } // il choisie aléatoire un wagon
    const sum = rendu.reduce((acc, val) => {
        return acc + val;
    }, 0); // le nombre de passager dans le train =225
    console.log(JSON.stringify(rendu)); // (JSON.stringify) permet au randu d'etre affiche sur une seul ligne
    console.log(getRandomWagonIndex(), sum);
};
exports.brouillon = brouillon;
