const m = require('mithril')
const i = require('icepick')
const hyperx = require('hyperx')
const store = require('../store')
const html = hyperx(m)

store.addReducer('home', function (prevState, action) {
  switch (action.type) {
    case 'home/editMessage':
      return i.set(prevState, 'message', action.message)

    default:
      return prevState || {
        message: 'Hello World'
      }
  }
})

function editMessage (message) {
  store.dispatch({
    type: 'home/editMessage',
    message: message
  })
}

function homeView () {
  const state = store.getState()

  return html`<div>
    <input
      value=${state.home.message}
      oninput=${m.withAttr('value', editMessage)}
    />
    <h3>${state.home.message}</h3>
  </div>`
}

module.exports = {view: homeView}
