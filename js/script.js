
// Abonne btn à l'évenement click
document.getElementById('btn-1').addEventListener("click", clickButton);
document.getElementById('btn-2').addEventListener("click", clickButton);
document.getElementById('btn-3').addEventListener("click", clickButton);
document.getElementById('btn-clean').addEventListener("click", btnClean);

/*Déclaration de notre tableau */
var panier = [];


/*Définition de l'article 1*/
var art1 = {
	img:"http://download.foodshot.co/Foodshot_2016_05_3.jpg",
	label: "Oeuf",
	cat: "Déjeuner",
	prix: 0.8
};

var art2 = {
	img:"http://download.foodshot.co/Foodshot_2016_07_3.jpg",
	label: "Sandwich",
	cat: "Déjeuner",
	prix: 4.2
};

var art3 = {
	img:"http://download.foodshot.co/Foodshot_2016_14_7.jpg",
	label: "Verre de Vin",
	cat: "Cru Bourgeois",
	prix: 5.0
};


/*Fonction qui est appelée lors du click sur un bouton */
function clickButton(){
/*	panier.push(art1);
	alert(panier);*/
	if(this.id == "btn-1"){
	ajouterArticle(art1);
	}
	if(this.id == "btn-2"){
	ajouterArticle(art2)
	}
	if(this.id == "btn-3"){
	ajouterArticle(art3)
	}
	calculerTotal();
}  

function btnClean(){
	//alert('Clean');
	/* Solution1 : var tabPanier = document.getElementById('détails-panier');
	console.log(tabPanier.childNodes); */
	//solution 2 :
	var lignesASupprimer = document.getElementsByClassName("ligne-custom");
	tableau = document.getElementById("détails-panier");
	for(var i = lignesASupprimer.length - 1; i >= 0; i--){
		tableau.removeChild(lignesASupprimer[i]);
	}
	panier.length = 0;
	calculerTotal();
}

function ajouterArticle(article) {
	panier.push(article);
	var tr = document.createElement("tr");
	tr.className = "ligne-custom";

	var tdImg = document.createElement("td");
	tdImg.className = "img-article";
	tdImg.style.backgroundImage = "url(" + article.img + ")";
	tr.appendChild(tdImg);

	var tdLabel = document.createElement("td");
	tdLabel.textContent = article.label;
	tr.appendChild(tdLabel);

	var tdCat = document.createElement("td");
	tdCat.textContent = article.cat;
	tr.appendChild(tdCat);

	var tdPrix = document.createElement("td");
	tdPrix.textContent = article.prix;
	tr.appendChild(tdPrix);

	document.getElementById("détails-panier").appendChild(tr);
}

function calculerTotal() {
	var total = 0.0;
	if(panier.length == 0){
		document.getElementById('texte-panier').textContent = "Votre panier est vide";
	}
	else{
		for(var i = 0; i<panier.length; i++) {
			/*cela correspond à total = total + panier[i].prix */
			total += panier[i].prix;
		}
		document.getElementById('texte-panier').textContent = "J'ai pris " + panier.length + " articles(s) pour un montant de " + total + " €.";
	}
}