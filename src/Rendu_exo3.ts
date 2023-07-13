export const Rendu_exo3 = () => {
    function valeur_stokfoin_mouton(stok_init:number, mouton_init:number, la_phrase_du_message:string) {
        let stok_foin = stok_init           
        let nbr_mouton = mouton_init                    
        let nbj = 0

        while (stok_foin > 0) {
            if (nbj===1000) {
                nbr_mouton = nbr_mouton - 1
            }
            stok_foin = stok_foin - (0.25*nbr_mouton)
            nbj++

            // console.log("stok de foin",stok_foin);
            // console.log("jour",nbj)
        }
        console.log("le stoke de foin peut tenir",nbj,"jour",la_phrase_du_message)
    }
    valeur_stokfoin_mouton(800,2,": 800kg et 2 Moutons")
    valeur_stokfoin_mouton(20,2,": 20kg et 2 Moutons")
    valeur_stokfoin_mouton(800,5,": 800kg et 5 Moutons")
}