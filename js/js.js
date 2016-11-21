// ----------< Début du Javascript >----------

console.log("Début du JS");

alert("Oyez oyez !\nVous vous apprêtez à suivre le déroulement d'une histoire passionante à la trame aussi subtile que complexe dont VOUS pouvez influencer les paramètre !");

alert("Pour le bon déroulement de l'opération, lorsqu'il vous sera demander d'entrée un nom commun, écrivez-le sous cette forme :\n\nle / la + nom")

var couleur = prompt("Donnez une couleur en hexadécimal !");

console.log(couleur);

// ----------< Premier nom >----------

var nom = prompt("Choisissez un nom propre !");
var i = 0;

console.log("Nom du héros :" + nom);

while (nom == "") {
	nom = prompt("On triche pas ! Allez, choisissez un nom propre !")
}

while (i < document.getElementsByClassName("nom").length) {
	document.getElementsByClassName("nom")[i].innerHTML = nom;
	document.getElementsByClassName("nom")[i].style.color = couleur;
	i++;
}

// ----------< Deuxième nom >----------

var nom2 = prompt("Plus que 7 questions ! " + "Choisissez un deuxième nom propre !");

console.log("Nom d'un mec pas important :" + nom2);

while (nom2 == "") {
	nom2 = prompt("On triche pas ! Allez, choisissez un deuxième nom propre !")
}

document.getElementById("nom2").innerHTML = nom2;
document.getElementById("nom2").style.color = couleur;

// ----------< Animal >----------

var espece = prompt("Plus que 6 questions ! " + "Choisissez un animal !");
var j = 0;

console.log("Animal :" + espece);

while (espece == "") {
	espece = prompt("On triche pas ! Allez, choisissez un animal !")
}

while (j < document.getElementsByClassName("espece").length) {
	document.getElementsByClassName("espece")[j].innerHTML = espece;
	document.getElementsByClassName("espece")[j].style.color = couleur;
	j++;
}

// ----------< Couleur >----------

var color = prompt("Plus que 5 questions ! " + "Choisissez une couleur !");

console.log("Couleur :" + color);

while (color == "") {
	color = prompt("On triche pas ! Allez, choisissez une couleur !")
}

document.getElementById("couleur").innerHTML = color;
document.getElementById("couleur").style.color = couleur;

// ----------< Adjectif 1 >-----------

var adjectif1 = prompt("Plus que 4 questions ! " + "Choisissez un adjectif !");

console.log("Adjectif 1 :" + adjectif1);

while (adjectif1 == "") {
	adjectif1 = prompt("On triche pas ! Allez, choisissez un adjectif !")
}

document.getElementById("adj1").innerHTML = adjectif1;
document.getElementById("adj1").style.color = couleur;

// ----------< Adjectif 2 >-----------

var adjectif2 = prompt("Plus que 3 questions ! " + "Choisissez un deuxième adjectif !");

console.log("Adjectif 2 :" + adjectif2);

while (adjectif2 == "") {
	adjectif2 = prompt("On triche pas ! Allez, choisissez un deuxième adjectif !")
}

document.getElementById("adj2").innerHTML = adjectif2;
document.getElementById("adj2").style.color = couleur;

// ----------< Réponse >-----------

var reponse = prompt("Plus que 2 questions ! " + "Choisissez un objet !");

console.log("Objet :" + reponse);

while (reponse == "") {
	reponse = prompt("On triche pas ! Allez, choisissez un objet !")
}

document.getElementById("objet").innerHTML = reponse;
document.getElementById("objet").style.color = couleur;

// ----------< Plat >----------

var plat = prompt("Dernière question ! " + "Choisissez un plat !");
var k = 0;

console.log("Plat :" + plat);

while (plat == "") {
	plat = prompt("On triche pas ! Allez, choisissez un plat !")
}

while (k < document.getElementsByClassName("plat").length) {
	document.getElementsByClassName("plat")[k].innerHTML = plat;
	document.getElementsByClassName("plat")[k].style.color = couleur;
	k++;
}

// ----------< Bouton Suite >----------

function suite() {
	var suite = prompt("Voulez-vous connaître la suite ? (oui / non)");

	while ((suite != "oui") && (suite != "non")){
	suite = prompt("On triche pas ! Alors, vous voulez connaître la suite ?")
	}

	if (suite == "oui") {
		alert("Si vous voulez connaître la suite, ne passez pas à côté du pack de contenu additionnel 'La suite', vendu seulement 15€ à cette adresse : www.activisionlol.com");
	} else {
		alert("Tant pis pour vous !");
	}
}

// ----------< Fin du Javascript >----------

console.log("Fin du JS");