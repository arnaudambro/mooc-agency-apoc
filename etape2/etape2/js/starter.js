// <!-- NETTOYAGE LOCALSTORAGE	 -->
	

		
// <!-- FIN NETTOYAGE LOCALSTORAGE	 -->

var stopderivecolor=function(){$('#derive').addClass("menuiconegrey");}
var stopderivesrc=function(){$('#derive').attr("onclick","stop()");}
stopderivecolor();
stopderivesrc();
	var checkmona1=parseInt(localStorage.getItem("marchemona1"));
		var checkmona2=parseInt(localStorage.getItem("marchemona2"));
		

// <!-- FONCTION ACTUALISER -->

		


var actualiser=function(){
	
	
		var checkmona1=parseInt(localStorage.getItem("marchemona1"));
		var checkmona2=parseInt(localStorage.getItem("marchemona2"));



		var menuacta=localStorage.getItem("marcheacta");

		var menuoba=localStorage.getItem("marcheoba");

		var menudera=localStorage.getItem("marchedera");

		
		
		var menuonoff=localStorage.getItem("menugame");	
		var checkframe2=parseInt(localStorage.getItem("MyFrame"));
		localStorage.setItem("MyFrame",0);
		var monaend1=localStorage.getItem("marchemona1");
		
		
var monaend2=localStorage.getItem("marchemona2");
var actaend=localStorage.getItem("marcheacta");
var obaend=localStorage.getItem("marcheoba");
		


}


	
window.onload = actualiser();	


	



// CUSTOM ALERT



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
                  dialogbox.style.top = cursorY-190;
                  dialogbox.style.display = "block";
                  dialogbox.style.height = "120px";
                  
                  document.getElementById('dialogboxbody').innerHTML = dialog;
                  document.getElementById('dialogboxfoot').innerHTML = '<p id="ok" onclick="Alert.ok()">X</p>';
               }
               this.ok = function(){
               document.getElementById('dialogbox').style.display = "none";
               document.getElementById('dialogoverlay').style.display = "none";
         
               }
               }
var Alert = new CustomAlert();

