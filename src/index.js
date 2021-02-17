const m = require('mithril')
const root = document.getElementById('root')
const WelcomePage = require('./WelcomePage.js')
const NamesList = require('./NamesList')

// simple routing with index route and names-route
m.route(root, "/", {
    '/': WelcomePage,
    '/names': NamesList
})
