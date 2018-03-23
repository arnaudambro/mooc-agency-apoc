



// CUSTOM ALERT

function CustomAlert(){
	
	var position = document.getElementById('');
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = '4000px';
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "none";
        dialogoverlay.style.height = "1000px";
        dialogbox.style.left = 30+(winW/2) - (300* .5)+"px";
        dialogbox.style.top = '4700px';
        dialogbox.style.display = "block";
        
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<p id="ok" onclick="Alert.ok()">OK</p>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();



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

}
		
var checkrep3=function(){if (graph1==1&&graph2==2&&graph3==0&&graph4==3&&graph5==4&&graph6==5&&graph7==6){
	
	onscreencongrat();videoshowframe();
		
}		
		
else{onscreennocongrat();}

}		
		
checkrep5=function(){
	
actualise();checkrep3();	
	
	
}		
var	videoshowframe=function(){$('.videoIframeContainer').show();}
		
		
		
		
		
		
		
		
		
		
		
		

