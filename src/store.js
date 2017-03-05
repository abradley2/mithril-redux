const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const store = {
  // add additional reducers here
  reducers: {

  },
  addReducer: function (name, func) {
    store.reducers[name] = func
  },
  init: function () {
    // initialize the internal reduxStore
    const reduxStore = createStore(
      combineReducers(store.reducers)
    )

    // add the reduxStore methods to the store
    store.dispatch = reduxStore.dispatch
    store.getState = reduxStore.getState
    store.subscribe = reduxStore.subscribe
  }
}

module.exports = store
