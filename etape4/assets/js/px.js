




var rubriqueinfobulle1 ="<div><span class='rubriquetitle'>FONDS ACTIONS</span></br><span class='glossary' style='font-size:15px;'>Cf. Glossaire</span></br></br>Pour être classifié « fonds actions » par l’AMF, il faut être composé d’au moins 60% d’actions, le solde pouvant être indifféremment constitué d’obligations ou de monétaire.</div>"

var rubriqueinfobulle5 ="<div><span class='rubriquetitle'>FONDS OBLIGATAIRE</span></br><span class='glossary' style='font-size:15px;'>Cf. Glossaire</span></br></br> Pour être classifié « fonds obligataire » par l’AMF, il faut être composé d’au plus 10% d’actions, le solde pouvant être indifféremment constitué d’obligations ou de monétaire.</div>"


var rubriqueinfobulle2 ="<div><span class='rubriquetitle'>FONDS MONÉTAIRE</span></br><span class='glossary' style='font-size:15px;'>Cf. Glossaire</span></br></br>Pour être classifié « fonds monétaire » par l’AMF, il faut être constitué quasi exclusivement de titres de créance négociables. L’AMF classifie les fonds monétaires en fonction de la durée des titres qui les composent, ce qui ne permet de fait qu’une faible proportion d’obligations de maturité courte, et  bien sûr aucune action. Plus la durée des titres détenus est courte, moins le fonds est risqué.</div>"


var rubriqueinfobulle3 ="<div><span class='rubriquetitle'>FONDS DIVERSIFIÉ</span></br><span class='glossary' style='font-size:15px;'>Cf. Glossaire</span></br></br>Pour être classifié «fonds diversifié» par l’AMF, il faut n’être ni un fonds actions (plus de 60% d’actions), ni un fonds obligataire (moins de 10% d’actions), ni un fonds monétaire (critères de durée des titres détenus), ni un fonds en titres de l’entreprise (entre 10 et 100% de titres de l’entreprise).</div>"


var rubriqueinfobulle4 ="<div><span class='rubriquetitle'>FONDS EN TITRE DE L'ENTREPRISE </span></br><span class='glossary' style='font-size:15px;'>Cf. Glossaire</span></br></br>Pour être classifié « fonds en titres de l’entreprise » par l’AMF, il faut être composé d’au plus un tiers en titres de l’entreprise (fonds diversifié en titres de l’entreprise) ou d’au moins un tiers en titres de l’entreprise (fonds d’actionnariat salarié), le solde pouvant être indifféremment constitué d’actions, d’obligations ou de monétaire.</div>"


var infoshow1=function(){
document.getElementById('infobulle2').style.display = "block";
document.getElementById('infobulle2').innerHTML = rubriqueinfobulle1;
};
var infohide1=function(){
document.getElementById('infobulle2').style.display = "none";
};

var infoshow2=function(){
document.getElementById('infobulle2').style.display = "block";
document.getElementById('infobulle2').innerHTML = rubriqueinfobulle2;
};
var infohide2=function(){
document.getElementById('infobulle2').style.display = "none";
};

var infoshow3=function(){
document.getElementById('infobulle2').style.display = "block";
document.getElementById('infobulle2').innerHTML = rubriqueinfobulle3;
};
var infohide3=function(){
document.getElementById('infobulle2').style.display = "none";
};
var infoshow4=function(){
document.getElementById('infobulle2').style.display = "block";
document.getElementById('infobulle2').innerHTML = rubriqueinfobulle4;
};
var infohide4=function(){
document.getElementById('infobulle2').style.display = "none";
};

var infoshow5=function(){
document.getElementById('infobulle2').style.display = "block";
document.getElementById('infobulle2').innerHTML = rubriqueinfobulle5;
};
var infohide5=function(){
document.getElementById('infobulle2').style.display = "none";
};



var simul1afunc=function(){

window.open(
'http://caam.harvest.fr/endyvesDpi/',
'_blank' // <- This is what makes it open in a new window.
);

}
var simul2afunc=function(){

window.open(
'http://caam.harvest.fr/simcaam/daa/enter.do',
'_blank' // <- This is what makes it open in a new window.
);

}

  
 	var goToQuiz=function(){$('.quizSpell').show();
							parent.$('#mainContainer').hide();
							
						$('html,body', window.document).animate({
    scrollTop: '0px'
	}, 'slow');
						}
							
							
							
							
				var backAgain=function(){$('.quizSpell').hide();
							parent.$('#mainContainer').show();
							
						$('html,body', window.document).animate({
    scrollTop: '0px'
	}, 'slow');
						}
											
var ex2ShowV=function(){$("#ex2").css("visibility","visible");};							
							


