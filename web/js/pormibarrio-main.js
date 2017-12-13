/*
 * pormibarrio-main.js
 * FixMyStreet JavaScript for PMB design
 */

var selectedCategories = new Array();


//WIDTH SEARCH
var anchoVentana = $( window ).width();
var anchoUser = $("#info-user").width();
var anchoButtons = $("#stats-menu").width();
var anchoCalles = anchoVentana - anchoUser - anchoButtons - 20;
$("#stats-menu").css({right: anchoUser});
var listaCalles =  [];
$("#s-calles").width(anchoCalles);

//QUITAR BORDE AL ULTIMO BLOQUE DE COMENTARIO
$('.leave-comment').prev().css('border', 'none');
$('.leave-comment').prev('.imm-comment').css('borderBottom', '#ebebeb solid 1px');

//SCROLL EN EL LISTADO DE REPORTES
var types = ['DOMMouseScroll', 'mousewheel', 'MozMousePixelScroll', 'wheel'];

var tr = $( "#top-reports").height();
$('.c-scroll').css({'height':(($(window).height())-tr)});

$('div.scrolled').slimScroll({
	position: 'right',
	height: '80%',
	railVisible: true,
	alwaysVisible: true,
	railOpacity:1,
	distance:10,
	railColor: '',
	color: '#ACACAC',
	size:'9px',
	borderRadius:4,
	opacity: 1,
});

$('div.scrolled-68').slimScroll({
	position: 'right',
	height: '68%',
	railVisible: true,
	alwaysVisible: true,
	railOpacity:1,
	distance:10,
	railColor: '',
	color: '#ACACAC',
	size:'9px',
	borderRadius:4,
	opacity: 1,
});

$('div.scrolled-88').slimScroll({
	position: 'right',
	height: '88%',
	railVisible: true,
	alwaysVisible: true,
	railOpacity:1,
	distance:10,
	railColor: '',
	color: '#ACACAC',
	size:'9px',
	borderRadius:4,
	opacity: 1,
});

$('div.scrolled-95').slimScroll({
	position: 'right',
	height: '90%',
	railVisible: true,
	alwaysVisible: true,
	railOpacity:1,
	distance:10,
	railColor: '',
	color: '#ACACAC',
	size:'9px',
	borderRadius:4,
	opacity: 1,
});

$('div.scrolled-100').slimScroll({
	position: 'right',
	height: '100%',
	railVisible: true,
	alwaysVisible: true,
	railOpacity:1,
	distance:10,
	railColor: '',
	color: '#ACACAC',
	size:'9px',
	borderRadius:4,
	opacity: 1,
});

function dashCheck(){
	var dead_filter = $('input.deadline');
	dead_filter.each(function(){
		if ($(this).is(':checked')) {
			$('tr.'+$(this).val()).show();
		}
		if (!$(this).is(':checked')) {
			$('tr.'+$(this).val()).hide();
		}
	});
}


//SCROLL AL INGRESAR UN REPORTE
	$('div.scrolled-reportar').slimScroll({
		position: 'right',
		height: '95%',
		railVisible: true,
		alwaysVisible: true,
		railOpacity:1,
		distance:10,
		railColor: '',
		color: '#65788a',
		size:'9px',
		borderRadius:4,
		opacity: 1,
	});

