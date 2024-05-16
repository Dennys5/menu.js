// Création des variables / constantes
const plat = 20;
const bna = 5;
const ba = 8;
let ancienCredit = 0;
let age = prompt("Quel âge avez-vous ?");


//créa fonction
function budjet(credit, age) {
        let proposition = " Vous pouvez commander ";
        if (credit >= 20) {
          proposition = proposition + "Plat" + " à 20 € "
        } 
         if (credit >= 8 && age > 18){
          proposition = proposition + "Bière" + " à 8€ "
         }

        if (credit >=5) {
          proposition = proposition + "Soda" + " à 5€ "
        }
        return proposition
      }






// Création de la variable recrediter
let recrediter = "oui";
while (recrediter.toLowerCase() !== "non") {

  let credit = ancienCredit + Number(prompt("Combien d'argent disposez-vous ?"));
  recrediter = "non"
  let choix = "";

  //fonction

  alert (budjet(credit));


  while (credit >= bna && choix != 4) {
    // CREATION DES CONDITIONS
    
    // Modification de la variable choix pour lui ajouter le menu
       choix = prompt(
      "Voici le menu : \n ------------------- \n 1/ Plat \n 2/ BNA \n 3/ BA \n 4/ Sortir vous avez " + credit
    );

    if (choix == 1) {
      if (credit >= plat) {
        credit = credit - plat;
        alert("Bon appétit il vous reste: " + credit);
      } else {
        alert("Commande refusée fond insuffisant");
        ancienCredit = Number(credit)
        recrediter = prompt("Voulez-vous recréditer ? Oui ou non");
      }
    } else if (choix == 2) {
      if (credit >= bna) {
        credit = credit - bna;
        alert("Voici votre soda il vous reste: " + credit);
      } else {
        alert("Commande refusée fond insuffisant");
        ancienCredit = Number(credit)
        recrediter = prompt("Voulez-vous recréditer ? Oui ou non");
      }
    } else if (choix == 3) {
      if (credit >= ba && age >= 18) {
        credit = credit - ba;
        alert("Voici votre bière il vous reste :" + credit);
      } else {
        alert("Commande refusée");
        ancienCredit = Number(credit)
        recrediter = prompt("Voulez-vous recréditer ? Oui ou non");
      }
    } else {
      if (choix == 4) {
        alert("A bientôt");
      } else {
        alert("Je n'ai pas compris votre choix, réessayez.");
      }
    }

    if (recrediter.toLowerCase() === "oui") {
      choix = 4;
    }
    // fonction
    /* alert (budjet(credit)); */
    /* alert(restriction(age)); */
    
   
    if (credit <= 5) {

      choix = 4;
      recrediter = "oui"
    }
    
  }
}