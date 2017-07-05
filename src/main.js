const m = require('mithril')
const css = require('sheetify')
const store = require('./store')
const Home = require('./modules/Home')

css('./main.css')

store.init()

function startApp (err) {
  if (err) window.console.error(err)

  m.route(document.getElementById('app'), '/', {
    '/': Home
  })
}

if (process.env.NODE_ENV === 'development') {
  require('./utils/persist')(store, startApp)
} else {
  startApp()
}
