"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rendu_du_brief_thoma_D = void 0;
const Rendu_du_brief_thoma_D = () => {
    const vit_wagon = 92;
    let nbr_wagon = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let rendu = nbr_wagon.map((valeur) => {
        return valeur * 3;
    }); // donne le nombre de passager*3 avec (tableau nbr_wagon)
    function getRandomWagonIndex(nbPossibilites) {
        const random_Wagon = Math.floor(Math.random() * nbPossibilites);
        return random_Wagon;
    } // il choisie aléatoire un wagon
    const sum_passager = rendu.reduce((acc, val) => {
        return acc + val;
    }, 0); // le nombre de passager dans le train =225
    console.log('rendu before', rendu);
    for (let i = 0; i < sum_passager; i++) {
        const randomWagonIndex = getRandomWagonIndex(rendu.length);
        rendu[randomWagonIndex] = rendu[randomWagonIndex] - 1;
        rendu = rendu.filter((nbPassagersDuWagon) => {
            return nbPassagersDuWagon > 0;
        });
        console.log("nombre de passager part wagon", rendu);
        const vitesseActuelle = vit_wagon + (nbr_wagon.length - rendu.length) * nbr_wagon.length;
        console.log("vitesse actuelle", vitesseActuelle);
    }
    //const nbr_km_parcouru = vit_wagon*(sum_passager/60) // calcul de la distance parcouru (mais un petit pépin)
    //le calcul ne risque de ne plus marcher
    console.log(JSON.stringify(rendu)); // (JSON.stringify) permet au randu d'etre affiche sur une seul ligne
    console.log(getRandomWagonIndex(), sum_passager);
    console.log("la vitesse du train est de", vit_wagon, "km/h");
    //console.log("la distance parcouru est de",nbr_km_parcouru,"Km");
};
exports.Rendu_du_brief_thoma_D = Rendu_du_brief_thoma_D;