$( document ).ready(function() {
	//SCROLL EN EL REPORTE
	height_val = '95%';
	if ($('.content').hasClass('content-vertical')){
		var height_val = '80%';

	}
	$('div.scrolled-report').slimScroll({
		position: 'right',
		height: height_val,
		railVisible: true,
		alwaysVisible: true,
		railOpacity:1,
		distance:10,
		railColor: '',
		color: '#ACACAC',
		size:'9px',
		borderRadius:4,
		opacity: 1,
	});

	$('a.pregunta').click(function(){
		var ref = this.href.split('#');
		console.log(ref[1]);
		$('div.scrolled-100').slimScroll({ scrollTo: $('#' + ref[1]).offset().top });
	});

	$('.report-back').click(function(e){
		e.preventDefault();
		$('#side-form').hide();
	});
	$('.reports-back').click(function(e){
		e.preventDefault();
		$('#side').hide();
	});
	$('.btn-search').click(function(e){
		e.preventDefault();
		streetLocateSubmit('none');
	});
	//ACTIVAR SEGUIR REPORTE Y REPORTAR ABUSO
	$( ".follow-report" ).click(function() {
	  $( this ).toggleClass( "follow-report-active" );
	  $( '.reportar-abuso' ).removeClass( "reportar-abuso-active" );
	  $( '.reportar-hide' ).removeClass( "reportar-hide-active" );
	  $( '.follow-report-content' ).slideToggle();
	  $( '.reportar-abuso-content' ).slideUp();
	  $( '.reportar-hide-content' ).slideUp();
	});

	$( ".reportar-abuso" ).click(function() {
	  $( this ).toggleClass( "reportar-abuso-active" );
	  $( '.follow-report' ).removeClass( "follow-report-active" );
	  $( '.reportar-abuso-content' ).slideToggle();
	  $( '.follow-report-content' ).slideUp();
	});

	$( ".reportar-hide" ).click(function() {
	  $( this ).toggleClass( "reportar-hide-active" );
	  $( '.follow-report' ).removeClass( "follow-report-active" );
	  $( '.reportar-hide-content' ).slideToggle();
	  $( '.follow-report-content' ).slideUp();
	});
	//CORRER MAPA EN REPORTES
	if (typeof fixmystreet != 'undefined' && fixmystreet.page == 'report'){
		if ($('.content').hasClass('content-horizontal')){
			fixmystreet.map.pan(-150,0);
		}
		if ($('.content').hasClass('content-vertical')){
			fixmystreet.map.pan(150,70);
		}
		if ($(".Id-").length){
			$('.Id-')[1].setAttributeNS(null, 'width', 67);
			$('.Id-')[1].setAttributeNS(null, 'height', 69);
		}
	}
	//CARGAR IMAGEN
	$('.InputButton').bind("click" , function () {
        $('#InputFile').click();
    });

	$('.upload-img').bind("click" , function () {
        $('#InputFile').click();

    });

	$("#InputFile").change(function(){
    readURL(this,'img_preview');
	});

    //CHANGE PASSWORD
	$( "#change-passwd-btn" ).unbind('click').click(function() {
	  $( this ).toggleClass( "reportar-abuso-active" );
	  $( '#my-change-passwd' ).slideToggle();
	});

	//EDICION DE PERFIL
    $('#profile-edit').click(function() {
        $('#my').hide();
        $('#user-profile').show();
    });

    //FILTRO REPORTES EN PERFIL
    if ($('.content').hasClass('content-vertical')){
		$('#user-reports').hide();
		$('#tus-reportes').removeClass('.btn-filtro-active');
		$('#top-profile').height('100%');
		$('#user-reports').height('100%');
		$('#user-interactions').height('100%');

		$('.profile-back-reports').unbind('click').click(function(e){
			e.preventDefault();
			$('#top-profile').slideToggle();
			$( '#user-reports' ).slideDown();
		});

		$('.profile-back-interactions').unbind('click').click(function(e){
			e.preventDefault();
			$('#top-profile').slideToggle();
			$( '#user-interactions' ).slideDown();
		});
	}
    $( "#tus-reportes" ).unbind('click').click(function() {
    	if ($('.content').hasClass('content-vertical')){
    		$( '#user-reports' ).slideToggle();
	  		$( '#top-profile' ).slideUp();
    	}
    	else {
	        $( this ).addClass( "btn-filtro-active" );
	        $( "#siguiendo" ).removeClass( "btn-filtro-active" );
	        $('#user-interactions').hide();
	        $('#user-reports').show();
	    }
    });

    $( "#siguiendo" ).unbind('click').click(function() {
    	if ($('.content').hasClass('content-vertical')){
    		$( '#user-interactions' ).slideToggle();
	  		$( '#top-profile' ).slideUp();
    	}
        $( this ).addClass( "btn-filtro-active" );
        $( "#tus-reportes" ).removeClass( "btn-filtro-active" );
        $('#user-interactions').show();
        $('#user-reports').hide();
    });
    $( ".btn-filter" ).click(function() {
        $( ".btn-filter" ).removeClass( "btn-filtro-active" );
        $( this ).addClass( "btn-filtro-active" );
        $('.page-tabs').hide();
        $('#my-'+this.id).show();
    });
    //send one time
    $('.send-password').click(function(e){
		e.preventDefault();
		$('#send-password').slideToggle();
	});
	//Disable submits if terms agree
    if ( $("#terms_agree").length ){
    	//Terms and conditions
	    $("button").click(function(e) {
	    	if ( !($("#terms_agree").val() || $("#terms_agree").attr("checked")) ){
	    		e.preventDefault();
	    		$('.terms-agree-error').remove();
                $('.terms_agree').after('<p class="error-m terms-agree-error">Debe aceptar los términos y condiciones</p>');
	    	}
		});
		$('input[type="submit"]').click(function(e) {
	    	if ( !($("#terms_agree").val() || $("#terms_agree").attr("checked")) ){
	    		e.preventDefault();
	    		$('.terms-agree-error').remove();
                $(this).after('<p class="error-m terms-agree-error">Debe aceptar los términos y condiciones</p>');
	    	}
		});
	}
	//DATE PICKERS
	if ( $('#stats-start-date').length ){
		$( "#stats-start-date" ).datepicker({
	      defaultDate: "-1w",
	      changeMonth: true,
	      dateFormat: 'dd/mm/yy' ,
	      // This sets the other fields minDate to our date
	      onClose: function( selectedDate ) {
	        $( "#stats-end-date" ).datepicker( "option", "minDate", selectedDate );
	      }
	    });
	    $( "#stats-end-date" ).datepicker({
	     /// defaultDate: "+1w",
	      changeMonth: true,
	      dateFormat: 'dd/mm/yy' ,
	      onClose: function( selectedDate ) {
	        $( "#stats-start-date" ).datepicker( "option", "maxDate", selectedDate );
	      }
	    });
	};
	//DASHBOARD
	$('input.deadline').click(dashCheck);
	var dead_filter = $('input.deadline');
	dead_filter.each(function(){
		if ($(this).is(':checked')) {
			$('tr.'+$(this).val()).show();
		}
		if (!$(this).is(':checked')) {
			$('tr.'+$(this).val()).hide();
		}
	});
});

