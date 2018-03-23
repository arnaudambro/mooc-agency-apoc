

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
                  dialogbox.style.top = 1200;
                  dialogbox.style.display = "block";
                  dialogbox.style.height = "120px";
				  
                  
                  document.getElementById('dialogboxbody').innerHTML = dialog;
                  document.getElementById('dialogboxfoot').innerHTML = '<p id="ok" onclick="Alert.ok()">X</p>';
				  document.getElementById('dialogboxfoot').style.height = "1px";
				  $("#dialogboxfoot").css ("padding-top","0px");
				  $("#dialogboxbox").css ("top",cursorY);
				  $("#dialogboxbox").css ("height","50px");
		
               }
               this.ok = function(){if(errorCheck==1){parent.parent.parent.etape3ScrollMona();}
               document.getElementById('dialogbox').style.display = "none";
               
               document.getElementById('dialogoverlay').style.display = "none";
         
               }
               }
var Alert = new CustomAlert();
// CONGRAT
// FIN CUSTOM ALERTT
// CONGRAT
var errorCheck=0;
var success=function(){Alert.render("BRAVO ! C'EST LA BONNE RÉPONSE.");};
var successMona=function(){Alert.render("BRAVO ! C'EST LA BONNE RÉPONSE.");$('#monaVert').show();errorCheck=1;document.getElementById('dialogbox').style.top=1700;}






var error=function(){Alert.render("CE N'EST PAS LA BONNE RÉPONSE. RÉESSAYEZ !");};
