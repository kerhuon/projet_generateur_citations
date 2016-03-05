var data = {
  animaux : [['Le chat','Le chien','Le cheval', 'L\'ourson', 'Le pélican', 'Le hérisson', 'Le hamster', 'Le canard', 'La dinde'], 
            ['a vu','a mangé','a croqué','a volé','a entendu','a avalé', 'a dévoré', 'a grignoté', 'a siroté', 'a machouillé'], 
            ['un bel osselet','une banane rouge','un carton de steaks','une antilope','un cerf-volant', 'une frite molle', 'une patate douce', 'un os à moëlle', 'une knacky', 'un ananas rose', 'une pastèque jaune']]
};

/* La donnée saisie 'en dur' est un objet dont les attributs sont des tableaux (listes) de tableaux (sous-listes)
contient actuellement une liste : animaux
On pourrait imaginer qu'elle puisse être récupérée en format JSON depuis un web service par exemple*/

function genere_citation(liste){
  
  var citation = '';
  // contiendra la citation à retourner  
  
  try{
    var nb_morceaux = liste.length;
  /*indique le nombre de morceaux de phrase, trois au minimum dans l'énoncé,
  c'est-à-dire le nombre de sous-listes dans la liste passée en paramètre'*/
  }
  catch(e){
    return "Erreur avec les données !";
  }
  
  var alea = [];
  //tableau qui contiendra l'indice aléatoire dans chaque sous-liste
  
  var espace = ' ';
  //caractère séparateur ou final entre les morceaux de phrase.
  
  for (var i=0 ; i<nb_morceaux ; i++){    
    alea[i] = Math.floor(Math.random() * liste[i].length);//tableau d'indices aléatoires
    
    if (i===nb_morceaux-1){//définition du dernier caractère en fin de citation
      espace = ' !';
    }
    citation += liste[i][alea[i]] + espace;
  }
  return citation;  
}

console.log(genere_citation(data.animaux));