function readURL(input,img_container_id) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#'+img_container_id).attr('src', e.target.result);
						$('#'+img_container_id).show();
        }
        reader.readAsDataURL(input.files[0]);
    }else{
			$('#'+img_container_id).hide();
		}
}

/* FUNCIONES DE CAMBIO DE PIN PARA REPORTES EN MAPA */
//Funcionan como si tuviera solo 2 clases, la primera identifica el reporte y la segunda cambia la transición
function bigPIN(obj){
	if ( $( '.'+obj.id ).length ) {
		//var background_img = $('.'+obj.id)[0].getAttributeNS('http://www.w3.org/1999/xlink', 'href').split('.');
		var img_url = $('.'+obj.id)[1].getAttributeNS('http://www.w3.org/1999/xlink', 'href').split('.');
		var prevClassArr = $('.'+obj.id)[1].getAttributeNS(null, 'class').split(' ');
		$('.'+obj.id)[1].setAttributeNS(null, 'class', prevClassArr[0]+' show-icon');
		$('.'+obj.id)[1].setAttributeNS('http://www.w3.org/1999/xlink', 'href', img_url[0]+'-big.'+img_url[1]);
		//$($('.'+obj.id)[1]).animate({ top: '-=100px' }, 300, 'easeOutCirc', function(){
			var prev_x = $('.'+obj.id)[1].getAttributeNS(null, 'x');
			var prev_y = $('.'+obj.id)[1].getAttributeNS(null, 'y');
			$('.'+obj.id)[1].setAttributeNS(null, 'x', Number(prev_x) - 15);
			$('.'+obj.id)[1].setAttributeNS(null, 'y', Number(prev_y) - 33);
			$('.'+obj.id)[1].setAttributeNS(null, 'width', 67);
			$('.'+obj.id)[1].setAttributeNS(null, 'height', 69);
		//});
	}
}

