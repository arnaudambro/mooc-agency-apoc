
// Liste des fonctions debut et fin Iframe

var gamestart=function(){localStorage.setItem(idIframe+"started","true");localStorage.setItem(idIframe+"done","false");};
var gamesdone=function(){localStorage.setItem(idIframe+"started","false");localStorage.setItem(idIframe+"done","true");};

// fonction de rediamnsionnement de l'iframe
var containersize=window.frameElement.getAttribute('ctresize');

var testresize=function(){if(containersize=="ok"){$('#contenair').css('height','250px');}}


$(function() {




	
  //creation de la variable contenant l'id de l'iframe utilisé
  var idIframe = '';
  //recuperation de l'id iframe
  idIframe = window.frameElement.getAttribute('id');


  // Initialisation du localStorage

  gamestart();
testresize();

  // creation des cellules drop actives
  //recuperation des données issues de l'iframe permetant l'établir le nombre de cellule drop
  var num_cell_drop = '';
  if(window.frameElement.getAttribute('data-drop-num'))
  {
    num_cell_drop = window.frameElement.getAttribute('data-drop-num');
  }
  //creation du nombre des cellules
  for(y=0;y < num_cell_drop;y++)
  {
    $('#reception_drop').append('<div class="draggable drop drop_style" id=""><span></span><input type="hidden" name="drop'+y+'" value="" class="placeholder"></div>');
  }
	//redefinition de la taille des cellules drop actives et inactive pour un nombre de cellule active = 2
	if(num_cell_drop == 2)
	{
		$('.drop_style:first-child').css('margin-left', '216px');
	}
  //redefinition de la taille des cellules drop actives et inactive pour un nombre de cellule active = 3
	if(num_cell_drop == 3)
	{
		$('.drop_style:first-child').css('margin-left', '150.5px');
	}
  //redefinition de la taille des cellules drop actives et inactive pour un nombre de cellule active > 4

  if(num_cell_drop == 4)
  {
		$('.drop_style:first-child').css('margin-left', '74.5px');
  }
  //redefinition de la taille des cellules drop actives et inactive pour un nombre de cellule active > 5
  if(num_cell_drop == 5)
  {
		$('.drop_style:first-child').css('margin-left', '4px');
		$('.drop_style:last-child').css('margin-right', '0px');
  }
  //recuperation des données issues de l'iframe permetant de creer les cartes
  //creation des variable contenants les données
  var content = [];
  var position = [];
  var draggable = [];
  var carte_html = [];
  // i aura pour valeur max 6
  for(i=0; i<7;i++)
  {
    // recuperation du content
    if(window.frameElement.getAttribute('data-item'+i+'-content'))
    {
       content[i] = window.frameElement.getAttribute('data-item'+i+'-content');
    }
    // recuperation de la position
    if(window.frameElement.getAttribute('data-item'+i+'-position'))
    {
       position[i] = window.frameElement.getAttribute('data-item'+i+'-position');
    }
    // recuperation du drag
    if(window.frameElement.getAttribute('data-item'+i+'-draggable'))
    {
       draggable[i] =
        window.frameElement.getAttribute('data-item'+i+'-draggable');
    }
    // recuperation de l'url du contenu html de la carte
    if(window.frameElement.getAttribute('data-item'+i+'-html'))
    {
       carte_html[i] = window.frameElement.getAttribute('data-item'+i+'-html');
    }
  }
  // creation de la variable carte
  var carte = [];
  for(i=0; i<7 ;i++)
  {
    if(content[i])
    {
        carte[i] = {content: content[i],position: position[i],titdraggablere: draggable[i],html: carte_html[i]};
    }
  }
  //creation des cartes à partir des array créé précédement
  for(i=1; i<7 ;i++)
  {
    // si la carte existe
    if(content[i])
    {
      //creation d'une carte active
      if(carte[i].titdraggablere == 'true')
      {
      $('#carte'+carte[i].position).html('<div class="carte" id="'+carte[i].content+'"><div class="picto_hand"><img src="assets/image/dragdoigt.png" /></div><p class="html_reception'+i+' title_loc"></p></div>');
      //creation d'une carte inactive
      html_insert = $('.html_reception'+i).load(carte[i].html+'.html');
      $('#carte'+carte[i].position).show();
    }else{
      $('#carte'+carte[i].position).append('<div class="carte1" id="'+carte[i].content+'"><p class="html_reception'+i+' title_loc"></p></div>');
      html_insert = $('.html_reception'+i).load(carte[i].html+'.html');
      $('#carte'+carte[i].position).show();
    }
    }
  }
  //cette fonction permet de deplacer les carte sur le DOM
  $( ".carte" ).draggable({
    revert: true,
    // cette variable limite le deplacement des carte à la div #contenair_global
    containment : '#contenair_global'
  });
  //cette fonction permet aux divs drop ayant la class="draggable" de "dropper" les cartes
  $(".draggable").droppable({
    drop: function( event, ui ) {
     if($(this).children('input').attr('value') == '')
     {
       obj = ui.draggable.prop('id');
       obj2 = ui.draggable.children('.title_loc').children('.recept').children('.contenutext').children('.emet').children('.containtitle').children('.title7').text();
	   console.log(obj2);
       obj3 =
       $(this)
       .children('input')
         .attr('value', obj);
       $(this)
       .children('span')
        .html(obj2);
       //definitions line height des cellules de drop
       var lineHeight = parseInt($(this).children('span').height());
       if(lineHeight <= 16){
         $(this).css('line-height', '50px');
       }else if((lineHeight > 16) && (lineHeight < 32)){
         $(this).css('line-height', '15px');
         $(this).children('span').css('margin-top','11px');
       }else if(lineHeight > 42)
       {
         $(this).css('line-height', '16.7px')
       }
       //effacer la carte ayant eu ses valeurs de "droppé"
       ui.draggable.css('display','none');
     }
    }
  });
  //recuperation de l'ordre des bonnes reponses
  // chaine de caractère issue de l'attribut data-rep-or ayant l'ordre des reponses correctes
  var ord_base = window.frameElement.getAttribute('data-rep-or');
  //recuperation de l'ordre des reponses issues des cellules drop
  $('#valider').click(function(){
    var ord_reponse = '';
    $('.drop').each(function(){
      ord_reponse = ord_reponse+$(this).children('input').attr('value');
    })
    console.log(ord_reponse);
    console.log(ord_base);
     if(ord_reponse == ord_base)
     {
         $('#valider').hide();
         $('#recommencer').hide();
         $('#continuer').hide();
		 $('.drop_style').css("border","3px solid rgb(139,192,69)");
		 $('.drop_style').css("width","130px");
		 $('.drop_style').css("background-color","white");
		formshow();
		//gestionIFrames();
        success();
		gamesdone();
		iframeonscreen();
		gestionIFrames();
		actatest();
		obatest();
        //localStorage.setItem(idIframe,"done");
		rubriquetabshow();

     }else{

       if(window.frameElement.getAttribute('bonne-rep-obl'))
       {
         error();
       }else{
         error();
         $('#valider').hide();
         $('#recommencer').hide();
         $('#continuer').hide();
       }
     }
  });
  // reinitialisation du quizz grâce au bouton "recommencer"
  $('#recommencer').click(function(){
    $('.carte').show();
    $('.drop').children('input').attr('value', '');
    $('.drop').children('span').html('');
    $('.drop_style').css('line-height', '');
  });
});



	//affichage des iframes selon la reussite
	  idIframe = window.frameElement.getAttribute('id');
