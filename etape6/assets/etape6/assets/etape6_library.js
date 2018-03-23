
var indiciel=localStorage.getItem("PassIndQtClass");
var garanti=localStorage.getItem("PassStrQtClass");
var benchmark=localStorage.getItem("ActBenClass6");
var nonBenchmark=localStorage.getItem("ActNbenQalClass");


// ficheBdiv   >> en titres de l’entreprise
// ficheAdiv >>> indiciel
// ficheEdiv >>  garanti
// ficheCdiv >>>  Fiche Fonds Actions C
// ficheB2div >>> benchmarké
// ficheDdiv >>> non benchmarké
// ficheCterdiv>>>  Fiche Fonds Actions C ter
var prompt5=function(){localStorage.clear();localStorage.setItem("ActBenClass6",1);example();}
var showFiche=function(){
	
indiciel=localStorage.getItem("PassIndQtClass");
garanti=localStorage.getItem("PassStrQtClass");
benchmark=localStorage.getItem("ActBenClass6");
nonBenchmark=localStorage.getItem("ActNbenQalClass");
	
	
// if(iiiiii==1){$("ficheBdiv").show(); } 
if(indiciel==1){$("ficheAdiv").show();$('#frame1').contents().find("#ficheAdiv").show();}
if(garanti==1){$("ficheEdiv").show();$('#frame1').contents().find("#ficheEdiv").show();}
// if(iiiiii==1){$("ficheCdiv").show();}
if(benchmark==1){$("ficheB2div").show();$('#frame1').contents().find("#ficheB2rdiv").show();}
if(nonBenchmark==1){$("ficheDdiv").show();$('#frame1').contents().find("#ficheDdiv").show();}
// if(iiiiii==1){$("ficheCterdiv").show();}


}


 // A decommenter pour EDF 
 // A decommenter pour EDF 
 // A decommenter pour EDF 
 // A decommenter pour EDF 
 // A decommenter pour EDF 
 // A decommenter pour EDF 
// var prompt5=function(){ if (confirm("Voulez - vous simuler les données de prises en compte à l'étape 5?")) { // Clic sur OK
         // example();
       // }}

	   
	   

	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   

 var example=function(){ 

check5to6();
showFiche();
 };
	 





var cursorX;
var cursorY;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}



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
                  dialogbox.style.top = cursorY-90;
                  dialogbox.style.display = "block";
                  
                  document.getElementById('dialogboxbody').innerHTML = dialog;
                  document.getElementById('dialogboxfoot').innerHTML = '<p id="ok" onclick="Alert.ok()">X</p>';
               }
               this.ok = function(){
               document.getElementById('dialogbox').style.display = "none";
               document.getElementById('dialogoverlay').style.display = "none";
         
               }
               }











var downloadFicheA = function(){window.open('docs/ficheA.pdf');}
var downloadFicheB = function(){window.open('docs/ficheB.pdf');}
var downloadFicheC = function(){window.open('docs/ficheC.pdf');}
var downloadFicheCter = function(){window.open('docs/ficheCter.pdf');}
var downloadFicheD = function(){window.open('docs/ficheD.pdf');}
var downloadFicheE = function(){window.open('docs/ficheE.pdf');}
var downloadFicheOba1 = function(){window.open('docs/ficheOba1.pdf');}

var parentResize=function(){console.log('test');}



var indexframeHeightPlus=1;
var indexframeHeightSub=1;

var parentResizePlus = function(){indexframeHeight=parent.parent.$('#indexframe').height();indexframeHeightPlus=indexframeHeight+1000;parent.parent.$('#indexframe').height(indexframeHeightPlus);parent.parent.$('#IndexFrame1').height(indexframeHeightPlus);}
var parentResizeSub = function(){indexframeHeight=parent.parent.$('#indexframe').height();indexframeHeightSub=indexframeHeight-1000;parent.parent.$('#indexframe').height(indexframeHeightSub);parent.parent.$('#IndexFrame1').height(indexframeHeightSub);}

var scrollpoint=function() {
  $('html,body').animate({
      scrollTop:parent.parent.parent.$("#pointblock").offset().top},
      3500);


			};

