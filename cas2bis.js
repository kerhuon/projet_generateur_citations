var data = {
  animaux : [['Le chat','Le chien','Le cheval', 'L\'ourson', 'Le pélican', 'Le hérisson', 'Le hamster', 'Le canard', 'La dinde'], 
            ['a vu','a mangé','a croqué','a volé','a entendu','a avalé', 'a dévoré', 'a grignoté', 'a siroté', 'a machouillé'], 
            ['un bel osselet','une banane rouge','un carton de steaks','une antilope','un cerf-volant', 'une frite molle', 'une patate douce', 'un os à moëlle', 'une knacky', 'un ananas rose', 'une pastèque jaune']],
  heros : [['Hulk', 'Iron man', 'Thor','La Veuve noire','Captain America', 'Oeil de faucon', 'La Torche', 'Spiderman', 'Superman'],
          ['combat', 'frappe', 'anéantit', 'écrase', 'neutralise', 'écrabouille','tabasse', 'cogne'],
          ['les Chitauris', 'Hydra', 'Loki', 'Thanos', 'Ultron', 'Magneto', 'Galactus', 'Red Skull', 'Mephisto']]
};

/* La donnée saisie 'en dur' est un objet dont les attributs sont des tableaux (listes) de tableaux (sous-listes).
data contient actuellement deux listes : animaux et heros
On pourrait imaginer que "data" puisse être récupérée en format JSON depuis un web service par exemple */

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
  var nb_repetitions;
  do {
    nb_repetitions = parseInt(prompt("Saisir nombre de citations (compris entre 1 et 5) :"));
    if (isNaN(nb_repetitions)){
    console.log('Nombre invalide !');  
    return 1;// NOK
    }
  } while(nb_repetitions<1||nb_repetitions>5);
  // Sasie répétée tant que l'utilisateur ne saisit pas un nombre compris entre 1 et 5
  
  type = prompt("Choisir le type de citation (à choisir parmi "+Object.keys(data)+") : ");
  // choisir une clé thématique dans l'objet data - ici choix entre clé 'animaux' ou 'heros'
  var liste = [];
  var found = false;
  for (var key in data) {// on vérifie que la clé saisie est valide
    if (type === key) {
      liste = data[key];
      found = true;
      break;
    }
  }

  if(!found) {
    console.log('Format incorrect !!!');  
    return 1;// NOK
  }
  for (var i = 0; i < nb_repetitions; i++) {// génération des 1 à 5 citations
    console.log(genere_citation(liste));
  }  
  menu();
  return 0;// OK
}

// ************ Afficher le menu ************
function menu(){
    console.log("\n1 : Générer de nouvelles citations");
    console.log("0 : Quitter\n\n");
    var choix;
    while(true){
      choix = parseInt(prompt("Choisissez une option :"));
      if (choix === 0) {
        console.log("\nAu revoir !!!");
        break ;
      }
      if (choix === 1){
        lance_generation();
        break ;
      }
    }
}

// ************ Lancer le main ************
lance_generation();

