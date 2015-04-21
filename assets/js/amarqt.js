$(document).ready(function() {
   
	init();

});

function init(){
	
	navInit();

   $('#main-carousel').slick({
	  centerMode: true,
	  centerPadding: '0',
	  slidesToShow: 1,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  pauseOnHover: true,
	  slidesToScroll: 1,
	  arrows: false,
	  infinite: true,
	  customPaging: function(slider, i) {
	  	var slide = $(slider.$slides[i]).children('.thumbnail-navigation').html();
	  	var tab = '<a class="tab">' + slide + '</a>';
      	return tab;
      },
	  dots: true,
	  responsive: [
	    {
	      breakpoint: 1382,
	      settings: {
	        arrows: false,
	        centerPadding: '0',
	        centerMode: true,
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '0',
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '0',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '20',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '20',
	        slidesToShow: 1
	      }
	    }
	  ]
	});


	$('#service-finder').find('li').click(function(){
		activateSubmenu($(this));	
	});
	
}
var $menu = $(".top_nav-sub-categories").find('.js-menu-ul-container');

// jQuery-menu-aim: <meaningful part of the example>
// Hook up events to be fired on menu row activation.
$menu.menuAim({
    activate: activateSubmenu,
    deactivate: deactivateSubmenu,
    exitMenu: subNavReturnToDefauls,
});
// jQuery-menu-aim: </meaningful part of the example>

// jQuery-menu-aim: the following JS is used to show and hide the submenu
// contents. Again, this can be done in any number of ways. jQuery-menu-aim
// doesn't care how you do this, it just fires the activate and deactivate
// events at the right times so you know when to show and hide your submenus.
function activateSubmenu(row) {
    var $row 		= $(row),
        subnavName 	= $row.find('a').data("menu"),
        $subnav 	= $row.find('a'),
        $submenu 	= $("#" + subnavName);



	var default_menu	 	= $row.parents('.js-menu-top-container').find('.js-menu-defaultset');
	var all_menus_to_hide	= $row.parents('.js-menu-top-container').find('.js-menu-replace');

	if($row.hasClass('js-menu-hidesubmenu')) {
		var $container_ul = $(row).parents('ul');

		$container_ul.find('a.active').removeClass('active');
		$container_ul.find('.js-menu-replace').hide();
		$subnav.addClass('active');
	}

	all_menus_to_hide.hide();
	default_menu.hide();
	$submenu.show();

    // Keep the currently activated row's highlighted look
    $row.find("a").addClass("maintainHover");
}

function deactivateSubmenu(row) {
    var $row = $(row),
        subnav = $row.find('a').data("menu"),
        $submenu = $("#" + subnav);

    // Hide the submenu and remove the row's highlighted look
    $submenu.css("display", "none");
    $row.find("a").removeClass("maintainHover");
}


function navInit(){

	var top_nav = $('#top_nav');

	top_nav.find('a.js-menu-trigger').each(function(){
		$(this).click(function(){
			subNavDisplay($(this));
		});
	});
}

function subNavDisplay(element){

	var $element = $(element);
	var $submenu = $element.next('.js-menu-top-container');

	$('.js-menu-trigger').not($element).each(function(){
		$(this).removeClass('active');
	});
	$('.js-menu-top-container').not($submenu).each(function(){
		$(this).addClass('hidden');
	});

	console.log($element.next('.js-menu-top-container-sub'));

	$element.toggleClass('active');
	$submenu.toggleClass('hidden');

}

function subNavCategoryDisplay(){


	var subnav 				= element.data('menu');
	var default_menu	 	= element.parents('.js-menu-top-container').find('.js-menu-defaultset');
	var all_menus_to_hide	= element.parents('.js-menu-top-container').find('.js-menu-replace');
	var new_menu_name		= '.top_nav-sub-' + subnav; 
	var new_menu 			= element.parents('.js-menu-top-container').find(new_menu_name); 
	
	all_menus_to_hide.hide();
	default_menu.hide();
	new_menu.show();
	
}

function subNavReturnToDefauls(){

	var all_menus_to_hide	= $('.js-menu-aim');
	var default_menu	 	= $('.js-menu-defaultset');

	all_menus_to_hide.hide();
	default_menu.show();
		
}