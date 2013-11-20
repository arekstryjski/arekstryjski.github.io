(function ( $ ) {
	$(document.links).filter(function() {
	    return this.hostname != window.location.hostname;
	}).attr('target', '_blank');

	$('table').filter(function() {
	    return this.hostname != window.location.hostname;
	}).attr('class', 'table table-hover');
}( jQuery ));
