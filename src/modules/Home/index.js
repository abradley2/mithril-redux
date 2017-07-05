/** @jsx m */
const m = require('mithril')
const {set} = require('icepick')
const store = require('../../store')

const TextField = require('../../components/TextField')
const Button = require('../../components/Button')

const initialState = {
  message: 'Hello World!'
}

store.addReducer('home', function (prevState, action) {
  switch (action.type) {
    case 'home:editMessage':
      return set(prevState, 'message', action.message)

    default:
      return prevState || initialState
  }
})

function divider () {
  return <div class='db h3 pv3' />
}

function homeView () {
  const state = store.getState()

  return <div
    class='center measure pa2'
  >
    {divider()}

    <TextField
      label='TextField Label'
      value={state.home.message}
      placeholder='Enter some text'
      oninput={(e) => {
        store.dispatch({
          type: 'home:editMessage',
          message: e.target.value
        })
      }}
    />

    {divider()}

    <Button />
  </div>
}

module.exports = {view: homeView}