function smallPIN(obj){
	if ( $( '.'+obj.id ).length ) {
		//var background_img = $('.'+obj.id)[0].getAttributeNS('http://www.w3.org/1999/xlink', 'href').split('.');
		var img_url = $('.'+obj.id)[1].getAttributeNS('http://www.w3.org/1999/xlink', 'href').split('.');
		var prevClassArr = $('.'+obj.id)[1].getAttributeNS(null, 'class').split(' ');
		$('.'+obj.id)[1].setAttributeNS(null, 'class', prevClassArr[0]+' hide-icon');
		var base_url = img_url[0].split('-');
		base_url.pop();
		$('.'+obj.id)[1].setAttributeNS('http://www.w3.org/1999/xlink', 'href', base_url.join('-')+'.'+img_url[1]);
		//$($('.'+obj.id)[1]).animate({ top: '+=100px' }, 300, 'easeInCirc', function(){
			var prev_x = $('.'+obj.id)[1].getAttributeNS(null, 'x');
			var prev_y = $('.'+obj.id)[1].getAttributeNS(null, 'y');
			$('.'+obj.id)[1].setAttributeNS(null, 'x', Number(prev_x) + 15);
			$('.'+obj.id)[1].setAttributeNS(null, 'y', Number(prev_y) + 33);
			$('.'+obj.id)[1].setAttributeNS(null, 'width', 29);
			$('.'+obj.id)[1].setAttributeNS(null, 'height', 34);
		//});
	}
}
//MOSTRAR REPORTE
/*	$('div.it-r').click(function(){
		$('div.c-report').show();
	});
*/
function report(timeout, zoom){
	if (typeof fixmystreet != 'undefined'){
		switch (fixmystreet.page) {
			case 'around':
				$('#side-form').show();
				$('#side').hide();
				break;
			default:
				location.href = '/around?latitude='+fixmystreet.latitude+';longitude='+fixmystreet.longitude+'&zoom=4&list=0';
		}
	}
	else {

		geolocate(timeout, zoom, 0);
	}
}

function report_list(timeout, zoom){
	$(".navbar-collapse.collapse.in").removeClass("in");
	if (typeof fixmystreet != 'undefined'){
		switch (fixmystreet.page) {
			case 'around':
				$('#side-form').hide();
				$('#side').show();
				break;
			case 'new':
				window.history.back();
				break;
			default:
				location.href = '/around?latitude='+fixmystreet.latitude+';longitude='+fixmystreet.longitude+'&zoom=2&list=1';
		}
	}
	else {
		geolocate(timeout, zoom);
	}
}

function geolocate(timeout, zoom, is_list ){
	var list = '&list=1';
	if (!is_list){
		list = '&list=0';
	}
	setTimeout(function(){
		console.log('TIMEOUT: '+window.location.hostname);
		if ( window.location.hostname == 'rivera.pormibarrio.uy'){
			location.href = '/around?latitude=-30.8997469;longitude=-55.5434686&zoom=' + zoom + list;
		}
		else if ( window.location.hostname == 'montevideo.pormibarrio.uy'){
			location.href = '/around?latitude=-34.906557;longitude=-56.199769&zoom=' + zoom + list;
		}
	}, timeout);
	$('.overlay').html('<div id="loader_throbber">Intentando geolocalizarlo...<br/><div class="three-quarters-loader"></div></div>');
  $('.overlay').show();
	console.log('HOST'+window.location.hostname);
	if (geo_position_js.init()) {
	    console.log('Va a init');
	    geo_position_js.getCurrentPosition(function(pos) {
	        console.log('Get current');
	        var latitude = pos.coords.latitude;
	        var longitude = pos.coords.longitude;
	        location.href = '/around?latitude=' + latitude + ';longitude=' + longitude + '&zoom=' + zoom + list;
	    },
	    function(err) {
	        $('#loader_throbber').append('<br/>No hemos podido geolocalizarlo.<br/>Por favor selecciona un departamento en el menú superior para comenzar.');
					console.log('Entra a ERROR: '+window.location.hostname);

					if ( window.location.hostname == 'rivera.pormibarrio.uy'){
						location.href = '/around?latitude=-30.8997469;longitude=-55.5434686&zoom=' + zoom + list;
					}
					else if ( window.location.hostname == 'montevideo.pormibarrio.uy'){
						location.href = '/around?latitude=-34.906557;longitude=-56.199769&zoom=' + zoom + list;
					}else{
						if(area){
							if(area==289){
								location.href = '/around?latitude=-34.906557;longitude=-56.199769&zoom=' + zoom + list;
							}
							if(area==255){
								location.href = '/around?latitude=-30.8997469;longitude=-55.5434686&zoom=' + zoom + list;
							}
						}
					}


	    },
	    {
	        enableHighAccuracy: true,
	        timeout: 4000
	    });
	}
}

