




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











var downloadFicheActaA = function(){window.open('docs/FONDS ACTIONS B 1.pdf');}
var downloadFicheActaB = function(){window.open('docs/ficheActaB.pdf');}
var downloadFicheActaC = function(){window.open('docs/ficheActaC.pdf');}
var downloadFicheActaCter = function(){window.open('docs/ficheActaCter.pdf');}
var downloadFicheActaD = function(){window.open('docs/ficheActaD.pdf');}
var downloadFicheActaE = function(){window.open('docs/ficheActaE.pdf');}
var downloadFicheObaA = function(){window.open('docs/ficheObaA.pdf');}
var downloadFicheObaB = function(){window.open('docs/ficheObaB.pdf');}
var downloadFicheDivaB = function(){window.open('docs/ficheDivaB.pdf');}
var downloadFicheDivaA = function(){window.open('docs/ficheDivaA.pdf');}
var downloadFicheMonaA = function(){window.open('docs/ficheMonaA.pdf');}
var downloadFicheMonaB = function(){window.open('docs/ficheMonaB.pdf');}




var dperf1 = function(){window.open('docs/Fiche fonds actions B complète.pdf');}
var dperf2 = function(){window.open('docs/Fiche fonds obligataire B complète.pdf');}
var dperf3 = function(){window.open('docs/FichemonétaireA complète.pdf');}
var dperf4 = function(){window.open('docs/FichemonetaireB complète.pdf');}
var dperf5 = function(){window.open('docs/FONDS ACTIONS B online V2_sansdef.pdf');}

var expo0 = function(){window.open('docs/FONDS OBLIGATAIRE B online_V2.pdf');}
var expo1 = function(){window.open('docs/Fiche diversifie C complète.pdf');}
var expo2 = function(){window.open('docs/fiche FONDS ACTION C complète.pdf');}
var expo3 = function(){window.open('docs/Fiche Obligataire A complète.pdf');}
var expo4 = function(){window.open('docs/Fiche Obligataire B complète.pdf');}

var drend0 = function(){window.open('docs/FONDS ACTIONS B 2.pdf');}
var drend1 = function(){window.open('docs/FicheA.pdf');}
var drend2 = function(){window.open('docs/FicheC.pdf');}
var drend3 = function(){window.open('docs/FicheD.pdf');}
var drend4 = function(){window.open('docs/FicheOBA1.pdf');}
var drend5 = function(){window.open('docs/FicheOBA2.pdf');}

var dgar0 = function(){window.open('docs/FicheE.pdf');}
var dgar1 = function(){window.open('docs/FONDS DIVERSIFIE D online.pdf');}


var parentResize=function(){console.log('test');}



var indexframeHeightPlus=1;
var indexframeHeightSub=1;

var parentResizePlus = function(){indexframeHeight=parent.$('#indexframe').height();indexframeHeightPlus=indexframeHeight+1100;parent.$('#indexframe').height(indexframeHeightPlus);parent.$('#IndexFrame1').height(indexframeHeightPlus);}
var parentResizeSub = function(){indexframeHeight=parent.$('#indexframe').height();indexframeHeightSub=indexframeHeight-1100;parent.$('#indexframe').height(indexframeHeightSub);parent.$('#IndexFrame1').height(indexframeHeightSub);}

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
	
	if(ficheBPower==0){ficheBPower=1;$('#ficheB').fadeIn(500);;$('#VficheB').text("fermer");parent.parentResizePlus();}
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
	
	if(ficheEPower==0){ficheEPower=1;$('#ficheE').fadeIn(500);$('#VficheE').text("fermer");parent.parentResizePlus();}
	else if (ficheEPower==1){ficheEPower=0;$('#ficheE').fadeOut(500);$('#VficheE').text("voir");parent.parentResizeSub();}

	
}
var viewFicheOba1 =function(){
	
	if(ficheOba1Power==0){ficheOba1Power=1;$('#ficheOba1').fadeIn(500);$('#VficheOba1').text("fermer");parent.parentResizePlus();}
	else if (ficheOba1Power==1){ficheOba1Power=0;$('#ficheOba1').fadeOut(500);$('#VficheOba1').text("voir");parent.parentResizeSub();}

	
}







