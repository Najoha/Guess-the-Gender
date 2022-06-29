
try {
    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('xgVbzQndH78QCLGW2ppnTsFqd9rwPBGBuaYt');

    // genderApiClient.getByFirstName('theresa', function (response) {
    //     console.log(response.gender); //female
    //     console.log(response.accuracy); //98
    // });

    genderApiClient.getByFirstNameAndCountry('john', 'FR', function (response) {
        console.log(response.gender); //male
        console.log(response.accuracy); //99
    });

}
catch(e) {
    console.log('Error:', e);
}