// variable questionnaire

		var commq1=0;
		var commq2=0;
		var commq3=0;
		var commq4=0;
		var commq5=0;

	
		
		var questcommq1=function(){if(commq1==0){commq1=1;commq5=0;commq2=0;commq3=0;commq4=0;
			$('#actioncommq1').removeClass("buttonquestion");$('#actioncommq1').addClass( "buttonquestionactive" );
			$('#actioncommq4').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq3').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq2').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq5').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		else{commq1=0;$('#actioncommq1').removeClass("buttonquestionactive");$('#actioncommq1').addClass( "buttonquestion" );
		}
		};
		
		
		var questcommq2=function(){if(commq2==0){commq2=1;commq1=0;commq5=0;commq3=0;commq4=0;
			$('#actioncommq2').removeClass("buttonquestion");$('#actioncommq2').addClass( "buttonquestionactive" );
			$('#actioncommq4').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq3').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq1').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq5').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		else{commq2=0;$('#actioncommq2').removeClass("buttonquestionactive");$('#actioncommq2').addClass( "buttonquestion" );
		}
		};
		
		var questcommq3=function(){if(commq3==0){commq3=1;commq1=0;commq2=0;commq5=0;commq4=0;
			$('#actioncommq3').removeClass("buttonquestion");$('#actioncommq3').addClass( "buttonquestionactive" );
			$('#actioncommq4').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq1').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq2').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq5').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		else{commq3=0;$('#actioncommq3').removeClass("buttonquestionactive");$('#actioncommq3').addClass( "buttonquestion" );
		}
		};
		
		var questcommq4=function(){if(commq4==0){commq4=1;commq1=0;commq2=0;commq3=0;commq5=0;
			$('#actioncommq4').removeClass("buttonquestion").addClass( "buttonquestionactive" );
			$('#actioncommq3').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq1').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq2').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq5').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		else{commq4=0;$('#actioncommq4').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		};
		var questcommq5=function(){if(commq5==0){commq5=1;commq1=0;commq2=0;commq3=0;commq4=0;
			$('#actioncommq5').removeClass("buttonquestion").addClass( "buttonquestionactive" );
			$('#actioncommq4').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq3').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq1').removeClass("buttonquestionactive").addClass( "buttonquestion" );
			$('#actioncommq2').removeClass("buttonquestionactive").addClass( "buttonquestion" );

		}
		else{commq5=0;$('#actioncommq5').removeClass("buttonquestionactive").addClass( "buttonquestion" );
		}
		};
		

		
		// fonction succes du marché monetaire
		var monaendfunction=function(){localStorage.setItem('monetaireEnCours',"false");localStorage.setItem('monetaireTermine',"true");gestionMenuMarche();};



		//fonction cacher valider
		var hidevalid=function(){$('#actionvalid').hide();}		
	

		
//fonction de selection des données


var actaselect=0;
var monaselect=0;
var diversselect=1;
var titreselect=0;
var obaselect=0;



// questionnaire

var showform=function(){
	$('#ex2').show();
	
}



//fonction localstorage diagramme
		
var monaPer=localStorage.getItem('percentmonetaires');
var actaPer=localStorage.getItem('percentactions');
var obaPer=localStorage.getItem('percentobligations');
var titrePer=localStorage.getItem('percenttitres');

var scrollFor4=0;

//fonction validation questionnaire
function checkrep4(){
	//by default the user is wrong
	bigcheck=0;
	
	//we get the composition of the fund	
	monaPer=parseInt(localStorage.getItem('percentmonetaires'));
	actaPer=parseInt(localStorage.getItem('percentactions'));
	obaPer=parseInt(localStorage.getItem('percentobligations'));
	titrePer=parseInt(localStorage.getItem('percenttitres'));
	actaselect=0;monaselect=0;obaselect=0;titreselect=0;diversselect=0;
	
	//we find the type of fund
	if(titrePer>=10){
		titreselect=1;
	}
	else if(actaPer>=60&&titrePer<10){
		actaselect=1;
	}
	else if(monaPer==100){
		monaselect=1;
	}
	else if((obaPer+monaPer)>=90&&titrePer<10){
		obaselect=1;
	}
	else{
		diversselect=1;
	}
	
	//we check if the type of fund is consistent with the answer given
	if(actaselect==1&&commq1==1){bigcheck=1;$('#actioncommq1').css("border","4px solid #8BC045");}
	if(monaselect==1&&commq2==1){bigcheck=1;$('#actioncommq2').css("border","4px solid #8BC045");}
	if(diversselect==1&&commq3==1){bigcheck=1;$('#actioncommq3').css("border","4px solid #8BC045");}
	if(titreselect==1&&commq4==1){bigcheck=1;$('#actioncommq4').css("border","4px solid #8BC045");}
	if(obaselect==1&&commq5==1){bigcheck=1;$('#actioncommq5').css("border","4px solid #8BC045");}
	
	if(bigcheck==1){
		hidevalid();
		onscreencongrat4();scrollFor4=1;
	}if(bigcheck==0){
		onscreennocongrat4();scrollFor4=0;
	}
}


// FIN CUSTOM ALERTT









// CONGRAT





// FIN CONGRAT

		
		
		
		
		

