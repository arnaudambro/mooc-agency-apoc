




var popfunk = function(item) {
    var cible = item.id;
    var size = cible.length;
	

    var sub = size - 5;
    var sub2 = size - 6;

	console.log(sub2);
	console.log(sub);

    // retouver le nom de la popup appartenant
    var myString = cible;
    var pool = myString.substring(0, sub);
    var pool2 = myString.substring(7,0);
	console.log("pool2..."+ pool2);
	console.log("pool1..."+pool);
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
   var pool2 = myString.substring(7,0);
    var source = document.getElementById(pool).innerHTML;
    document.getElementById(pool2 + 'infobulle2').style.display = "none";
};
// question
// variable questionnaire
var commq1a = 0;
var commq1b = 0;
var commq2a = 0;
var commq2b = 0;
var commq3a = 0;
var commq3b = 0;
var commq4a = 0;
var commq4b = 0;
var commq5a = 0;
var commq5b = 0;


// var noWay = function(){noShowForm5();actaStop();}
var noWay = function(){Alert3.render("Attention ! L’approche qualitative ne s’applique pas à la gestion structurée. Faites un autre choix.");}

var byeForm=function (){$('#actionvalid').hide();
$('#form1').hide();
$('#form2').hide();
$('#form3').hide();
$('#form4').hide();
$('#form5').hide();

            $('#form6').fadeIn(7000);


    }


var actaStop=function(){Alert2.render("Attention ! L’approche qualitative ne s’applique qu’à la gestion active. Faites un autre choix.");}


