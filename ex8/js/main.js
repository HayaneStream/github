;(function () {
	
	'use strict';

	var testFunction = function(){
		console.log('script run');
	};


	// Document on load.
	$(function(){
		testFunction();
	});


}());