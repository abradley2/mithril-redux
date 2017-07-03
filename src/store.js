const m = require('mithril')
const {createStore, combineReducers, compose, applyMiddleware} = require('redux')

const store = {
  // add additional reducers here
  reducers: {

  },

  addReducer: function (name, func) {
    store.reducers[name] = func
  },

  init: function () {
    const reduce = combineReducers(store.reducers)

    // add additional middleware here
    const middlewares = [

    ]

    let composeEnhancers = compose
    if (process.env.NODE_ENV === 'development') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      middlewares.push(require('redux-logger').createLogger({diff: true}))
    }

    const reduxStore = createStore(
      function (state, action) {
        if (action.type === '$LOAD') return action.state
        return reduce(state, action)
      },
      composeEnhancers(applyMiddleware.apply({}, middlewares))
    )

    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      reduxStore.subscribe(m.redraw.bind(m))
    }

    // add the reduxStore methods to the store
    store.dispatch = reduxStore.dispatch
    store.getState = reduxStore.getState
    store.subscribe = reduxStore.subscribe
  }
}

module.exports = store
