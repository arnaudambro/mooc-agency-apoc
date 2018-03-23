
var cursorX;
var cursorY;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}

var stopQuiz=0;

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
			   if(stopQuiz==1){parent.showQuiz();}
         
               }
               }
var Alert = new CustomAlert();
// FIN CUSTOM ALERTT
// CONGRAT
var success=function(){parent.nextStephow();Alert.render("BRAVO ! C'EST LA BONNE RÉPONSE.");stopQuiz=1;parent.suitOnScreen();suitOnScreen();};

var miss=function(){Alert.render("VOUS AVEZ OUBLIÉ UNE RÉPONSE.");};

var error=function(){Alert.render("CE N'EST PAS LA BONNE RÉPONSE. CONTINUEZ !");stopQuiz=1;parent.suitOnScreen();suitOnScreen();};

var suitOnScreen = function(){
	
	var suiteOfQuizb=localStorage.getItem("suiteOfQuiz");

if(suiteOfQuizb=="acta"){
						// parent.$('#acta'+actaNumber+"b").fadeIn(500);
						// parent.$('#acta'+actaNumber+"b").css("visibility","visible");
						// parent.parent.$('#acta'+actaNumber+"b").css("visibility","visible");
						// parent.parent.$('#acta'+actaNumber+"b").fadeIn(500);
}

if(suiteOfQuizb=="oba"){
						// parent.$('#oba'+obaNumber+"b").fadeIn(500);
						// parent.$('#oba'+obaNumber+"b").css("visibility","visible");
						// parent.parent.$('#oba'+obaNumber+"b").css("visibility","visible");
						// parent.parent.$('#oba'+obaNumber+"b").fadeIn(500);
}
if(suiteOfQuizb=="mona"){
						// parent.$('#mona'+monaNumber+"b").fadeIn(500);
						// parent.$('#mona'+monaNumber+"b").css("visibility","visible");
						// parent.parent.$('#mona'+monaNumber+"b").css("visibility","visible");
						// parent.parent.$('#mona'+monaNumber+"b").fadeIn(500);
}

if(suiteOfQuizb=="diva"){
						// parent.$('#diva'+divaNumber+"b").fadeIn(500);
						// parent.$('#diva'+divaNumber+"b").css("visibility","visible");
						// parent.parent.$('#diva'+divaNumber+"b").css("visibility","visible");
						// parent.parent.$('#diva'+divaNumber+"b").fadeIn(500);
}


}
