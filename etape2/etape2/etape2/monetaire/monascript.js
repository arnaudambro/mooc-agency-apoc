localStorage.setItem("checkmona2", 0);
localStorage.setItem("checkmona1", 0);
<!-- code infobulle rubrique-->

var monarubriqueinfobulle1 = "<div><span class='rubriquetitle'></br>Certificat de dépôt (CDN)</span></br><span class='glossary'>Cf. Glossaire</span></br></br>Titre de créance négociable émis par un établissement de crédit habilité par l’Autorité des Marchés Financiers, d’un montant minimal de 150 000 € et d’une durée de vie d’un jour à un an, négociable de gré à gré. </div>"
var monarubriqueinfobulle2 = "<div><span class='rubriquetitle'></br>Bon du Trésor (BT)</span> </br><span class='glossary'>Cf. Glossaire</span></br></br>Titre de créance négociable émis par le Trésor Public pour le compte de l’État, d’un montant minimum de 150 000 €. </div>"

var monarubriqueinfobulle3 = "<div><span class='rubriquetitle'></br>Bon des institutions et sociétés financières (BISF)</span></br><span class='glossary'>Cf. Glossaire</span></br></br> Titre de créance négociable émis par les sociétés financières.  </div>"

var monarubriqueinfobulle4 = "<div><span class='rubriquetitle'></br>Billet de trésorerie</span></br><span class='glossary'>Cf. Glossaire</span></br></br>  Titre de créance négociable émis par des entreprises, autres que les établissements de crédit, d’un montant minimum de </br>150 000 €. </div>"


var monarubriqueinfobulle2on1 = function() {
    document.getElementById('infobulle2').style.display = "block";
    document.getElementById('infobulle2').innerHTML = monarubriqueinfobulle1;
};
var monarubriqueinfobulle2off1 = function() {
    document.getElementById('infobulle2').style.display = "none";
};

var monarubriqueinfobulle2on2 = function() {
    document.getElementById('infobulle2').style.display = "block";
    document.getElementById('infobulle2').innerHTML = monarubriqueinfobulle2;
};
var monarubriqueinfobulle2off2 = function() {
    document.getElementById('infobulle2').style.display = "none";
};

var monarubriqueinfobulle2on3 = function() {
    document.getElementById('infobulle2').style.display = "block";
    document.getElementById('infobulle2').innerHTML = monarubriqueinfobulle3;
};
var monarubriqueinfobulle2off3 = function() {
    document.getElementById('infobulle2').style.display = "none";
};
var monarubriqueinfobulle2on4 = function() {
    document.getElementById('infobulle2').style.display = "block";
    document.getElementById('infobulle2').innerHTML = monarubriqueinfobulle4;
};
var monarubriqueinfobulle2off4 = function() {
    document.getElementById('infobulle2').style.display = "none";
};




<!-- fin code infobulle rubrique-->

var actapopsidenum = 0;
var obapopsidenum = 0;
var monapopsidenum = 0;
var derapopsidenum = 0;

var monapopside = function() {
    actapopsidenum = 0;
    obapopsidenum = 0;
    monapopsidenum = 1;
    derapopsidenum = 0;
}




<!-- code en savoir plus  -->

var infobulleactiv = function() {
    $('#questionconsign3').attr('onmouseover', 'infobulleon3()').attr('onmouseout', 'infobulleoff3()').css('font-weight', 'normal');
    $('#questionconsign4').attr('onmouseover', 'infobulleon4()').attr('onmouseout', 'infobulleoff4()').css('font-weight', 'normal');
    $('#questionconsign5').attr('onmouseover', 'infobulleon5()').attr('onmouseout', 'infobulleoff5()').css('font-weight', 'normal');
	$('#poolset').css('font-weight', 'normal');
};


var infobulletexte1 = '<span><span class="titlebulle" >Tout titre de créance négociable </span></br>Tout titre de créance négociable représente une part de dette à moins d’un an émise par une entreprise, une entité du secteur public ou un Etat ; c’est un titre de créance assorti d’une double obligation de rémunérer en versant un revenu et de rembourser le principal à l’échéance, qui peut s’échanger et qui a un cours.</br><span class="glossary">Cf. Glossaire</span></span>';

