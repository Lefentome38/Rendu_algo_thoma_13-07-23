export const Rendu_exo2 = () => {
    let tab:number []=[]
    let index = 0

    while (index < 10) {
        tab[index] = index + 1
        index++
    }

    console.log("voici le tableau",tab);
    console.log("la longueur du tableau est de",tab.length);
    console.log("le premier élément du tableau est",tab[0]);
    console.log("le dernier élément du tableau est",tab[tab.length - 1]);
    console.log("le 4ème élément du tableau est",tab[3]);
    
    let tableauBis = tab.map(tab => tab*2 )
    console.log("tableauBis",tableauBis);
    
}