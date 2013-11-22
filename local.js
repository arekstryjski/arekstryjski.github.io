(function ( $ ) 
{
    "use strict";
    
	$(document.links).filter(function() 
    {
	    return this.hostname != window.location.hostname;
	}).attr('target', '_blank');

	$('table').attr('class', 'table table-hover');

    $(document).ready(function appStart ()
    {
        function address(str)
        {
            str = str.replace('http://', '').replace(document.domain, '');
            str = str.substring(str.indexOf('/'), str.length);
            
            if (str.indexOf('/', str.length - 1) !== -1)
            {
                str = str.substring(0, str.length-1);
            }
            return str;
        }
        
        
        var currentPage = address(document.URL);     

        $('a').each(function()
        {
            $(this).parent().removeClass('active');
        });
        
        $('a').each(function()
        {
            var link = address(this.href);
            if (currentPage.indexOf(link) != -1 && link !== '')
            {
                $(this).parent().addClass('active');
            }
            
            if (currentPage === '' && link === '')
            {
                $(this).parent().addClass('active');
            }
        });
    });

}( jQuery ));
