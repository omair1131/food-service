// JavaScript Document


$(document).ready(function(){
	
	/*use for sticky nav*/
	"use strict";
	$('.jsSectionFeatures').waypoint(function(direction){
		if (direction === "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
	},{offset: '60px;'});
	
	/*Scroll on buttons*/
	$(".jsScrollToPlans").click(function(){
		$("html, body").animate({scrollTop: $(".jsSectionPlans").offset().top},1000);
	});
	$(".jsScrollToFeatures").click(function(){
		$("html, body").animate({scrollTop: $(".jsSectionFeatures").offset().top},1000);
	});

	
	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
	
	/*Animation on Scroll*/
	$(".jsWp1").waypoint(function(direction){
		$('.jsWp1').addClass("animated fadeIn");
	},{offset: "50%"});
	
	$(".jsWp2").waypoint(function(direction){
		$('.jsWp2').addClass("animated fadeInUp");
	},{offset: "50%"});
	
	$(".jsWp3").waypoint(function(direction){
		$('.jsWp3').addClass("animated fadeIn");
	},{offset: "50%"});
	
	$(".jsWp4").waypoint(function(direction){
		$('.jsWp4').addClass("animated pulse");
	},{offset: "50%"});

	
	/*Mobile Navigation*/
	$('.jsNavIcon').click(function(){
		var nav = $('.jsMainNav');
		var icon = $('.jsNavIcon i');
		nav.slideToggle(200);
		
		if(icon.hasClass('ion-md-reorder')){
			icon.addClass('ion-ios-close');
			icon.removeClass('ion-md-reorder');
		}else{
			icon.addClass('ion-md-reorder');
			icon.removeClass('ion-ios-close');
		}
		
	});
	
	
});
	
	