function CustomAlert2(){

   pleft = $("#pointblock2").css("left");
       ptop = $("#pointblock2").css("top");

    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = '4000px';
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "none";
        dialogoverlay.style.height = "1000px";
        dialogbox.style.left = "45%";
        dialogbox.style.top = "21%";
        dialogbox.style.display = "block";
        dialogbox.style.position = "fixed";
        
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<p id="X" onclick="Alert.ok()">OK</p>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert2 = new CustomAlert2();





var showForm5 = function() {
    $('#form4').fadeOut("slow", function() {
        $('#form5').fadeIn(3000);
    });

}
var noShowForm5 = function() {
        byeForm();
    }


var checkrep1 = function() {
    if (commq1a == 1) {
        $('#form1').fadeOut("slow", function() {
            $('#form2').fadeIn(3000);
        });
    }
    if (commq1b == 1) {
        $('#form1').fadeOut("slow", function() {
            $('#form3').fadeIn(3000);
        });
    }
}
var checkrep2 = function() {
    if (commq2a == 1) {
        $('#form2').fadeOut("slow", function() {
            $('#form4').fadeIn(3000);
        });
        PassInd();
    }
    if (commq2b == 1) {
        $('#form2').fadeOut("slow", function() {
            $('#form4').fadeIn(3000);
        });
        ActBen();
    }
}
var checkrep3 = function() {
    if (commq3a == 1) {
        $('#form3').fadeOut("slow", function() {
            $('#form4').fadeIn(3000);
        });
        ActNben();
    }
    if (commq3b == 1) {
        $('#form3').fadeOut("slow", function() {
            $('#form4').fadeIn(3000);
        });
        PassStr();
    }
}
var checkrep4 = function() {
    overCheck4();
    // if(commq4a==1){$('#form4').fadeOut("slow", function() {$('#form5').fadeIn(3000);});}
    // if(commq4b==1){$('#form4').fadeOut("slow", function() {$('#form5').fadeIn(3000);});}
}
var checkrep5 = function() {
    overCheck5bis();
    // if(commq4a==1){$('#form4').fadeOut("slow", function() {$('#form5').fadeIn(3000);});}
    // if(commq4b==1){$('#form4').fadeOut("slow", function() {$('#form5').fadeIn(3000);});}
}
overCheck4 = function() {
    if (commq1a == 1 && commq2a == 1 && commq4a == 1) {
        PassIndQt();
        noShowForm5();
    }
    if (commq1a == 1 && commq2b == 1 && commq4a == 1) {
        ActBenQt();
      byeForm();
    }
    if (commq1b == 1 && commq3a == 1 && commq4a == 1) {
        ActNbenQt();
         showForm5();
    }
    if (commq1b == 1 && commq3b == 1 && commq4a == 1) {
        PassStrQt();
        byeForm();
    }
    if (commq1a == 1 && commq2a == 1 && commq4b == 1) {
        noWay();
		
       
    }
    if (commq1a == 1 && commq2b == 1 && commq4b == 1) {
        ActBenQal();
        showForm5();
    }
    if (commq1b == 1 && commq3a == 1 && commq4b == 1) {
        ActNbenQal();
        showForm5();
    }
    if (commq1b == 1 && commq3b == 1 && commq4b == 1) {
      noWay();
       
    }
}
overCheck5 = function() {
    if (commq1a == 1 && commq2a == 1 && commq4a == 1) {
        PassIndQt();
        noShowForm5();
    }
    if (commq1a == 1 && commq2b == 1 && commq4a == 1) {
        ActBenQt();
        showForm5();
    }
    if (commq1b == 1 && commq3a == 1 && commq4a == 1) {
        ActNbenQt();
        noShowForm5();
    }
    if (commq1b == 1 && commq3b == 1 && commq4a == 1) {
        PassStrQt();
        showForm5();
    }
    if (commq1a == 1 && commq2a == 1 && commq4b == 1) {
        noWay();;byeForm();
    }
    if (commq1a == 1 && commq2b == 1 && commq4b == 1) {
        ActBenQt();
        showForm5();
    }
    if (commq1b == 1 && commq3a == 1 && commq4b == 1) {
        ActNbenQal();
        showForm5();
    }
    if (commq1b == 1 && commq3b == 1 && commq4b == 1) {
        noWay();byeForm();
    }
}
overCheck5bis = function() {
    if (commq1a == 1 && commq2b == 1 && commq4a == 1 && commq5a == 1) {
       byeForm(); bottomUpactiv();
    }
    if (commq1a == 1 && commq2b == 1 && commq4a == 1 && commq5b == 1) {
       byeForm(); topDownactiv();
    }
    if (commq1a == 1 && commq2b == 1 && commq4b == 1 && commq5a == 1) {
        byeForm(); bottomUpactiv();
    }
    if (commq1a == 1 && commq2b == 1 && commq4b == 1 && commq5b == 1) {
        byeForm(); topDownactiv();
    }
    if (commq1b == 1 && commq3a == 1 && commq4a == 1 && commq5a == 1) {
        byeForm(); bottomUpactiv();
    }
    if (commq1b == 1 && commq3a == 1 && commq4a == 1 && commq5b == 1) {
        byeForm(); topDownactiv();
    }
    if (commq1b == 1 && commq3a == 1 && commq4b == 1 && commq5a == 1) {
       byeForm(); bottomUpactiv();
    }
    if (commq1b == 1 && commq3a == 1 && commq4b == 1 && commq5b == 1) {
       byeForm(); topDownactiv();
    }
}



var PassInd = function() {	localStorage.setItem("PassIndClass",1);
    $('.PassIndClass').addClass('touchactive');

}

var ActBen2 = function() {
    $('.ActBen2Class').addClass('touchactive');localStorage.setItem("ActBen2Class",1);localStorage.setItem("ActBenClass6",1);
}

var ActBen = function() {
    $('.ActBenClass').addClass('touchactive');
	localStorage.setItem("ActBenClass",1);localStorage.setItem("ActBenClass6",1);
}
var ActNben = function() {
    $('.ActNbenClass').addClass('touchactive');localStorage.setItem("ActNbenClass",1);
	localStorage.setItem("ActNbenClass6",1);
}
var PassStr = function() {
    $('.PassStrClass').addClass('touchactive');localStorage.setItem("PassStrClass",1);
}
var PassIndQt = function() {
    $('.PassIndQtClass').addClass('touchactive');
	localStorage.setItem("PassIndQtClas",1);
	localStorage.setItem("PassStrQtClass",0);
	localStorage.setItem("ActBenClass6",0);
	localStorage.setItem("ActNbenQalClass",0);
}
var ActBenQt = function() {
    $('.ActBenQtClass').addClass('touchactive');localStorage.setItem("ActBenQtClass",1);localStorage.setItem("ActBenClass6",1);
}
var ActNbenQt = function() {
    $('.ActNbenQtClass').addClass('touchactive');localStorage.setItem("ActNbenQtClass",1);localStorage.setItem("ActNbenClass6",1);
}
var PassStrQt = function() {
    $('.PassStrQtClass').addClass('touchactive');
	localStorage.setItem("PassStrQtClass",1);
	localStorage.setItem("ActBenClass6",0);
	localStorage.setItem("ActNbenQalClass",0);
	localStorage.setItem("PassIndQtClas",0);
}
var PassIndQal = function() {
    $('.PassIndQalClass').addClass('touchactive');localStorage.setItem("PassIndQalClass",1);
}
var ActBenQal = function() {
    $('.ActBenQalClass').addClass('touchactive');localStorage.setItem("ActBenQalClass",1);
	localStorage.setItem("ActBenClass6",1);
	localStorage.setItem("ActNbenQalClass",0);
	localStorage.setItem("PassIndQtClas",0);
	localStorage.setItem("PassStrQtClass",0);
}
var ActNbenQal = function() {
    $('.ActNbenQalClass').addClass('touchactive');
	localStorage.setItem("ActNbenQalClass",1);
	localStorage.setItem("ActNbenClass6",1);
	localStorage.setItem("PassIndQtClas",0);
	localStorage.setItem("PassStrQtClass",0);
	localStorage.setItem("ActBenClass6",0);
}
var PassStrQal = function() {
    $('.PassStrQalClass').addClass('touchactive');localStorage.setItem("PassStrQalClasss",1);
}

var topDownactiv = function() {
    $('.topDownClass').addClass('touchactive');
	localStorage.setItem("topDownClass",1);
	$('#gestpop11title').css("visibility","visible");
	$('#fg').css("visibility","visible");
}
var bottomUpactiv = function() {
    $('.bottomUpClass').addClass('touchactive');
	localStorage.setItem("bottomUpClass",1);
	$('#gestpop12title').css("visibility","visible");
	$('#fd').css("visibility","visible");
	
}

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
	 parent.parent.parent.reScrollEtape5SchemActa();
	 }

