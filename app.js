"use strict";

//most of below taken from the numverify docs -https://numverify.com/documentation
// I'm not certain I need to use jsonp. 
//do I need to add GET to the request? (you don't - default ajax might be get)
//async loads when it loads - so any data

//should access key be a string?
var accessKey = 'a7a160a67a230728efce44031b8c27fd';
var phoneNumber = '14154503696' ;

// verify phone number via AJAX call
$('#submit').click(function(){
$.ajax({
    url: 'http://apilayer.net/api/validate?access_key=' + accessKey + '&number=' + phoneNumber,   
    dataType: 'jsonp',
    success: function(data) {
    //data manipulation here
    // Access and use your preferred validation result objects
    console.log(json.valid);
    console.log(json.country_code);
    console.log(json.carrier);
                
    }
})

//whitepages
$.ajax()
});


