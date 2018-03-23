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






// variable infobulle


		// contenu dynamique des infobulle.




		// fonction mouseover mouseout des infobulles

		var monarubriqueinfobulle2on1=function(){
			document.getElementById('infobulle2').style.display = "block";
			document.getElementById('infobulle2').innerHTML = monarubriqueinfobulle1;
		};
		var monarubriqueinfobulle2off1=function(){
			document.getElementById('infobulle2').style.display = "none";
			};					
		
		var monarubriqueinfobulle2on2=function(){
			document.getElementById('infobulle2').style.display = "block";
			document.getElementById('infobulle2').innerHTML = monarubriqueinfobulle2;
		};
		var monarubriqueinfobulle2off2=function(){
			document.getElementById('infobulle2').style.display = "none";
		};					
		
		var monarubriqueinfobulle2on3=function(){
			document.getElementById('infobulle2').style.display = "block";
			document.getElementById('infobulle2').innerHTML = monarubriqueinfobulle3;
		};
		var monarubriqueinfobulle2off3=function(){
			document.getElementById('infobulle2').style.display = "none";
		};					
		var monarubriqueinfobulle2on4=function(){
			document.getElementById('infobulle2').style.display = "block";
			document.getElementById('infobulle2').innerHTML = monarubriqueinfobulle4;
		};
		var monarubriqueinfobulle2off4=function(){
			document.getElementById('infobulle2').style.display = "none";
		};	

	var monarubriqueinfobulle2on5=function(){
			document.getElementById('infobulle2').style.display = "block";
			document.getElementById('infobulle2').innerHTML = monarubriqueinfobulle5;
		};
		var monarubriqueinfobulle2off5=function(){
			document.getElementById('infobulle2').style.display = "none";
		}		
		
		// fin variable infobulle	




// variable questionnaire

		var commq1=0;
		var commq2=0;
		var commq3=0;
		var commq4=0;
		var commq5=0;
		var diffq1=0;
		var diffq2=0;
		var diffq3=0;
		var diffq4=0;
		var diffq5=0;
		
		var questcommq1=function(){if(commq1==0){commq1=1;$('#actioncommq1').removeClass("buttonquestion");$('#actioncommq1').addClass( "buttonquestionactive" );
		}
		else{commq1=0;$('#actioncommq1').removeClass("buttonquestionactive");$('#actioncommq1').addClass( "buttonquestion" );
		}
		};
		
		
		var questcommq2=function(){if(commq2==0){commq2=1;$('#actioncommq2').removeClass("buttonquestion");$('#actioncommq2').addClass( "buttonquestionactive" );
		}
		else{commq2=0;$('#actioncommq2').removeClass("buttonquestionactive");$('#actioncommq2').addClass( "buttonquestion" );
		}
		};
		
		var questcommq3=function(){if(commq3==0){commq3=1;$('#actioncommq3').removeClass("buttonquestion");$('#actioncommq3').addClass( "buttonquestionactive" );
		}
		else{commq3=0;$('#actioncommq3').removeClass("buttonquestionactive");$('#actioncommq3').addClass( "buttonquestion" );
		}
		};
		
		var questcommq4=function(){if(commq4==0){commq4=1;$('#actioncommq4').removeClass("buttonquestion").addClass( "buttonquestionactive" );
		}
		else{commq4=0;$('#actioncommq4').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		};
		var questcommq5=function(){if(commq5==0){commq5=1;$('#actioncommq5').removeClass("buttonquestion").addClass( "buttonquestionactive" );
		}
		else{commq5=0;$('#actioncommq5').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		};
		
		
		var questdiffq1=function(){if(diffq1==0){diffq1=1;$('#actiondiffq1').removeClass("buttonquestion").addClass( "buttonquestionactive" );
		}
		else{diffq1=0;$('#actiondiffq1').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		};
		
		
		var questdiffq2=function(){if(diffq2==0){diffq2=1;$('#actiondiffq2').removeClass("buttonquestion").addClass( "buttonquestionactive" );
		}
		else{diffq2=0;$('#actiondiffq2').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		};
		
		var questdiffq3=function(){if(diffq3==0){diffq3=1;$('#actiondiffq3').removeClass("buttonquestion").addClass( "buttonquestionactive" );
		}
		else{diffq3=0;$('#actiondiffq3').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		};
		
		var questdiffq4=function(){if(diffq4==0){diffq4=1;$('#actiondiffq4').removeClass("buttonquestion").addClass( "buttonquestionactive" );
		}
		else{diffq4=0;$('#actiondiffq4').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		};
		var questdiffq5=function(){if(diffq5==0){diffq5=1;$('#actiondiffq5').removeClass("buttonquestion").addClass( "buttonquestionactive" );
		}
		else{diffq5=0;$('#actiondiffq5').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		};
		
		

		
		
		