var questcommq1a = function() {
    if (commq1a == 0) {
        commq1a = 1;
        $('#actioncommq1a').removeClass("buttonquestion");
        $('#actioncommq1a').addClass("buttonquestionactive");
        commq1b = 0;
        $('#actioncommq1b').removeClass("buttonquestionactive");
        $('#actioncommq1b').addClass("buttonquestion");
    } else {
        commq1a = 0;
        $('#actioncommq1a').removeClass("buttonquestionactive");
        $('#actioncommq1a').addClass("buttonquestion");
    }
};
var questcommq1b = function() {
    if (commq1b == 0) {
        commq1b = 1;
        $('#actioncommq1b').removeClass("buttonquestion");
        $('#actioncommq1b').addClass("buttonquestionactive");
        commq1a = 0;
        $('#actioncommq1a').removeClass("buttonquestionactive");
        $('#actioncommq1a').addClass("buttonquestion");
    } else {
        commq1b = 0;
        $('#actioncommq1b').removeClass("buttonquestionactive");
        $('#actioncommq1b').addClass("buttonquestion");
    }
};
var questcommq2a = function() {
    if (commq2a == 0) {
        commq2a = 1;
        $('#actioncommq2a').removeClass("buttonquestion");
        $('#actioncommq2a').addClass("buttonquestionactive");
        commq2b = 0;
        $('#actioncommq2b').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commq2a = 0;
        $('#actioncommq2a').removeClass("buttonquestionactive");
        $('#actioncommq2a').addClass("buttonquestion");
    }
};
var questcommq2b = function() {
    if (commq2b == 0) {
        commq2b = 1;
        $('#actioncommq2b').removeClass("buttonquestion").addClass("buttonquestionactive");
        commq2a = 0;
        $('#actioncommq2a').removeClass("buttonquestionactive");
        $('#actioncommq2a').addClass("buttonquestion");
    } else {
        commq2b = 0;
        $('#actioncommq2b').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommq3a = function() {
    if (commq3a == 0) {
        commq3a = 1;
        $('#actioncommq3a').removeClass("buttonquestion").addClass("buttonquestionactive");
        commq3b = 0;
        $('#actioncommq3b').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commq3a = 0;
        $('#actioncommq3a').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommq3b = function() {
    if (commq3b == 0) {
        commq3b = 1;
        $('#actioncommq3b').removeClass("buttonquestion").addClass("buttonquestionactive");
        commq3a = 0;
        $('#actioncommq3a').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commq3b = 0;
        $('#actioncommq3b').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommq4a = function() {
    if (commq4a == 0) {
        commq4a = 1;
        $('#actioncommq4a').removeClass("buttonquestion").addClass("buttonquestionactive");
        commq4b = 0;
        $('#actioncommq4b').removeClass("buttonquestionactive").addClass("buttonquestion");$('.actaQuant').show();$('.actaQual').hide();
    } else {
        commq4a = 0;
        $('#actioncommq4a').removeClass("buttonquestionactive").addClass("buttonquestion");$('.actaQuant').hide();
    }
};
var questcommq4b = function() {
    if (commq4b == 0) {
        commq4b = 1;
        $('#actioncommq4b').removeClass("buttonquestion").addClass("buttonquestionactive");
        commq4a = 0;
        $('#actioncommq4a').removeClass("buttonquestionactive").addClass("buttonquestion");$('.actaQual').show();$('.actaQuant').hide();
    } else {
        commq4b = 0;
        $('#actioncommq4b').removeClass("buttonquestionactive").addClass("buttonquestion");$('.actaQual').hide();
    }
};
var questcommq5a = function() {
    if (commq5a == 0) {
        commq5a = 1;
        $('#actioncommq5a').removeClass("buttonquestion").addClass("buttonquestionactive");
        commq5b = 0;
        $('#actioncommq5b').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commq5a = 0;
        $('#actioncommq5a').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommq5b = function() {
    if (commq5b == 0) {
        commq5b = 1;
        $('#actioncommq5b').removeClass("buttonquestion").addClass("buttonquestionactive");
        commq5a = 0;
        $('#actioncommq5a').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commq5b = 0;
        $('#actioncommq5b').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};

var diagAtualize=function(){
	parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu1').children('.placeholder').find('#simulateur1').attr('src','assets/diagramme/graph1/index.html');
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu1').children('.placeholder').find('#simulateur2').attr('src','assets/diagramme/graph2/index.html');
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu1').children('.placeholder').find('#simulateur3').attr('src','assets/diagramme/graph3/index.html');
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu1').children('.placeholder').find('#simulateur4').attr('src','assets/diagramme/graph4/index.html');
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu2').children('.placeholder').find('#simulateur1bis').attr('src','assets/diagramme/graph1bis/index.html');
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu2').children('.placeholder').find('#simulateur2bis').attr('src','assets/diagramme/graph2bis/index.html');
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu2').children('.placeholder').find('#simulateur3bis').attr('src','assets/diagramme/graph3bis/index.html');
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu2').children('.placeholder').find('#simulateur4bis').attr('src','assets/diagramme/graph4bis/index.html');

scrollpoint();	
}




var pullupfdacta=function(){
scrollpoint();	

parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu').fadeOut(3000,function(){
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdtitra').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdobamona').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdactaobamona').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdacta').fadeIn(3000);});
	
localStorage.setItem('actastep',99); parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu2').fadeIn(9000);

diagAtualize();

	
}

var pullupfdobamona=function(){
	
scrollpoint();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu').fadeOut(3000,function(){	
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdactaobamona').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdacta').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdtitra').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdobamona').fadeIn(3000);
parent.parent.$('#body').contents().find('#frame1').contents().find('.hidden').css("visibility","hidden");

});
	
localStorage.setItem('obastep',99); parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu2').fadeIn(9000);
diagAtualize();



	
}
var goToQuiz=function(){
	
scrollpoint();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu').fadeOut(3000,function(){	
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdactaobamona').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdacta').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('.quizSpell').show();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdtitra').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu2').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdobamona').hide();});
	

