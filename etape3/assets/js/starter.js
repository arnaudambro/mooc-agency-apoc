//VARIABLE DE DEPART

var idIframe=window.frameElement.getAttribute('id');

// LISTES DE VARIABLES

		// Variable du marché 
		
		
	// les variables gamecount servent à determiner les positions des acteurs sur l'axe vertical et
	// également les bonnes reponses lors de la validation	
		
var game1col1count=3;
var game1col2count=3;
var game1col3count=3;
var game1col4count=3;
var game1col5count=3;



// variable de recupération des noms de carte.


var itemname1 = parent.$('#'+idIframe).data("item1-name");
var itemname2 = parent.$('#'+idIframe).data("item2-name");
var itemname3 = parent.$('#'+idIframe).data("item3-name");
var itemname4 = parent.$('#'+idIframe).data("item4-name");
var itemname5 = parent.$('#'+idIframe).data("item5-name");

// variable carte par exercice

var carte1="<div class='textinside'>"+itemname1+"</div>";
var carte2="<div class='textinside'>"+itemname2+"</div>";
var carte3="<div class='textinside'>"+itemname3+"</div>";
var carte4="<div class='textinside'>"+itemname4+"</div>";
var carte5="<div class='textinside'>"+itemname5+"</div>";




// variable de correction




var itemplace1 = parent.$('#'+idIframe).data("item1-place");
var itemplace2 = parent.$('#'+idIframe).data("item2-place");
var itemplace3 = parent.$('#'+idIframe).data("item3-place");
var itemplace4 = parent.$('#'+idIframe).data("item4-place");
var itemplace5 = parent.$('#'+idIframe).data("item5-place");



//variable du nombre de colonnes

var nbrcol=parent.$('#'+idIframe).data("nbrcol");




//variable etat d'avancement.

var gamestart=function(){localStorage.setItem(idIframe+"started","true");localStorage.setItem(idIframe+"done","false");};
var gamesdone=function(){localStorage.setItem(idIframe+"started","false");localStorage.setItem(idIframe+"done","true");};



// nbr colonnes ecran


var colonscreen=function(){
								if(nbrcol==4){$('#placeholderlign5').hide();game1col5count=0;
								$('.container').css('margin-left','60px');$('#actionvalid').css('margin-left','410px');} 				
								}  	

var colonscreen2=function(){ 	if(nbrcol==3){$('#placeholderlign5').hide();
												$('#placeholderlign4').hide();game1col4count=0;game1col5count=0;
												$('.container').css('margin-left','120px');
												$('#actionvalid').css('margin-left','350px');} 						 					
												}  