var infobulletexte2 = '<span><span class="titlebulle" > REMBOURSEMENT</span></br>Il intervient à l’échéance du titre de créance négociable qui est fixée à la date d’émission et peut varier en nombre de mois. C’est, comme le revenu, une obligation et non un simple droit.Ces deux obligations de rémunérer et de rembourser pourraient ne pas être honorées e cas de défaut (faillite) de l’émetteur du titre de créance négociable, ce qui estextrêmement rare en raison de la visibilité que donne une durée inférieure à un an e terme d’anticipation.</span></span>';


var infobulletexte3 = '<span><span class="titlebulle" >REVENU</span></br><span class="glossary">Cf. Glossaire</span></br></br> Exprimé sous forme de taux, il est fixé à la date d’émission du titre de créance négociable en fonction du niveau des taux du marché à cette date, de la durée du titre et du risque que présente l’émetteur. C’est la rémunération qui est due au porteur du titre de créance négociable en tant que créancier de la structure émettrice (entreprise, entité du secteur public ou État) ; cette obligation pourrait, comme d’ailleurs celle de rembourser, ne pas être honorée en cas de faillite (on parle alors de défaut) de l’émetteur du titre de créance négociable, ce qui est extrêmement rare en raison de la visibilité que donne une durée inférieure à un an en terme d’anticipation.</span>';


var infobulletexte4 = '<span><span class="titlebulle" >REMBOURSEMENT</span></br><span class="glossary">Cf. Glossaire</span></br></br>Le remboursement intervient à l’échéance du titre de créance négociable qui est fixée à la date d’émission et peut varier en nombre de mois. C’est, comme le revenu, une obligation et non un simple droit ; cette obligation pourrait, comme d’ailleurs celle de rembourser, ne pas être honorée en cas de faillite (on parle alors de défaut) de l’émetteur du titre de créance négociable, ce qui est extrêmement rare en raison de la visibilité que donne une durée inférieure à un an en terme d’anticipation.</span>';


var infobulletexte5 = '<span><span class="titlebulle" >COURS</span></br><span class="glossary">Cf. Glossaire</span></br></br>Il matérialise la valeur du titre de créance négociable de sa date d’émission à son échéance. Il est exprimé en pourcentage de la valeur nominale (fixée à la date d’émission), les titres de créance négociables ayant généralement des montants unitaires élevés.</span>';




var infobulleon1 = function() {
    document.getElementById('infobulle').style.display = "block";
    document.getElementById('infobulle').innerHTML = infobulletexte1;
};
var infobulleoff1 = function() {
    document.getElementById('infobulle').style.display = "none";
};

var infobulleon2 = function() {
    document.getElementById('infobulle').style.display = "block";
    document.getElementById('infobulle').innerHTML = infobulletexte2;
};
var infobulleoff2 = function() {
    document.getElementById('infobulle').style.display = "none";
};

var infobulleon3 = function() {
    document.getElementById('infobulle').style.display = "block";
    document.getElementById('infobulle').innerHTML = infobulletexte3;
};
var infobulleoff3 = function() {
    document.getElementById('infobulle').style.display = "none";
};
var infobulleon4 = function() {
    document.getElementById('infobulle').style.display = "block";
    document.getElementById('infobulle').innerHTML = infobulletexte4;
};
var infobulleoff4 = function() {
    document.getElementById('infobulle').style.display = "none";
};
var infobulleon5 = function() {
    document.getElementById('infobulle').style.display = "block";
    document.getElementById('infobulle').innerHTML = infobulletexte5;
};
var infobulleoff5 = function() {
    document.getElementById('infobulle').style.display = "none";
};




<!-- fin code en savoir plus -->




<!-- code carte transaction -->

var mona1 = '<div class="transactions" id="mona1"><div class="cartetrasactioncorp"><span class="titletrans">Titre de créance négociable ENEL</span>	</br><span class="minititle">Émis le 20 mai 2009</span></br>	</br><span class="transac"><span class="boldcard">Fraction de dette</span> l’entreprise</br>=    </br><span class="boldcard">Obligation de rémunérer et rembourser</span>   </br>=    </br><span class="boldcard">1 revenu</span> fixe annuel dénommé coupon de 1,25%  </br>+   </br><span class="boldcard">1 remboursement</span> à l’échéance</br>(25 août 2009)    </br>=    </br><span class="boldcard">1 cours</span> de 100 (exprimé en % de la valeur nominale soit 500 000€)</br></span</div</div>'