diagAtualize();



	
}


var backAgain=function(){
	
scrollpoint();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu').fadeIn(3000,function(){	
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdactaobamona').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdacta').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('.quizSpell').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdtitra').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu2').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdobamona').hide();});
	

diagAtualize();



	
}


var actaStepDiv=localStorage.getItem('actastep');
var obaStepDiv=localStorage.getItem('obastep');


var checkAmmDone=function(){if(obaStepDiv==99 && actaStepDiv==99){localStorage.setItem("checkPointDivStorage",1);}
	
	
}



var checkPointDiv=1;

var pullupfdactaobamona=function(){


if(checkPointDiv==1){
scrollpoint();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu').fadeOut(1000,function(){	

parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdactaobamona').fadeIn(3000);
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdacta').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdtitra').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdobamona').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('.hidden').css("visibility","hidden");

});
localStorage.setItem('divastep',99); parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu2').fadeIn(9000);
diagAtualize();}
else{;parent.parent.diverStop();}
	  

	
}

	
			   

 var xx = function(){localStorage.setItem('titrastep',99);parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu').fadeOut(1000,function(){	
scrollpoint();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdobamona').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdactaobamona').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdacta').hide();
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdtitra').fadeIn(3000);});
parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu2').fadeIn(9000);

	 


diagAtualize();


	 }
	 


