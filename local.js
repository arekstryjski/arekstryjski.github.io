(function ( $ ) {

	$(document.links).filter(function() {
	    return this.hostname != window.location.hostname;
	}).attr('target', '_blank');

	$('table').attr('class', 'table table-hover');

}( jQuery ));
