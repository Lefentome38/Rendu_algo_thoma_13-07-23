"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rendu_exo4 = void 0;
const Rendu_exo4 = () => {
    let candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
    let votes = candidats.map((candidat) => {
        return 0;
    });
    for (let index = 0; index < 1000; index++) {
        votes[Math.floor(Math.random() * candidats.length)] += 1;
    }
    const max = Math.max(...votes);
    const index_du_votes_max = votes.indexOf(max);
    const le_cadt_max_votes = candidats.findIndex((candidats) => );
    console.log("le candidat avec les plus de votes", le_cadt_max_votes);
    console.log("l'index du vote le plus haut", index_du_votes_max);
    console.log("voici les candidats", JSON.stringify(candidats));
    console.log("voici les votes", JSON.stringify(votes), max);
};
exports.Rendu_exo4 = Rendu_exo4;