var continueFdacta=function(){
	

	parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdacta').fadeOut(1000,function(){	parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu').fadeIn(3000);});
	scrollpoint();

	
}

var continueFdobamona=function(){
	

	parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdobamona').fadeOut(1000,function(){	parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu').fadeIn(3000);});
	
	
}

var continueFdactaobamona=function(){
	

	parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdactaobamona').fadeOut(1000,function(){	parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu').fadeIn(3000);});

	
}

var continuetitra=function(){
	

	parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#fdtitra').fadeOut(1000,function(){	parent.parent.$('#body').contents().find('#frame1').contents().find('#bodymaininside').children('#menu').fadeIn(3000);});

	
}



	 var scrollpoint=function() {
   parent.parent.parent.reScrollEtape5Master();
		
					};
  


var activateobamonachema=function(){$('.shemobamonacol1').addClass('touchactive');}
var activateobamonachema2=function(){$('.shemobamonacol2').addClass('touchactive');}	


// question
// variable questionnaire
var commqbis1a = 0;
var commqbis1b = 0;
var commqbis2a = 0;
var commqbis2b = 0;
var commqbis3a = 0;
var commqbis3b = 0;
var commqbis4a = 0;
var commqbis4b = 0;
var commqbis5a = 0;
var commqbis5b = 0;



