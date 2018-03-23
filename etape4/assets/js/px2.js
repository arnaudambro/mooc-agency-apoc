
		
// coockie		
		
var cookContent = document.cookie, cookEnd, i, j;
var cookie_apoc = cookie_apoc + "=";


function getCookie(name){
 if(document.cookie.length == 0)
   return null;

 var regSepCookie = new RegExp('(; )', 'g');
 var cookies = document.cookie.split(regSepCookie);

 for(var i = 0; i < cookies.length; i++){
   var regInfo = new RegExp('=', 'g');
   var infos = cookies[i].split(regInfo);
   if(infos[0] == name){
	 return unescape(infos[1]);
   }
 }
 return null;
}
   
   cookievalue=getCookie('cookie_apoc').replace(/\\054/g, ',').replace(/\L\054/g, ',').replace(/u'/g, "'").replace(/'/g, '"').replace(/L}/g, '}').replace(/True/g, 'true').replace(/False/g, 'false').slice(1, -1);

var ury=JSON.parse(cookievalue);

var nameImgFolder="assetsExt/dashboard/images";
var imgFolderdashBoardMiniLeftLogo="logo.png";
var dashBoardMiniRightLogLeftLogo="idPhoto.png";
var logoTitle="Amundi ESR Formation Online";
//var firstName=userFName;
//var familyName=userLName;
var logtrue=ury.user.username;
var userName=logtrue;
var imgFolder=nameImgFolder+"/";
var imgFolder=nameImgFolder+"/";
var url="url"
var disconnectFunction = function(){location.href='/logout';}
var dashboardFunction = function(){alert( "Handler disconect" );}
var rulesFunction = function(){alert( "Handler disconect" );}


$('#dashBoardMiniLeft').css('background-image',url+"("+imgFolder+imgFolderdashBoardMiniLeftLogo+")");
$('#dashBoardMiniRightLogLeft').css('background-image',url+"("+imgFolder+dashBoardMiniRightLogLeftLogo+")");
$('#dashBoardMiniRightLogRightLogo').text(logoTitle);
$('#logName').text(logtrue);

	
		


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
				  document.getElementById('dialogboxfoot').style.height = "1px";
				  $("#dialogboxfoot").css ("padding-top","0px");
				  $("#dialogbox").css ("top",cursorY-190);
				  $("#dialogbox").css ("height","125px");
		
               }
               this.ok = function(){
               document.getElementById('dialogbox').style.display = "none";if(scrollFor4==1){parent.parent.reScrollEtape4();}
               
               document.getElementById('dialogoverlay').style.display = "none";
         
               }
               }
var Alert = new CustomAlert();
var Alert4 = new CustomAlert()


// FIN CUSTOM ALERTT


		
var graph1=localStorage.getItem('ex1');
var graph2=localStorage.getItem('ex2');
var graph3=localStorage.getItem('ex3');
var graph4=localStorage.getItem('ex4');
var graph5=localStorage.getItem('ex5');
var graph6=localStorage.getItem('ex6');
var graph7=localStorage.getItem('ex7');


function actualise(){


graph1=localStorage.getItem('ex1');
graph2=localStorage.getItem('ex2');
graph3=localStorage.getItem('ex3');
graph4=localStorage.getItem('ex4');
graph5=localStorage.getItem('ex5');
graph6=localStorage.getItem('ex6');
graph7=localStorage.getItem('ex7');	
console.log(graph1,graph2,graph3,graph4,graph5,graph6,graph7);
}
		
var checkrep3=function(){if (graph1==1&&graph2==2&&graph3==7&&graph4==4&&graph5==3&&graph6==5&&graph7==6){
	
	onscreencongrat();videoshowframe();$("#actionvalid3").hide();scrollFor4=0;
		
}		
		
else{onscreennocongrat();seeRepFunc();scrollFor4=0;}

}		
		
checkrep5=function(){
	
actualise();checkrep3();	
	
	
}		
var	videoshowframe=function(){$('.videoIframeContainer').show();}
		
var seeRepFunc=function(){$('#seeRep').css("visibility","visible");}		
		
var seeRepOnScreen=function(){$('#diagContainer').hide();$('#repQuiz').show();$('#backToB').show();}		
	
var beBack=function(){$('#diagContainer').show();$('#repQuiz').hide();$('#backToB').hide();}		
		
	   var forum = function() {
			   window.open("https://apoc.themoocagency.com/courses/course-v1:APOC+APOC01+2017Q2/discussion/forum");
		   }

		   var survey = function() {
			   window.open("https://services.themoocagency.com/survey/index.php/986856?986856X242X2069=" + userName);
		   }
	

		

