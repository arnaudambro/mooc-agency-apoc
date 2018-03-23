

var actaNumber=4;
var divaNumber=2;
var obaNumber=2;
var monaNumber=2;

var suiteOfQuiz=localStorage.getItem("suiteOfQuiz");


var d7acta=function(){localStorage.setItem("suiteOfQuiz","acta");suiteOfQuiz=localStorage.getItem("suiteOfQuiz");
actaNumber=4;
divaNumber=2;
obaNumber=2; 
monaNumber=2;

parent.$('.acta').fadeOut(500);
parent.parent.$('.acta').fadeOut(500);
parent.$('#acta'+actaNumber).fadeIn(500);
parent.parent.$('#acta'+actaNumber).fadeIn(500);
parent.$('.oba').fadeOut(500);
parent.parent.$('.oba').fadeOut(500);
parent.$('.diva').fadeOut(500);
parent.parent.$('.diva').fadeOut(500);
parent.$('.mona').fadeOut(500);
parent.parent.$('.mona').fadeOut(500);

}





var d7oba=function(){localStorage.setItem("suiteOfQuiz","oba");suiteOfQuiz=localStorage.getItem("suiteOfQuiz");
actaNumber=4;
divaNumber=2;
obaNumber=2; 
monaNumber=2;
parent.$('.oba').fadeOut(500);
parent.parent.$('.oba').fadeOut(500);
parent.$('.acta').fadeOut(500);
parent.parent.$('.acta').fadeOut(500);
parent.$('#oba'+obaNumber).fadeIn(500);
parent.parent.$('#oba'+obaNumber).fadeIn(500);
parent.$('.diva').fadeOut(500);
parent.parent.$('.diva').fadeOut(500);
parent.$('.mona').fadeOut(500);
parent.parent.$('.mona').fadeOut(500);
suiteOfQuiz="oba";




}
var d7mona=function(){localStorage.setItem("suiteOfQuiz","mona");suiteOfQuiz=localStorage.getItem("suiteOfQuiz");
divaNumber=2;
obaNumber=2; 
monaNumber=2;
parent.$('.mona').fadeOut(500);
parent.parent.$('.mona').fadeOut(500);
parent.$('.acta').fadeOut(500);
parent.parent.$('.acta').fadeOut(500);
parent.$('.oba').fadeOut(500);
parent.parent.$('.oba').fadeOut(500);
parent.$('.diva').fadeOut(500);
parent.parent.$('.diva').fadeOut(500);
parent.$('#mona'+monaNumber).fadeIn(500);
parent.parent.$('#mona'+monaNumber).fadeIn(500);

}


var d7diva=function(){localStorage.setItem("suiteOfQuiz","diva");suiteOfQuiz=localStorage.getItem("suiteOfQuiz");
divaNumber=2;
obaNumber=2; 
monaNumber=2;
parent.$('.diva').fadeOut(500);
parent.parent.$('.diva').fadeOut(500);
parent.$('.acta').fadeOut(500);
parent.parent.$('.acta').fadeOut(500);
parent.$('.oba').fadeOut(500);
parent.parent.$('.oba').fadeOut(500);
parent.$('#diva'+divaNumber).fadeIn(500);
parent.parent.$('#diva'+divaNumber).fadeIn(500);
parent.$('.mona').fadeOut(500);
parent.parent.$('.mona').fadeOut(500);

}

var suitOnScreen = function(){
	
	var suiteOfQuizb=localStorage.getItem("suiteOfQuiz");

if(suiteOfQuizb=="acta"){
						parent.$('#acta'+actaNumber+"b").fadeOut(500);
						parent.$('#acta'+actaNumber+"b").css("visibility","hidden");
						parent.parent.$('#acta'+actaNumber+"b").css("visibility","hidden");
						parent.parent.$('#acta'+actaNumber+"b").fadeIn(500);
}

if(suiteOfQuizb=="oba"){
						parent.$('#oba'+obaNumber+"b").fadeOut(500);
						parent.$('#oba'+obaNumber+"b").css("visibility","hidden");
						parent.parent.$('#oba'+obaNumber+"b").css("visibility","hidden");
						parent.parent.$('#oba'+obaNumber+"b").fadeOut(500);
}
if(suiteOfQuizb=="mona"){
						parent.$('#mona'+monaNumber+"b").fadeOut(500);
						parent.$('#mona'+monaNumber+"b").css("visibility","hidden");
						parent.parent.$('#mona'+monaNumber+"b").css("visibility","hidden");
						parent.parent.$('#mona'+monaNumber+"b").fadeOut(500);
}

if(suiteOfQuizb=="diva"){
						parent.$('#diva'+divaNumber+"b").fadeOut(500);
						parent.$('#diva'+divaNumber+"b").css("visibility","hidden");
						parent.parent.$('#diva'+divaNumber+"b").css("visibility","hidden");
						parent.parent.$('#diva'+divaNumber+"b").fadeOut(500);
}


}

var ficheShowInt1=0;
var ficheShowInt2=0;
var ficheShowInt3=0;
var ficheShowInt4=0;
var ficheShowInt5=0;
var ficheShowHide=function(){
if(ficheShowInt1==0){$('#fiche').fadeIn(500);ficheShowInt1=1;}
else if(ficheShowInt1==1){$('#fiche').fadeOut(500);ficheShowInt1=0;}


}


var ficheShowHide2=function(){
if(ficheShowInt2==0){$('#fiche2').fadeIn(500);ficheShowInt2=1;}
else if(ficheShowInt2==1){$('#fiche2').fadeOut(500);ficheShowInt2=0;}


}



var ficheShowHide3=function(){
if(ficheShowInt3==0){$('#fiche3').fadeIn(500);ficheShowInt3=1;}
else if(ficheShowInt3==1){$('#fiche3').fadeOut(500);ficheShowInt3=0;}


}


var ficheShowHide4=function(){
if(ficheShowInt4==0){$('#fiche4').fadeIn(500);ficheShowInt4=1;}
else if(ficheShowInt4==1){$('#fiche4').fadeOut(500);ficheShowInt4=0;}


}


var ficheShowHide5=function(){
if(ficheShowInt5==0){$('#fiche5').fadeIn(500);ficheShowInt5=1;}
else if(ficheShowInt5==1){$('#fiche5').fadeOut(500);ficheShowInt5=0;}


}



var showQuiz=function(){ $('#quizPart2').fadeIn(1000);$('#converter').fadeIn(1000);$('#consignePart').hide();
}






