var checkrepbis1 = function() {
    if (commqbis1a == 1) {
        $('#2form1').fadeOut("slow", function() {
            $('#2form2').fadeIn(3000);
        });ActBen2();
    }
    if (commqbis1b == 1) {
        $('#2form1').fadeOut("slow", function() {
            $('#2form3').fadeIn(3000);
        });ActBen2();
    }
}
var checkrepbis2 = function() {
    if (commqbis2a == 1) {
        $('#2form2').fadeOut("slow", function() {
            $('#2form4').fadeIn(3000);
        });gest1();
       
    }
    if (commqbis2b == 1) {
        $('#2form2').fadeOut("slow", function() {
            $('#2form4').fadeIn(3000);
        });gest3();
      
    }
}
var checkrepbis3 = function() {
    if (commqbis3a == 1) {
        $('#2form3').fadeOut("slow", function() {
            $('#2form4').fadeIn(3000);
        });gest2();
    
    }
    if (commqbis3b == 1) {
        $('#2form3').fadeOut("slow", function() {
            $('#2form4').fadeIn(3000);
        });gest4();
  
    }
}
var checkrepbis4 = function() {
    if (commqbis4a == 1) {
        $('#2form4').fadeOut("slow", function() {
           $('#formG').hide();$('#2form5').hide(); $('#showDivRest2').fadeIn(3000);$('#showDivRest').show()
        });apQt();
    
    }   else if (commqbis1b==1&&commqbis3b==1&&commqbis4b == 1) {
	noWay(); }
  else  if (commqbis4b == 1) {
        $('#2form4').fadeOut("slow", function() {
            $('#2form5').fadeIn(3000);
        });apQal();
  
    }
}
var checkrepbis5 = function() {
    if (commqbis5a == 1) {
    
         $('#2form5').hide();topDownactiv2();
		 $('#showDivRest').show();
		 $('#showDivRest2').show();
		 $('#formG').hide();
    
    }
    if (commqbis5b == 1) {
     
       diverStop2();

  
    }
}
var show2Form5 = function() {
    $('#2form4').fadeOut("slow", function() {
        $('#2form5').fadeIn(3000);
    });
}
var noShow2Form5 = function() {
    $('#2form4').css('visibility', 'hidden');
}


var gest1 = function() {
    $('.gest1class').addClass('touchactive');
}

var gest2 = function() {
    $('.gest2class').addClass('touchactive');
}

var gest3 = function() {
    $('.gest3class').addClass('touchactive');
}
var gest4 = function() {
    $('.gest4class').addClass('touchactive');
}


var apQal = function() {
    $('.apQalClass').addClass('touchactive');
}
var apQt = function() {
    $('.apQtClass').addClass('touchactive');
}


var topDownactiv2 = function() {
    $('.topDownClass2').addClass('touchactive');
    $('#divTopDown').show();
}


var showDivRest=function(){$('.topDownClass2').addClass('touchactive');$('.apQtClass').addClass('touchactive');$('.apQtClass2').addClass('touchactive');$('.apQalClass').addClass('touchactive');$('.gest4class').addClass('touchactive');$('.gest3class').addClass('touchactive');$('.gest2class').addClass('touchactive');$('.gest1class').addClass('touchactive');$('#divTopDown').show();parent.parent.parent.reScrollEtape5SchemDiva();}



