//variable d'enregistrement de données
var numexo='2';


var tableau_info = [
  { title: "MONÉTAIRE",   value : 0,  color: "#009C00", tag:'monetaire'   },
  { title: "ACTIONS",     value:  0,    color: "#FF6600", tag:'actions'     },
  { title: "OBLIGATIONS", value:  0,   color: "#810082", tag:'obligations' },
  { title: "TITRES",     value : 0,   color: "#FFC900", tag:'derives'     },
  { title: "blank",     value : 0,   color: "#EFEFEF", tag:'derives'     },
    { title: "HORS MARCHÉS",value : 0,    color: "url(#grad1)", tag:'horsmarche'  },
    { title: "HORS MARCHÉS",value : 0,    color: "url(#grad2)", tag:'horsmarche'  },

];


var centInit=0;
var totaltab=0;
var coeff100=0;
var step=0;


var save=function(){localStorage.setItem("ex"+numexo,step);}



var actualise=function(){
	
	<!-- FONDS DIVERSIFIE -->	
	if(step==0){
	tableau_info[0].value=0;
	tableau_info[1].value=0;
	tableau_info[2].value=0;
	tableau_info[3].value=0;
	tableau_info[4].value=100;
	tableau_info[5].value=0;
	tableau_info[6].value=0;

	$('#monetaireCT').hide();
	$('#monetaire').hide();
	$('#pi').show();
	}
		
	
<!-- FONDS ACTIONS -->	
if(step==1){
	tableau_info[0].value=00;
	tableau_info[1].value=60;
	tableau_info[2].value=0;
	tableau_info[3].value=0;
	tableau_info[4].value=40;
	tableau_info[5].value=0;
	tableau_info[6].value=0;

	$('#monetaireCT').hide();
	$('#monetaire').hide();$('#pi').hide();
	}
	
	<!-- FONDS OBLIGATAIRE -->
	if(step==2){
	tableau_info[0].value=0;
	tableau_info[1].value=10;
	tableau_info[2].value=0;
	tableau_info[3].value=0;
	tableau_info[4].value=0;
	tableau_info[5].value=0;
	tableau_info[6].value=100;
	$('#monetaireCT').hide();
	$('#monetaire').hide();$('#pi').hide();
	}
	
	

	
	<!-- FONDS MONETAIRES COURT TERME -->
	
	if(step==3){
	tableau_info[0].value=100;
	tableau_info[1].value=0;
	tableau_info[2].value=0;
	tableau_info[3].value=0;
	tableau_info[4].value=0;
	tableau_info[5].value=0;
	tableau_info[6].value=0;

	$('#monetaireCT').show();
	$('#monetaire').hide();$('#pi').hide();
	}
	
	
	
	
	<!-- FONDS MONETAIRES -->
	
	if(step==4){
	tableau_info[0].value=100;
	tableau_info[1].value=0;
	tableau_info[2].value=0;
	tableau_info[3].value=0;
	tableau_info[4].value=0;
	tableau_info[5].value=0;
	tableau_info[6].value=0;

	$('#monetaire').show();
	$('#monetaireCT').hide();$('#pi').hide();
	
	}
	
	
	
	
	<!-- FONDS EN TITRE DE LENTREPRISE -->
	if(step==5){
	tableau_info[0].value=0;
	tableau_info[1].value=0;
	tableau_info[2].value=0;
	tableau_info[3].value=30;
	tableau_info[4].value=70;
	tableau_info[5].value=0;
	tableau_info[6].value=0;

	$('#monetaireCT').hide();
	$('#monetaire').hide();$('#pi').hide();
	}
	
	
	
	
	<!-- FOND EN TITRE DE LENTREPRISE A PLUS UNTIERS -->
	if(step==6){
	tableau_info[0].value=0;
	tableau_info[1].value=0;
	tableau_info[2].value=0;
	tableau_info[3].value=60;
	tableau_info[4].value=30;
	tableau_info[5].value=0;
	tableau_info[6].value=0;

	}
		<!-- FONDS DIVERSIFIES -->
		
		
	if(step==7){
	tableau_info[0].value=0;
	tableau_info[1].value=0;
	tableau_info[2].value=0;
	tableau_info[3].value=0;
	tableau_info[4].value=0;
	tableau_info[5].value=100;
	tableau_info[6].value=0;

	}
	
	
save();	
}







var stop=function(){
	
	if(totaltab>=99){  $('.arrowup').hide()}
	
	else{$('.arrowup').show();}
	
}


var horsmarchevalue=function(){
	
	if(totaltab<105){ tableau_info[4].value=100-totaltab;}
	
}











function action(){
	horsmarchevalue();
	  actualise();
		stop();
  $("#pieChart").html('');
  $("#pieChart").drawPieChart(tableau_info);
};
$(document).ready(function(){
  action();
  // action au click arrow up & down
  //arrow up
  $('.arrowup').children('button').click(function(){
  
	if(step<7){step=step+1}

   
    action();actualise();
  })
  //arrow down
  $('.arrowdown').children('button').click(function(){

		if(step>0){step=step-1}

    action();actualise();
  })
});

;(function($, undefined) {
	  actualise();
  $.fn.drawPieChart = function(data, options) {
    var $this = this,
      W = 160,
      H = 160,
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
      $groups[i]
   
        .on("mouseleave", pathMouseLeave)
        .on("mousemove", pathMouseMove)
        .on("click", pathClick);

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
      $tip.text(data[index].title + ": " + data[index].value+ "%").fadeIn(200);
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