var mona2 = '<div class="transactions" id="mona2"><div class="cartetrasactioncorp"><span class="titletrans">Titre de créance négociable CRÉDIT AGRICOLE (CDN)</span>	</br><span class="minititle">Émis le 27 mai 2009</span></br>	</br><span class="transac"><span class="boldcard">Fraction de dette</span> de l’entreprise</br>=    </br><span class="boldcard">Obligation de rémunérer et rembourser</span>   </br>=    </br><span class="boldcard">1 revenu</span> fixe annuel dénommé coupon de 0,3%  </br>+   </br><span class="boldcard">1 remboursement</span> à l’échéance</br>(1er septembre 2009)    </br>=    </br><span class="boldcard">1 cours</span> de 100 (exprimé en % de la valeur nominale soit 50 000€)</br></span></div></div>'
var mona3 = "<div class='consigncontainer'id='videoContain' onmouseover='countmona2();totalderive();menudesactivset();actualiser();'onclick='addMonaone2()' style='text-align:left;margin-left:-63px;margin-top:20px;'> <div class='gradient'></div> <div class='sequence'>   <div class='imgcontain2 horloge' style='width:30px; background-size: 30px 20px; margin-top: 12px;'><img></div><div class='sequencetextcontainer'><span class='sequencetitle'> vidéo</span> 	 </br></br> 	 <div class='sequenceconsign'> 		Durée : 2.56 min	 </div>   </div> </div> </br> <div class='consigne' >   <span style='margin-left:-30px'class='titleblue'>ÉCHANGES INTERBANCAIRES</span>  </br>   </span>   <span>   Découvrez le fonctionnement des échanges interbancaires en cliquant sur la vidéo ci-dessous.</span>   </br>   </br> </div> <iframe src='https://player.vimeo.com/video/191616601' width='640' height='362' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen style='margin-left:0px;margin-top:0px;'  onmouseover='countmona2();totalderive();menudesactivset();actualiser();rebornSize();'onclick='addMonaone2()'></iframe><div class='valider continuetab none' id='continuetab2' onclick='continuetab2func();'>choisir </br>une autre transaction</div></div>"



var rebornSize=function(){parent.$('#frame2').css("height", "1000px");}




var continuetab2func = function() {

    $("#monaactionlignecarte1").show();
    $("#monaactionlignecarte2").show();
    $("#monaactionlignecarte3").hide();
	$("#continuetab").hide();
	$("#continuetab2").hide();
	$("#videoContain").hide();
	$("#monetairesynth").show();
	parent.parent.parent.reScroll2b();
	parent.parent.reSize2500();
	parent.parent.parent.reSize2500();



}



var continuetab1func = function() {

    $("#monaactionlignecarte1").hide();
    $("#monaactionlignecarte2").hide();
    $("#monaactionlignecarte3").show();
    $("#monaactionlignecarte3").attr("onclick","console.log('testok');");
	$("#videoContain").show();
	parent.parent.parent.reScroll2b();
	mona3selector();
	monaselect3();
	$("#continuetab2").hide();
	$("#continuetab").hide();
	$("#monetairesynth2").show();
	$("#tableaucartetitre").css('margin-top','25px;');
	parent.parent.reSize900();
	parent.parent.parent.reSize900();

}








var monaempty = ''




var mona1selector = function() {
    $('#cartetitre1').html(mona1);
    $('#cartetitre2').html(mona2);
    $('#monaactionlignecarte1').show();
    $('#monaactionlignecarte2').hide();
    $('#monaactionlignecarte3').hide();
	
    $('#cartetitre1').removeClass().addClass("cartetrasactioncorp");;
    $('#cartetitre3').html(monaempty);
    $('#cartetitre3').removeClass().addClass("cartetrasactioncorp");
    $('#cartetitre2').removeClass().addClass("cartetrasactioncorp");
    $('#cartetitre3').css('width', '206px').css('visibility', 'hidden').css('background-color', 'white').css('margin-left', '2px');
    formshow();
	parent.parent.reScroll3();
}