var questcommqbis1a = function() {
    if (commqbis1a == 0) {
        commqbis1a = 1;
        $('#actioncommqbis1a').removeClass("buttonquestion");
        $('#actioncommqbis1a').addClass("buttonquestionactive");
        commqbis1b = 0;
        $('#actioncommqbis1b').removeClass("buttonquestionactive");
        $('#actioncommqbis1b').addClass("buttonquestion");
    } else {
        commqbis1a = 0;
        $('#actioncommqbis1a').removeClass("buttonquestionactive");
        $('#actioncommqbis1a').addClass("buttonquestion");
    }
};
var questcommqbis1b = function() {
    if (commqbis1b == 0) {
        commqbis1b = 1;
        $('#actioncommqbis1b').removeClass("buttonquestion");
        $('#actioncommqbis1b').addClass("buttonquestionactive");
        commqbis1a = 0;
        $('#actioncommqbis1a').removeClass("buttonquestionactive");
        $('#actioncommqbis1a').addClass("buttonquestion");
    } else {
        commqbis1b = 0;
        $('#actioncommqbis1b').removeClass("buttonquestionactive");
        $('#actioncommqbis1b').addClass("buttonquestion");
    }
};
var questcommqbis2a = function() {
    if (commqbis2a == 0) {
        commqbis2a = 1;
        $('#actioncommqbis2a').removeClass("buttonquestion");
        $('#actioncommqbis2a').addClass("buttonquestionactive");
        commqbis2b = 0;
        $('#actioncommqbis2b').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commqbis2a = 0;
        $('#actioncommqbis2a').removeClass("buttonquestionactive");
        $('#actioncommqbis2a').addClass("buttonquestion");
    }
};
var questcommqbis2b = function() {
    if (commqbis2b == 0) {
        commqbis2b = 1;
        $('#actioncommqbis2b').removeClass("buttonquestion").addClass("buttonquestionactive");
        commqbis2a = 0;
        $('#actioncommqbis2a').removeClass("buttonquestionactive");
        $('#actioncommqbis2a').addClass("buttonquestion");
    } else {
        commqbis2b = 0;
        $('#actioncommqbis2b').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommqbis3a = function() {
    if (commqbis3a == 0) {
        commqbis3a = 1;
        $('#actioncommqbis3a').removeClass("buttonquestion").addClass("buttonquestionactive");
        commqbis3b = 0;
        $('#actioncommqbis3b').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commqbis3a = 0;
        $('#actioncommqbis3a').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommqbis3b = function() {
    if (commqbis3b == 0) {
        commqbis3b = 1;
        $('#actioncommqbis3b').removeClass("buttonquestion").addClass("buttonquestionactive");
        commqbis3a = 0;
        $('#actioncommqbis3a').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commqbis3b = 0;
        $('#actioncommqbis3b').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommqbis4a = function() {
    if (commqbis4a == 0) {
        commqbis4a = 1;$('.divaQuant').show();$('.divaQual').hide();
        $('#actioncommqbis4a').removeClass("buttonquestion").addClass("buttonquestionactive");
        commqbis4b = 0;
        $('#actioncommqbis4b').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commqbis4a = 0;$('.divaQuant').hide();
        $('#actioncommqbis4a').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommqbis4b = function() {
    if (commqbis4b == 0) {
        commqbis4b = 1;
        $('#actioncommqbis4b').removeClass("buttonquestion").addClass("buttonquestionactive");
        commqbis4a = 0;
		$('.divaQual').show();$('.divaQuant').hide();
        $('#actioncommqbis4a').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commqbis4b = 0;
		$('.divaQual').hide();
        $('#actioncommqbis4b').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommqbis5a = function() {
    if (commqbis5a == 0) {
        commqbis5a = 1;
        $('#actioncommqbis5a').removeClass("buttonquestion").addClass("buttonquestionactive");
        commqbis5b = 0;
        $('#actioncommqbis5b').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commqbis5a = 0;
        $('#actioncommqbis5a').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommqbis5b = function() {
    if (commqbis5b == 0) {
        commqbis5b = 1;
        $('#actioncommqbis5b').removeClass("buttonquestion").addClass("buttonquestionactive");
        commqbis5a = 0;
        $('#actioncommqbis5a').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commqbis5b = 0;
        $('#actioncommqbis5b').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};

 
	   var position = $("#pointblock2").position();

function CustomAlert(){

   pleft = $("#pointblock2").css("left");
       ptop = $("#pointblock2").css("top");

    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = '4000px';
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "none";
        dialogoverlay.style.height = "1000px";
        dialogbox.style.left = "45%";
        dialogbox.style.top = "50%";
        dialogbox.style.display = "block";
        dialogbox.style.position = "fixed";
        
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<p id="ok" onclick="Alert.ok()">OK</p>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();


var diverStop=function(){Alert.render("Pour découvrir comment sont gérées les poches du fonds correspondant à ces classes d’actifs, sélectionnez celle sur laquelle vous souhaitez d’abord travailler.");}
var diverStop2=function(){Alert4.render("Attention ! La gestion diversifiée consistant à allouer le poids respectif des différentes classes d’actifs, son approche ne peut être que top-down. Faites un autre choix. ");}



var cursorX;
var cursorY;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}



  function CustomAlert3(){
               
         var position = document.getElementById('placeholderL3n3');
         this.render = function(dialog){
                  var winW = window.innerWidth;
                  var winH = window.innerHeight;
                  var dialogoverlay = document.getElementById('dialogoverlay');
                  var dialogbox = document.getElementById('dialogbox');
                  dialogoverlay.style.display = "none";
                  dialogoverlay.style.height = "100px";
                  dialogbox.style.left = (winW/2) - (300* .5)+"px";
                  dialogbox.style.top = cursorY-190;
                  dialogbox.style.display = "block";
                  dialogbox.style.height = "120px";
				  
                  
                  document.getElementById('dialogboxbody').innerHTML = dialog;
                  document.getElementById('dialogboxfoot').innerHTML = '<p id="ok" onclick="Alert.ok()">X</p>';
				  document.getElementById('dialogboxfoot').style.height = "1px";
				  $("#dialogboxfoot").css ("padding-top","0px");
				  $("#dialogbox").css ("top",cursorY-190);
				  	  $("#dialogbox").css ("height","200px");
				  $("#dialogboxbody").css ("height","35px");
				  $("#dialogboxbody").css ("margin-top","25px");
		
               }
               this.ok = function(){byeForm();
        noShowForm5();
               document.getElementById('dialogbox').style.display = "none";
               
               document.getElementById('dialogoverlay').style.display = "none";
         
               }
               }
var Alert3 = new CustomAlert3();


  function CustomAlert4(){
               
         var position = document.getElementById('placeholderL3n3');
         this.render = function(dialog){
                  var winW = window.innerWidth;
                  var winH = window.innerHeight;
                  var dialogoverlay = document.getElementById('dialogoverlay');
                  var dialogbox = document.getElementById('dialogbox');
                  dialogoverlay.style.display = "none";
                  dialogoverlay.style.height = "100px";
                  dialogbox.style.left = (winW/2) - (300* .5)+"px";
                  dialogbox.style.top = cursorY-190;
                  dialogbox.style.display = "block";
                  dialogbox.style.height = "120px";
				  
                  
                  document.getElementById('dialogboxbody').innerHTML = dialog;
                  document.getElementById('dialogboxfoot').innerHTML = '<p id="ok" onclick="Alert.ok()">X</p>';
				  document.getElementById('dialogboxfoot').style.height = "1px";
				  $("#dialogboxfoot").css ("padding-top","0px");
				  $("#dialogbox").css ("top",cursorY-190);
				  $("#dialogbox").css ("height","180px");
				  $("#dialogboxbody").css ("height","35px");
				  $("#dialogboxbody").css ("margin-top","5px");
		
               }
               this.ok = function(){byeForm();
        noShowForm5();
               document.getElementById('dialogbox').style.display = "none";
               
               document.getElementById('dialogoverlay').style.display = "none";
         
               }
               }
var Alert4 = new CustomAlert4();



var actaExQuantMicFunc=function(){window.open('assets/docs/Fiche3_Données_MicroEco_quantitatives.pdf', '_blank', 'fullscreen=yes');}
var actaExQuantMacFunc=function(){window.open('assets/docs/Fiche1_Données_MacroEco_quantitatives.pdf', '_blank', 'fullscreen=yes');}
var actaExQualMacFunc=function(){window.open('assets/docs/Fiche2_Données_MacroEco_qualitatives.pdf', '_blank', 'fullscreen=yes');}
var actaExQualMicFunc=function(){window.open('assets/docs/Fiche4_Données_MicroEco_qualitatives.pdf', '_blank', 'fullscreen=yes');}




































