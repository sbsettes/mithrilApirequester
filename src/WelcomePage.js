const m = require('mithril')

// Welcome page serving as backup-page point and
// to send the user to the names-list
module.exports= {
    view: function() {
        return m('div'), [
            m('h1', 'Welcome Page'),
            m(m.route.Link, {
                href: '/names'
            }, "To the Names")
        ]
    }
}