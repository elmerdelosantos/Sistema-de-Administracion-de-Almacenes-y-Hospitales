if($.browser.version.substr(0,3)=="6.0")
DD_belatedPNG.fix('.nav li.opc a, #menu, .add, .modify, .btn-entrar, .add-register, .button-green, .search-img');

$(document).ready(function() {

var isMSIE = /*@cc_on!@*/false;
// Funci�n utilizada para corregir el bug del ancho del layout
	function body_size_fix(){
	if (isMSIE){
	ww = document.documentElement.clientWidth;
	hh = document.documentElement.clientHeight;
	}else{
	ww = window.innerWidth;
	hh = window.innerHeight;
	}
	if (ww<961){
	$('.container').css('width','960px');
	$('.footer').css('width','960px');
	}
	else{
	$('.container').css('width','100%');
	$('.footer').css('width','100%');
	}
	}
body_size_fix();
$('.lista-lineas').width($('.lista-lineas').parent().width());
$(window).resize(function() {
body_size_fix();
$('.lista-lineas').width($('.lista-lineas').parent().width());
});

// Condici�n para aplicar el uniform a los checkboxes, menos en IE6
$("select, input:checkbox, input:radio, input:text, input:password, textarea").not(".select-02, .not-uniform").uniform();


// Codigo para el menu superfish
$('.menu ul.nav').supersubs({ 
minWidth:    17,
maxWidth:    20,
extraWidth:  1
}).superfish({
delay: 0,
animation: {
opacity: 'show'
},
speed: 'fast', 
autoArrows: false,
dropShadows: false
}).find('ul').bgIframe(); 

// Codigo para abrir los windows modals
$('.btn-surtido-receta').fancybox({width:483,height:174});
$('.btn-ver-catalogo').fancybox({
width:930,
height:550,
modal:true,
showCloseButton:false
});
$('.getpass').fancybox({width:332,height:170});
$('.ver-vales').fancybox({width:920,height:520});


// Codigo para generar el datepicker

$(".fecha-ini, .fecha-fin, .fecha" ).datepicker({ 
	dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
	dateFormat: 'dd/mm/yy',
	monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
	monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
	});

// Codigo para generar el dialog de confirmaci�n
// a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
//$( "#dialog:ui-dialog" ).dialog( "destroy" );
$( "#btn-grabar" ).click(function(){
$( "#dialog:ui-dialog" ).dialog( "destroy" );						  
$( "#dialog-confirm" ).dialog({
resizable: false,
height:140,
modal: true,
buttons: {
"Aceptar": function() {
$( this ).dialog( "close" );
},
"Cancelar": function() {
$( this ).dialog( "destroy" );
}
}
});
return false;
});



// Codigo para abrir y cerrar las faqs
$(".faqs-box .close, .faqs-box .open" ).click(function(){
if ($(this).is(".open")){
$(this).addClass("close").removeClass("open");
$(this).parent().find(".answer").slideToggle();
}else{
$(this).addClass("open").removeClass("close");
$(this).parent().find(".answer").slideToggle();
}
});

//Codigo para generar los tabs
$("#tabs, #tabs-admon").tabs();

$('input[type="text"]').placeholder();

$(".opc").hover(function(){
if ($(this).find("li").length == 0){
if ($(this).is(".activa"))
$(this).addClass("single-act");
else
$(this).addClass("single");
}
});

//Codigo para aperecer el select dependiente
$("#tipo-trans").selectdependiente(".dependiente");

//Codigo para generar el autocomplete en los inputs
$("#nombrePA").autocompleteXML("personal.xml", "nombre");

// Codigo para cambiar tabs
$(".tabs-container li" ).click(function(){
if ($(this).is(".tab-activa")){	
}else{
$(".tabs-container li").removeClass('tab-activa');
$(this).addClass('tab-activa');
$(".tab-group .content-tab").css('display','none');
$(".tab-group ."+$(this).attr('id')).css('display','block');
}
});

// Codigo para colapsar bloques de listas open-list
$(".group-list" ).click(function(){
if ($(this).is(".open-list")){	
$(this).parent().find('ul').slideToggle('fast');
$(this).removeClass('open-list').addClass('close-list');
}else{
$(this).parent().find('ul').slideToggle('fast');
$(this).removeClass('close-list').addClass('open-list');
}
});

// Codigo para abrir y cerrar las faqs
$(".close-group, .open-group" ).click(function(){
if ($(this).is(".open-group")){
$(this).addClass("close-group").removeClass("open-group");
$(this).parent().find(".content-group").slideToggle();
}else{
$(this).addClass("open-group").removeClass("close-group");
$(this).parent().find(".content-group").slideToggle();
}
});

$('.btn-crear-trans').click(function(){
$('.dynamic-block').fadeIn('fast');
return false;
});

$('#tipo-rep').change(function(){
$('.dynamic-block-group').fadeIn('fast');
$('.dynamic-block-group .content-group').hide();
return false;
});

$('.btn-genera-rep').click(function(){
$('.dynamic-block').fadeIn('fast');
return false;
});

// Codigo para cerrar el fancybox del catalogo
$(".close-catalog").live("click",function(){
//parent.$.fancybox.close();
parent.window.location.href=parent.window.location;
});

});