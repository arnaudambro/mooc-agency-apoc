
 $(document).ready(function(){
               $(".fakeloader").fakeLoader({
                   timeToHide:4000,
                   bgColor:"#CECECE",                               
                   spinner:"spinner5"
               });
      	  
      	  localStorage.clear();
      	  localStorage.setItem('actionEnCours','false' );
      	  localStorage.setItem('monetaireEnCours','false') ;
      	  localStorage.setItem('obligataireEnCours', 'false');
      	   localStorage.setItem('actionTermine','false' );
      	  localStorage.setItem('monetaireTermine','false') ;
      	  localStorage.setItem('obligataireTermine', 'false');
      	    $('.placeholdermenu').bind('mouseenter',function(){ 
      	 
      	 var $elem = $(this);
         $elem.stop(true);
       
           $elem.animate({'height':'300px'},1000)
           
           $elem.find('.sdt_link').hide();
           
           
           
           
           
      	 
      	})
      
      
      $('.placeholdermenu').bind('mouseleave',function(){ 
      	 
      	 var $elem = $(this);
        $elem.stop(true)
       
           $elem.animate({'height':'50px'},1000)
           
           $elem.find('.sdt_link').show();
           
           
           
           
           
      	 
      	})
      	
      	
               });
      	  
      	  var rotonda=localStorage.getItem('actionEnCours' )+localStorage.getItem('monetaireEnCours') +localStorage.getItem('obligataireEnCours' )+ localStorage.getItem('actionTermine' )+localStorage.getItem('monetaireTermine') + localStorage.getItem('obligataireTermine' );
      
      	  
      var openmenu=0;
      	  
      var gestionmenu=function(){
      
      if(openmenu==0){$('.bclose').fadeOut("slow");openmenu=1;$('.icoclose').css("filter","contrast(200%)");}
      else{$('.bclose').fadeIn("slow");openmenu=0;$('.icoclose').css("filter","contrast(100%)") ;}
      
      
      } 
      	  


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
	if(titrePer>10){
		titreselect=1;
	}
	else if(actaPer>=60&&titrePer<10){
		actaselect=1;
	}
	else if(monaPer==100){
		monaselect=1;
	}
	else if(actaPer<10&&(obaPer+monaPer)>=90&&titrePer<10){
		obaselect=1;
	}
	else{
		diversselect=1;
	}
	
	//we check if the type of fund is consistent with the answer given
	if(actaselect==1&&commq1==1){bigcheck=1;}
	if(monaselect==1&&commq2==1){bigcheck=1;}
	if(diversselect==1&&commq3==1){bigcheck=1;}
	if(titreselect==1&&commq4==1){bigcheck=1;}
	if(obaselect==1&&commq5==1){bigcheck=1;}
	
	if(bigcheck==1){
		hidevalid();
		onscreencongrat4();
	}if(bigcheck==0){
		onscreennocongrat4();
	}
}

// CUSTOM ALERT

function CustomAlert4(){
	
	var position = document.getElementById('');
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = '1900px';
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "none";
        dialogoverlay.style.height = "1900px";
        dialogbox.style.left = 30+(winW/2) - (300* .5)+"px";
        dialogbox.style.top = '3400px';
        dialogbox.style.display = "block";
        
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<p id="ok" onclick="Alert.ok()">OK</p>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert4 = new CustomAlert4();



// FIN CUSTOM ALERTT

	







// CONGRAT





// FIN CONGRAT

		
		
		
		
		