//RESPONSIVE TEXT
$('.responsive').responsiveText();

//ACTIONS

//ACCIONES EN LA BARRA LATERAL EN DESKTOP
(function() {

 	// http://stackoverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	function init() {


	//INGRESAR REPORTE
	/*$('li.reportar a').click(function(){
		$('.open-side').removeClass('open-side');
		$('#add-report').addClass('open-side');
	});

	//LISTADO DE REPORTES
	$('li.reportes a').click(function(){
		$('.open-side').removeClass('open-side');
		$('#report-list').addClass('open-side');
	});

	//VER PERFIL DE USUARIO
	$('li.profile a').click(function(){
		$('.open-side').removeClass('open-side');
		$('#user-profile').addClass('open-side');
	});
	*/


	//CONTRAER Y EXPANDIR BARRA AZUL
	$(".first-navigation").hover(
	  function () {
		$('.sub').addClass("side-active");
		$('.s-calles').addClass("s-calles-nav");
		$('ul.l-calles').addClass("l-calles-nav");
	  },
	  function () {
		$('.sub').removeClass("side-active");
		$('.s-calles').removeClass("s-calles-nav");
		$('ul.l-calles').removeClass("l-calles-nav");
	  }
	);


	//MOVER EL DETALLE DE REPORTE AL HACER HOVER EN LA BARRA AZUL
	$(".first-navigation").hover(
	  function () {
		$('.report').addClass("report-medium");
		if ($('.content').hasClass('content-horizontal')){
			$('.content').addClass("content-aside");
		}
	  },
	  function () {
		$('.report').removeClass("report-medium");
		if ($('.content').hasClass('content-horizontal')){
			$('.content').removeClass("content-aside");
		}
	  }
	);

	}

	init();

})();

//REPORTAR EN PANTALLA CHICA
$(window).resize(function() {
	if ( $(window).width() < 780){
		if ( typeof fixmystreet !== 'undefined' && fixmystreet.page == 'around' && (fixmystreet.zoom == 4 || fixmystreet.zoom == 3)){
			$('#side').hide();
		}
		$('#fms_pan_zoom').css('top', "6.75em");
		$('.content').addClass('content-vertical');
		$('.content').removeClass('content-horizontal');
		$('div.como-funciona a').click(function(){
			$('#faq-list').hide();
			$('.first-navigation').hide();
			//$('.top-container').hide();
		})
		$('div.c-respuestas span').click(function(){
			$('#faq-list').show();
			$('.first-navigation').show();
			$('.top-container').show();
		})
	}
	if ( $(window).width() >= 780){
		if ( typeof fixmystreet !== 'undefined' && fixmystreet.page == 'around' && (fixmystreet.zoom == 4 || fixmystreet.zoom == 3)){
			$('#side').show();
			$('#fms_pan_zoom').css('top', "1.75em");
		}
		$('.content').removeClass('content-vertical');
		$('.content').addClass('content-horizontal');
		$('div.como-funciona a').unbind("click");
		$('#faq-list').show();
		$('.first-navigation').show();
		$('.top-container').show();
	}
});

if ( $(window).width() < 780){
	if ( typeof fixmystreet !== 'undefined' && fixmystreet.page == 'around' && (fixmystreet.zoom == 4 || fixmystreet.zoom == 3)){
		$('#side').hide();
	}
	$('#fms_pan_zoom').css('top', "6.75em");
	$('.content').addClass('content-vertical');
	$('.content').removeClass('content-horizontal');
	$('div.como-funciona a').click(function(){
		$('#faq-list').hide();
		$('.first-navigation').hide();
		//$('.top-container').hide();
	})
	$('div.c-respuestas span').click(function(){
		$('#faq-list').show();
		$('.first-navigation').show();
		$('.top-container').show();
	})
}
if ( $(window).width() >= 780){
	if ( typeof fixmystreet !== 'undefined' && fixmystreet.page == 'around' && (fixmystreet.zoom == 4 || fixmystreet.zoom == 3)){
		$('#side').show();
		$('#fms_pan_zoom').css('top', "1.75em");
	}
	$('.content').removeClass('content-vertical');
	$('.content').addClass('content-horizontal');
	$('div.como-funciona a').unbind("click");
	$('#faq-list').show();
	$('.first-navigation').show();
	$('.top-container').show();
}

