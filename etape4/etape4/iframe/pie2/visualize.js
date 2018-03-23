//variable d'enregistrement de données
var tableau_info = [
  { title: "MONÉTAIRE",   value : 10,  color: "#009C00", tag:'monetaire'   },
  { title: "ACTION",     value:  10,    color: "#FF6600", tag:'actions'     },
  { title: "OBLIGATION", value: 10,   color: "#810082", tag:'obligations' },
  { title: "TITRE",     value : 10,   color: "#FFC900", tag:'titres'     },
    { title: "NON DÉFINI",value : 0,    color: "#FAFAFA", tag:'horsmarche'  },

];


var centInit=0;
var totaltab=0;
var coeff100=0;
var NotPossible=0;


var percentmonetaires=tableau_info[2].value;
var percentactions=tableau_info[0].value;
var percentobligations=tableau_info[1].value;
var percenttitres=tableau_info[3].value;



var actualise=function(){

centInit=100;
totaltab=tableau_info[0].value + tableau_info[1].value + tableau_info[2].value + tableau_info[3].value ; 
horsmarchevalue();
percentmonetaires=tableau_info[0].value;
percentactions=tableau_info[1].value;
percentobligations=tableau_info[2].value;
percenttitres=tableau_info[3].value;

localStorage.setItem('percentmonetaires',percentmonetaires);
localStorage.setItem('percentactions',percentactions);
localStorage.setItem('percentobligations',percentobligations);
localStorage.setItem('percenttitres',percenttitres);

$('#monetaire').children('.minipercent').replaceWith('<span class="minipercent">'+percentmonetaires+' %</br>');
$('#action').children('.minipercent').replaceWith('<span class="minipercent">'+percentactions+' %</br>');
$('#obligation').children('.minipercent').replaceWith('<span class="minipercent">'+percentobligations+' %</br>');
$('#titre').children('.minipercent').replaceWith('<span class="minipercent">'+percenttitres+' %</br>');
// if(percentactions==50&&percentobligations==30&&percentmonetaires==10&&percenttitres==10){NotPossible=1;}

}


var checktotaltab100=function(){if(totaltab==100&&NotPossible==0){$('#actionvalid').css('visibility','hidden');$('.ovalnoir').css('visibility','hidden');showform();parent.ex2ShowV();}}
var NotPossibleFunc=function(){if(totaltab==100&&NotPossible==1){NotPossibleRender();}}
var checktotaltab100not=function(){if(totaltab<100){totaltabnot100();}}	

var validpie=function(){actualise();checktotaltab100();checktotaltab100not();NotPossibleFunc();}

// questionnaire

var showform=function(){
	parent.$('#ex2').show();
	
}



var stop=function(){
	
	if(totaltab>=99){  $('.arrowup').css('visibility','hidden');}
	
	else{$('.arrowup').css('visibility','initial');}
	
}


var horsmarchevalue=function(){
	
	if(totaltab<105){ tableau_info[4].value=100-totaltab;}
	
}




//var info_a_dessiner;

function action(){
		

	horsmarchevalue();
	  actualise();
		stop();
  $("#pieChart").html('');
//info_a_dessiner=tableau_info;
//info_a_dessiner[0]['value']=tableau_info[0]['value']+'%';
  $("#pieChart").drawPieChart(tableau_info);
};
$(document).ready(function(){
  action();
  // action au click arrow up & down
  //arrow up
  $('.arrowup').children('button').click(function(){
  	$('#complete').css('visibility','hidden');
  

    //value du button selectionné
    var arrowupValue = $(this).val();
    var arrowup = $(this);
    //longueur de l'objet
    var objLength = tableau_info.length;
    //recherche dans l'objet de la ligne lié au bouton arrowup clické précedement
    for(i=0; i < objLength; i++)
    {
      if(tableau_info[i].tag == arrowupValue)
      {
        tableau_info[i].value = (parseInt(tableau_info[i].value) + 10);
      }
    }
    action();
  })
  //arrow down
  $('.arrowdown').children('button').click(function(){
  	$('#complete').css('visibility','hidden');

    //value du button selectionné
    var arrowdownValue = $(this).val();
    //longueur de l'objet
    var objLength = tableau_info.length;
    //recherche dans l'objet de la ligne lié au bouton arrowdown clické précedement
    for(i=0; i < objLength; i++)
    {
      if(tableau_info[i].tag == arrowdownValue)
      {
        if(tableau_info[i].value >= 10)
        {
          tableau_info[i].value = (parseInt(tableau_info[i].value) - 10);
        }
        if(tableau_info[i].value < 10)
        {
          tableau_info[i].value = 0;
        }
      }
    }
    action();actualise();
  })
});

