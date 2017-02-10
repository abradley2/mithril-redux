const m = require('mithril')
const store = require('barracks')()

const homeModule = {
  model: {
    namespace: 'home',
    state: {
      data: 'something'
    }
  },
  controller: function (send) {
    return {
      sayHello: Function.prototype
    }
  },
  view: function (vnode) {
    console.log(vnode)
    return m('h3', 'hello')
  }
}

const home = init(homeModule)

console.log(home)

document.addEventListener('DOMContentLoaded', function () {
  m.route(document.getElementById('app'), '/', {
    '/': home
  })
})

function init (mod) {
  store.model(mod.model)
  return Object.assign({
    store: store.state,
    view: mod.view
  }, mod.controller(store.send))
}
