const m = require('mithril')
const css = require('sheetify')
const store = require('./store')
const home = require('./modules/home')

css('tachyons')

store.init()

m.route(document.getElementById('app'), '/', {
  '/': home
})
