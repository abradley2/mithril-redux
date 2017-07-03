const m = require('mithril')
const store = require('./store')
const home = require('./modules/home')

store.init()

function startApp (err) {
  if (err) window.console.error(err)
  m.route(document.getElementById('app'), '/', {
    '/': home
  })
}

if (process.env.NODE_ENV === 'development') {
  require('./utils/persist')(store, startApp)
} else {
  startApp()
}