;(function($, undefined) {
	  actualise();
  $.fn.drawPieChart = function(data, options) {
    var $this = this,
      W = $this.width(),
      H = $this.height(),
      centerX = W/2,
      centerY = H/2,
      cos = Math.cos,
      sin = Math.sin,
      PI = Math.PI,
      settings = $.extend({
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 0,
        baseColor: "#fff",
        baseOffset: 15,
        edgeOffset: 30,//offset from edge of $this
        pieSegmentGroupClass: "pieSegmentGroup",
        pieSegmentClass: "pieSegment",
        lightPiesOffset: 12,//lighten pie's width
        lightPiesOpacity: 1,//lighten pie's default opacity
        lightPieClass: "lightPie",
        animation : true,
        animationSteps : 90,
        animationEasing : "easeInOutExpo",
        tipOffsetX: -15,
        tipOffsetY: -45,
        tipClass: "pieTip",
        beforeDraw: function(){  },
        afterDrawed : function(){  },
        onPieMouseenter : function(e,data){  },
        onPieMouseleave : function(e,data){  },
        onPieClick : function(e,data){  }
      }, options),
      animationOptions = {
        linear : function (t){
          return t;
        },
        easeInOutExpo: function (t) {
          var v = t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t;
          return (v>1) ? 1 : v;
        }
      },
      requestAnimFrame = function(){  actualise();
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };
      }();

    var $wrapper = $('<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>').appendTo($this);
    var $groups = [],
        $pies = [],
        $lightPies = [],
        easingFunction = animationOptions[settings.animationEasing],
        pieRadius = Min([H/2,W/2]) - settings.edgeOffset,
        segmentTotal = 0;

    //Draw base circle
    var drawBasePie = function(){
	 actualise();
      var base = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      var $base = $(base).appendTo($wrapper);
      base.setAttribute("cx", centerX);
      base.setAttribute("cy", centerY);
      base.setAttribute("r", pieRadius+settings.baseOffset);
      base.setAttribute("fill", settings.baseColor);
    }();

    //Set up pie segments wrapper
    var pathGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var $pathGroup = $(pathGroup).appendTo($wrapper);
    $pathGroup[0].setAttribute("opacity",0);

    //Set up tooltip
    var $tip = $('<div class="' + settings.tipClass + '" />').appendTo('body').hide(),
      tipW = $tip.width(),
      tipH = $tip.height();

    for (var i = 0, len = data.length; i < len; i++){
      segmentTotal += data[i].value;
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute("data-order", i);
      g.setAttribute("class", settings.pieSegmentGroupClass);
      $groups[i] = $(g).appendTo($pathGroup);
   

      var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	   actualise();
      p.setAttribute("stroke-width", settings.segmentStrokeWidth);
      p.setAttribute("stroke", settings.segmentStrokeColor);
      p.setAttribute("stroke-miterlimit", 2);
      p.setAttribute("fill", data[i].color);
      p.setAttribute("class", settings.pieSegmentClass);
      $pies[i] = $(p).appendTo($groups[i]);

      var lp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	   actualise();
      lp.setAttribute("stroke-width", settings.segmentStrokeWidth);
      lp.setAttribute("stroke", settings.segmentStrokeColor);
      lp.setAttribute("stroke-miterlimit", 2);
      lp.setAttribute("fill", data[i].color);
      lp.setAttribute("opacity", settings.lightPiesOpacity);
      lp.setAttribute("class", settings.lightPieClass);
      $lightPies[i] = $(lp).appendTo($groups[i]);
    }

    settings.beforeDraw.call($this);
	 actualise();
    //Animation start
    triggerAnimation();
	 actualise();

    function pathMouseEnter(e){
	 actualise();
      var index = $(this).data().order;
      $tip.text(data[index].title + ": " + data[index].value).fadeIn(200);
      if ($groups[index][0].getAttribute("data-active") !== "active"){
        $lightPies[index].animate({opacity: .8}, 180);
      }
      settings.onPieMouseenter.apply($(this),[e,data]);
    }
    function pathMouseLeave(e){
      var index = $(this).data().order;
      $tip.hide();
      if ($groups[index][0].getAttribute("data-active") !== "active"){
        $lightPies[index].animate({opacity: settings.lightPiesOpacity}, 100);
      }
      settings.onPieMouseleave.apply($(this),[e,data]);
    }
    function pathMouseMove(e){
      $tip.css({
        top: e.pageY + settings.tipOffsetY,
        left: e.pageX - $tip.width() / 2 + settings.tipOffsetX
      });
    }
    function pathClick(e){
	 actualise();
      var index = $(this).data().order;
      var targetGroup = $groups[index][0];
      for (var i = 0, len = data.length; i < len; i++){
        if (i === index) continue;
        $groups[i][0].setAttribute("data-active","");
        $lightPies[i].css({opacity: settings.lightPiesOpacity});
      }
      if (targetGroup.getAttribute("data-active") === "active"){
        targetGroup.setAttribute("data-active","");
        $lightPies[index].css({opacity: .8});
      } else {
        targetGroup.setAttribute("data-active","active");
        $lightPies[index].css({opacity: 1});
      }
      settings.onPieClick.apply($(this),[e,data]);
    }
    function drawPieSegments (animationDecimal){
      var startRadius = -PI/2,//-90 degree
          rotateAnimation = 1;
      if (settings.animation) {
        rotateAnimation = animationDecimal;//count up between0~1
      }

      $pathGroup[0].setAttribute("opacity",animationDecimal);

      //draw each path
      for (var i = 0, len = data.length; i < len; i++){
        var segmentAngle = rotateAnimation * ((data[i].value/segmentTotal) * (PI*2)),//start radian
            endRadius = startRadius + segmentAngle,
            largeArc = ((endRadius - startRadius) % (PI * 2)) > PI ? 1 : 0,
            startX = centerX + cos(startRadius) * pieRadius,
            startY = centerY + sin(startRadius) * pieRadius,
            endX = centerX + cos(endRadius) * pieRadius,
            endY = centerY + sin(endRadius) * pieRadius,
            startX2 = centerX + cos(startRadius) * (pieRadius + settings.lightPiesOffset),
            startY2 = centerY + sin(startRadius) * (pieRadius + settings.lightPiesOffset),
            endX2 = centerX + cos(endRadius) * (pieRadius + settings.lightPiesOffset),
            endY2 = centerY + sin(endRadius) * (pieRadius + settings.lightPiesOffset);
        var cmd = [
          'M', startX, startY,//Move pointer
          'A', pieRadius, pieRadius, 0, largeArc, 1, endX, endY,//Draw outer arc path
          'L', centerX, centerY,//Draw line to the center.
          'Z'//Cloth path
        ];
        var cmd2 = [
          'M', startX2, startY2,
          'A', pieRadius + settings.lightPiesOffset, pieRadius + settings.lightPiesOffset, 0, largeArc, 1, endX2, endY2,//Draw outer arc path
          'L', centerX, centerY,
          'Z'
        ];
        $pies[i][0].setAttribute("d",cmd.join(' '));
        $lightPies[i][0].setAttribute("d", cmd2.join(' '));
        startRadius += segmentAngle;
      }
    }

    var animFrameAmount = (settings.animation)? 1/settings.animationSteps : 1,//if settings.animationSteps is 10, animFrameAmount is 0.1
        animCount =(settings.animation)? 0 : 1;
    function triggerAnimation(){
      if (settings.animation) {
        requestAnimFrame(animationLoop);
      } else {
        drawPieSegments(1);
      }
    }
    function animationLoop(){
      animCount += animFrameAmount;//animCount start from 0, after "settings.animationSteps"-times executed, animCount reaches 1.
      drawPieSegments(easingFunction(animCount));
      if (animCount < 1){
        requestAnimFrame(arguments.callee);
      } else {
        settings.afterDrawed.call($this);
      }
    }
    function Max(arr){
      return Math.max.apply(null, arr);
    }
    function Min(arr){
      return Math.min.apply(null, arr);
    }
    return $this;
  };
})(jQuery);

// fonction alert



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
				  $("#dialogboxhead").css ("height","0px");
				  $("#dialogboxhead").css ("padding","0px");
				  $("#dialogboxbody").css ("font-size","12px");
		
               }
               this.ok = function(){
               document.getElementById('dialogbox').style.display = "none";
               
               document.getElementById('dialogoverlay').style.display = "none";
         
               }
               }
var Alert = new CustomAlert();
// fin de fonction alert
























