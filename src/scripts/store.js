import m from 'mithril'
import {compose, createStore} from 'redux'
import app from './app'

const store = createStore(
	app
	, window.devToolsExtension && window.devToolsExtension()
)

export default store