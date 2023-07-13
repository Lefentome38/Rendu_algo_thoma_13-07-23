export const Rendu_exo1 = () =>{
    let a = 5
    let b = 1

    if (a > Math.PI) {
        console.log(a,"est surperieur à PI"); 
    }
    else {
        console.log(a,"est inferrieur à PI");
    }

    if (b > Math.PI) {
        console.log(a,"est surperieur à PI"); 
    }
    else {
        console.log(a,"est inferrieur à PI");
    }


    const La_plus_grande_valeura = a > Math.PI ?  "est la plus grande des valeur" : "est la plus petite des valeur";
    const La_plus_grande_valeurb = b > Math.PI ?  "est la plus grande des valeur" : "est la plus petite des valeur";
    console.log(a,La_plus_grande_valeura);
    console.log(b,La_plus_grande_valeurb);
    
}