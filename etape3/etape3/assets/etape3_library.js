//Cette fonction g�re l'activation et la d�sactivation des boutons et des panneaux de march�
function gestionMenuMarche(){

	//D�sactiver les boutons du menu et cacher le menu du bas si un march� est en cours.
	if(localStorage.getItem('actionEnCours') == "true" || localStorage.getItem('monetaireEnCours')== "true" || localStorage.getItem('obligataireEnCours')== "true"){
		$("#boutonMarcheAction1").removeClass("boutonActive");$("#boutonMarcheAction1").addClass("boutonDesactive");
		$("#boutonMarcheObligataire1").removeClass("boutonActive");$("#boutonMarcheObligataire1").addClass("boutonDesactive");
		$("#boutonMarcheMonetaire1").removeClass("boutonActive");$("#boutonMarcheMonetaire1").addClass("boutonDesactive");
		$("#plateaudesmarches2").hide();
	}
	//Activer les boutons et montrer le plateau2 si on a termin� un march� (ie aucun n'est en cours)
	if(localStorage.getItem('actionEnCours') == "false" && localStorage.getItem('monetaireEnCours')== "false" && localStorage.getItem('obligataireEnCours')== "false"){
		$("#boutonMarcheAction1").removeClass("boutonDesactive");$("#boutonMarcheAction1").addClass("boutonActive");
		$("#boutonMarcheObligataire1").removeClass("boutonDesactive");$("#boutonMarcheObligataire1").addClass("boutonActive");
		$("#boutonMarcheMonetaire1").removeClass("boutonDesactive");$("boutonMarcheMonetaire1").addClass("boutonActive");
		$("#boutonMarcheAction2").removeClass("boutonDesactive");$("#boutonMarcheAction1").addClass("boutonActive");
		$("#boutonMarcheObligataire2").removeClass("boutonDesactive");$("#boutonMarcheObligataire1").addClass("boutonActive");
		$("#boutonMarcheMonetaire2").removeClass("boutonDesactive");$("boutonMarcheMonetaire1").addClass("boutonActive");
		$("#plateaudesmarches2").show();
	}
	//Dans tous les cas d�sactiver (en haut et en bas) les boutons des march�s qui ont �t� termin�s
	if(localStorage.getItem('monetaireTermine')== "true"){
		$("#boutonMarcheMonetaire1").removeClass("boutonActive");$("#boutonMarcheMonetaire1").addClass("boutonDesactive");
		$("#boutonMarcheMonetaire2").removeClass("boutonActive");$("#boutonMarcheMonetaire2").addClass("boutonDesactive");
	}
	if(localStorage.getItem('obligataireTermine')== "true"){
		$("#boutonMarcheObligataire1").removeClass("boutonActive");$("#boutonMarcheObligataire1").addClass("boutonDesactive");
		$("#boutonMarcheObligataire2").removeClass("boutonActive");$("#boutonMarcheObligataire2").addClass("boutonDesactive");
	}
	if(localStorage.getItem('actionTermine')== "true"){
		$("#boutonMarcheAction1").removeClass("boutonActive");$("#boutonMarcheAction1").addClass("boutonDesactive");
		$("#boutonMarcheAction2").removeClass("boutonActive");$("#boutonMarcheAction2").addClass("boutonDesactive");
	}
	
}



var showMenu2=function(){gestionMenuMarche();parent.$("#plateaudesmarches2").show();parent.parent.$("#plateaudesmarches2").show();$("#plateaudesmarches2").show();gestionMenuMarche();}

// affichage rubriquetab
var rubriquetabshow = function(){parent.parent.$('#marcheCourant').contents().find('#rubriquetab').css( "display", "block");}
var rubriquetabhide = function(){parent.parent.$('#marcheCourant').contents().find('#rubriquetab').css( "display", "none");}

// monetaire affichage questionnaire

var formhide = function(){parent.parent.$('#marcheCourant').contents().find('.form').css( "display", "none");}
var iframeonscreen=function(){if(idIframe=="obadrop1"){parent.$('#obadrop2').show();}}

// monetaire affichage formulaire
var formshow = function(){parent.parent.$('#marcheCourant').contents().find('.form').css( "display", "block");}

//monetaire affichage video

