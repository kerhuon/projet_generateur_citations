var data = {
  animaux : [['Le chat','Le chien','Le cheval', 'L\'ourson', 'Le pélican', 'Le hérisson', 'Le hamster', 'Le canard', 'La dinde'], 
           ['a vu','a mangé','a croqué','a volé','a entendu','a avalé', 'a dévoré', 'a grignoté', 'a siroté', 'a machouillé'], 
           ['un bel osselet','une banane rouge','un carton de steaks','une antilope','un cerf-volant', 'une frite molle', 'une patate douce', 'un os à moëlle', 'une knacky', 'un ananas rose', 'une pastèque jaune']],
  heros : [['Hulk', 'Iron man'],['combat', 'frappe'],['les Chitauris', 'Hydra']]
};

/* La donnée saisie 'en dur' est un objet dont les attributs sont des tableaux (listes) de tableaux (sous-listes)
contient actuellement deux listes : animaux et heros
On pourrait imaginer qu'elle puisse être récupérée en format JSON depuis un web service par exemple */

// ************ Générer la citation ************
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

// ************ Lancer génération ************
function lance_generation(){
  nb_repetitions = parseInt(prompt("Saisir nombre de citations :"));
  type = prompt("Choisir le type de citation :");
  var liste = [];
  if (type === 'animaux') liste = data.animaux;
  else if (type === 'heros') liste = data.heros;
  else {
    console.log('Format incorrect !!!');  
    return 1;
  }
  for (var i = 0; i < nb_repetitions; i++) {
    console.log(genere_citation(liste));
  }  
  //setTimeout(afficherMenu,500);
  afficherMenu();
  return 0;
}

// ************ Demander choix ************  
function demanderChoix(){
    var choix;
    while(true){
      choix = parseInt(prompt("Choisissez une option :"));
      if (choix === 0) {
        console.log("\nAu revoir !!!");
        break ;
      }
      if (choix === 1){
        lance_generation();
      }
    }
} 

// ************ Afficher le menu ************
function afficherMenu(){
    console.log("\n1 : Générer de nouvelles citations");
    console.log("0 : Quitter\n");
    //setTimeout(demanderChoix,200);
    demanderChoix();
}

// ************ Lancer le main ************
lance_generation();

