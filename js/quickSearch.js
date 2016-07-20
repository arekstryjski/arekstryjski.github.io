(function($) {
    $.fn.simpleJekyllSearch = function(options) {
        var settings = $.extend({
            jsonFile            : '/dict/search.json',
            template            : '<li role="presentation"><a class="quick_search_link" role="menuitem" tabindex="-1" href="{url}">{title}</a></li>',
            searchResults       : '#quick_search_results',
            searchResultsTitle  : '',
            limit               : '25',
            noResults           : '<li role="presentation"><a class="quick_search_link" role="menuitem" tabindex="-1" href="/dict/index">nic nie znaleziono...</a></li>'
        }, options);

        var jsonData = [],
                origThis = this,
                searchResults = $(settings.searchResults);

        var matches = [];

        if(settings.jsonFile.length && searchResults.length){
            $.ajax({
                type: "GET",
                url: settings.jsonFile,
                dataType: 'json',
                success: function(data, textStatus, jqXHR) {
                    jsonData = data;
                    registerEvent();
                },
                error: function(x,y,z) {
                    if (!window.console) {
                        console.log("***ERROR in simpleJekyllSearch.js***");
                        console.log(x);
                        console.log(y);
                        console.log(z);
                    }
                    // x.responseText should have what's wrong
                }
            });
        }

        function registerEvent(){
            origThis.keyup(function(e){
                if(e.which === 13){
                    if(matches)
                        window.location = matches[0].url;

                    //follow the first link
                    // if(searchResults.children().length)
                }
                if($(this).val().length){
                    writeMatches( performSearch($(this).val()) );
                }else{
                    clearSearchResults();
                }
            });
            
            searchResults.on('click', 'a.quick_search_link', function(event) {
                window.open($(this).attr("href"), "_self");
            });

            $(':not(a.quick_search_link)').click(function() {
                $('.input-group.open').removeClass('open');
            })
        }

        function performSearch(str){
            matches = [];

            for (var i = 0; i < jsonData.length; i++) {
                var obj = jsonData[i];
                if (obj['title'].toLowerCase().indexOf(str.toLowerCase()) >= 0)
                {
                    matches.push(obj);
                }
            }
            return matches;
        }

        function writeMatches(m){
            clearSearchResults();

            searchResults.append( $(settings.searchResultsTitle) );
            
            if(m && m.length){
                for (var i = 0; i < m.length && i < settings.limit; i++) {
                    var obj = m[i];
                    output = settings.template;
                    output = output.replace(/\{(.*?)\}/g, function(match, property) {
                        return obj[property];
                    });
                    searchResults.append($(output));
                }
                $('#quick_search_results').dropdown('toggle');
            }else{
                searchResults.append( settings.noResults );                
                $('#quick_search_results').dropdown('toggle');
            }
        }        
        function clearSearchResults(){
            searchResults.children().remove();
            $('.input-group.open').removeClass('open');
        }
    }
}(jQuery));