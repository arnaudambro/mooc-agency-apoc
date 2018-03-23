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
	//on met le bon marché au besoin
	if(localStorage.getItem('actionEnCours') == "true"){
		$('#marcheCourant').attr('src', 'marche_action/marche_action.html');
	}
	if(localStorage.getItem('obligataireEnCours')== "true"){
		$('#marcheCourant').attr('src', 'marche_obligataire/marche_obligataire.html');
	}
	if(localStorage.getItem('monetaireEnCours')== "true"){
		$('#marcheCourant').attr('src', 'marche_monetaire/marche_monetaire.html');
	}
	//on met la bonne taille

	//on cache le menu du bas
	$("#plateaudesmarches2").hide();
});

//Quand un bouton du menu marché est cliqué
$(".boutonMarche").click(function(event) {
	//si un marché est en cours ne rien faire, on agit que si un marché terminé ou aucun n'est commencé
	//DESACTIVEif(!(localStorage.getItem('actionEnCours') == "true" || localStorage.getItem('monetaireEnCours')== "true" || localStorage.getItem('obligataireEnCours')== "true")){
		//au clic sur un des boutons du haut on sette les variables et on met le bon marche en route
		if(event.target.id=='boutonMarcheAction1'){
			localStorage.setItem('actionEnCours',true);
			$('#marcheCourant').attr('src', 'marche_action/marche_action.html');
			$('#marcheCourant').attr('height', '3200px');
		}
		if(event.target.id=='boutonMarcheObligataire1'){
			localStorage.setItem('obligataireEnCours',true);
			$('#marcheCourant').attr('src', 'marche_obligataire/marche_obligataire.html');
			$('#marcheCourant').attr('height', '4500px');
		}
		if(event.target.id=='boutonMarcheMonetaire1'){
			localStorage.setItem('monetaireEnCours',true);
			$('#marcheCourant').attr('src', 'marche_monetaire/marche_monetaire.html');
			$('#marcheCourant').attr('height', '2500px');
		}
		//Au clic sur un des boutons du bas on sette,on met le marche et on scrolle vers le haut
		if(event.target.id=='boutonMarcheAction2'){
			localStorage.setItem('actionEnCours',true);
			$('#marcheCourant').attr('src', 'marche_action/marche_action.html');
			$('#marcheCourant').attr('height', '3200px');
		}
		if(event.target.id=='boutonMarcheObligataire2'){
			localStorage.setItem('obligataireEnCours',true);
			$('#marcheCourant').attr('src', 'marche_obligataire/marche_obligataire.html');
			$('#marcheCourant').attr('height', '4500px');
		}
		if(event.target.id=='boutonMarcheMonetaire2'){
			localStorage.setItem('monetaireEnCours',true);
			$('#marcheCourant').attr('src', 'marche_monetaire/marche_monetaire.html');
			$('#marcheCourant').attr('height', '2500px');
		}			
		//Maintenant que les variables sont "settées" ont agit sur le visuel
		gestionMenuMarche();
		//on ajuste la taille de l'iframe
		
		//et on scrolle au bon endroit
		//$('body').scrollTo('#plateaudesmarches1');
	//DESACTIVE}
});



