var start=function(){
	
	



	
	
	gamestart();
	colonscreen();
	colonscreen2();
	
	
$("#actionvalid" ).click(function() 
		{
		if( game1col1count==itemplace1 && game1col2count==itemplace2 && game1col3count==itemplace3 && game1col4count==itemplace4 && game1col5count==itemplace5)
	
		{
		onscreencongrat();$('#actionvalid').hide();//gestionIFrames();gamesdone();
		gamesdone();
		gestionIFrames();
		}
		
		else{onscreennocongrat();}
		}
			
						);

	


// affichage des cartes ligne III de chaque colonne



$('#placeholderL1n'+game1col1count).removeClass("placeholder").addClass("placeholderactiv");
$('#placeholderL1n'+game1col1count).html(carte1);
$('#placeholderL2n'+game1col1count).removeClass("placeholder").addClass("placeholderactiv");
$('#placeholderL2n'+game1col1count).html(carte2);
$('#placeholderL3n'+game1col1count).removeClass("placeholder").addClass("placeholderactiv");
$('#placeholderL3n'+game1col1count).html(carte3);
$('#placeholderL4n'+game1col1count).removeClass("placeholder").addClass("placeholderactiv");
$('#placeholderL4n'+game1col1count).html(carte4);		
$('#placeholderL5n'+game1col1count).removeClass("placeholder").addClass("placeholderactiv");
$('#placeholderL5n'+game1col1count).html(carte5);		
	
	
// affichage des cartes ligne III de chaque colonne




// COMPORTEMENT PAR COLONNE

	// COMPORTEMENT COLONNE1
	
	
	$("#arrowupcol1" ).click(function() 
	{
		if(game1col1count<=4)
	
		{
		game1col1count=game1col1count+1;
		$('#placeholderL1n'+game1col1count).removeClass("placeholder").addClass("placeholderactiv");
		$('#placeholderL1n'+game1col1count).html(carte1);
		$('#placeholderL1n'+(game1col1count-1)).removeClass("placeholderactiv").addClass("placeholder");
		$('#placeholderL1n'+(game1col1count-1)).html("");
		
		
		}
										
										
	});

	$("#arrowdowncol1" ).click(function() 
	{
			if(game1col1count>=2)
				
			{
			game1col1count=game1col1count-1;
			$('#placeholderL1n'+game1col1count).removeClass("placeholder").addClass("placeholderactiv");
			$('#placeholderL1n'+game1col1count).html(carte1);
			$('#placeholderL1n'+(game1col1count+1)).removeClass("placeholderactiv").addClass("placeholder");
			$('#placeholderL1n'+(game1col1count+1)).html("");
											
			
			}
										
										
	});
										
	// FIN COMPORTEMECOLONNE1
	
	
	
		// COMPORTEMENT COLONNE2
	
	
	$("#arrowupcol2" ).click(function() 
	{
		if(game1col2count<=4)
	
		{
		game1col2count=game1col2count+1;
		$('#placeholderL2n'+game1col2count).removeClass("placeholder").addClass("placeholderactiv");
		$('#placeholderL2n'+game1col2count).html(carte2);
		$('#placeholderL2n'+(game1col2count-1)).removeClass("placeholderactiv").addClass("placeholder");
		$('#placeholderL2n'+(game1col2count-1)).html("");
		
		
		}
										
										
	});

	$("#arrowdowncol2" ).click(function() 
	{
			if(game1col2count>=2)
				
			{
			game1col2count=game1col2count-1;
			$('#placeholderL2n'+game1col2count).removeClass("placeholder").addClass("placeholderactiv");
			$('#placeholderL2n'+game1col2count).html(carte2);
			$('#placeholderL2n'+(game1col2count+1)).removeClass("placeholderactiv").addClass("placeholder");
			$('#placeholderL2n'+(game1col2count+1)).html("");
											
			
			}
										
										
	});
										
	// FIN COMPORTEMECOLONNE2
	
	
	
			// COMPORTEMENT COLONNE3
	
	
	$("#arrowupcol3" ).click(function() 
	{
		if(game1col3count<=4)
	
		{
		game1col3count=game1col3count+1;
		$('#placeholderL3n'+game1col3count).removeClass("placeholder").addClass("placeholderactiv");
		$('#placeholderL3n'+game1col3count).html(carte3);
		$('#placeholderL3n'+(game1col3count-1)).removeClass("placeholderactiv").addClass("placeholder");
		$('#placeholderL3n'+(game1col3count-1)).html("");
		
		
		}
										
										
	});

	$("#arrowdowncol3" ).click(function() 
	{
			if(game1col3count>=2)
				
			{
			game1col3count=game1col3count-1;
			$('#placeholderL3n'+game1col3count).removeClass("placeholder").addClass("placeholderactiv");
			$('#placeholderL3n'+game1col3count).html(carte3);
			$('#placeholderL3n'+(game1col3count+1)).removeClass("placeholderactiv").addClass("placeholder");
			$('#placeholderL3n'+(game1col3count+1)).html("");
											
			
			}
										
										
	});
										
	// FIN COMPORTEMECOLONNE3
	
	

	
	
	
			// COMPORTEMENT COLONNE4
	
	
	$("#arrowupcol4" ).click(function() 
	{
		if(game1col4count<=4)
	
		{
		game1col4count=game1col4count+1;
		$('#placeholderL4n'+game1col4count).removeClass("placeholder").addClass("placeholderactiv");
		$('#placeholderL4n'+game1col4count).html(carte4);
		$('#placeholderL4n'+(game1col4count-1)).removeClass("placeholderactiv").addClass("placeholder");
		$('#placeholderL4n'+(game1col4count-1)).html("");
		
		
		}
										
										
	});

	$("#arrowdowncol4" ).click(function() 
	{
			if(game1col4count>=2)
				
			{
			game1col4count=game1col4count-1;
			$('#placeholderL4n'+game1col4count).removeClass("placeholder").addClass("placeholderactiv");
			$('#placeholderL4n'+game1col4count).html(carte4);
			$('#placeholderL4n'+(game1col4count+1)).removeClass("placeholderactiv").addClass("placeholder");
			$('#placeholderL4n'+(game1col4count+1)).html("");
											
			
			}
										
										
	});
										
	// FIN COMPORTEMECOLONNE4
	
	
			// COMPORTEMENT COLONNE5
	
	
	$("#arrowupcol5" ).click(function() 
	{
		if(game1col5count<=4)
	
		{
		game1col5count=game1col5count+1;
		$('#placeholderL5n'+game1col5count).removeClass("placeholder").addClass("placeholderactiv");
		$('#placeholderL5n'+game1col5count).html(carte5);
		$('#placeholderL5n'+(game1col5count-1)).removeClass("placeholderactiv").addClass("placeholder");
		$('#placeholderL5n'+(game1col5count-1)).html("");
		
		
		}
										
										
	});

	$("#arrowdowncol5" ).click(function() 
	{
			if(game1col5count>=2)
				
			{
			game1col5count=game1col5count-1;
			$('#placeholderL5n'+game1col5count).removeClass("placeholder").addClass("placeholderactiv");
			$('#placeholderL5n'+game1col5count).html(carte5);
			$('#placeholderL5n'+(game1col5count+1)).removeClass("placeholderactiv").addClass("placeholder");
			$('#placeholderL5n'+(game1col5count+1)).html("");
											
			
			}
										
										
	});
										
	// FIN COMPORTEMECOLONNE5
	
	

	

;}








// CUSTOM ALERT

function CustomAlert(){
	
	var position = document.getElementById('placeholderL3n3');
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "none";
        dialogoverlay.style.height = "100px";
        dialogbox.style.left = (winW/2) - (300* .5)+"px";
        dialogbox.style.top = "100";
        dialogbox.style.display = "block";
        
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<p id="ok" onclick="Alert.ok()">OK</p>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();



// FIN CUSTOM ALERTT









// CONGRAT

var onscreencongrat2=function(){Alert.render("BRAVO ! C'EST LA BONNE RÉPONSE.");}



var onscreencongrat=function(){Alert.render("BRAVO ! C'EST LA BONNE RÉPONSE.");};



var onscreennocongrat=function(){Alert.render("CE N'EST PAS LA BONNE RÉPONSE. RÉESSAYEZ !");};




// FIN CONGRAT





// ZONE DE TEST



$(window).load(function() {
	$(".loader").fadeOut("1000");
})


//window.localStorage.clear();









		

		

