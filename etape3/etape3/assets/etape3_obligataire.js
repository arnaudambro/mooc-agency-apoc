/*Variables en local storage*/
/*Initialisation au page load*/
$(document).ready(function() {
	//on set tous nos localstorage
	if(localStorage.getItem('actionEnCours') === null){
		localStorage.setItem('actionEnCours', "false");
	}
	if(localStorage.getItem('monetaireEnCours') === null){
		localStorage.setItem('monetaireEnCours', "false");
	}
	if(localStorage.getItem('obligataireEnCours') === null){
		localStorage.setItem('obligataireEnCours', "false");
	}
	if(localStorage.getItem('actionTermine') === null){
		localStorage.setItem('actionTermine', "false");
	}
	if(localStorage.getItem('monetaireTermine') === null){
		localStorage.setItem('monetaireTermine', "false");
	}
	if(localStorage.getItem('obligataireTermine') === null){
		localStorage.setItem('obligataireTermine', "false");
	}

	//on initialise le menu correctement
	gestionMenuMarche();
	//on cache le menu du bas
	$("#plateaudesmarches2").hide();
});

//Quand un bouton du menu march� est cliqu�
$(".boutonMarche").click(function(event) {
	//si un march� est en cours ne rien faire, on agit que si un march� termin� ou aucun n'est commenc�
	if(!(localStorage.getItem('actionEnCours') == "true" || localStorage.getItem('monetaireEnCours')== "true" || localStorage.getItem('obligataireEnCours')== "true")){
		//au clic sur un des boutons du haut on sette les variables et c'est tout
		if(event.target.id=='boutonMarcheAction1'){
			localStorage.setItem('actionEnCours',true);
		}
		if(event.target.id=='boutonMarcheObligataire1'){
			localStorage.setItem('obligataireEnCours',true);
		}
		if(event.target.id=='boutonMarcheMonetaire1'){
			localStorage.setItem('monetaireEnCours',true);
		}
		//Au clic sur un des boutons du bas on sette et on scrolle vers le haut
		if(event.target.id=='boutonMarcheAction2'){
			localStorage.setItem('actionEnCours',true);
			$('body').scrollTo('#marcheCourant');
		}
		if(event.target.id=='boutonMarcheObligataire2'){
			localStorage.setItem('obligataireEnCours',true);
			$('body').scrollTo('#marcheCourant');
		}
		if(event.target.id=='boutonMarcheMonetaire2'){
			localStorage.setItem('monetaireEnCours',true);
			$('body').scrollTo('#marcheCourant');
		}
		//Maintenant que les variables sont "sett�es" ont agit sur le visuel
		gestionMenuMarche();
	}
});

// fonction mouseover mouseout des infobulles

	var obarubriqueinfobulle2on1=function(){
		document.getElementById('infobulle2').style.display = "block";
		document.getElementById('infobulle2').innerHTML = obarubriqueinfobulle1;
	};
	var obarubriqueinfobulle2off1=function(){
		document.getElementById('infobulle2').style.display = "none";
	};

	var obarubriqueinfobulle2on2=function(){
		document.getElementById('infobulle2').style.display = "block";
		document.getElementById('infobulle2').innerHTML = obarubriqueinfobulle2;
	};
	var obarubriqueinfobulle2off2=function(){
		document.getElementById('infobulle2').style.display = "none";
	};

	var obarubriqueinfobulle2on3=function(){
		document.getElementById('infobulle2').style.display = "block";
		document.getElementById('infobulle2').innerHTML = obarubriqueinfobulle3;
	};
	var obarubriqueinfobulle2off3=function(){
		document.getElementById('infobulle2').style.display = "none";
	};
	var obarubriqueinfobulle2on4=function(){
		document.getElementById('infobulle2').style.display = "block";
		document.getElementById('infobulle2').innerHTML = obarubriqueinfobulle4;
	};
	var obarubriqueinfobulle2off4=function(){
		document.getElementById('infobulle2').style.display = "none";
	};

	var obarubriqueinfobulle2on5=function(){
		document.getElementById('infobulle2').style.display = "block";
		document.getElementById('infobulle2').innerHTML = obarubriqueinfobulle5;
	};
	var obarubriqueinfobulle2off5=function(){
		document.getElementById('infobulle2').style.display = "none";
	};


   var obarubriqueinfobulle2on6=function(){
		document.getElementById('infobulle2').style.display = "block";
		document.getElementById('infobulle2').innerHTML = obarubriqueinfobulle6;
	};
	var obarubriqueinfobulle2off6=function(){
		document.getElementById('infobulle2').style.display = "none";

	};


				// CONTENU DES INFOBULLES




		// fin variable infobulle

var activobligatairevertical1=function(){$('#monetairevideo').show();}

var obavideoshow =function(){parent.$('.obligatairevertical1').show();parent.$('#obligatairevideo').show();}

