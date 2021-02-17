var m = require('mithril')
var Names = require('./Names')

// when the page is initialized the function from Names is called
// to populate the view
module.exports = {
    oninit: Names.loadList,
    view: function() {
        return m('main', [ 
            m('h1', 'List of Names'),
            m('div', Names.list.map(function(name) {
                return m('div', name.id)
            }))
        ])
    }
}