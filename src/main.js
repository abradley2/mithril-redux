const m = require('mithril')
const store = require('./store')
const home = require('./modules/home')

store.init()

m.route(document.getElementById('app'), '/', {
  '/': home
})