var mona2selector = function() {
    $('#cartetitre1').html(mona2);
    $('#cartetitre2').html(mona1);
	$('#monaactionlignecarte1').hide();
    $('#monaactionlignecarte2').show();
    $('#monaactionlignecarte3').hide();
    $('#cartetitre3').html(monaempty);
    $('#cartetitre1').removeClass().addClass("cartetrasactioncorp");
    $('#cartetitre3').removeClass().addClass("cartetrasactioncorp");
    $('#cartetitre2').removeClass().addClass("cartetrasactioncorp");
    $('#cartetitre3').css('width', '206px').css('visibility', 'hidden').css('background-color', 'white').css('margin-left', '2px');
    formshow();
	parent.parent.reScroll3();
}

var mona3selector = function() {
	$('#monaactionlignecarte1').hide();
    $('#monaactionlignecarte2').hide();
    $('#monaactionlignecarte3').show();
    $('#cartetitre1').removeClass().addClass("minicartvideohide");
    $('#cartetitre2').removeClass().addClass("minicartvideohide");
    $('#cartetitre3').css('width', '0px').css('height', '0px').css('background-color', '#EFEFEF').css('visibility', 'visible').css('margin-left', '50px').css('border-radius', '0px');
    $('#cartetitre3').html(mona3);
    formhide();
	
};



var monaselectonoff1 = 0;
var monaselectonoff2 = 0;
var monaselectonoff3 = 0;




var monaselect1 = function() {
    if (monaselectonoff1 == 0) {
        $("#monaactionlignecarte1").children().removeClass("minicarte").addClass("minicartegrey");
        $("#body").css('height', '2100px');
        $("#monaactionlignecarte2").children().removeClass("minicartegrey").addClass("minicarte");
        $("#monaactionlignecarte2").hide();
        $("#monaactionlignecarte3").children().removeClass("minicartegrey").addClass("minicarte");
        $("#monaactionlignecarte3").hide();
        $(".noVideo").show();
        parent.$('#frame2').css('height', '2500px');
        parent.$('#frame2').height('2500px');
        $('#cartetitre3').css('box-shadow', '-5px 5px 5px 0 #d9d9d9');
        monaselectonoff1 = 1;
        monaselectonoff2 = 0;
        monaselectonoff3 = 0;
        mona1selector();
        $('#monapool').css('top', '2200px');
        monaENELorCASelected = true;parent.parent.parent.reScrollStep26();

    } else {
        $("#monaactionlignecarte1").children().removeClass("minicartegrey").addClass("minicarte");
        monaselectonoff1 = 0;
    }
};

var monaselect2 = function() {
    if (monaselectonoff2 == 0) {
        $("#monaactionlignecarte2").children().removeClass("minicarte").addClass("minicartegrey");
        $("#body").css('height', '2100px');
        $("#monaactionlignecarte1").children().removeClass("minicartegrey").addClass("minicarte");
        $("#monaactionlignecarte1").hide();
        $("#monaactionlignecarte3").children().removeClass("minicartegrey").addClass("minicarte");
        $("#monaactionlignecarte3").hide();

        $(".noVideo").show();
        parent.$('#frame2').css('height', '2500px');
        parent.$('#frame2').height('2500px');
        monaselectonoff1 = 0;
        monaselectonoff2 = 1;
        var monaselectonoff3 = 0;
        mona2selector();
        $("#monapool").hide();
        monaENELorCASelected = true;
        $('#monapool').css('top', '2200px');
        $('#cartetitre3').css('box-shadow', '-5px 5px 5px 0 #d9d9d9');parent.parent.parent.reScrollStep26();




    } else {
        $("#monaactionlignecarte2").children().removeClass("minicartegrey").addClass("minicarte");
        monaselectonoff2 = 0;


    }
};

var monaselect3 = function() {
    if (monaselectonoff3 == 0) {
        $("#monaactionlignecarte3").children().removeClass("minicarte").addClass("minicartegrey");
        $("#body").css('height', 'auto');
        $("#monaactionlignecarte1").children().removeClass("minicartegrey").addClass("minicarte");
        $("#monaactionlignecarte1").hide();
        $("#monaactionlignecarte2").children().removeClass("minicartegrey").addClass("minicarte");
        $("#monaactionlignecarte2").hide();
        parent.$('#frame2').css('height', '900px');
        parent.$('#frame2').css('height', '900px');
        $('#monapool').css('top', '1270px');
        $("#monapool").hide();
        $(".noVideo").hide();
        $("#rubriquetab").hide();
        monaselectonoff1 = 0;
        monaselectonoff3 = 1;
        var monaselectonoff2 = 0;
        mona3selector();
        monaLCLSelected = true;
        $('#cartetitre3').css('box-shadow', 'none');
    } else {
        $("#monaactionlignecarte3").children().removeClass("minicartegrey").addClass("minicarte");parent.parent.parent.reScrollStep26();
        monaselectonoff3 = 0;
    }
};