var monavideoshow = function(){parent.parent.$('#marcheCourant').contents().find('#monetairevideo').css( "display", "block");$('#monetairevideo').show();}


//monetaire affichage synthese  et donc set du localStorage de fin


var monasyntheseshow = function(){parent.parent.$('#marcheCourant').contents().find('#monetairesynthese').css( "display", "block");localStorage.setItem('monetaireTermine','true');localStorage.setItem('actionEnCours','false');localStorage.setItem('obligataireEnCours','false');localStorage.setItem('monetaireEnCours','false');gestionMenuMarche();$('#monetairesynthese').show();showMenu2();gestionMenuMarche();}

//obligataire  affichage vertical1
var activobavert1=function(){parent.parent.$('#marcheCourant').contents().find('.obligatairevertical1').css( "display", "block");}
//action affichage synthese
var activactavert1=function(){parent.parent.$('#marcheCourant').contents().find('.actionvertical1').css( "display", "block");}



		
		// fonction succes du march� monetaire
		var monaendfunction=function(){localStorage.setItem('monetaireEnCours',"false");localStorage.setItem('monetaireTermine',"true");gestionMenuMarche();};
	
		// fonction de validation du questionnaire.
		
		

		//fonction cacher valider
		var hidevalid=function(){$('#actionvalid').hide();}		

		
		//fonction afficher video
		
			

		
		
	

var gestionIFrames = function(){''}

// FONCTION MARCHE ACTION


	// set du localStorage de fin
	
var actadonesynthese=function(){localStorage.setItem('actionTermine','true');localStorage.setItem('actionEnCours','false');localStorage.setItem('obligataireEnCours','false');localStorage.setItem('monetaireEnCours','false');gestionMenuMarche();showMenu2();parent.gestionMenuMarche();}

// stockage des localStorage et r�cup�ration par variable

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

//fonction affichage de la synth�se et donc set des localStorage

var actionsyntheseshow = function(){$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.actionsynthese').css('display','block');parent.parent.$('#marcheCourant').contents().find('.actionsynthese').css( "display", "block");actadonesynthese();}


// fonction de test des localStorage pour affichage des exercices.

var testactiondrop2show=function(){if(actiondrop1Storage=='true'){actiondrop2show();}}
var testactionvideoshow=function(){if(actiondrop2Storage=='true'){actionvideoshow();}}
var testactionvertical2show=function(){if(actionvertical1Storage=='true'){actionvertical2show();}}
var testactionsyntheseshow=function(){if(actionvertical2Storage=='true'){actionsyntheseshow();}}

 // fonction de test global etant appliqu�e � chaque exos
 
 
 
var actatest=function(){actactualisestorage();testactiondrop2show();testactionvideoshow();testactionvertical2show();testactionsyntheseshow();}





// FONCTION MARCHE OBLIGATION


// actualisation des localStorage
var obadonesynthese=function(){localStorage.setItem('obligataireTermine','true');localStorage.setItem('actionEnCours','false');localStorage.setItem('obligataireEnCours','false');localStorage.setItem('monetaireEnCours','false');gestionMenuMarche();showMenu2();}


// stockage des localStorage et r�cup�ration par variable

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


//fonction affichage de la synth�se et donc set des localStorage
var obligatairesyntheseshow = function(){
	$('#bodymain').contents().find('#frame1').contents().find('#bodymaininside').children('#marcheCourant').contents().find('.obligatairesynthese').css('display','block');
	parent.parent.$('#marcheCourant').contents().find('.obligatairesynthese').css( "display", "block");obadonesynthese();showMenu2();}

// fonction de test des localStorage pour affichage des exercices.


var testobligatairedrop2show=function(){if(obligatairedrop1Storage=='true'){obligatairedrop2show();}}
var testobligatairevideoshow=function(){if(obligatairedrop2Storage=='true'){obligatairevideoshow();}}
var testobligatairevertical2show=function(){if(obligatairevertical1Storage=='true'){obligatairevertical2show();}}
var testobligatairesyntheseshow=function(){if(obligatairevertical2Storage=='true'){obligatairesyntheseshow();}}

 // fonction de test global etant appliqu�e � chaque exos
 
 
 
var obatest=function(){obactualisestorage();testobligatairedrop2show();testobligatairevideoshow();testobligatairevertical2show();testobligatairesyntheseshow();}












