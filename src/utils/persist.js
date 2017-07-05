const equals = require('deep-equal')
const localForage = require('localforage')

function persist (appName, store, done) {
  localForage.config({ name: appName })

  let shouldReset = false
  store.dispatch({ type: '$START' })

  localForage.getItem('initialState')
    .then((value) => {
      shouldReset = !equals(JSON.parse(value || '{}'), store.getState())

      if (shouldReset) {
        const newInitialState = JSON.stringify(store.getState())

        Promise.all([
          localForage.setItem('initialState', newInitialState),
          localForage.setItem('savedState', newInitialState)
        ])
          .then(() => {
            subscribeToStore(store)
            done()
          })
          .catch(err => done(err))
      } else {
        localForage.getItem('savedState')
          .then((value) => {
            store.dispatch({type: '$LOAD', state: JSON.parse(value)})
            subscribeToStore(store)
            done()
          })
          .catch(err => done(err))
      }
    })
    .catch(err => done(err))
}

function subscribeToStore (store) {
  const writer = bottleneck(function () {
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
