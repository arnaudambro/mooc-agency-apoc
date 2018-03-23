//Cette fonction gère l'activation et la désactivation des boutons et des panneaux de marché
function gestionMenuMarche(){

	//Désactiver les boutons du menu et cacher le menu du bas si un marché est en cours.
	if(localStorage.getItem('actionEnCours') == "true" || localStorage.getItem('monetaireEnCours')== "true" || localStorage.getItem('obligataireEnCours')== "true"){
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheAction1").removeClass("boutonActive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheAction1").addClass("boutonDesactive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheObligataire1").removeClass("boutonActive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheObligataire1").addClass("boutonDesactive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheMonetaire1").removeClass("boutonActive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheMonetaire1").addClass("boutonDesactive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#plateaudesmarches2").hide();
	}
	//Activer les boutons et montrer le plateau2 si on a terminé un marché (ie aucun n'est en cours)
	if(localStorage.getItem('actionEnCours') == "false" && localStorage.getItem('monetaireEnCours')== "false" && localStorage.getItem('obligataireEnCours')== "false"){
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheAction1").removeClass("boutonDesactive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheAction1").addClass("boutonActive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheObligataire1").removeClass("boutonDesactive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheObligataire1").addClass("boutonActive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheMonetaire1").removeClass("boutonDesactive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("boutonMarcheMonetaire1").addClass("boutonActive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheAction2").removeClass("boutonDesactive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheAction1").addClass("boutonActive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheObligataire2").removeClass("boutonDesactive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheObligataire1").addClass("boutonActive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheMonetaire2").removeClass("boutonDesactive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("boutonMarcheMonetaire1").addClass("boutonActive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#plateaudesmarches2").show();
	}
	//Dans tous les cas désactiver (en haut et en bas) les boutons des marchés qui ont été terminés
	if(localStorage.getItem('monetaireTermine')== "true"){
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheMonetaire1").removeClass("boutonActive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheMonetaire1").addClass("boutonDesactive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheMonetaire2").removeClass("boutonActive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheMonetaire2").addClass("boutonDesactive");
	}
	if(localStorage.getItem('obligataireTermine')== "true"){
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheObligataire1").removeClass("boutonActive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheObligataire1").addClass("boutonDesactive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheObligataire2").removeClass("boutonActive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheObligataire2").addClass("boutonDesactive");
	}
	if(localStorage.getItem('actionTermine')== "true"){
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheAction1").removeClass("boutonActive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheAction1").addClass("boutonDesactive");
		$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheAction2").removeClass("boutonActive");$('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').children("#boutonMarcheAction2").addClass("boutonDesactive");
	}
	
}

var scrollMarche = function() {
    $('html, body').animate({
        scrollTop: $('#frame1').contents().find('#bodymaininside').children('#plateaudesmarches1').offset().top
    }, 2000);
};
// affichage rubriquetab
var rubriquetabshow = function(){parent.parent.$('#marcheCourant').contents().find('#rubriquetab').css( "display", "block");}
var rubriquetabhide = function(){parent.parent.$('#marcheCourant').contents().find('#rubriquetab').css( "display", "none");}

// monetaire affichage questionnaire

var formhide = function(){parent.parent.$('#marcheCourant').contents().find('.form').css( "display", "none");}
var iframeonscreen=function(){if(idIframe=="obadrop1"){parent.$('#obadrop2').show();}}

// monetaire affichage formulaire
var formshow = function(){parent.parent.$('#marcheCourant').contents().find('.form').css( "display", "block");}

//monetaire affichage video
var monavideoshow = function(){parent.parent.$('#marcheCourant').contents().find('#monetairevideo').css( "display", "block");}

//monetaire affichage synthese  et donc set du localStorage de fin


var monasyntheseshow = function(){parent.parent.$('#marcheCourant').contents().find('#monetairesynthese').css( "display", "block");localStorage.setItem('monetaireTermine','true');localStorage.setItem('actionEnCours','false');localStorage.setItem('obligataireEnCours','false');localStorage.setItem('monetaireEnCours','false');gestionMenuMarche();}

//obligataire  affichage vertical1
var activobavert1=function(){parent.parent.$('#marcheCourant').contents().find('.obligatairevertical1').css( "display", "block");}
//action affichage synthese
var activactavert1=function(){parent.parent.$('#marcheCourant').contents().find('.actionvertical1').css( "display", "block");}




	

var gestionIFrames = function(){''}

// FONCTION MARCHE ACTION


	// set du localStorage de fin
	
var actadonesynthese=function(){localStorage.setItem('actionTermine','true');localStorage.setItem('actionEnCours','false');localStorage.setItem('obligataireEnCours','false');localStorage.setItem('monetaireEnCours','false');gestionMenuMarche();}

// stockage des localStorage et récupération par variable

var actiondrop1Storage=localStorage.getItem('actiondrop1done');
var actiondrop2Storage=localStorage.getItem('actiondrop2done');
var actionvertical1Storage=localStorage.getItem('actionvertical1done');
var actionvertical2Storage=localStorage.getItem('actionvertical2done');




// actualisation des localStorage

var actactualisestorage=function(){actiondrop1Storage=localStorage.getItem('actiondrop1done');
actiondrop2Storage=localStorage.getItem('actiondrop2done');
actionvertical1Storage=localStorage.getItem('actionvertical1done');
actionvertical2Storage=localStorage.getItem('actionvertical2done');}

//fonctions affichage des exercices, executablse dans les 2 contextes

var actiondrop2show = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.actiondrop2').css('display','block');parent.parent.$('#marcheCourant').contents().find('.actiondrop2').css( "display", "block");}

var actionvideoshow = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.actionvideo').css('display','block');parent.parent.$('#marcheCourant').contents().find('.actionvideo').css( "display", "block");}
var actionvertical2show = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.actionvertical2').css('display','block');parent.parent.$('#marcheCourant').contents().find('.actionvertical2').css( "display", "block");}

//fonction affichage de la synthèse et donc set des localStorage

var actionsyntheseshow = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.actionsynthese').css('display','block');parent.parent.$('#marcheCourant').contents().find('.actionsynthese').css( "display", "block");actadonesynthese();}


// fonction de test des localStorage pour affichage des exercices.

var testactiondrop2show=function(){if(actiondrop1Storage=='true'){actiondrop2show();}}
var testactionvideoshow=function(){if(actiondrop2Storage=='true'){actionvideoshow();}}
var testactionvertical2show=function(){if(actionvertical1Storage=='true'){actionvertical2show();}}
var testactionsyntheseshow=function(){if(actionvertical2Storage=='true'){actionsyntheseshow();}}

 // fonction de test global etant appliquée à chaque exos
 
 
 
var actatest=function(){actactualisestorage();testactiondrop2show();testactionvideoshow();testactionvertical2show();testactionsyntheseshow();}





// FONCTION MARCHE OBLIGATION


// actualisation des localStorage
var obadonesynthese=function(){localStorage.setItem('obligataireTermine','true');localStorage.setItem('actionEnCours','false');localStorage.setItem('obligataireEnCours','false');localStorage.setItem('monetaireEnCours','false');gestionMenuMarche();}


// stockage des localStorage et récupération par variable

var obligatairedrop1Storage=localStorage.getItem('obligatairedrop1done');
var obligatairedrop2Storage=localStorage.getItem('obligatairedrop2done');
var obligatairevertical1Storage=localStorage.getItem('obligatairevertical1done');
var obligatairevertical2Storage=localStorage.getItem('obligatairevertical2done');




// actualisation des localStorage

var obactualisestorage=function(){obligatairedrop1Storage=localStorage.getItem('obligatairedrop1done');
obligatairedrop2Storage=localStorage.getItem('obligatairedrop2done');
obligatairevertical1Storage=localStorage.getItem('obligatairevertical1done');
obligatairevertical2Storage=localStorage.getItem('obligatairevertical2done');}


//fonctions affichage des exercices, executablse dans les 2 contextes


var obligatairedrop2show = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.obligatairedrop2').css('display','block');parent.parent.$('#marcheCourant').contents().find('.obligatairedrop2').css( "display", "block");}

var obligatairevideoshow = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.obligatairevideo').css('display','block');parent.parent.$('#marcheCourant').contents().find('.obligatairevideo').css( "display", "block");}

var obligatairevertical2show = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.obligatairevertical2').css('display','block');parent.parent.$('#marcheCourant').contents().find('.obligatairevertical2').css( "display", "block");}


//fonction affichage de la synthèse et donc set des localStorage
var obligatairesyntheseshow = function(){
	$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.obligatairesynthese').css('display','block');
	parent.parent.$('#marcheCourant').contents().find('.obligatairesynthese').css( "display", "block");obadonesynthese();}

// fonction de test des localStorage pour affichage des exercices.


var testobligatairedrop2show=function(){if(obligatairedrop1Storage=='true'){obligatairedrop2show();}}
var testobligatairevideoshow=function(){if(obligatairedrop2Storage=='true'){obligatairevideoshow();}}
var testobligatairevertical2show=function(){if(obligatairevertical1Storage=='true'){obligatairevertical2show();}}
var testobligatairesyntheseshow=function(){if(obligatairevertical2Storage=='true'){obligatairesyntheseshow();}}

 // fonction de test global etant appliquée à chaque exos
 
 
 
var obatest=function(){obactualisestorage();testobligatairedrop2show();testobligatairevideoshow();testobligatairevertical2show();testobligatairesyntheseshow();}












