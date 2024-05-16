/// CREATION VARIABLES / CONSTANTES
const plat = 20;
const ba = 8;
const bna = 5;

let age = prompt("Quel âge avez-vous ?");
let credit = prompt("Combien d'argent avez-vous ?");
let choix;

function argent(credit) {
    return 'Vous disposez de ${credit}€. Vous pouvez commander ceci:'
}


while (credit >= 5 && choix != 4) {
        credit 
// toLocaleLowerCase transforme le choix en minuscule
// CHOIX DU PLAT
        choix = prompt(`
        FAITES VOTRE CHOIX:
        --------------------------------
        1/ Plat 20 €
        2/ Soda 5 €
        3/ Bière 8 €
        4/ Partir
        --------------------------------
        Vous avez ${credit} €.
        `);

if (choix == 1 || choix == "plat") {
    if (credit >= plat) {
        credit = credit - plat
        console.log(`Voici votre plat il vous reste ${credit} €.`);
    } else {
        console.log("Vous n'avez pas assez d'argent.");
    }
}

    
// CHOIX SODA
if (choix == 2 || choix == "soda") {
    if (credit >= bna) {
        credit = credit - bna
        console.log(`Voici votre soda il vous reste ${credit} €`);
    } else {
        console.log("Vous n'avez pas assez d'argent.");
    }
}

// CHOIX BIERE
if (choix == 3 || choix == "bière") {
    if (age < 18) {
        console.log("Vous n'êtes pas majeur pour pouvoir commander de l'alcool.");
        alert("Vous n'êtes pas majeur pour pouvoir commander de l'alcool.");
    }
    else {
        if (credit >= ba) {
            credit = credit - ba
            console.log(`Voici votre bière il vous reste ${credit} €`);
        } else {
            console.log("Vous n'avez pas assez d'argent.");
        }
    }


}
/* recréditation */
if (credit < 5 || choix != 2) {
    /* changer le choix */
    choix = 4 == 2; 
        
    console.log("Vous n'avez plus assez d'argent pour commander.");
    alert("Vous n'avez plus assez d'argent pour commander.");
    choix = prompt(`
    1/ Rajouter du crédit
    2/ Partir `);
   if (choix == 1){
    credit = prompt(" Combien souhaitez-vous rajouter à votre compte ?");
    }
}   else{
    if (choix == 2) {
        alert("Merci pour votre commande. Au revoir!");
    }
}
}



alert("Merci pour votre commande. Au revoir!");


/* 
switch (choix) {
    case "1":
        if (credit >= plat) {
            credit = credit - plat
            console.log(`Voici votre plat il vous reste ${credit}`);
        } else {
            console.log("Vous n'avez pas assez d'argent.");
        }
        
        break;

    case "2":
        if (credit >= bna) {
            credit = credit - bna
            console.log(`Voici votre soda il vous reste ${credit} €`);
        } else {
            console.log("Vous n'avez pas assez d'argent.");
        }
        
        break;

    case "3":
        if (age < 18) {
            console.log("Vous n'êtes pas majeur pour pouvoir commander de l'alcool.");
        }
        else {
            if (credit >= ba) {
                credit = credit - ba
                console.log(`Voici votre bière il vous reste ${credit} €`);
            } else {
                console.log("Vous n'avez pas assez d'argent.");
            }
        }
        break;
    default:
        console.log("pas compris");
        break;
} */






