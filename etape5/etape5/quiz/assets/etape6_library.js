


var downloadFicheA = function(){window.open('docs/ficheA.pdf');}
var downloadFicheB = function(){window.open('docs/ficheB.pdf');}
var downloadFicheC = function(){window.open('docs/ficheC.pdf');}
var downloadFicheCter = function(){window.open('docs/ficheCter.pdf');}
var downloadFicheD = function(){window.open('docs/ficheD.pdf');}
var downloadFicheE = function(){window.open('docs/ficheE.pdf');}




var ficheAPower=0;
var ficheBPower=0;
var ficheBPower2=0;
var ficheCPower=0;
var ficheCterPower=0;
var ficheDPower=0;
var ficheEPower=0;
var ficheFPower=0;

var viewFicheA =function(){
	
	if(ficheAPower==0){ficheAPower=1;$('#ficheA').fadeIn(500);$('#VficheA').text("fermer");}
	else if (ficheAPower==1){ficheAPower=0;$('#ficheA').fadeOut(500);$('#VficheA').text("voir");}

	
}

var viewFicheB =function(){
	
	if(ficheBPower==0){ficheBPower=1;$('#ficheB').fadeIn(500);;$('#VficheB').text("fermer");}
	else if (ficheBPower==1){ficheBPower=0;$('#ficheB').fadeOut(500);$('#VficheB').text("voir");}

	
}
var viewFicheB2 =function(){

	if(ficheBPower2==0){ficheBPower2=1;$('#ficheB2').fadeIn(500);$('#VficheB2').text("fermer");}
	else if (ficheBPower2==1){ficheBPower2=0;$('#ficheB2').fadeOut(500);$('#VficheB2').text("voir");}

	
}
var viewFicheC =function(){
	
	if(ficheCPower==0){ficheCPower=1;$('#ficheC').fadeIn(500);$('#VficheC').text("fermer");}
	else if (ficheCPower==1){ficheCPower=0;$('#ficheC').fadeOut(500);$('#VficheC').text("voir");}

	
}
var viewFicheCter =function(){
	
	if(ficheCterPower==0){ficheCterPower=1;$('#ficheCter').fadeIn(500);$('#VficheCter').text("fermer");}
	else if (ficheCterPower==1){ficheCterPower=0;$('#ficheCter').fadeOut(500);$('#VficheCter').text("voir");}

	
}
var viewFicheD =function(){
	
	if(ficheDPower==0){ficheDPower=1;$('#ficheD').fadeIn(500);$('#VficheD').text("fermer");}
	else if (ficheDPower==1){ficheDPower=0;$('#ficheD').fadeOut(500);$('#VficheD').text("voir");}

	
}
var viewFicheE =function(){
	
	if(ficheEPower==0){ficheEPower=1;$('#ficheE').fadeIn(500);$('#VficheE').text("fermer");}
	else if (ficheEPower==1){ficheEPower=0;$('#ficheE').fadeOut(500);$('#VficheE').text("voir");}

	
}




var popfunk = function(item) {
    var cible = item.id;;
    var size = cible.length;
    var sub = size - 5;
    var sub2 = size - 6;
    // retouver le nom de la popup appartenant
    var myString = cible;
    var pool = myString.substring(0, sub);
    var pool2 = myString.substring(0, sub2);
    var source = document.getElementById(pool).innerHTML;
    document.getElementById(pool2 + 'infobulle2').style.display = "block";
    document.getElementById(pool2 + 'infobulle2').innerHTML = source;
};
var popfunkout = function(item) {
    var cible = item.id;;
    var size = cible.length;
    var sub = size - 5;
    var sub2 = size - 6;
    // retouver le nom de la popup appartenant
    var myString = cible;
    var pool = myString.substring(0, sub);
    var pool2 = myString.substring(0, sub2);
    var source = document.getElementById(pool).innerHTML;
    document.getElementById(pool2 + 'infobulle2').style.display = "none";
};




























