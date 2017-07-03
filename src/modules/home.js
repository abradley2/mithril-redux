/** @jsx m */
const m = require('mithril')
const {set} = require('icepick')
const store = require('../store')

const initialState = {
  message: 'Hello World! Again1'
}

store.addReducer('home', function (prevState, action) {
  switch (action.type) {
    case 'home:editMessage':
      return set(prevState, 'message', action.message)

    default:
      return prevState || initialState
  }
})

function homeView () {
  const state = store.getState()

  window.console.log('render')

  return <div>
    <input
      value={state.home.message}
      oninput={(e) => {
        store.dispatch({
          type: 'home:editMessage',
          message: e.target.value
        })
      }}
    />
    <h3>{state.home.message}</h3>
  </div>
}

module.exports = {view: homeView}
