(function ($) {
    "use strict"
    
//    type
    if ($('.type-text-outline').length == 1){
        var type_strings = $('.type-text').text();
        var type = new type('.type-text-outline',{
            strings:type_strings.split(','),
            typeSpeed:100,
            backSpeed:20,
            smartBackspace:false,
            loop:true
        });
    }
})(jQuery);