var popfunk = function(item) {
    var cible = item.id;
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
else if(localStorage.getItem("PassIndQalClass")==1){step5showFicheAdiv();}



// avec une garantie=gestion passive/approche quanti/gestion structurée ficheEdiv



else if(localStorage.getItem("PassStrQalClasss")==1){step5showFicheCdiv();step5showFicheEdiv();}
else if(localStorage.getItem("PassStrQtClass")==1){step5showFicheEdiv();}





// benchmarké=gestion active/approche quanti ou quali/gestion benchmarkée/approche bottom up ou approche top down  ficheB2div
else if(localStorage.getItem("ActBenClass6")==1){step5showFicheB2div();}
else if(localStorage.getItem("ActBenClass6")==1){step5showFicheB2div();}
else if(localStorage.getItem("ActBenQtClass")==1){step5showFicheB2div();}
else if(localStorage.getItem("ActBenClass")==1){step5showFicheB2div();}
else if(localStorage.getItem("ActBenClass6")==1){step5showFicheB2div();}
else if(localStorage.getItem("ActBen2Class")==1){step5showFicheB2div();}
else if(localStorage.getItem("ActBenClass6")==1){step5showFicheB2div();}



// non benchmarké=gestion active/approche quanti ou quali/gestion non benchmarkée/approche bottom up ou top down ficheDdiv

else if(localStorage.getItem("ActNbenQalClass")==1){step5showFicheCterdiv();step5showFicheDdiv();}
else if(localStorage.getItem("ActBenQalClass")==1){step5showFicheCterdiv();step5showFicheDdiv();}
else if(localStorage.getItem("ActNbenClass6")==1){step5showFicheCterdiv();step5showFicheDdiv();}
else if(localStorage.getItem("ActNbenClass")==1){step5showFicheCterdiv();step5showFicheDdiv();}
else if(localStorage.getItem("ActNbenClass6")==1){;step5showFicheCterdiv();step5showFicheDdiv();}
else if(localStorage.getItem("ActNbenQtClass")==1){step5showFicheCterdiv();step5showFicheDdiv();}
else if(localStorage.getItem("ActNbenClass6")==1){step5showFicheCterdiv();step5showFicheDdiv();}


 }


    var step5showFicheAdiv=function(){$('#IndexFrame1').contents().find('#ficheAdiv').show();$('#IndexFrame1').contents().find( "#typeOfFund" ).text( "FONDS ACTIONS INDICIEL" );}
	var step5showFicheB2div=function(){$('#IndexFrame1').contents().find('#ficheB2div').show();$('#IndexFrame1').contents().find( "#typeOfFund" ).text( "FONDS ACTIONS benchmarké" );}
	var step5showFicheCdiv=function(){$('#IndexFrame1').contents().find('#ficheCdiv').show();$('#IndexFrame1').contents().find( "#typeOfFund" ).text( "Fonds Actions C sans garantie" );}
	var step5showFicheCterdiv=function(){$('#IndexFrame1').contents().find('#ficheCterdiv').show();$('#IndexFrame1').contents().find( "#typeOfFund" ).text( "Fiche Fonds Actions C" );}
	var step5showFicheDdiv=function(){$('#IndexFrame1').contents().find('#ficheDdiv').show();$('#IndexFrame1').contents().find( "#typeOfFund" ).text( "FONDS ACTIONS non benchmarké" );}
    var step5showFicheEdiv=function(){$('#IndexFrame1').contents().find('#ficheEdiv').show();$('#IndexFrame1').contents().find( "#typeOfFund" ).text( "FONDS ACTIONS avec une garantie" );}



	
	
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




	// var cookContent = document.cookie, cookEnd, i, j;
	// var cookie_apoc = cookie_apoc + "=";


   // function getCookie(name){
     // if(document.cookie.length == 0)
       // return null;

     // var regSepCookie = new RegExp('(; )', 'g');
     // var cookies = document.cookie.split(regSepCookie);

     // for(var i = 0; i < cookies.length; i++){
       // var regInfo = new RegExp('=', 'g');
       // var infos = cookies[i].split(regInfo);
       // if(infos[0] == name){
         // return unescape(infos[1]);
       // }
     // }
     // return null;
   // }





// cookievalue=getCookie('cookie_apoc').replace(/\\054/g, ',').replace(/\L\054/g, ',').replace(/u'/g, "'").replace(/'/g, '"').replace(/L}/g, '}').replace(/True/g, 'true').replace(/False/g, 'false').slice(1, -1);;



// var ury=JSON.parse(cookievalue);
// var userPosition=ury.status.position;
// var userTop3=ury.status.trio;
// var userId=ury.status.user_id;
// var username=ury.user.username;
// var userLName=ury.status.user_lastname;
// var userFName=ury.status.user_firstname;
// var top1=ury.status.trio[0];
// var top2=ury.status.trio[1];
// var top3=ury.status.trio[2];
// var check=ury.status.check;
// var current_status=ury.score.current_status;
// var scoreTotal=ury.score.score_total;
// var scoreDetail=ury.score.score_detail;
// var etape1=scoreDetail[0].status;
// var etape2=scoreDetail[1].status;
// var etape3=scoreDetail[2].status;
// var etape4=scoreDetail[3].status;
// var etape5=scoreDetail[4].status;
// var etape6=scoreDetail[5].status;
// var etape7=scoreDetail[6].status;
// var etape8=scoreDetail[7].status;



var testStep5True=function(){if(localStorage.getItem("etape5false")==null){step5showFicheCdiv();}}




// var prompt5=function(){ if (confirm("Voulez - vous simuler les données de prises en compte à l'étape 5?")) { // Clic sur OK
        // reloadStep5(); example();testStep5True();
       // }}

var prompt5=function() {localStorage.clear();localStorage.setItem("ActBenClass6",1);// Clic sur OK
        reloadStep5(); example();testStep5True();step5showFicheB2div();$('#IndexFrame1').contents().find('#ficheCdiv').hide();
       }


 var example=function(){ localStorage.setItem("ActBenClass6",1);

check5to6();
showFiche();step5showFicheB2div();$('#IndexFrame1').contents().find('#ficheCdiv').hide();
 };
	 

