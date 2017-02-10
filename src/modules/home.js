const m = require('mithril')
const html = require('hyperx')(m)

const homeModel = {
  namespace: 'home',
  state: {
    message: 'Hello World!'
  },
  effects: {},
  reducers: {
    editMesssage: function (state, data) {
      return Object.assign(state, {
        message: data.message
      })
    }
  }
}

function homeController (send) {
  console.log('init controller with: ', send)
  return {
    editMessage: function (message) {
      send('home:editMessage', {message: message})
    }
  }
}

function homeView (vnode) {
  console.log(this, vnode)
  return html`<div>
    <h3>Hello World!</h3>
    <h3>${this.store.message || 'test'}</h3>
  </div>`
}

module.exports = {
  model: homeModel,
  controller: homeController,
  view: homeView
}