var scrollpoint2=function() {
  $('html,body').animate({
      scrollTop:parent.parent.$("#pointblock").offset().top},
      3500);


			};

var scrollpoint3=function() {
  $('html,body').animate({
      scrollTop:$("#pointblock").offset().top},
      3500);


			};


var pullupfdacta=function(){

parent.$('#actaframe').fadeIn(500);
parent.parent.$('#actaframe').fadeIn(500);
parent.$('.noacta').fadeOut(500);
parent.parent.$('.noacta').fadeOut(500);

scrollpoint();scrollpoint2();
parent.parent.scrollpoint3();parent.$('#bigTitle').fadeOut(500);
localStorage.setItem('actastep6',99);
parent.$('#actamenu').attr('src','etape6/menu.html');
parent.parent.$('#actamenu').attr('src','etape6/menu.html');
parent.parent.parent.re5ScrollStep1();
}

var goToQuiz=function(){
parent.$('.nomenu').fadeOut(500);
parent.parent.$('.nomenu').fadeOut(500);
scrollpoint();
scrollpoint2();
parent.parent.scrollpoint3();
parent.$('#quizPart2').fadeIn(500);
parent.parent.$('#quizPart2').fadeIn(500);
parent.$('#quizPart1').fadeIn(500);
parent.parent.$('#quizPart1').fadeIn(500);



}




var pullupfdobamona=function(){

parent.$('.nooba').fadeOut(500);
parent.parent.$('.nooba').fadeOut(500);
parent.$('#obaframe').fadeIn(500);
parent.parent.$('#obaframe').fadeIn(500);

scrollpoint();scrollpoint2();
parent.parent.scrollpoint3();
parent.$('#bigTitle').fadeOut(500);
parent.$('#obamenu').attr('src','etape6/menu.html');
parent.parent.$('#obamenu').attr('src','etape6/menu.html');
localStorage.setItem('obastep6',99);
parent.parent.parent.re5ScrollStep1();

}
var pullupfmona=function(){parent.$('.nomona').fadeOut(500);
parent.parent.$('.nomona').fadeOut(500);
parent.$('#monaframe').fadeIn(500);
parent.parent.$('#monaframe').fadeIn(500);

scrollpoint();scrollpoint2();
parent.parent.scrollpoint3();
localStorage.setItem('monastep6',99);
parent.$('#monamenu').attr('src','etape6/menu.html');
parent.parent.$('#monamenu').attr('src','etape6/menu.html');
parent.parent.parent.re5ScrollStep1();



}


var pullupfdiva=function(){
	parent.$('#divaframe').fadeIn(500);
parent.parent.$('#divaframe').fadeIn(500);

	parent.$('.nodiva').fadeOut(500);
parent.parent.$('.nodiva').fadeOut(500);
parent.$('#bigTitle').fadeOut(500);
scrollpoint();scrollpoint2();
parent.parent.scrollpoint3();
localStorage.setItem('divastep6',99);
parent.$('#divamenu').attr('src','etape6/menu.html');
parent.parent.$('#divamenu').attr('src','etape6/menu.html');
parent.parent.parent.re5ScrollStep1();

}



var ficheAPower=0;
var ficheBPower=0;
var ficheBPower2=0;
var ficheCPower=0;
var ficheCterPower=0;
var ficheDPower=0;
var ficheEPower=0;
var ficheFPower=0;
var ficheOba1Power=0;

var viewFicheA =function(){
	
	if(ficheAPower==0){ficheAPower=1;$('#ficheA').fadeIn(500);$('#VficheA').text("fermer");parent.parentResizePlus();}
	else if (ficheAPower==1){ficheAPower=0;$('#ficheA').fadeOut(500);$('#VficheA').text("voir");parent.parentResizeSub();
		
		viewFicheA;
		viewFicheB;
		viewFicheB2;
		viewFicheCter;
		viewFicheC;
		viewFicheD;
		viewFicheF;
		
		}

	
}