//CATEGORIAS POR GRUPO
function form_category_group_onchange() {
	var group_id = $('#form_category_groups').val();

	if (group_id == '') {
		$('#form_category').prop( "disabled", true );
        $('#form_category').empty();
	} else {
		$('#form_category').prop( "disabled", false );
		$('#form_category').empty();

		var options = '';
		options += '<option value="">-- Selecciona una categoría --</option>';

		for (var i = 0; i < category_groups[group_id].length; i++) {
			options += '<option value="' + category_groups[group_id][i] + '">' + category_groups[group_id][i] + '</option>';
		}
		$("#form_category").html(options);

	}
}

//FILTROS POR CATEGORIAS
function getCategoryGroups(){
	var latitude = "-34.906557";
	var longitude = "-56.199769";
	if(fixmystreet){
		latitude = fixmystreet.latitude;
		longitude = fixmystreet.longitude;
	}

	$.getJSON( "/report/new/ajax?latitude="+latitude+"&longitude="+longitude+"&format=json", function( data ) {
		var categories = data.categories;
		$.each( categories, function( key, val ) {
			if(key!=-2){
				var name="";
				var icon = "./i/category/";
				var color = "";
				$.each( val, function( key2, val2 ) {
					if(key2=="name"){
						name = val2;
					}
					if(key2=="icon"){
						icon = icon + val2 + ".png";
					}
					if(key2=="color"){
						color = val2;
					}
				});
				var group_id = key;
				addCategoryFilter(name,group_id,icon, color);
			}
		});
	})
		.done(function() {
		})
		.fail(function() {
			//console.log( "error" );
		})
		.always(function() {
			//console.log( "complete" );
		});
}

function addCategoryFilter(name,group_id,icon,color){
		/*var html = "<div class='category_filter' id='category_filter_" + group_id + "' onclick='selectCategoryGroup(\""+group_id+"\")'>";
		html = html + "<img class='filter_icon' src='."+icon+"'/>";
		html = html + "<h3>" + name + "</h3>";
		html = html + "</div>";*/
		var html = "<div style='background-color: "+color+"' class='category_filter' id='category_filter_" + group_id + "' onclick='selectCategoryGroup(\""+group_id+"\")'>";
		//html = html + "<img class='filter_icon' src='."+icon+"'/>";
		html = html + "<h4>" + name + "</h4>";
		html = html + "</div>";
		$("#categories-filters").append(html);
}

function selectCategoryGroup(id){
	if(!selectedCategories){
		selectedCategories = new Array();
	}
	var filter = document.getElementById("category_filter_"+id);
	/*if(filter.style.backgroundColor == "transparent" || filter.style.backgroundColor == ""){
		filter.style.backgroundColor = "#000000";
		selectedCategories.push(id);
	}else{
		filter.style.backgroundColor = "transparent";*/
	if($("#category_filter_"+id).attr("class") == "category_filter"){
		$("#category_filter_"+id).attr("class","category_filter_selected");
		selectedCategories.push(id);
	}else{
		$("#category_filter_"+id).attr("class","category_filter");
		var newList = new Array();
		selectedCategories.forEach(function(element,index,array){
			if(element!=id){
				newList.push(element);
			}
		});
		selectedCategories = newList;
	}
	var strCats = selectedCategories.join(',');
	if(!strCats){
		strCats = "all";
	}
	fixmystreet.map.layers.forEach(function(element,index,array){
		if(element.options.protocol){
			element.options.protocol.params.categories = strCats;
		}
	});
	fixmystreet.markers.refresh({force: true});
}

function toggleCategories(){
	var actualClass = $("#s-categories").attr("class");
	if(actualClass=="s-categories-maximized"){
		$("#s-categories").removeClass().addClass("s-categories-minimized");
		$("#toggle-image").removeClass().addClass("toggle-down");
		$("#categories-filters").css('display','none');
	}else{
		$("#s-categories").removeClass().addClass("s-categories-maximized");
		$("#toggle-image").removeClass().addClass("toggle-up");
		$("#categories-filters").css('display','block');
	}

}
