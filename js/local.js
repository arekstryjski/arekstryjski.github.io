(function ( $ ) 
{
    "use strict";

    function localURL(str)
    {
        str = str.replace('http://', '').replace(document.domain, '');
        str = str.substring(str.indexOf('/'), str.length);

        if (str.indexOf('/', str.length - 1) !== -1)
        {
            str = str.substring(0, str.length-1);
        }
        return str;
    }
    
    function links()
    {
        $(document.links).filter(function()
        {
            return this.hostname != window.location.hostname;
        }).attr('target', '_blank');
    }

    function img()
    {               
        $('img').each(function()
        {
            var elem = $(this);
            if (!elem.hasClass('img-no-responsive')) elem.addClass('img-responsive');
        });
    }
    
    function table()
    {
        $('table').attr('class', 'table');
    }

    function mainPageLayout()
    {
        var currentPage = localURL(document.URL);

        $('a').each(function()
        {
            $(this).parent().removeClass('active');
        });

        $('a').each(function()
        {
            var link = localURL(this.href);
            if (currentPage.indexOf(link) != -1 && link !== '')
            {
                $(this).parent().addClass('active');
            }

            if (currentPage === '' && link === '')
            {
                $(this).parent().addClass('active');
            }
        });
    }

    function translateDate()
    {
        $('.post-date').each(function()
        {
            var s = $(this).text();
            s = s.replace(/january/ig, 'styczeń')
                 .replace(/february/ig, 'luty')
                 .replace(/march/ig, 'marzec')
                 .replace(/april/ig, 'kwiecień')
                 .replace(/may/ig, 'maj')
                 .replace(/june/ig, 'czerwiec')
                 .replace(/july/ig, 'lipiec')
                 .replace(/august/ig, 'sierpień')
                 .replace(/september/ig, 'wrzesień')
                 .replace(/october/ig, 'październik')
                 .replace(/november/ig, 'listopad')
                 .replace(/december/ig, 'grudzień');
            
            $(this).text(s);
        });
    }
    

    $(document).ready(function appStart ()
    {
        links();
        img();
        table();
        mainPageLayout();
        translateDate();
    });

}( jQuery ));
