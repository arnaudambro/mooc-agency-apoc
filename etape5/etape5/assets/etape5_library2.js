
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
            $('#2form5').fadeIn(3000);
        });apQt();
    
    }
    else if (commqbis1b==1&&commqbis3b==1&&commqbis4b == 1) {
      noWay(); 
  
    } 


}
var checkrepbis5 = function() {
    if (commqbis5a == 1) {
    
         $('#2form5').css('visibility', 'hidden');topDownactiv2();
    
    }
    if (commqbis5b == 1) {
        $('#2form5').css('visibility', 'hidden');
  
    }
}
var showForm5 = function() {
    $('#2form4').fadeOut("slow", function() {
        $('#2form5').fadeIn(3000);
    });
}
var noShowForm5 = function() {
    $('#2form4').css('visibility', 'hidden');
}
var PassInd = function() {
    $('.PassIndClass').addClass('touchactive');
}
var ActBen2 = function() {
    $('.ActBen2Class').addClass('touchactive');
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








var apQal = function() {AC
    $('.apQalClass').addClass('touchactive');
}
var apQt = function() {
    $('.apQtClass').addClass('touchactive');
}


var topDownactiv2 = function() {
    $('.topDownClass2').addClass('touchactive');
}



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
        commqbis4a = 1;
        $('#actioncommqbis4a').removeClass("buttonquestion").addClass("buttonquestionactive");
        commqbis4b = 0;
        $('#actioncommqbis4b').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commqbis4a = 0;
        $('#actioncommqbis4a').removeClass("buttonquestionactive").addClass("buttonquestion");
    }
};
var questcommqbis4b = function() {
    if (commqbis4b == 0) {
        commqbis4b = 1;
        $('#actioncommqbis4b').removeClass("buttonquestion").addClass("buttonquestionactive");
        commqbis4a = 0;
        $('#actioncommqbis4a').removeClass("buttonquestionactive").addClass("buttonquestion");
    } else {
        commqbis4b = 0;
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
				  $("#dialogbox").css ("height","125px");
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

