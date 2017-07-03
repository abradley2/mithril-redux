const equals = require('deep-equal')
const localForage = require('localforage')

function persist (store, done) {
  let shouldReset = false
  store.dispatch({ type: '$START' })

  localForage.getItem('initialState', function (err, value) {
    if (err) window.console.error(err)
    shouldReset = !equals(JSON.parse(value || '{}'), store.getState())

    if (shouldReset) {
      const newInitialState = JSON.stringify(store.getState())

      localForage.setItem('initialState', newInitialState)
      localForage.setItem('savedState', newInitialState, done)
      subscribeToStore(store)
    } else {
      localForage.getItem('savedState', function (err, value) {
        if (err) window.console.error(err)
        store.dispatch({type: '$LOAD', state: JSON.parse(value)})
        subscribeToStore(store)
        done()
      })
    }
  })
}

function subscribeToStore (store) {
  const writer = bottleneck(function () {
    window.console.log('writing: ', store.getState())
    localForage.setItem('savedState', JSON.stringify(store.getState()))
  }, 500)
  store.subscribe(writer)
}

function bottleneck (func, time) {
  var lastArgs = []
  var pending = false
  function debounced () {
    lastArgs = arguments
    if (pending) {
      clearTimeout(pending)
    }
    pending = setTimeout(function () {
      func.apply({}, lastArgs)
    }, time)
  }
  return debounced
}

module.exports = persist
