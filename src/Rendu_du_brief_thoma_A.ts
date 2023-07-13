import { table } from "console";

export const Rendu_du_brief_thoma_A = () =>{
    // le #hero = 3 | le #capitaine = 2 | le #soldat = 1 | le #traite = 1 et annule un héro | la #bague = -1 | le #sorcier = le nombre de dé blanc dans sont camp
    const NOM_DES_ODIN = ["le héro","le capitaine","le soldat","le traite","la bague","le sorcier"]
    console.log(JSON.stringify(NOM_DES_ODIN));


    let NOM_DES_ODINchifre = [2,4,12,3]
    
    let desInitiaux = ["vert","violet","blue"]
    // 1 + 2 = 3
    function sumDices(des: string[]){
        let sum = 0

        for (let index = 0; index < des.length; index++) {
            const element = des[index];
            console.log("nom du de dans boucle", element)
            if(element === "vert"){
                sum = sum + 1
            }
            else if(element === "gris"){
                sum = sum + 2
            }
            else if(element === "jaune"){
                sum = sum - 1
            }
            else if(element === "violet"){
                sum = sum + 3
            }
            else if(element === "blue"){
                
                sum = sum + //la somme des dés blanc 1+1 vert+violet
            }
        }

        return sum
    }

    console.log("sum of des", sumDices(desInitiaux))
}
    

