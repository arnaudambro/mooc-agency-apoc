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

//Quand un bouton du menu marché est cliqué
$(".boutonMarche").click(function(event) {
	//si un marché est en cours ne rien faire, on agit que si un marché terminé ou aucun n'est commencé
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
		//Maintenant que les variables sont "settées" ont agit sur le visuel
		gestionMenuMarche();
	}
});


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

//Quand un bouton du menu marché est cliqué
$(".boutonMarche").click(function(event) {
	//si un marché est en cours ne rien faire, on agit que si un marché terminé ou aucun n'est commencé
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
		//Maintenant que les variables sont "settées" ont agit sur le visuel
		gestionMenuMarche();
	}
});

var actiondrop2show = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.actiondrop2').css('display','block')}
var actionvideoshow = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.actionvideoshow').css('display','block')}
var actionvertical1show = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.actionvertical1').css('display','block')}
var actionvertical2show = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.actionvertical2').css('display','block')}