var viewFicheB =function(){
	
	if(ficheBPower==0){ficheBPower=1;$('#ficheB').fadeIn(500);;$('#VficheB').text("fermer");parentResizePlus();}
	else if (ficheBPower==1){ficheBPower=0;$('#ficheB').fadeOut(500);$('#VficheB').text("voir");parent.parentResizeSub();
	}

	
}
var viewFicheB2 =function(){

	if(ficheBPower2==0){ficheBPower2=1;$('#ficheB2').fadeIn(500);$('#VficheB2').text("fermer");parent.parentResizePlus();}
	else if (ficheBPower2==1){ficheBPower2=0;$('#ficheB2').fadeOut(500);$('#VficheB2').text("voir");parent.parentResizeSub ();}

	
}
var viewFicheC =function(){
	
	if(ficheCPower==0){ficheCPower=1;$('#ficheC').fadeIn(500);$('#VficheC').text("fermer");parent.parentResizePlus();}
	else if (ficheCPower==1){ficheCPower=0;$('#ficheC').fadeOut(500);$('#VficheC').text("voir");parent.parentResizeSub();}

	
}
var viewFicheCter =function(){
	
	if(ficheCterPower==0){ficheCterPower=1;$('#ficheCter').fadeIn(500);$('#VficheCter').text("fermer");parent.parentResizePlus();}
	else if (ficheCterPower==1){ficheCterPower=0;$('#ficheCter').fadeOut(500);$('#VficheCter').text("voir");parent.parentResizeSub();}

	
}
var viewFicheD =function(){
	
	if(ficheDPower==0){ficheDPower=1;$('#ficheD').fadeIn(500);$('#VficheD').text("fermer");parent.parentResizePlus();}
	else if (ficheDPower==1){ficheDPower=0;$('#ficheD').fadeOut(500);$('#VficheD').text("voir");parent.parentResizeSub();}

	
}
var viewFicheE =function(){
	
	if(ficheEPower==0){ficheEPower=1;$('#ficheE').fadeIn(500);$('#VficheE').text("fermer");}
	else if (ficheEPower==1){ficheEPower=0;$('#ficheE').fadeOut(500);$('#VficheE').text("voir");}

	
}
var viewFicheOba1 =function(){
	
	if(ficheOba1Power==0){ficheOba1Power=1;$('#ficheOba1').fadeIn(500);$('#VficheOba1').text("fermer");parentResizePlus();}
	else if (ficheOba1Power==1){ficheOba1Power=0;$('#ficheOba1').fadeOut(500);$('#VficheOba1').text("voir");parentResizeSub ();}

	
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







var byeForm=function (){
        $('#form5').fadeOut("slow", function() {
            $('#form6').fadeIn(3000);
        });

    }

var ficheAllShow=function(){
$('#frame1').contents().find("#ficheAdiv").show();
$('#frame1').contents().find("#ficheBdiv").show();
$('#frame1').contents().find("#ficheB2div").show();
$('#frame1').contents().find("#ficheCdiv").show();
$('#frame1').contents().find("#ficheDdiv").show();
$('#frame1').contents().find("#ficheEdiv").show();
$('#frame1').contents().find("#ficheCterdiv").show();

}
var ficheAllHide=function(){

$('#frame1').contents().find("#ficheAdiv").hide();
$('#frame1').contents().find("#ficheBdiv").hide();
$('#frame1').contents().find("#ficheB2div").hide();
$('#frame1').contents().find("#ficheCdiv").hide();
$('#frame1').contents().find("#ficheDdiv").hide();
$('#frame1').contents().find("#ficheEdiv").hide();
$('#frame1').contents().find("#ficheCterdiv").hide();
}

ficheAllHide();

var check5to6 = function() {


    if (localStorage.getItem("PassIndQalClas")) {
        $('.PassIndQalClass').addClass('touchactive');
        $('#frame1').contents().find('.PassIndQalClass').addClass('touchactive');
        $('#frame1').contents().find('#typeOfFund').html('touchactive');
    }
    if (localStorage.getItem("ActBenQalClass")) {
        $('.ActBenQalClass').addClass('touchactive');
        $('#frame1').contents().find('.ActBenQalClass').addClass('touchactive');
    }
    if (localStorage.getItem("ActNbenQalClass")) {
        $('.ActNbenQalClass').addClass('touchactive');
        $('#frame1').contents().find('.ActNbenQalClass').addClass('touchactive');
    }
    if (localStorage.getItem("PassStrQalClass")) {
        $('.PassStrQalClass').addClass('touchactive');
        $('#frame1').contents().find('.PassStrQalClass').addClass('touchactive');
    }

    if (localStorage.getItem("topDownClasss")) {
        $('.topDownClass').addClass('touchactive');
        $('#frame1').contents().find('.topDownClass').addClass('touchactive');
    }


    if (localStorage.getItem("PassIndClass")) {
        $('.PassIndClass').addClass('touchactive');
        $('#frame1').contents().find('.PassIndClass').addClass('touchactive');

    }

    if (localStorage.getItem("ActBen2Class")) {
        $('.ActBen2Class').addClass('touchactive');
        $('#frame1').contents().find('.ActBen2Class').addClass('touchactive');
        localStorage.getItem("ActBen2Class");
    }

    if (localStorage.getItem("ActBen2Class")) {
        $('.ActBen2Class').addClass('touchactive');
        $('#frame1').contents().find('.ActBen2Class').addClass('touchactive');
        localStorage.getItem("ActBenClass");
    }



    if (localStorage.getItem("bottomUpClass")) {
        $('.bottomUpClass').addClass('touchactive');
        $('#frame1').contents().find('.bottomUpClass').addClass('touchactive');
    }


    if (localStorage.getItem("ActNbenQtClass")) {
        $('.ActNbenQtClass').addClass('touchactive');
        $('#frame1').contents().find('#frame1').contents().find('#frame1').contents().find('.ActNbenQtClass').addClass('touchactive');
    }

    if (localStorage.getItem("PassIndQtClas")) {
        $('.PassIndQtClass').addClass('touchactive');
        $('#frame1').contents().find('#frame1').contents().find('#frame1').contents().find('.PassIndQtClass').addClass('touchactive');
    }


    if (localStorage.getItem("ActNbenClass")) {
        $('.ActNbenClass').addClass('touchactive');
        $('#frame1').contents().find('#frame1').contents().find('.ActNbenClass').addClass('touchactive');
        localStorage.getItem("ActNbenClass");
    }


    if (localStorage.getItem("PassStrClass")) {

        $('.PassStrClass').addClass('touchactive');
        $('#frame1').contents().find('.PassStrClass').addClass('touchactive');
        localStorage.getItem("PassStrClass");
    }

    if (localStorage.getItem("ActBenQtClass")) {
        $('.ActBenQtClass').addClass('touchactive');
        $('#frame1').contents().find('.ActBenQtClass').addClass('touchactive');
    }


    if (localStorage.getItem("PassStrQtClas")) {
        $('.PassStrQtClass').addClass('touchactive');
        $('#frame1').contents().find('.PassStrQtClass').addClass('touchactive');
    }
}


// fonction schéma étape 5


var PassInd = function() {	
    $('.PassIndClass').addClass('touchactive');
}
var ActBen2 = function() {
    $('.ActBen2Class').addClass('touchactive');
}
var ActBen = function() {
    $('.ActBenClass').addClass('touchactive');
}
var ActNben = function() {
    $('.ActNbenClass').addClass('touchactive');
	
}
var PassStr = function() {
    $('.PassStrClass').addClass('touchactive');localStorage.setItem("PassStrClass",1);
}
var PassIndQt = function() {
    $('.PassIndQtClass').addClass('touchactive');
}
var ActBenQt = function() {
    $('.ActBenQtClass').addClass('touchactive');
}
var ActNbenQt = function() {
    $('.ActNbenQtClass').addClass('touchactive');
}
var PassStrQt = function() {
    $('.PassStrQtClass').addClass('touchactive');
}
var PassIndQal = function() {
    $('.PassIndQalClass').addClass('touchactive');
}
var ActBenQal = function() {
    $('.ActBenQalClass').addClass('touchactive');
}
var ActNbenQal = function() {
    $('.ActNbenQalClass').addClass('touchactive');
}
var PassStrQal = function() {
    $('.PassStrQalClass').addClass('touchactive');
}

var topDownactiv = function() {
    $('.topDownClass').addClass('touchactive');
	$('#gestpop11title').css("visibility","visible");
	$('#fg').css("visibility","visible");
}

var bottomUpactiv = function() {
    $('.bottomUpClass').addClass('touchactive');
	$('#gestpop12title').css("visibility","visible");
	$('#fd').css("visibility","visible");
	
}

var reloadStep5=function(){
	
	
	
// indiciel = gestion passive/approche quanti/gestion indicielle    	

if(localStorage.getItem("PassIndQtClas")==1){step5showFicheAdiv();}
if(localStorage.getItem("PassIndQalClass")==1){step5showFicheAdiv();}



// avec une garantie=gestion passive/approche quanti/gestion structurée ficheEdiv



if(localStorage.getItem("PassStrQalClasss")==1){step5showFicheEdiv();}
if(localStorage.getItem("PassStrQtClass")==1){step5showFicheEdiv();}





// benchmarké=gestion active/approche quanti ou quali/gestion benchmarkée/approche bottom up ou approche top down  ficheB2div
if(localStorage.getItem("ActBenClass6")==1){step5showFicheB2div();}
if(localStorage.getItem("ActBenClass6")==1){step5showFicheB2div();}
if(localStorage.getItem("ActBenQtClass")==1){step5showFicheB2div();}
if(localStorage.getItem("ActBenClass")==1){step5showFicheB2div();}
if(localStorage.getItem("ActBenClass6")==1){step5showFicheB2div();}
if(localStorage.getItem("ActBen2Class")==1){step5showFicheB2div();}
if(localStorage.getItem("ActBenClass6")==1){step5showFicheB2div();}



// non benchmarké=gestion active/approche quanti ou quali/gestion non benchmarkée/approche bottom up ou top down ficheDdiv

if(localStorage.getItem("ActNbenQalClass")==1){step5showFicheDdiv();}
if(localStorage.getItem("ActBenQalClass")==1){step5showFicheDdiv();}
if(localStorage.getItem("ActNbenClass6")==1){step5showFicheDdiv();}
if(localStorage.getItem("ActNbenClass")==1){step5showFicheDdiv();}
if(localStorage.getItem("ActNbenClass6")==1){step5showFicheDdiv();}
if(localStorage.getItem("ActNbenQtClass")==1){step5showFicheDdiv();}
if(localStorage.getItem("ActNbenClass6")==1){step5showFicheDdiv();}


 }


      var step5showFicheAdiv=function(){$('#ficheAdiv').show();$( "#typeOfFund" ).text( "FONDS ACTIONS INDICIEL" );}
      var step5showFicheEdiv=function(){$('#ficheEdiv').show();$( "#typeOfFund" ).text( "FONDS ACTIONS avec une garantie" );}
      var step5showFicheB2div=function(){$('#ficheB2div').show();$( "#typeOfFund" ).text( "FONDS ACTIONS benchmarké" );}
      var step5showFicheDdiv=function(){$('#ficheDdiv').show();$( "#typeOfFund" ).text( "FONDS ACTIONS non benchmarké" );}

	
	
var allDone =function(){$('.PassStrQalClass').addClass('touchactive');
	$('.ActNbenQalClass').addClass('touchactive');
	$('.fleche').css("visibility","visible");
	$('.ActBenQalClass').addClass('touchactive');
	$('.PassIndQalClass').addClass('touchactive');
	$('.PassIndClass').addClass('touchactive');
	$('.PassStrQtClass').addClass('touchactive');
	$('.ActNbenQtClass').addClass('touchactive');
	$('.ActBenQtClass').addClass('touchactive');
	$('.PassIndQtClass').addClass('touchactive');
	$('.PassStrClass').addClass('touchactive');
	$('.ActNbenClass').addClass('touchactive');
	$('.ActBenClass').addClass('touchactive');
	$('.ActBen2Class').addClass('touchactive');
	 $('.bottomUpClass').addClass('touchactive');
	 $('.topDownClass').addClass('touchactive');
	 $('#gestpop12title').css("visibility","visible");
	 $('#gestpop11title').css("visibility","visible");
	 }









