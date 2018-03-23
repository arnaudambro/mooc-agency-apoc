
var cursorX;
var cursorY;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}
var errorCheck=0;


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
				  document.getElementById('dialogboxfoot').style.height = "1px";

               }
               this.ok = function(){
               document.getElementById('dialogbox').style.display = "none";

               document.getElementById('dialogoverlay').style.display = "none";
			   if(errorCheck==1){myFunction();};
				if(errorCheck==2){indiceOnScreen();myFunction();};
               }
               }
var Alert = new CustomAlert();
// CONGRAT
var success=function(){Alert.render("BRAVO ! C'EST LA BONNE RÉPONSE.");errorCheck=2;hideIndice();};



var error=function(){Alert.render("CE N'EST PAS LA BONNE RÉPONSE. RÉESSAYEZ !");errorCheck=1;};





// Affichage solution
var hideIndice=function(){$('#indice').hide();}
var idIframe = window.frameElement.getAttribute('id');
var idIframeId = window.frameElement;
var dataScrollframe ="";
var folder="../dropSol/";
var term=".png"
var term2="Html"
var source=folder+idIframe+term;
var frameHtml=idIframe;
var frameForHtml=idIframe;
var indiceOnScreen=function(){console.log(frameHtml);
	
	if(frameHtml=="actiondrop1"){frameForHtml=actiondrop1Html;
	$('#overlay').html(frameForHtml);
	$('#overlay').show();};
	if(frameHtml=="actiondrop2"){frameForHtml=actiondrop2Html;
	$('#overlay').html(frameForHtml);
	$('#overlay').show();};
	if(frameHtml=="obligatairedrop1"){frameForHtml=obligatairedrop1Html;
	$('#overlay').html(frameForHtml);
	$('#overlay').show();};
	if(frameHtml=="obligatairedrop2"){frameForHtml=obligatairedrop2Html;
	$('#overlay').html(frameForHtml);
	$('#overlay').show();};
	
	if(frameHtml=="4step"){frameForHtml=stepHtml;
	$('#overlay').html(frameForHtml);
	$('#overlay').show();};
}






var actiondrop1Html="<button class='button' onclick='closeOverlay();' style='position:absolute;top:200px;left:401px'>REVENIR À L’EXERCICE</button><div id ='actiondrop1'class='consigne' style='width:97%;margin-left:14px'><span class='titlegrey'>DU MOINS AU PLUS RISQUÉ</span></br><span>  Bien qu’exposée à la crise par son activité de BTP, SPIE BATIGNOLLES a un très bon carnet de commandes et une implantation française ; de plus, elle n’est pas cotée. PERNOD RICARD est présent dans les boissons haut de gamme, majoritairement en Europe et Amérique. Bien que dans la banque, BANCA MONTE DEI PASCHI n’est présente qu’en Italie. HEIDELBERG CEMENT et LAFARGE ont en commun d’être dans les matériaux et le BTP, notamment hors Europe et États-Unis, mais avec, pour LAFARGE, moins d’intégration et une forte exposition aux pays émergents.</span></div>"


var actiondrop2Html="<button class='button' onclick='closeOverlay();' style='position:absolute;top:200px;left:401px'>REVENIR À L’EXERCICE</button><div id ='actiondrop2'class='consigne' style='width:97%;margin-left:14px' ><span class='titlegrey'>DU MOINS AU PLUS RISQUÉ</span></br> <span>Le FCPE (ou Fonds Commun de Placement d’Entreprise) SPIE BATIGNOLLES est investi en actions Spie Batignolles peu risquées dans le contexte décrit. La part des actions Heidelberg Cement, Lafarge, Pernod Ricard et Banca Monte Dei Paschi représente 10% du fonds BNP PARIBAS ACTIONS EUROPE dont le risque est donc diversifié sur un grand nombre de titres. Les actions Lafarge représentent par contre 25% du portefeuille de MONSIEUR MARTIN qui est donc concentré sur un titre risqué dans le contexte décrit.</span></div>"

var obligatairedrop1Html=" <button class='button' onclick='closeOverlay();' style='position:absolute;top:200px;left:401px'>REVENIR À L’EXERCICE</button><div id ='obligatairedrop1'class='consigne' style='width:97%;margin-left:14px' ><span class='titlegrey'>DU MOINS AU PLUS RISQUÉ</span></br><span>L’ALLEMAGNE 5 ANS et l’ITALIE 5 ANS ont en commun la visibilité que leur donne leur durée, mais l’ITALIE 5 ANS pâtit des moins bonnes notation et solidité de l’État italien. L’échéance plus lointaine de l’ALLEMAGNE 10 ANS et de l’ITALIE 10 ANS présente plus de risque et, là aussi, l’ITALIE 10 ANS paraît moins sûre.</span></div>"

var obligatairedrop2Html="<button class='button' onclick='closeOverlay();' style='position:absolute;top:200px;left:401px'>REVENIR À L’EXERCICE</button><div id ='obligatairedrop2'class='consigne' style='width:97%;margin-left:14px'>span class='titlegrey'>DU MOINS AU PLUS RISQUÉ</span></br><span>PERNOD RICARD et CARREFOUR ont en commun d’être dans la consommation alimentaire, mais CARREFOUR présente, en dépit d’une meilleure notation initiale, une échéance plus éloignée et donc moins de visibilité, ainsi qu’une forte exposition à l’Amérique Latine. BANCO SANTANDER, bien que bien notée à l’émission et de durée inférieure, pâtit de l’impact de la crise sur le secteur bancaire et de sa très forte exposition à l’Amérique Latine.</span></div>"



var stepHtml="<button class='button' onclick='closeOverlay2();' style='position:absolute;top:200px;left:401px'>REVENIR À L’EXERCICE</button><div id ='obligatairedrop2'class='consigne' style='width:97%;margin-left:14px'><span class='titlegrey'>DU MOINS AU PLUS RISQUÉ</span></br><span>La performance du Fonds Monétaire A est peu volatile et le fonds est donc peu risqué.</br>La performance du Fonds Obligataire B est plus volatile que celle du Fonds Monétaire A et le fonds est donc plus risqué.La performance du Fonds Actions B est encore plus volatile. Le risque est fort de voir la valeur du fonds soit beaucoup baisser, soit beaucoup monter.</br>Cette hiérarchie des fonds en terme de risque est révélatrice de celle des marchés sur lesquels ils sont investis, à savoir que le marché monétaire est moins risqué que le marché obligataire, qui est lui-même moins risqué que celui des actions..</span></div>"











var allSet=function(){

idIframe = window.frameElement.getAttribute('id');
idIframeId = window.frameElement;

setLocalScroll=dataScrollframe;localStorage.setItem("localStep3Scroll",setLocalScroll);
}
allSet();




var setLocalScroll=0;
var setLocalFromFrame=function(){

}
var seeLocal=function(){allSet();alert(dataScrollframe);alert(idIframe)}



var closeOverlay=function(){allSet();if(errorCheck==2){scrolltoNextFrame();}$('#overlay').hide();}
function myFunction() {
$('#indice').css('visibility','visible');
}
var closeOverlay2=function(){$('#overlay').hide();}




var localStep3Scroll=localStorage.getItem("localStep3Scroll");

var scrolltoNextFrame=function(){parent.parent.parent.parent.etape3ScrollMaster();

}





