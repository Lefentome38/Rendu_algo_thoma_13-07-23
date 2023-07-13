export const exo3 = () => {
    function recup_nbj_stok(stokeinit:number,nb_minit:number) {
        let nbj = 0;       // le nombre de jour
        let stok_foin = stokeinit;      //le stoke de foin
        let cm = 0.25;     //consomation des moutons
        let nb_m = nb_minit       // le nombre de moutons
        let nb_j_g = 1000     //le nombre jour avant le gigot
        
        while (stok_foin>0) {
            if (nbj===nb_j_g) {
                nb_m = nb_m - 1
            }
            stok_foin = stok_foin - (cm*nb_m)
            nbj++
        }
        
        console.log('le nombre de jour ',nbj);
        
        //return nbj 
        //const consigneUne = recup_nbj_stok(800, 2)
        //console.log('le nombre de jour ', consigneUne);
    }

    recup_nbj_stok(800, 2)
    recup_nbj_stok(20, 2)
    recup_nbj_stok(800, 5)
}