var m = require('mithril')
// URL contains all Objects for "Gemarkungen" and "Flurkarten"
var dataUrl = 'https://collections.thulb.uni-jena.de/api/v1/search?q=%2BcbuUnitTypes.actual%3A(33.0%2033.1)&wt=json'

// username and password are encoded in 64 Bit and concatenated with Basic to be implemented in the header
var user = 'restapi-read'
var password = 'de2812328b3a6f875422b3876e02be37'

var encodedData = btoa(`${user}:${password}`)
var authData1 = `Basic ${encodedData}`

var Names = {
    // initialize list as empty array
    list: [],
    // load all the objects and pass basic auth content
    // withCredentials has to be set to false due to the server settings
    loadList: function() {
        return m.request({
            method: 'GET',
            url: dataUrl,
            headers: {
                'Authorization': authData1
            },
            withCredentials: false,
        }).then(function(result) {
            if (result) {
                Names.list = result.response.docs
            }
        })
    }
}

module.exports = Names