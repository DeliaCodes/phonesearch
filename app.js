"use strict";

//most of below taken from the numverify docs -https://numverify.com/documentation
// I'm not certain I need to use jsonp. 
//do I need to add GET to the request?

//should access key be a string?
var accessKey = 'a7a160a67a230728efce44031b8c27fd';
var phoneNumber = '' ;

// verify phone number via AJAX call
$.ajax({
    url: 'http://apilayer.net/api/validate?access_key=' + accessKey + '&number=' + phoneNumber,   
    dataType: 'jsonp',
    success: function(json) {

    // Access and use your preferred validation result objects
    console.log(json.valid);
    console.log(json.country_code);
    console.log(json.carrier);
                
    }
});