function CustomAlert2(){
	
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
               }
               this.ok = function(){
               document.getElementById('dialogbox').style.display = "none";
               document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert2 = new CustomAlert2();



var menu2interon=function(){localStorage.setItem('menu2check',1);}


// FIN CUSTOM ALERTT









// CONGRAT

//Congrat pour la question avec "Rubrique présente" et "Contenu identique"
var onscreencongrat=function(){Alert.render("BRAVO ! C'EST LA BONNE RÉPONSE.");infotabon();menudesactivset();parent.$('#frame2').css("height","2100px");}



var onscreencongrat=function(){Alert.render("BRAVO ! C'EST LA BONNE RÉPONSE.");infotabon();clickframe3();reactmenu();};



var onscreennocongrat=function(){Alert.render("CE N'EST PAS LA BONNE RÉPONSE. RÉESSAYEZ !");document.getElementById('dialogbox').style.height = "100px";};


// Gestion des messages de félicitations sur l'activité "Rubrique présente / Contenu identique"
var onscreencongratActa=function(){
	Alert2.render("BRAVO ! C'EST LA BONNE RÉPONSE.");infotabon();clickframe3();reactmenu();
	document.getElementById('dialogbox').style.height = "80px";
	document.getElementById('dialogbox').style.width = "260px";
	document.getElementById('dialogboxfoot').style.height = "3px";
	document.getElementById('dialogbox').style.top = "1500px";
	$("#dialogboxbody").css('margin-top','-20px');
	//onclick de fermeture de la pop up
	$("#ok").attr("onclick","Alert.ok();$('#poolset').css('display','block');");
};

var onscreencongratOba=function(){
	Alert2.render("BRAVO ! C'EST LA BONNE RÉPONSE.");
	infotabon();clickframe3();reactmenu();
	document.getElementById('dialogbox').style.height = "80px";
	document.getElementById('dialogbox').style.width = "260px";
	document.getElementById('dialogboxfoot').style.height = "3px";
	document.getElementById('dialogbox').style.top = "1360px";
	$("#dialogboxbody").css('margin-top','-20px');
	//onclick de fermeture de la pop up
	$("#ok").attr("onclick","Alert.ok();$('#poolset').css('display','block');");
};


var onscreencongratMona=function(){
	Alert2.render("BRAVO ! C'EST LA BONNE RÉPONSE.");infotabon();
	document.getElementById('dialogbox').style.height = "80px";
	document.getElementById('dialogbox').style.width = "260px";
	document.getElementById('dialogboxfoot').style.height = "3px";
	document.getElementById('dialogbox').style.top = "1100px";
	$("#dialogboxbody").css('margin-top','-20px');
	//onclick de fermeture de la pop up
	$("#ok").attr("onclick","Alert.ok();$('#poolset').css('display','block');");
};


var onscreennocongrat2=function(){Alert2.render("CE N'EST PAS LA BONNE RÉPONSE. RÉESSAYEZ !");};

var findejeufunc=function(){parent.$('#frame2').contents().find('.findejeu').css("display","block");}

// FIN CONGRAT










// SPEC MONA



var formhide=function(){$(".form").hide();}
var formshow=function(){$(".form").show();}
		
		

// FIN SPEC MONA







// FONCTIONS SIMPLES

		// FONCTION STORAGE
		
		
		var countmona=function(){localStorage.setItem("marchemona",1);}	
		var countmona1=function(){localStorage.setItem("marchemona1",1);actualiser()}	
		var countmona2=function(){localStorage.setItem("marchemona2",1);actualiser();}	
		var countacta=function(){localStorage.setItem("marcheacta",1);}		
		var countoba=function(){localStorage.setItem("marcheoba",1);}		
		var countdera=function(){localStorage.setItem("marchdera",1);}
		
		var menudereactiv=function(){localStorage.setItem("menugame","1");}	
		var derivAdd = function(){derivstorage=derivstorage+1;}	
		var pulderivstorage=function(){localStorage.setItem("derivstorage",derivstorage);}
		var menudesactiv=function(){localStorage.setItem("menugame",0);}	
		var menu2desactiv=function(){localStorage.setItem("menu2check",0);}
		var menu2inter=function(){localStorage.setItem("menu2check",0);}
		var menuactivtest=function(){if(menuonoff==0){$('.menuico').addClass("menuiconegrey");$('.menuico').attr("onclick","stop()");}}



		// FIN STORAGE
		
		
		
		// FONCTION CSS
		
		var reactmenu=function(){
				actualiser();
				activdera2();
			parent.$('#frame1').contents().find('.menuico').removeClass("menuiconegrey").addClass("menuico");
			parent.$('#frame1').contents().find('#action').attr("onclick","action();clickframe2();desactivmenu();actadone();parent.parent.parent.reScroll();;");
			parent.$('#frame1').contents().find('#obligation').attr("onclick","obligation();clickframe2();desactivmenu();obadone();parent.parent.parent.reScroll();;parent.parent.parent.reScroll();;");
			parent.$('#frame1').contents().find('#monetaire').attr("onclick","monetaire();clickframe2();desactivmenu();monadone();parent.parent.parent.reScroll();;parent.parent.parent.reScroll();;parent.parent.parent.reScroll();;");
			parent.$('#frame8').contents().find('.menuico').removeClass("menuiconegrey").addClass("menuico");
			parent.$('#frame8').contents().find('#action').attr("onclick","action();clickframe2();desactivmenu();actadone();parent.parent.parent.reScroll();;");
			parent.$('#frame8').contents().find('#obligation').attr("onclick","obligation();clickframe2();desactivmenu();obadone();parent.parent.parent.reScroll();");
			parent.$('#frame8').contents().find('#monetaire').attr("onclick","monetaire();clickframe2();desactivmenu();monadone();parent.parent.parent.reScroll();");
			
			}
			
			
		var monadone=function(){parent.$('#frame1').contents().find('#monetaire').addClass('done');countmona();parent.$('#frame8').contents().find('#monetaire').addClass('done');countmona();}
		var actadone=function(){parent.$('#frame1').contents().find('#action').addClass('done');countacta();parent.$('#frame8').contents().find('#action').addClass('done');countacta();}
		var obadone=function(){parent.$('#frame1').contents().find('#obligation').addClass('done');countoba();parent.$('#frame8').contents().find('#obligation').addClass('done');countoba();}
		var deradone=function(){parent.$('#frame1').contents().find('#derive').addClass('done');localStorage.setItem('marchedera',1);}	
		
		
		
		var desactivmenu=function(){parent.$('#frame1').contents().find('.menuico').addClass("menuiconegrey");$(".menuico").attr("onclick","stop");}
		
		
		var clickframe2= function(){parent.$("#frame2").css("display","block");parent.$("#frame8").css("display","none");}	
		var clickframe3=function(){parent.$("#frame8").css("display","block");}	
		var closenocongrat=function(){$('#nocongrat').css('display','none');};
		var closecongrat=function(){$('#congrat').css('display','none');infotabon();};
		var infotabon=function(){$('#rubriquetab').css('display','block');parent.$('#frame2').css('height','3037px');};
		var formhide=function(){$(".form").hide();}
		var formshow=function(){$(".form").show();}

		// FIN FONCTION CSS


// FIN FOCNTIONS SIMPLES





// VARIABLES SIMPLES
var dera=0;
var countunlockdera=function(){dera=dera+1;}
var marchemonamenu=0;
var derivstorage=0;
var monaMenuDuBasAffiche=false;
var monaENELorCASelected=false;
var monaLCLSelected=false;
var monaend1=parseInt(localStorage.getItem("marchemona1"));
var monaend2=parseInt(localStorage.getItem("marchemona2"));
var actaend=parseInt(localStorage.getItem("marcheacta"));
var obaend=parseInt(localStorage.getItem("marcheoba"));




var activdera2=function(){

var monaend1=parseInt(localStorage.getItem("marchemona1"));
var monaend2=parseInt(localStorage.getItem("marchemona2"));
var actaend=parseInt(localStorage.getItem("marcheacta"));
var obaend=parseInt(localStorage.getItem("marcheoba"));


if(monaend1+monaend2==2||actaend==1||obaend==1){
	
	parent.$('#frame8').contents().find('.menuicoderive').removeClass("menuiconegrey").addClass("menuico");
	parent.$('#frame1').contents().find('.menuicoderive').removeClass("menuiconegrey").addClass("menuico");
	parent.$('#frame8').contents().find('#derive').attr("onclick","derive();clickframe2();deradone();parent.parent.parent.reScroll();reactmenu();showMenu2();");
	parent.$('#frame1').contents().find('#derive').attr("onclick","derive();clickframe2();deradone();parent.parent.parent.reScroll();reactmenu();showMenu2();");	parent.$('#frame8').contents().find('#derive2').attr("onclick","derive();clickframe2();deradone();parent.parent.parent.reScroll();reactmenu();showMenu2();");
	parent.$('#frame1').contents().find('#derive2').attr("onclick","derive();clickframe2();deradone();parent.parent.parent.reScroll();reactmenu();showMenu2();");
	parent.parent.$('#frame8').contents().find('.menuicoderive').removeClass("menuiconegrey").addClass("menuico");
	parent.parent.$('#frame1').contents().find('.menuicoderive').removeClass("menuiconegrey").addClass("menuico");
	parent.parent.$('#frame8').contents().find('#derive').attr("onclick","derive();clickframe2();deradone();parent.parent.parent.reScroll();reactmenu();showMenu2();");
	parent.parent.$('#frame1').contents().find('#derive').attr("onclick","derive();clickframe2();deradone();parent.parent.parent.reScroll();reactmenu();showMenu2();");	parent.parent.$('#frame8').contents().find('#derive2').attr("onclick","derive();clickframe2();deradone();parent.parent.parent.reScroll();reactmenu();showMenu2();");
	parent.parent.$('#frame1').contents().find('#derive2').attr("onclick","derive();clickframe2();deradone();parent.parent.parent.reScroll();reactmenu();showMenu2();");
	
	
}


}
var showMenu2=function(){parent.$('#frame8').show();}
// FIN VARIABLE SIMPLES



// MENU DERIVES
var totalderive =function(){if(parseInt(localStorage.getItem("marchemona1"))==1 && parseInt(localStorage.getItem("marchemona2"))==1){monadone();reactmenu();clickframe3();}}




// MENU DERIVES








						
var menudesactivtest3=function(){
	

		
	
						if(checkmona1==1&&checkmona2!=1){
							if(monaLCLSelected){
									parent.$('#frame2').contents().find('.monaavert').css('display','none');
							}else{
								parent.$('#frame2').contents().find('.monaavert').css('display','block');
								parent.$('#frame2').contents().find('#choosemona').css('display','none');
								parent.$('#frame2').contents().find('.monaavert').css('top','2200px');
								parent.$('#frame2').contents().find('#monaactionlignecarte2').css('display','none');
								parent.$('#frame2').contents().find('#monaactionlignecarte1').css('display','none');
								parent.$('#frame2').css('height','750px');
							}
}}
						
						
var menudesactivtest4=function(){
						if(checkmona2==1&&checkmona1!=1)
						{
							if(monaENELorCASelected){
									parent.$('#frame2').contents().find('.monaavert').css('display','none');
									parent.$('#frame2').css('height','2500px');
							}else{
								parent.$('#frame2').contents().find('.monaavert').css('display','block');
								
							}	
						}		
}

var menudesactivtest5=function(){
						if(checkmona2==1&&checkmona1==1)
						{
							parent.$('#frame2').contents().find('.monaavert').css('display','none');
							parent.$('#frame2').contents().find('#choosemona').css('display','block');
							parent.$('#frame2').css('height','1000px');
					
						}
					}
var menudesactivtest6=function(){
						if(checkmona2==0&&checkmona1==0)
							
						{
							parent.$('#frame2').contents().find('.monaavert').css('display','none');}
								}
							
							
var menudesactivset=function(){
	
	checkmona1=localStorage.getItem("marchemona1");
checkmona2=localStorage.getItem("marchemona2");
		
		menudesactivtest4();menudesactivtest3();menudesactivtest6();menudesactivtest5();
	
}
								
							
	var forceDerive=function(){parent.$('#frame2').css('height','1600px');}

	var goToQuiz=function(){
							parent.$('#frame2').hide();
							parent.$('#frame8').hide();
							parent.$('#quiz').show();}
		
		
		var stopQuiz=function(){parent.$('#quiz').hide();}
			
		
		
		
		
		
		
	
	
	
		
// FONCTIONS LIEES A l'INDEX


function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }



window.ScrollToTop = function(){
  $('html,body', window.document, window.document).animate({
    scrollTop: '0px'
  }, 'slow');
};


	
// FONCTIONS LIEES A l'INDEX
		
		

		