<!-- fin code carte transaction -->




<!-- Formulaire questionnaire --> -->


var commq1 = 0;
var commq2 = 0;
var commq3 = 0;
var commq4 = 0;
var commq5 = 0;
var diffq1 = 0;
var diffq2 = 0;
var diffq3 = 0;
var diffq4 = 0;
var diffq5 = 0;

var questcommq1 = function() {
    if (commq1 == 0) {
        commq1 = 1;
        $('#actioncommq1').removeClass("buttonquestion").addClass("buttonquestionactive");
    } else {
        commq1 = 0;
        $('#actioncommq1').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};


var questcommq2 = function() {
    if (commq2 == 0) {
        commq2 = 1;
        $('#actioncommq2').removeClass("buttonquestion").addClass("buttonquestionactive");
    } else {
        commq2 = 0;
        $('#actioncommq2').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};

var questcommq3 = function() {
    if (commq3 == 0) {
        commq3 = 1;
        $('#actioncommq3').removeClass("buttonquestion").addClass("buttonquestionactive");
    } else {
        commq3 = 0;
        $('#actioncommq3').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};

var questcommq4 = function() {
    if (commq4 == 0) {
        commq4 = 1;
        $('#actioncommq4').removeClass("buttonquestion").addClass("buttonquestionactive");
    } else {
        commq4 = 0;
        $('#actioncommq4').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommq5 = function() {
    if (commq5 == 0) {
        commq5 = 1;
        $('#actioncommq5').removeClass("buttonquestion").addClass("buttonquestionactive");
    } else {
        commq5 = 0;
        $('#actioncommq5').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};


var questdiffq1 = function() {
    if (diffq1 == 0) {
        diffq1 = 1;
        $('#actiondiffq1').removeClass("buttonquestion").addClass("buttonquestionactive");
    } else {
        diffq1 = 0;
        $('#actiondiffq1').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};


var questdiffq2 = function() {
    if (diffq2 == 0) {
        diffq2 = 1;
        $('#actiondiffq2').removeClass("buttonquestion").addClass("buttonquestionactive");
    } else {
        diffq2 = 0;
        $('#actiondiffq2').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};

var questdiffq3 = function() {
    if (diffq3 == 0) {
        diffq3 = 1;
        $('#actiondiffq3').removeClass("buttonquestion").addClass("buttonquestionactive");
    } else {
        diffq3 = 0;
        $('#actiondiffq3').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};

var questdiffq4 = function() {
    if (diffq4 == 0) {
        diffq4 = 1;
        $('#actiondiffq4').removeClass("buttonquestion").addClass("buttonquestionactive");
    } else {
        diffq4 = 0;
        $('#actiondiffq4').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questdiffq5 = function() {
    if (diffq5 == 0) {
        diffq5 = 1;
        $('#actiondiffq5').removeClass("buttonquestion").addClass("buttonquestionactive");
    } else {
        diffq5 = 0;
        $('#actiondiffq5').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
      	  var greenFox=function(){$('.goodJob').removeClass(".buttonquestionactive").addClass( "buttonquestionactivetrue" );}

var checkrep = function() {
    if (commq1 == 1 && commq2 == 1 && commq3 == 1 && commq4 == 1 && commq5 == 1 && diffq2 == 1 && diffq1 == 1 && diffq3 == 0 && diffq4 == 0 && diffq5 == 0) {
        monapopside();
        onscreencongratMona();
        hidevalid();
        menuiconeoff();
        infobulleactiv();
        countmona1();
        totalderive();
        actualiser();
		greenFox();
        menudesactivset();
        parent.$('#frame2').css("height", "2500px");
    } else {
        onscreennocongrat()
    }
};


var hidevalid = function() {
    $('#actionvalid').hide();
}


var menuiconeoff = function() {

    localStorage.setItem("marchemona", 1);
};