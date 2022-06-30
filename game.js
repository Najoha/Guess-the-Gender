
try {
    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('xgVbzQndH78QCLGW2ppnTsFqd9rwPBGBuaYt');

    genderApiClient.getByFirstNameAndCountry('john', 'FR', function (response) {
        console.log(response.gender); 
        console.log(response.accuracy); 
    });

}
catch(e) {
    console.log('Error:', e);
}
